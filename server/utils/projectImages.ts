export const normalizeProjectImageUrl = (supabase, imageUrl) => {
  const value = String(imageUrl || "").trim();

  if (
    !value ||
    value.startsWith("/") ||
    value.startsWith("data:") ||
    value.startsWith("blob:") ||
    /^https?:\/\//i.test(value)
  ) {
    return value;
  }

  const config = useRuntimeConfig();
  const bucket = config.supabaseStorageBucket || "project-images";
  const storagePath = value.startsWith(`${bucket}/`)
    ? value.slice(bucket.length + 1)
    : value.replace(/^\/+/, "");

  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(storagePath);

  return publicUrl || value;
};

export const normalizeProjectImages = (supabase, project) => ({
  ...project,
  image: normalizeProjectImageUrl(supabase, project?.image),
  hero: normalizeProjectImageUrl(supabase, project?.hero),
});

export const normalizeProjectGalleryImages = (supabase, gallery = []) =>
  gallery
    .map((item) => ({
      image: normalizeProjectImageUrl(supabase, item?.image || item),
    }))
    .filter((item) => item.image);
