import React from 'react';
import './BfrNavbar.css'; // Import the CSS file

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
                        <li><a href="">Home</a></li>
                        <li><a href="">Sign Up</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </div>
                <i className="fa fa-bars" onClick={showMenu}></i>
            </nav>
        </div>
    );
}

export default BfrNavbar;
