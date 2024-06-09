import React from 'react';
import './BfrBody.css';
import { useEffect } from 'react';

const AftrBody= () => {
//   useEffect(() => {
//     const currentUser = getCurrentUser();

//     if (currentUser) {
//       if (currentUser.role === 'admin') {
//         document.getElementById('reviews').contentEditable = true;
//       } else {
//         document.getElementById('reviews').contentEditable = false;
//       }
//     }
//   }, []);

  return (
    <div>
    <section className="header">
        <div className="text-box">
            <h2 style={{ fontSize: '50px', marginLeft: '190px' }}>Building Bridges to Health</h2>
            <p style={{ fontSize: '30px', marginLeft: '150px' }}>Donate for a Brighter Future</p>
        </div>
    </section>
    </div>
  );
};

export default AftrBody;
