const getGalleryTableCandidates = () => {
  const config = useRuntimeConfig();
  const configuredTable = String(config.supabaseProjectGalleryTable || "").trim();

  return [...new Set([
    configuredTable,
    "projects_gallery",
    "project_gallery",
    "project_galleries",
  ].filter(Boolean))];
};

const getGalleryProjectColumnCandidates = () => {
  const config = useRuntimeConfig();
  const configuredColumn = String(
    config.supabaseProjectGalleryProjectColumn || ""
  ).trim();

  return [...new Set([
    configuredColumn,
    "project_id",
    "project_uuid",
    "projects_id",
    "project",
    "projectId",
  ].filter(Boolean))];
};

const getGalleryImageColumnCandidates = () => {
  const config = useRuntimeConfig();
  const configuredColumn = String(config.supabaseProjectGalleryImageColumn || "").trim();

  return [...new Set([
    configuredColumn,
    "image",
    "gallery_image",
    "image_url",
    "image_path",
    "public_url",
    "file_path",
    "url",
  ].filter(Boolean))];
};

const isGallerySchemaMismatchError = (error) =>
  error?.code === "PGRST205" ||
  error?.code === "PGRST204" ||
  error?.code === "42P01" ||
  error?.code === "42703" ||
  String(error?.message || "")
    .toLowerCase()
    .includes("could not find the table") ||
  String(error?.message || "")
    .toLowerCase()
    .includes("could not find the") ||
  String(error?.message || "")
    .toLowerCase()
    .includes("schema cache");

let cachedGallerySchema = null;

const getGallerySchemaCandidates = () => {
  const candidates = [];

  for (const tableName of getGalleryTableCandidates()) {
    for (const projectColumn of getGalleryProjectColumnCandidates()) {
      for (const imageColumn of getGalleryImageColumnCandidates()) {
        candidates.push({ tableName, projectColumn, imageColumn });
      }
    }
  }

  return candidates;
};

const withGallerySchema = async (supabase, callback) => {
  if (cachedGallerySchema) {
    const result = await callback(cachedGallerySchema);

    if (!result.error || !isGallerySchemaMismatchError(result.error)) {
      return result;
    }

    cachedGallerySchema = null;
  }

  for (const schema of getGallerySchemaCandidates()) {
    const result = await callback(schema);

    if (!result.error) {
      cachedGallerySchema = schema;
      return result;
    }

    if (!isGallerySchemaMismatchError(result.error)) {
      return result;
    }
  }

  return { data: [], error: null };
};

const withGalleryProjectSchema = async (supabase, callback) => {
  const seenProjectSchemas = new Set();
  const projectSchemas = [
    cachedGallerySchema,
    ...getGallerySchemaCandidates(),
  ].filter(Boolean);

  for (const { tableName, projectColumn } of projectSchemas) {
    const schemaKey = `${tableName}:${projectColumn}`;

    if (seenProjectSchemas.has(schemaKey)) {
      continue;
    }

    seenProjectSchemas.add(schemaKey);
    const result = await callback({ tableName, projectColumn });

    if (!result.error) {
      return result;
    }

    if (!isGallerySchemaMismatchError(result.error)) {
      return result;
    }
  }

  return { data: [], error: null };
};

export const fetchProjectGalleryRows = async (supabase, projectIds) => {
  const { data, error } = await withGallerySchema(supabase, (schema) =>
    supabase
      .from(schema.tableName)
      .select(`${schema.projectColumn},${schema.imageColumn}`)
      .in(schema.projectColumn, projectIds)
  );

  if (error) {
    console.warn("Could not load project gallery rows.", error.message);
    return [];
  }

  const schema = cachedGallerySchema;

  return (data || []).map((item) => ({
    project_id: item[schema.projectColumn],
    image: item[schema.imageColumn],
  }));
};

export const fetchProjectGalleryCounts = async (supabase, projectIds) => {
  const { data, error } = await withGalleryProjectSchema(supabase, (schema) =>
    supabase
      .from(schema.tableName)
      .select(schema.projectColumn)
      .in(schema.projectColumn, projectIds)
  );

  if (error) {
    console.warn("Could not load project gallery counts.", error.message);
    return new Map();
  }

  const counts = new Map();

  (data || []).forEach((item) => {
    const projectId = String(Object.values(item)[0] || "");

    if (!projectId) {
      return;
    }

    counts.set(projectId, (counts.get(projectId) || 0) + 1);
  });

  return counts;
};

export const fetchProjectGalleryRowsByProject = async (supabase, projectId) => {
  const { data, error } = await withGallerySchema(supabase, (schema) =>
    supabase
      .from(schema.tableName)
      .select(schema.imageColumn)
      .eq(schema.projectColumn, projectId)
  );

  if (error) {
    console.warn("Could not load project gallery rows.", error.message);
    return [];
  }

  const schema = cachedGallerySchema;

  return (data || []).map((item) => ({
    image: item[schema.imageColumn],
  }));
};

export const replaceProjectGallery = async (supabase, projectId, gallery) => {
  let lastSchemaMismatchError = null;
  const schemas = [
    cachedGallerySchema,
    ...getGallerySchemaCandidates(),
  ].filter(Boolean);
  const seenSchemas = new Set();

  for (const { tableName, projectColumn, imageColumn } of schemas) {
      const schemaKey = `${tableName}:${projectColumn}:${imageColumn}`;

      if (seenSchemas.has(schemaKey)) {
        continue;
      }

      seenSchemas.add(schemaKey);
      const { error: deleteError } = await supabase
        .from(tableName)
        .delete()
        .eq(projectColumn, projectId);

      if (deleteError) {
        if (isGallerySchemaMismatchError(deleteError)) {
          lastSchemaMismatchError = deleteError;
          continue;
        }

        console.warn("Could not delete project gallery rows.", deleteError.message);
        return;
      }

      if (!gallery.length) {
        cachedGallerySchema = { tableName, projectColumn, imageColumn };
        return;
      }

      const { error: insertError } = await supabase.from(tableName).insert(
        gallery.map((image) => ({
          [projectColumn]: projectId,
          [imageColumn]: image,
        }))
      );

      if (!insertError) {
        cachedGallerySchema = { tableName, projectColumn, imageColumn };
        return;
      }

      if (isGallerySchemaMismatchError(insertError)) {
        lastSchemaMismatchError = insertError;
        continue;
      }

      console.warn("Could not save project gallery rows.", insertError.message);
      return;
  }

  if (lastSchemaMismatchError && gallery.length) {
    console.warn(
      "Project gallery schema was not found. Project saved without gallery rows."
    );
  }
};
