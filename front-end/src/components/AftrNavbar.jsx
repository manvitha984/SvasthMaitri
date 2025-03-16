import React from 'react';
import { Link } from 'react-router-dom'; 
import './BfrNavbar.css'; 
import { auth } from '../firebase/firebase';

const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  

function AftrNavbar() {
    const showMenu = () => {
        document.getElementById("navLinks").style.right = "0";
    }

    const hideMenu = () => {
        document.getElementById("navLinks").style.right = "-200px";
    }

    return (
        <div>
            <nav style={{ paddingTop: '30px' }}>
                <img style={{ width: '150px', marginLeft: '85px' }} src="../imgs/logo.png" alt="Logo" />
                <a href="before.html"></a>
                <div className="nav-links" id="navLinks">
                    <i className="fa fa-times" onClick={hideMenu}></i>
                    <ul>
                        <li><Link to="/aftrbody">Home</Link></li>
                        <li><Link to="/Donate">Donate</Link></li>
                        <li><Link to="/Donations">Donations</Link></li>
                        <li><Link to="/CommunityPage">Community</Link></li>
                        <li><Link to="/Articlespage">Articles</Link></li>
                        <li><Link to="/Profile">Profile</Link></li>
                        <li><Link to="/" onClick={handleLogout}>Logout</Link></li>

                    </ul>
                </div>
                <i className="fa fa-bars" onClick={showMenu}></i>
            </nav>
        </div>
    );
}

export default AftrNavbar;
