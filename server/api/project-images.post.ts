import sharp from "sharp";

const MAX_IMAGE_UPLOAD_BYTES = 8 * 1024 * 1024;

const sanitizeFileName = (fileName) =>
  String(fileName || "image")
    .toLowerCase()
    .replace(/\.[^/.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70) || "image";

const sanitizePathPart = (value, fallback) =>
  String(value || fallback)
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || fallback;

const supportedSharpFormats = new Set([
  "gif",
  "heif",
  "jpeg",
  "png",
  "svg",
  "tiff",
  "webp",
].filter((format) => sharp.format[format]?.input?.buffer));

const supportedImageFormatLabel = [...supportedSharpFormats]
  .map((format) => (format === "jpeg" ? "JPG/JPEG" : format.toUpperCase()))
  .join(", ");

const isWebpBuffer = (buffer) =>
  buffer.length >= 12 &&
  buffer.subarray(0, 4).toString("ascii") === "RIFF" &&
  buffer.subarray(8, 12).toString("ascii") === "WEBP";

const convertToWebp = async (imageBuffer) => {
  try {
    const metadata = await sharp(imageBuffer, {
      failOn: "none",
      limitInputPixels: 40_000_000,
    }).metadata();

    if (
      !metadata.format ||
      !metadata.width ||
      !metadata.height ||
      !supportedSharpFormats.has(metadata.format)
    ) {
      throw new Error(
        metadata.format
          ? `Unsupported image format: ${metadata.format}.`
          : "Invalid image file."
      );
    }

    return await sharp(imageBuffer, {
      failOn: "none",
      limitInputPixels: 40_000_000,
    })
      .rotate()
      .webp({
        quality: 82,
        effort: 5,
      })
      .toBuffer();
  } catch (error) {
    console.error("Project image WebP conversion failed.", error);

    if (isWebpBuffer(imageBuffer)) {
      console.warn(
        "Project image is already WebP but could not be re-encoded. Uploading original WebP bytes."
      );

      return imageBuffer;
    }

    throw createError({
      statusCode: 400,
      statusMessage:
        `Uploaded file could not be processed as an image. Please upload a valid ${supportedImageFormatLabel} image.`,
    });
  }
};

export default defineEventHandler(async (event) => {
  await requireAdminUser(event);

  const formData = await readMultipartFormData(event);
  const filePart = formData?.find((part) => part.name === "file");

  if (!filePart?.data?.length) {
    throw createError({
      statusCode: 400,
      statusMessage: "Image file is required.",
    });
  }

  if (filePart.data.length > MAX_IMAGE_UPLOAD_BYTES) {
    throw createError({
      statusCode: 413,
      statusMessage: "Image file is too large. Please upload an image under 8 MB.",
    });
  }

  if (filePart.type && !filePart.type.startsWith("image/")) {
    throw createError({
      statusCode: 400,
      statusMessage: "Only image uploads are allowed.",
    });
  }

  const projectId =
    formData?.find((part) => part.name === "projectId")?.data?.toString("utf8") ||
    "new-project";
  const folder =
    formData?.find((part) => part.name === "folder")?.data?.toString("utf8") ||
    "gallery";

  const config = useRuntimeConfig();
  const supabase = useSupabaseServerClient({ requireServiceRole: true });
  const bucket = config.supabaseStorageBucket || "project-images";
  const fileBaseName = sanitizeFileName(filePart.filename);
  const webpImage = await convertToWebp(filePart.data);
  const filePath = `${sanitizePathPart(projectId, "new-project")}/${sanitizePathPart(
    folder,
    "gallery"
  )}/${Date.now()}-${fileBaseName}.webp`;

  const { error } = await supabase.storage.from(bucket).upload(filePath, webpImage, {
    cacheControl: "3600",
    contentType: "image/webp",
    upsert: false,
  });

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(filePath);

  return {
    path: filePath,
    url: publicUrl,
  };
});
