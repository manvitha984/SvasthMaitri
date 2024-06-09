import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import BfrNavbar from "./components/BfrNavbar";
import BfrBody from "./components/BfrBody";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AftrBody from "./components/AftrBody";
import AftrNavbar from "./components/AftrNavbar";

import { auth } from "./firebase/firebase";

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
            <Route path="/AftrBody" element={<AftrBody />} />
          ) : null}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
