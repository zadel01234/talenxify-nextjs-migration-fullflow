import { apiFetch } from "./http";

export const authApi = {
  registerTalent(payload) {
    return apiFetch("/account/register/talent/", {
      method: "POST",
      body: payload,
    });
  },
  registerRecruiter(payload) {
    return apiFetch("/account/register/recruiter/", {
      method: "POST",
      body: payload,
    });
  },
  login(credentials) {
    return apiFetch("/account/login/", {
      method: "POST",
      body: credentials,
    });
  },
  googleLoginTalent({ id_token }) {
    return apiFetch("/account/google-login/talent/", {
      method: "POST",
      body: { id_token },
    });
  },
  googleLoginRecruiter({ id_token }) {
    return apiFetch("/account/google-login/recruiter/", {
      method: "POST",
      body: { id_token },
    });
  },
  refresh(refresh) {
    return apiFetch("/account/login/refresh/", {
      method: "POST",
      body: { refresh },
    });
  },
  confirmEmail(payload) {
    return apiFetch("/account/confirm/", {
      method: "POST",
      body: payload,
    });
  },
  resendConfirmation(payload) {
    return apiFetch("/account/resend-confirmation-code/", {
      method: "POST",
      body: payload,
    });
  },
  forgotPassword(payload) {
    return apiFetch("/account/forgot-password/", {
      method: "POST",
      body: payload,
    });
  },
  resetPassword(payload) {
    return apiFetch("/account/reset-password/", {
      method: "POST",
      body: payload,
    });
  },
  changePassword(payload) {
    return apiFetch("/account/change-password/", {
      method: "POST",
      body: payload,
      auth: true,
    });
  },
};
