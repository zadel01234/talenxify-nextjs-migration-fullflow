import { useState } from "react";
import { MainLayout } from "../src/components/MainLayout";
import { OnboardingContent, LoginContent, SignUpContent, OTPContent, CustomizeContent, SuccessContent, ForgotPasswordContent, NewPasswordContent } from "../src/components/ScreenContents";
import { HirerSignUpContent } from "../src/components/HirerSignUpContent";
import { UploadPhoto } from "../src/screens/UploadPhoto";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("onboarding");
  const [previousScreen, setPreviousScreen] = useState("");
  const [userType, setUserType] = useState("");

  const navigateToScreen = (screen: string) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
  };

  const renderContent = () => {
    switch (currentScreen) {
      case "login":
        return <LoginContent onNavigate={() => navigateToScreen("otp")} onSignUpClick={() => navigateToScreen("signup")} onForgotPasswordClick={() => navigateToScreen("forgot-password")} />;
      case "signup":
        return userType === "hirer" ? 
          <HirerSignUpContent onNavigate={() => navigateToScreen("otp")} onSignInClick={() => navigateToScreen("login")} /> :
          <SignUpContent onNavigate={() => navigateToScreen("otp")} onSignInClick={() => navigateToScreen("login")} />;
      case "forgot-password":
        return <ForgotPasswordContent onNavigate={() => navigateToScreen("otp")} />;
      case "new-password":
        return <NewPasswordContent onNavigate={() => navigateToScreen("password-success")} />;
      case "password-success":
        return (
          <div className="password-success-container">
            <div className="password-success-content">
              <img className="password-success-logo" alt="Talenxify logo" src="/talenxify-logo-1.png" />
              
              <div className="password-success-icon">
                <img alt="Success" src="/checked.png" />
              </div>

              <h1 className="password-success-title">Password Updated successfully!</h1>
              <p className="password-success-subtitle">
                Your password has been updated successfully. Login using your new password
              </p>

              <button className="login-btn" onClick={() => navigateToScreen("login")}>Login</button>
            </div>
          </div>
        );
      case "otp":
        return <OTPContent onNavigate={() => {
          if (previousScreen === "forgot-password") {
            navigateToScreen("new-password");
          } else if (userType === "hirer") {
            navigateToScreen("customize-organization");
          } else {
            navigateToScreen("customize");
          }
        }} />;
      case "customize-organization":
        return (
          <div className="customize-container">
            <div className="customize-content">
              <img className="customize-logo" alt="Talenxify logo" src="/talenxify-logo-1.png" />
              <p className="page-indicator">1 / 2</p>
              <h1 className="customize-title">Customize your Organization</h1>
              <p className="customize-subtitle">
                Tell us about your organization.
              </p>
              <form className="customize-form">
                <div className="form-group">
                  <label className="form-label">Organization Name</label>
                  <input type="text" className="form-input" placeholder="Link to your linkedin profile" />
                </div>
                <div className="form-group">
                  <label className="form-label">Position In Organization</label>
                  <input type="text" className="form-input" placeholder="Enter your position in Organization" />
                </div>
                <div className="form-group">
                  <label className="form-label">Industry</label>
                  <select className="form-select">
                    <option>Select industry</option>
                  </select>
                </div>
                <button type="button" className="create-account-btn" onClick={() => navigateToScreen("upload-photo")}>
                  Create Account
                </button>
              </form>
            </div>
          </div>
        );
      case "upload-photo":
        return <UploadPhoto onNavigate={() => navigateToScreen("success")} />;
      case "customize":
        return (
          <div className="customize-container">
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
                <button type="button" className="create-account-btn" onClick={() => setCurrentScreen("success")}>Create Account</button>
              </form>
            </div>
          </div>
        );
      case "success":
        return (
          <div className="success-container">
            <div className="success-content">
              <img className="success-logo" alt="Talenxify logo" src="/talenxify-logo-1.png" />
              <img className="success-badge" alt="Success" src="/checked.png" />
              <h1 className="success-title">Account created successfully!</h1>
              <p className="success-subtitle">
                Welcome aboard! Start your success journey with Talenxify!
              </p>
              <button className="dashboard-btn">Take me to Dashboard</button>
            </div>
          </div>
        );
      default:
        return <OnboardingContent onNavigate={(type) => {
          setUserType(type);
          navigateToScreen("signup");
        }} />;
    }
  };

  const content = renderContent();
  
  if (
    currentScreen === "customize" ||
    currentScreen === "customize-organization" ||
    currentScreen === "upload-photo" ||
    currentScreen === "success" ||
    currentScreen === "password-success"
  ) {
    return content;
  }
  
  return <MainLayout>{content}</MainLayout>;
};

export default App;