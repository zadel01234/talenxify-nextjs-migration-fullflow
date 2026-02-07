import "../../index.css";
import { HeroSection } from "../../components/HeroSection";

export const AccountSuccess = (): JSX.Element => {
  return (
    <div className="onboarding-container">
      <div className="onboarding-wrapper">
        <HeroSection />
        
        <main className="success-section">
          <div className="success-content">
            <img className="success-logo" alt="Talenxify logo" src="/talenxify-logo-1.png" />
            
            <img className="success-badge" alt="Success" src="/checked.png" />

            <h1 className="success-title">Account created successfully!</h1>
            <p className="success-subtitle">
              Welcome aboard! Start your success journey with Talenxify!
            </p>

            <button className="dashboard-btn">Take me to Dashboard</button>
          </div>
        </main>
      </div>
    </div>
  );
};
