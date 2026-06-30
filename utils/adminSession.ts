const getRouteQueryValue = (value: unknown) =>
  Array.isArray(value) ? value[0] : typeof value === "string" ? value : "";

let exchangedOAuthCode = "";

const getBrowserSearchValue = (key: string) => {
  if (!import.meta.client) {
    return "";
  }

  return new URL(window.location.href).searchParams.get(key) || "";
};

const getBrowserHashValue = (key: string) => {
  if (!import.meta.client) {
    return "";
  }

  const hash = window.location.hash.startsWith("#")
    ? window.location.hash.slice(1)
    : window.location.hash;

  return new URLSearchParams(hash).get(key) || "";
};

const cleanOAuthQuery = () => {
  if (!import.meta.client) {
    return;
  }

  const url = new URL(window.location.href);
  ["code", "state", "error", "error_code", "error_description"].forEach((key) =>
    url.searchParams.delete(key)
  );

  url.hash = "";

  window.history.replaceState(
    window.history.state,
    "",
    `${url.pathname}${url.search}${url.hash}`
  );
};

export const getAdminSession = async (supabase: any, route?: any) => {
  const code = getRouteQueryValue(route?.query?.code) || getBrowserSearchValue("code");
  const accessToken = getBrowserHashValue("access_token");
  const refreshToken = getBrowserHashValue("refresh_token");
  const oauthError =
    getRouteQueryValue(route?.query?.error_description) ||
    getRouteQueryValue(route?.query?.error) ||
    getBrowserSearchValue("error_description") ||
    getBrowserSearchValue("error") ||
    getBrowserHashValue("error_description") ||
    getBrowserHashValue("error");

  if (oauthError) {
    console.error("Supabase OAuth callback returned an error.", oauthError);
    cleanOAuthQuery();
    return null;
  }

  if (accessToken && refreshToken) {
    const {
      data: { session },
      error,
    } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    cleanOAuthQuery();

    if (error) {
      console.error("Could not set Supabase OAuth session.", error);
      return null;
    }

    if (session) {
      return session;
    }
  }

  if (code && code !== exchangedOAuthCode) {
    const {
      data: { session },
      error,
    } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        cleanOAuthQuery();
        return session;
      }

      console.error("Could not exchange Supabase OAuth code.", error);
      cleanOAuthQuery();
      return null;
    }

    exchangedOAuthCode = code;
    cleanOAuthQuery();

    if (session) {
      return session;
    }
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session;
};
