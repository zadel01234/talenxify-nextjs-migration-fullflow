"use client";

import { useEffect, useRef, useState } from "react";

const OTP_LENGTH = 4;

export function OtpVerificationScreen({ email, onSubmit, onResend, contextLabel = "verification" }) {
  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(""));
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const inputsRef = useRef([]);

  useEffect(() => {
    setDigits(Array(OTP_LENGTH).fill(""));
    setMessage("");
    setError("");
    if (inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, [email]);

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) {
      return;
    }
    const updated = [...digits];
    updated[index] = value;
    setDigits(updated);
    if (value && inputsRef.current[index + 1]) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !digits[index] && inputsRef.current[index - 1]) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const text = event.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, OTP_LENGTH);
    if (!text) return;
    const updated = Array(OTP_LENGTH)
      .fill("")
      .map((_, idx) => text[idx] || "");
    setDigits(updated);
    const lastIndex = text.length - 1;
    if (inputsRef.current[lastIndex]) {
      inputsRef.current[lastIndex].focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");
    const code = digits.join("");
    if (code.length !== OTP_LENGTH) {
      setError(`Please enter the ${OTP_LENGTH}-digit code.`);
      return;
    }
    setLoading(true);
    try {
      await onSubmit?.(code);
      setMessage("Code verified successfully.");
    } catch (submissionError) {
      setError(submissionError?.message || "Invalid code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError("");
    setMessage("");
    if (!onResend) return;
    setLoading(true);
    try {
      await onResend();
      setMessage("A new code has been sent.");
    } catch (submissionError) {
      setError(submissionError?.message || "Unable to resend code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="otp-section">
      <div className="otp-content">
        <img className="logo" alt="Talenxify logo" src="/talenxify-logo-1.png" />

        <h1 className="otp-title">OTP Verification</h1>
        <p className="otp-subtitle">
          Enter the {contextLabel} code sent to {email || "your email"}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="otp-inputs" onPaste={handlePaste}>
            {digits.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className={`otp-input${digit ? " filled" : ""}`}
                value={digit}
                onChange={(event) => handleChange(index, event.target.value)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                ref={(element) => {
                  inputsRef.current[index] = element;
                }}
              />
            ))}
          </div>

          <button type="submit" className="verify-btn" disabled={loading}>
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>

        <p className="resend-text">
          Didn't receive a code?{" "}
          <button type="button" className="resend-link" onClick={handleResend} disabled={loading}>
            Resend
          </button>
        </p>

        {error && <p className="form-feedback error">{error}</p>}
        {message && <p className="form-feedback success">{message}</p>}
      </div>
    </main>
  );
}
