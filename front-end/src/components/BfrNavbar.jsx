import React from 'react';
import { Link } from 'react-router-dom'; 
import './BfrNavbar.css'; 

function BfrNavbar() {
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <i className="fa fa-bars" onClick={showMenu}></i>
            </nav>
        </div>
    );
}

export default BfrNavbar;
