import { createError } from "h3";

const sanitizeStoragePathPart = (value, fallback) =>
  String(value || fallback)
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || fallback;

const getStoragePathFromUrl = (imageUrl, bucket) => {
  const value = String(imageUrl || "").trim();

  if (!value || value.startsWith("data:") || value.startsWith("blob:")) {
    return "";
  }

  if (!/^https?:\/\//i.test(value)) {
    return value.replace(/^\/+/, "");
  }

  try {
    const { pathname } = new URL(value);
    const decodedPathname = decodeURIComponent(pathname);
    const bucketMarker = `/storage/v1/object/public/${bucket}/`;
    const signedBucketMarker = `/storage/v1/object/sign/${bucket}/`;
    const publicIndex = decodedPathname.indexOf(bucketMarker);
    const signedIndex = decodedPathname.indexOf(signedBucketMarker);

    if (publicIndex !== -1) {
      return decodedPathname.slice(publicIndex + bucketMarker.length);
    }

    if (signedIndex !== -1) {
      return decodedPathname.slice(signedIndex + signedBucketMarker.length);
    }
  } catch (error) {
    return "";
  }

  return "";
};

const listStorageFilesRecursively = async (bucketClient, folderPath) => {
  const { data, error } = await bucketClient.list(folderPath, { limit: 1000 });

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Could not list project storage files: ${error.message}`,
    });
  }

  const files = [];

  for (const item of data || []) {
    const itemPath = `${folderPath}/${item.name}`.replace(/^\/+/, "");

    if (item.id || item.metadata) {
      files.push(itemPath);
      continue;
    }

    files.push(...(await listStorageFilesRecursively(bucketClient, itemPath)));
  }

  return files;
};

export const collectProjectStoragePaths = async (supabase, projectId, imageUrls) => {
  const config = useRuntimeConfig();
  const bucket = config.supabaseStorageBucket || "project-images";
  const bucketClient = supabase.storage.from(bucket);
  const projectFolder = sanitizeStoragePathPart(projectId, "new-project");
  const storagePaths = new Set(
    imageUrls
      .map((imageUrl) => getStoragePathFromUrl(imageUrl, bucket))
      .filter(Boolean)
  );

  for (const folder of ["thumbnail", "hero", "gallery"]) {
    const files = await listStorageFilesRecursively(bucketClient, `${projectFolder}/${folder}`);

    files.forEach((filePath) => storagePaths.add(filePath));
  }

  return {
    bucket,
    paths: [...storagePaths],
  };
};

export const deleteProjectStorageFiles = async (supabase, projectId, imageUrls) => {
  const { bucket, paths } = await collectProjectStoragePaths(supabase, projectId, imageUrls);

  if (!paths.length) {
    return {
      bucket,
      deletedPaths: [],
    };
  }

  const { error } = await supabase.storage.from(bucket).remove(paths);

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Could not delete project images from Supabase Storage: ${error.message}`,
    });
  }

  return {
    bucket,
    deletedPaths: paths,
  };
};
