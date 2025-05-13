export default defineEventHandler(async (event) => {
  const data = await $fetch('https://673f046ca9bc276ec4b6cdac.mockapi.io/projects/projectsSample');
  return data;
});