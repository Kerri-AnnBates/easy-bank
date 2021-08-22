import React from 'react';
import logo from "../images/logo.svg";

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <div className="logo"><img src={logo} alt="Easy Bank" /></div>
                <div className="nav-wrapper">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="cta"><button>Request Invite</button></div>
            </div>
        </header>
    )
}

export default Header;
