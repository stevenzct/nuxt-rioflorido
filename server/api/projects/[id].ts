export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const project = await $fetch(`https://673f046ca9bc276ec4b6cdac.mockapi.io/projects/projectsSample/${id}`);
  return project;
});