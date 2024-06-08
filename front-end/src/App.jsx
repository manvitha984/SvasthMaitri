import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BfrNavbar from './components/BfrNavbar';
import BfrBody from './components/BfrBody';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <BfrNavbar />
        <Routes>
          <Route path="/" element={<BfrBody />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
