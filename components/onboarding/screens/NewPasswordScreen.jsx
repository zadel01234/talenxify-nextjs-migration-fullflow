"use client";

import { useState } from "react";

export function NewPasswordScreen({ onSubmit, email }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await onSubmit?.(newPassword);
      setMessage("Password updated successfully.");
      setNewPassword("");
      setConfirmPassword("");
    } catch (submissionError) {
      setError(submissionError?.message || "Unable to update password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="new-password-section">
      <div className="new-password-content">
        <img className="logo" alt="Talenxify logo" src="/talenxify-logo-1.png" />

        <h1 className="new-password-title">Enter New Password</h1>
        <p className="new-password-subtitle">
          {email ? `Create a new password for ${email}` : "Create a new password to access your dashboard"}
        </p>

        <form className="new-password-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">New Password</label>
            <div className="password-wrapper">
              <input
                type="password"
                className="form-input"
                placeholder="Enter new Password"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Confirm New Password</label>
            <div className="password-wrapper">
              <input
                type="password"
                className="form-input"
                placeholder="Confirm new Password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="verify-password-btn" disabled={loading}>
            {loading ? "Updating..." : "Verify"}
          </button>
        </form>

        {error && <p className="form-feedback error">{error}</p>}
        {message && <p className="form-feedback success">{message}</p>}
      </div>
    </main>
  );
}
