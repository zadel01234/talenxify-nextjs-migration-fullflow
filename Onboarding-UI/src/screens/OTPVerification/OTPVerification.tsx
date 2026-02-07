import "../../index.css";
import { HeroSection } from "../../components/HeroSection";

export const OTPVerification = ({ onNavigate }: { onNavigate: () => void }): JSX.Element => {
  return (
    <div className="onboarding-container">
      <div className="onboarding-wrapper">
        <HeroSection />

        <main className="otp-section">
          <div className="otp-content">
            <img className="logo" alt="Talenxify logo" src="/talenxify-logo-1.png" />
            
            <h1 className="otp-title">OTP Verification</h1>
            <p className="otp-subtitle">
              Enter the verification code we just sent to your email address
            </p>

            <div className="otp-inputs">
              <input type="text" maxLength={1} className="otp-input" onChange={(e) => e.target.className = e.target.value ? 'otp-input filled' : 'otp-input'} />
              <input type="text" maxLength={1} className="otp-input" onChange={(e) => e.target.className = e.target.value ? 'otp-input filled' : 'otp-input'} />
              <input type="text" maxLength={1} className="otp-input" onChange={(e) => e.target.className = e.target.value ? 'otp-input filled' : 'otp-input'} />
              <input type="text" maxLength={1} className="otp-input" onChange={(e) => e.target.className = e.target.value ? 'otp-input filled' : 'otp-input'} />
              <input type="text" maxLength={1} className="otp-input" onChange={(e) => e.target.className = e.target.value ? 'otp-input filled' : 'otp-input'} />
              <input type="text" maxLength={1} className="otp-input" onChange={(e) => e.target.className = e.target.value ? 'otp-input filled' : 'otp-input'} />
            </div>

            <button className="verify-btn" onClick={onNavigate}>Verify</button>

            <p className="resend-text">
              Didn't receive a code? <a href="#" className="resend-link">Resend</a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};
