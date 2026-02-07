const ACCESS_KEY = "talenxify_access_token";
const REFRESH_KEY = "talenxify_refresh_token";
const USER_KEY = "talenxify_user";

const isBrowser = () => typeof window !== "undefined" && typeof window.localStorage !== "undefined";

export const tokenStorage = {
  getAccessToken() {
    if (!isBrowser()) return null;
    return window.localStorage.getItem(ACCESS_KEY);
  },
  getRefreshToken() {
    if (!isBrowser()) return null;
    return window.localStorage.getItem(REFRESH_KEY);
  },
  setTokens({ access, refresh }) {
    if (!isBrowser()) return;
    if (access) {
      window.localStorage.setItem(ACCESS_KEY, access);
    }
    if (refresh) {
      window.localStorage.setItem(REFRESH_KEY, refresh);
    }
  },
  clearTokens() {
    if (!isBrowser()) return;
    window.localStorage.removeItem(ACCESS_KEY);
    window.localStorage.removeItem(REFRESH_KEY);
    window.localStorage.removeItem(USER_KEY);
  },
  setUser(user) {
    if (!isBrowser()) return;
    if (!user) {
      window.localStorage.removeItem(USER_KEY);
      return;
    }
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  },
  getUser() {
    if (!isBrowser()) return null;
    const raw = window.localStorage.getItem(USER_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (error) {
      return null;
    }
  },
};
