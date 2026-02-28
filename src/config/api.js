const DEFAULT_PROD_API_URL = "https://cardilla-production.up.railway.app";

const envApiBaseUrl = process.env.REACT_APP_API_URL?.replace(/\/$/, "");
const isGitHubPagesHost =
  typeof window !== "undefined" &&
  window.location.hostname.endsWith("github.io");

const API_BASE_URL =
  envApiBaseUrl || (isGitHubPagesHost ? DEFAULT_PROD_API_URL : "");

export const apiUrl = (path) => `${API_BASE_URL}${path}`;
