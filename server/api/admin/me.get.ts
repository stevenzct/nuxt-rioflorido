export default defineEventHandler(async (event) => {
  const user = await requireAdminUser(event);

  return {
    isAdmin: true,
    user: {
      id: user.id,
      email: user.email,
    },
  };
});
