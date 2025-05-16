export default defineEventHandler(async (event) => {
  if (event.method !== "GET") {
    throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
  }

  const config = useRuntimeConfig();
  const data = await $fetch(
    `${config.apiBaseUrl}/projects/projectsSample`
  );
  return data;
});
