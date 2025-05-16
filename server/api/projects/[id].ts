export default defineEventHandler(async (event) => {
  if (event.method !== 'GET') {
    throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' });
  }

  const config = useRuntimeConfig();
  const { id } = event.context.params;
  const project = await $fetch(`${config.apiBaseUrl}/projects/projectsSample/${id}`);
  return project;
});