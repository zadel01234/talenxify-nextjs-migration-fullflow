"use client";

import { useState } from "react";

export function ForgotPasswordScreen({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");
    if (!email.trim()) {
      setError("Please enter your registered email address.");
      return;
    }

    setLoading(true);
    try {
      await onSubmit?.({ email: email.trim().toLowerCase() });
      setMessage("OTP sent successfully. Please check your inbox.");
    } catch (submissionError) {
      setError(submissionError?.message || "Unable to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="forgot-password-section">
      <div className="forgot-password-content">
        <img className="logo" alt="Talenxify logo" src="/talenxify-logo-1.png" />

        <h1 className="forgot-password-title">Forgot Password?</h1>
        <p className="forgot-password-subtitle">
          To reset your password, enter your registered email address
        </p>

        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Id</label>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <button type="submit" className="send-otp-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Otp"}
          </button>
        </form>

        {error && <p className="form-feedback error">{error}</p>}
        {message && <p className="form-feedback success">{message}</p>}
      </div>
    </main>
  );
}
