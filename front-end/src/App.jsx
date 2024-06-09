import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import BfrNavbar from "./components/BfrNavbar";
import BfrBody from "./components/BfrBody";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AftrBody from "./components/AftrBody";
import AftrNavbar from "./components/AftrNavbar";
import Profile from "./components/Profile";
import MedForm from "./components/MedForm";
import MedEquipment from "./components/MedEquipment";
import BloodDonation from "./components/BloodDonation";
import Donations from "./components/Donations";
import Articlespage from "./components/Articlespage";
import Translate from "./components/Translate";
import Donate from "./components/Donate";
import CommunityPage from "./components/CommunityPage";
import { auth } from "./firebase/firebase";
import ImpMedicineDon from "./components/ImpMedicineDon";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    // Unsubscribe from Firebase listener on component unmount
    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    // Perform login logic
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic
    auth
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.error("Error logging out:", error.message);
      });
  };

  return (
    <Router>
      <div>
        {isLoggedIn ? (
          <AftrNavbar handleLogout={handleLogout} />
        ) : (
          <BfrNavbar />
        )}
        <Routes>
          <Route path="/" element={<BfrBody />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login handleLogin={handleLogin} />} />
          {isLoggedIn ? (
            <>
              <Route path="/AftrBody" element={<AftrBody />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/MedForm" element={<MedForm />} />
              <Route path="/MedEquipment" element={<MedEquipment />} />
              <Route path="/BloodDonation" element={<BloodDonation/>} />
              <Route path="/Donations" element={<Donations/>} />
              <Route path="/Articlespage" element={<Articlespage />} />
              <Route path="/CommunityPage" element={<CommunityPage />} /> 
              <Route path="/Donate" element={<Donate />} />
              <Route path="/ImpMedicineDon" element={<ImpMedicineDon />} />
            </>
          ) : null}
        </Routes>
        <Translate />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
