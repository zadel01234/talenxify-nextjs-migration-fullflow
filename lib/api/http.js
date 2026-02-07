import { tokenStorage } from "./token-storage";

const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || "https://api.talenxify.com/api";
const CSRF_TOKEN = process.env.NEXT_PUBLIC_API_CSRF_TOKEN;

export class ApiError extends Error {
  constructor(status, data) {
    super(resolveMessage(data));
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

let refreshPromise = null;

const resolveMessage = (data) => {
  if (!data) {
    return "Something went wrong. Please try again.";
  }
  if (typeof data === "string") {
    return data;
  }
  if (Array.isArray(data)) {
    return data.join(" ");
  }
  if (data.message) {
    if (typeof data.message === "string") return data.message;
    if (Array.isArray(data.message)) return data.message.join(" ");
  }
  if (data.detail) {
    return Array.isArray(data.detail) ? data.detail.join(" ") : data.detail;
  }
  if (data.error) {
    return data.error;
  }
  if (data.errors) {
    return Object.values(data.errors).flat().join(" ");
  }
  return "Unable to process request. Please try again.";
};

const withBaseUrl = (path) => {
  if (!path.startsWith("/")) {
    return API_BASE_URL + "/" + path;
  }
  return API_BASE_URL + path;
};

async function refreshAccessToken() {
  if (refreshPromise) {
    return refreshPromise;
  }

  const refresh = tokenStorage.getRefreshToken();
  if (!refresh) {
    tokenStorage.clearTokens();
    throw new ApiError(401, { message: "Not authenticated" });
  }

  refreshPromise = fetch(withBaseUrl("/account/login/refresh/"), {
    method: "POST",
    headers: {
      ...DEFAULT_HEADERS,
      ...(CSRF_TOKEN ? { "X-CSRFToken": CSRF_TOKEN } : {}),
    },
    credentials: "include",
    body: JSON.stringify({ refresh }),
  })
    .then(async (response) => {
      const data = await safeJson(response);
      if (!response.ok) {
        throw new ApiError(response.status, data);
      }
      if (data?.access) {
        tokenStorage.setTokens({ access: data.access, refresh });
      }
      return data?.access;
    })
    .catch((error) => {
      tokenStorage.clearTokens();
      throw error;
    })
    .finally(() => {
      refreshPromise = null;
    });

  return refreshPromise;
}

const safeJson = async (response) => {
  try {
    return await response.json();
  } catch (error) {
    return null;
  }
};

export const apiFetch = async (path, { method = "GET", body, headers = {}, auth = false } = {}) => {
  const finalHeaders = {
    ...DEFAULT_HEADERS,
    ...headers,
  };

  if (CSRF_TOKEN) {
    finalHeaders["X-CSRFToken"] = CSRF_TOKEN;
  }

  if (auth) {
    const token = tokenStorage.getAccessToken();
    if (token) {
      finalHeaders.Authorization = "Bearer " + token;
    }
  }

  const response = await fetch(withBaseUrl(path), {
    method,
    headers: finalHeaders,
    credentials: "include",
    body: body ? JSON.stringify(body) : undefined,
  });

  if (response.status === 401 && auth) {
    try {
      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        finalHeaders.Authorization = "Bearer " + newAccessToken;
        const retryResponse = await fetch(withBaseUrl(path), {
          method,
          headers: finalHeaders,
          credentials: "include",
          body: body ? JSON.stringify(body) : undefined,
        });
        const retryData = await safeJson(retryResponse);
        if (!retryResponse.ok) {
          throw new ApiError(retryResponse.status, retryData);
        }
        return retryData;
      }
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(401, { message: "Authentication expired. Please log in again." });
    }
  }

  const data = await safeJson(response);

  if (!response.ok) {
    throw new ApiError(response.status, data);
  }

  return data;
};
