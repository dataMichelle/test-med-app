import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/Sign_Up/SignUp";
import Login from "./components/Login/Login";
import Modal from "./components/Modal";
import InstantConsultation from "./components/InstantConsultationBooking/InstantConsultation";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onSignUpClick={() => setShowSignUp(true)}
        onLogoutClick={() => {
          sessionStorage.clear(); // Remove all session data
          window.location.reload(); // Refresh to update UI
        }}
      />
      <Modal show={showLogin} onClose={() => setShowLogin(false)}>
        <Login
          onShowSignUpModal={() => {
            setShowLogin(false);
            setShowSignUp(true);
          }}
        />
      </Modal>
      <Modal show={showSignUp} onClose={() => setShowSignUp(false)}>
        <SignUp
          onShowLoginModal={() => {
            setShowSignUp(false);
            setShowLogin(true);
          }}
        />
      </Modal>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* You can keep the routes for direct navigation if you want */}
        <Route path="/instant-consultation" element={<InstantConsultation />} />
      </Routes>
    </>
  );
}

export default App;
