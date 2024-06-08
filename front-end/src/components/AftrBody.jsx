import React from 'react';
import 'BfrBody.css';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const currentUser = getCurrentUser();

    if (currentUser) {
      if (currentUser.role === 'admin') {
        document.getElementById('reviews').contentEditable = true;
      } else {
        document.getElementById('reviews').contentEditable = false;
      }
    }
  }, []);

  return (
    <div>
      <div className="text-box">
        <h2 style={{ fontSize: '70px', marginLeft: '190px' }}>Building Bridges to Health:</h2>
        <p style={{ fontSize: '40px', marginLeft: '150px' }}>Donate for a Brighter Future</p>
      </div>
    </div>
  );
};

export default Home;
