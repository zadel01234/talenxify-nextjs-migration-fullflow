import "../../index.css";
import { HeroSection } from "../../components/HeroSection";

export const CustomizeExperience = ({ onNavigate }: { onNavigate: () => void }): JSX.Element => {
  return (
    <div className="onboarding-container">
      <div className="onboarding-wrapper">
        <HeroSection />
        
        <main className="customize-section">
          <div className="customize-content">
            <img className="customize-logo" alt="Talenxify logo" src="/talenxify-logo-1.png" />
                
                <p className="page-indicator">1 / 2</p>
                
                <h1 className="customize-title">Customize your Experience</h1>
                <p className="customize-subtitle">
                  Tell us about Skills to personalize your job search.
                </p>

                <form className="customize-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Experience</label>
                      <select className="form-select">
                        <option>Select your experience</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Current Status</label>
                      <select className="form-select">
                        <option>Select current status</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Level Of Experience</label>
                      <select className="form-select">
                        <option>Select level of experience</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Availability</label>
                      <select className="form-select">
                        <option>Select availability</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Country of Residence</label>
                      <select className="form-select">
                        <option>Select country</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">City of Residence</label>
                      <select className="form-select">
                        <option>Select city</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">LinkedIn</label>
                      <input type="text" className="form-input" placeholder="Link to your linkedin profile" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Job Role</label>
                      <select className="form-select">
                        <option>Select job role</option>
                      </select>
                    </div>
                  </div>

                  <button type="button" className="create-account-btn" onClick={onNavigate}>Create Account</button>
                </form>
          </div>
        </main>
      </div>
    </div>
  );
};
