export const ADMIN_AUTH_SIGNED_OUT_EVENT = "rv-admin-signed-out";

export const notifyAdminSignedOut = () => {
  if (import.meta.client) {
    window.dispatchEvent(new Event(ADMIN_AUTH_SIGNED_OUT_EVENT));
  }
};
