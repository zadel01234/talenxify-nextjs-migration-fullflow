import "../../index.css";
import { HeroSection } from "../../components/HeroSection";

export const Login = ({ onNavigate, onSignUpClick }: { onNavigate: () => void; onSignUpClick: () => void }): JSX.Element => {
  return (
    <div className="onboarding-container">
      <div className="onboarding-wrapper">
        <HeroSection />

        <main className="login-section">
          <div className="login-content">
            <img className="logo" alt="Talenxify logo" src="/talenxify-logo-1.png" />
            
            <div className="login-tabs">
              <button className="login-tab" onClick={onSignUpClick}>Sign Up</button>
              <button className="login-tab active">Sign In</button>
            </div>

            <form className="login-form">
              <div className="form-group">
                <label className="form-label">Email Id</label>
                <input type="email" className="form-input" placeholder="" />
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="password-wrapper">
                  <input type="password" className="form-input" placeholder="Enter Password" />
                  <button type="button" className="password-toggle">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 4C4.5 4 1.5 10 1.5 10s3 6 8.5 6 8.5-6 8.5-6-3-6-8.5-6z" stroke="#596CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="10" r="2.5" stroke="#596CFF" strokeWidth="1.5"/>
                    </svg>
                  </button>
                </div>
              </div>

              <a href="#" className="forgot-password">Forgot Password?</a>

              <button type="button" className="signin-btn" onClick={onNavigate}>Sign In</button>

              <div className="divider">
                <span className="divider-text">OR</span>
              </div>

              <button type="button" className="google-btn">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="google-icon" />
                Continue with Google
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};
