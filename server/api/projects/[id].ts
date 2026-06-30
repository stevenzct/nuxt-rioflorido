export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  if (event.method === "PUT") {
    await requireAdminUser(event);

    const supabase = useSupabaseServerClient({ requireServiceRole: true });
    const body = await readBody(event);
    const project = normalizeProjectPayload({ ...body, id });

    if (!project.address) {
      throw createError({
        statusCode: 400,
        statusMessage: "Project address is required.",
      });
    }

    const { data: updatedProject, error: projectError } = await updateProjectRecord(
      supabase,
      id,
      project
    );

    if (projectError || !updatedProject) {
      throw createError({
        statusCode: projectError?.code === "PGRST116" ? 404 : 500,
        statusMessage: projectError?.message || "Project not found",
      });
    }

    await replaceProjectGallery(supabase, id, project.gallery);

    return {
      ...normalizeProjectImages(supabase, updatedProject),
      id: String(updatedProject.id),
      gallery: normalizeProjectGalleryImages(supabase, project.gallery),
    };
  }

  if (event.method === "DELETE") {
    await requireAdminUser(event);

    const supabase = useSupabaseServerClient({ requireServiceRole: true });

    const { data: project, error: projectError } = await supabase
      .from("projects")
      .select("id,image:thumbnail_image,hero:hero_image")
      .eq("id", id)
      .single();

    if (projectError || !project) {
      throw createError({
        statusCode: projectError?.code === "PGRST116" ? 404 : 500,
        statusMessage: projectError?.message || "Project not found",
      });
    }

    const gallery = await fetchProjectGalleryRowsByProject(supabase, id);
    const imageUrls = [
      project.image,
      project.hero,
      ...(gallery || []).map((item) => item.image),
    ];
    const { deletedPaths } = await deleteProjectStorageFiles(supabase, id, imageUrls);

    await replaceProjectGallery(supabase, id, []);

    const { error: deleteError } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (deleteError) {
      throw createError({
        statusCode: 500,
        statusMessage: deleteError.message,
      });
    }

    return {
      id: String(id),
      deleted: true,
      deletedStorageFiles: deletedPaths.length,
    };
  }

  if (event.method !== "GET") {
    throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
  }

  const query = getQuery(event);
  const isAdminRequest = query.admin === "1" || query.admin === "true";
  const adminUser = isAdminRequest
    ? await requireAdminUser(event)
    : await getOptionalAdminUser(event);
  const supabase = useSupabaseServerClient({
    requireServiceRole: Boolean(adminUser),
    preferServiceRole: true,
  });

  const [projectResult, gallery] = await Promise.all([
    fetchProjectRecord(supabase, id),
    fetchProjectGalleryRowsByProject(supabase, id),
  ]);

  const { data: project, error: projectError } = projectResult;

  if (projectError || !project) {
    throw createError({
      statusCode: projectError?.code === "PGRST116" ? 404 : 500,
      statusMessage: projectError?.message || "Project not found",
    });
  }

  return {
    ...normalizeProjectImages(supabase, project),
    id: String(project.id),
    gallery: normalizeProjectGalleryImages(supabase, gallery),
  };
});

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

const projectSelectFields =
  "id,address,details,client,image:thumbnail_image,hero:hero_image,createdAt:created_at";

const legacyProjectSelectFields =
  "id,address,details,client,image:thumbnail_image,hero:hero_image";

const isMissingCreatedAtColumn = (error) =>
  String(error?.message || "").toLowerCase().includes("created_at");

const fetchProjectRecord = async (supabase, id) => {
  const result = await supabase
    .from("projects")
    .select(projectSelectFields)
    .eq("id", id)
    .single();

  if (!result.error || !isMissingCreatedAtColumn(result.error)) {
    return result;
  }

  return supabase
    .from("projects")
    .select(legacyProjectSelectFields)
    .eq("id", id)
    .single();
};

const updateProjectRecord = async (supabase, id, project) => {
  const values = {
    address: project.address,
    details: project.details,
    client: project.client,
    thumbnail_image: project.image,
    hero_image: project.hero,
  };

  const update = (selectFields) =>
    supabase
      .from("projects")
      .update(values)
      .eq("id", id)
      .select(selectFields)
      .single();

  const result = await update(projectSelectFields);

  if (!result.error) {
    return result;
  }

  if (isMissingCreatedAtColumn(result.error)) {
    return update(legacyProjectSelectFields);
  }

  return result;
};
