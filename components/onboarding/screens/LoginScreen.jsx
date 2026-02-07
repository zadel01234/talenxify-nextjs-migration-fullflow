"use client";

import { useState } from "react";
import { useGoogleIdentity } from "../hooks/useGoogleIdentity";

export function LoginScreen({ onSubmit, onSwitchToSignUp, onForgotPassword, onGoogleLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const { ready: googleReady, getIdToken } = useGoogleIdentity();

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (!form.email.trim() || !form.password) {
      setError("Email and password are required.");
      return;
    }
    setLoading(true);
    try {
      await onSubmit?.({
        email: form.email.trim().toLowerCase(),
        password: form.password,
      });
    } catch (submissionError) {
      setError(submissionError?.message || "Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!googleReady) {
      setError("Google sign-in is not ready yet. Please try again.");
      return;
    }
    if (!onGoogleLogin) {
      setError("Google sign-in is not available.");
      return;
    }
    setError("");
    setGoogleLoading(true);
    try {
      const idToken = await getIdToken();
      await onGoogleLogin({ idToken });
    } catch (googleError) {
      setError(googleError?.message || "Unable to continue with Google.");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <main className="login-section">
      <div className="login-content">
        <img className="logo" alt="Talenxify logo" src="/talenxify-logo-1.png" />

        <div className="login-tabs">
          <button type="button" className="login-tab" onClick={onSwitchToSignUp}>
            Sign Up
          </button>
          <button className="login-tab active">Sign In</button>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Id</label>
            <input type="email" className="form-input" value={form.email} onChange={handleChange("email")} />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="password-wrapper">
              <input
                type="password"
                className="form-input"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange("password")}
              />
            </div>
          </div>

          <button
            type="button"
            className="forgot-password"
            onClick={() => {
              if (!loading) {
                onForgotPassword?.();
              }
            }}
          >
            Forgot Password?
          </button>

          <button type="submit" className="signin-btn" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {error && <p className="form-feedback error">{error}</p>}

          <div className="divider">
            <span className="divider-text">OR</span>
          </div>

          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleSignIn}
            disabled={loading || googleLoading || !googleReady}
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="google-icon" />
            {googleLoading ? "Connecting..." : "Continue with Google"}
          </button>
        </form>
      </div>
    </main>
  );
}
