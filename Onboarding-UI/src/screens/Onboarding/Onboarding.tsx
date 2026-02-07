import "../../index.css";
import { HeroSection } from "../../components/HeroSection";

export const Onboarding = ({ onNavigate }: { onNavigate: () => void }): JSX.Element => {
  return (
    <div className="onboarding-container">
      <div className="onboarding-wrapper">
        <HeroSection />

        <main className="action-section">
          <div className="action-content">
            <img
              className="logo"
              alt="Talenxify logo"
              src="/talenxify-logo-1.png"
            />

            <div className="action-main">
              <div className="action-text">
                <h2 className="action-title">
                  <span className="italic-dark">
                    What Brings you <br />
                    to{" "}
                  </span>
                  <span className="italic-blue">Talenxify?</span>
                </h2>

                <p className="action-subtitle">
                  We'd like to personalize your experience so you find what
                  you're looking for!
                </p>
              </div>

              <div className="action-buttons">
                <button className="action-button-hire" onClick={onNavigate}>I want to Hire Talent</button>
                <button className="action-button" onClick={onNavigate}>Looking for My next Role</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
