export default defineEventHandler(async (event) => {
  if (event.method === "POST") {
    await requireAdminUser(event);

    const supabase = useSupabaseServerClient({ requireServiceRole: true });
    const body = await readBody(event);
    const project = normalizeProjectPayload(body);

    if (!project.id || !project.address) {
      throw createError({
        statusCode: 400,
        statusMessage: "Project ID and address are required.",
      });
    }

    const { data: savedProject, error: projectError } = await saveProjectRecord(
      supabase,
      project
    );

    if (projectError) {
      throw createError({
        statusCode: 500,
        statusMessage: projectError.message,
      });
    }

    await replaceProjectGallery(supabase, project.id, project.gallery);

    return {
      ...normalizeProjectImages(supabase, savedProject),
      id: String(savedProject.id),
      gallery: normalizeProjectGalleryImages(supabase, project.gallery),
    };
  }

  if (event.method !== "GET") {
    throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
  }

  const query = getQuery(event);
  const isSummaryRequest = query.summary === "1" || query.summary === "true";
  const shouldIncludeGalleryCounts =
    query.galleryCounts === "1" || query.galleryCounts === "true";
  const isAdminRequest = query.admin === "1" || query.admin === "true";
  const shouldIncludeEditImages =
    isAdminRequest && (query.editImages === "1" || query.editImages === "true");
  const adminUser = isAdminRequest
    ? await requireAdminUser(event)
    : await getOptionalAdminUser(event);
  const supabase = useSupabaseServerClient({
    requireServiceRole: Boolean(adminUser),
    preferServiceRole: true,
  });

  const { projects, error: projectsError } = await fetchOrderedProjects(supabase, {
    summary: isSummaryRequest && !shouldIncludeEditImages,
  });

  if (projectsError) {
    throw createError({
      statusCode: 500,
      statusMessage: projectsError.message,
    });
  }

  if (!projects?.length) {
    return [];
  }

  if (isSummaryRequest && !shouldIncludeGalleryCounts) {
    return projects.map((project) => ({
      ...normalizeProjectImages(supabase, project),
      id: String(project.id),
      gallery: [],
    }));
  }

  const projectIds = projects.map((project) => String(project.id));

  if (isSummaryRequest && shouldIncludeGalleryCounts && !shouldIncludeEditImages) {
    const galleryCountByProject = await fetchProjectGalleryCounts(supabase, projectIds);

    return projects.map((project) => ({
      ...normalizeProjectImages(supabase, project),
      id: String(project.id),
      gallery: [],
      galleryCount: galleryCountByProject.get(String(project.id)) || 0,
    }));
  }

  const gallery = await fetchProjectGalleryRows(supabase, projectIds);

  const galleryByProject = new Map();
  const galleryCountByProject = new Map();

  gallery?.forEach((image) => {
    const projectId = String(image.project_id);
    const projectGallery = galleryByProject.get(projectId) || [];
    projectGallery.push({ image: image.image });
    galleryByProject.set(projectId, projectGallery);
    galleryCountByProject.set(projectId, (galleryCountByProject.get(projectId) || 0) + 1);
  });

  return projects.map((project) => ({
    ...normalizeProjectImages(supabase, project),
    id: String(project.id),
    gallery:
      isSummaryRequest && !shouldIncludeEditImages
        ? []
        : normalizeProjectGalleryImages(
            supabase,
            galleryByProject.get(String(project.id)) || []
          ),
    galleryCount: galleryCountByProject.get(String(project.id)) || 0,
  }));
});

const projectSummarySelectFields =
  "id,address,details,client,image:thumbnail_image,createdAt:created_at";

const legacyProjectSummarySelectFields =
  "id,address,details,client,image:thumbnail_image";

const projectSelectFields =
  "id,address,details,client,image:thumbnail_image,hero:hero_image,createdAt:created_at";

const legacyProjectSelectFields =
  "id,address,details,client,image:thumbnail_image,hero:hero_image";

const isMissingCreatedAtColumn = (error) =>
  String(error?.message || "").toLowerCase().includes("created_at");

const fetchOrderedProjects = async (supabase, { summary = false } = {}) => {
  const selectFields = summary ? projectSummarySelectFields : projectSelectFields;
  const legacySelectFields = summary
    ? legacyProjectSummarySelectFields
    : legacyProjectSelectFields;
  const withCreatedAt = await supabase
    .from("projects")
    .select(selectFields)
    .order("created_at", { ascending: false, nullsFirst: false })
    .order("id", { ascending: false });

  if (!withCreatedAt.error || !isMissingCreatedAtColumn(withCreatedAt.error)) {
    return {
      projects: withCreatedAt.data,
      error: withCreatedAt.error,
    };
  }

  const legacy = await supabase
    .from("projects")
    .select(legacySelectFields)
    .order("id", { ascending: false });

  return {
    projects: legacy.data,
    error: legacy.error,
  };
};

const saveProjectRecord = async (supabase, project) => {
  const values = {
    id: project.id,
    address: project.address,
    details: project.details,
    client: project.client,
    thumbnail_image: project.image,
    hero_image: project.hero,
  };
  const valuesWithCreatedAt = {
    ...values,
    created_at: new Date().toISOString(),
  };

  const save = (selectFields, payload) =>
    supabase
      .from("projects")
      .upsert(payload, { onConflict: "id" })
      .select(selectFields)
      .single();

  const result = await save(projectSelectFields, valuesWithCreatedAt);

  if (!result.error) {
    return result;
  }

  if (isMissingCreatedAtColumn(result.error)) {
    return save(legacyProjectSelectFields, values);
  }

  return result;
};

const normalizeProjectPayload = (body) => ({
  id: String(body?.id || "").trim(),
  address: String(body?.address || "").trim(),
  details: String(body?.details || "").trim(),
  client: String(body?.client || "").trim(),
  image: String(body?.image || "").trim(),
  hero: String(body?.hero || "").trim(),
  gallery: Array.isArray(body?.gallery)
    ? body.gallery
        .map((item) => String(item?.image || item || "").trim())
        .filter(Boolean)
    : [],
});
