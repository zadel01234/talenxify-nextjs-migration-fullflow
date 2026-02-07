"use client";

import { useEffect, useMemo, useState } from "react";
import { useGoogleIdentity } from "../hooks/useGoogleIdentity";

const baseTalentForm = {
  fullName: "",
  email: "",
  dateOfBirth: "",
  gender: "",
  nationality: "",
  bio: "",
  password: "",
  confirmPassword: "",
  phone: "",
};

const baseRecruiterForm = {
  fullName: "",
  email: "",
  gender: "",
  nationality: "",
  password: "",
  confirmPassword: "",
  phone: "",
};

const genderOptions = [
  { label: "Select gender", value: "" },
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const nationalityOptions = [
  { label: "Select your nationality", value: "" },
  { label: "Nigerian", value: "nigerian" },
  { label: "Ghanaian", value: "ghanaian" },
  { label: "Kenyan", value: "kenyan" },
  { label: "South African", value: "south_african" },
  { label: "Other", value: "other" },
];

const mapToPayload = (variant, form) => ({
  email: form.email.trim().toLowerCase(),
  full_name: form.fullName.trim(),
  gender: form.gender || null,
  phone: form.phone?.trim() || "",
  nationality: form.nationality || "",
  password: form.password,
  variant,
});

export function SignUpScreen({ variant = "talent", onSubmit, onSwitchToSignIn, onGoogleLogin }) {
  const initialForm = useMemo(() => (variant === "hirer" ? baseRecruiterForm : baseTalentForm), [variant]);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);
  const { ready: googleReady, getIdToken } = useGoogleIdentity();

  useEffect(() => {
    setForm(variant === "hirer" ? baseRecruiterForm : baseTalentForm);
    setError("");
    setSuccess("");
  }, [variant]);

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
    setSuccess("");

    if (!form.fullName.trim() || !form.email.trim()) {
      setError("Full name and email are required.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Password and Confirm Password must match.");
      return;
    }

    setLoading(true);
    try {
      const payload = mapToPayload(variant, form);
      await onSubmit?.(payload);
      setSuccess("Confirmation code sent! Please check your email inbox.");
    } catch (submissionError) {
      setError(submissionError?.message || "Unable to create your account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    if (!onGoogleLogin) {
      setError("Google signup is not available.");
      return;
    }
    if (!googleReady) {
      setError("Google services are not ready yet. Please try again.");
      return;
    }
    setError("");
    setSuccess("");
    setGoogleLoading(true);
    try {
      const idToken = await getIdToken();
      await onGoogleLogin({ idToken, variant });
    } catch (googleError) {
      setError(googleError?.message || "Unable to continue with Google.");
    } finally {
      setGoogleLoading(false);
    }
  };

  const renderTalentRows = () => (
    <>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Date Of Birth</label>
          <input
            type="date"
            className="form-input"
            value={form.dateOfBirth}
            onChange={handleChange("dateOfBirth")}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Gender</label>
          <select className="form-select" value={form.gender} onChange={handleChange("gender")}>
            {genderOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Nationality</label>
          <select className="form-select" value={form.nationality} onChange={handleChange("nationality")}>
            {nationalityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Bio</label>
          <input
            type="text"
            className="form-input"
            placeholder="Tell us about yourself..."
            value={form.bio}
            onChange={handleChange("bio")}
          />
        </div>
      </div>
    </>
  );

  const renderRecruiterRows = () => (
    <div className="form-row">
      <div className="form-group">
        <label className="form-label">Nationality</label>
        <select className="form-select" value={form.nationality} onChange={handleChange("nationality")}>
          {nationalityOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Gender</label>
        <select className="form-select" value={form.gender} onChange={handleChange("gender")}>
          {genderOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  return (
    <main className="signup-section">
      <div className="signup-content">
        <img className="logo" alt="Talenxify logo" src="/talenxify-logo-1.png" />

        <div className="signup-tabs">
          <button className="signup-tab active">Sign Up</button>
          <button type="button" className="signup-tab" onClick={onSwitchToSignIn}>
            Sign In
          </button>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleChange("fullName")}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange("email")}
              />
            </div>
          </div>

          {variant === "talent" ? renderTalentRows() : renderRecruiterRows()}

          <div className="form-row">
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
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <div className="password-wrapper">
                <input
                  type="password"
                  className="form-input"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="create-account-btn" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          {error && <p className="form-feedback error">{error}</p>}
          {success && <p className="form-feedback success">{success}</p>}

          <div className="divider">
            <span className="divider-text">OR</span>
          </div>

          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleSignUp}
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
