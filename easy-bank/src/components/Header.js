import React, { useState } from 'react';
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";

const Header = () => {
    const [isOpen, setisOpen] = useState(false);

    const handleMenu = () => {
        setisOpen(!isOpen);
    }

    return (
        <header>
            <div className="wrapper">
                <div className="flex header-container">
                    <div className="logo"><img src={logo} alt="Easy Bank" /></div>
                    <div className="mobile-nav"><button className="menu-button" onClick={() => handleMenu()}><img src={isOpen ? closeIcon : hamburger} alt="hamburger" /></button></div>
                    <div className={`nav-wrapper ${isOpen ? "open" : ""}`}>
                        <ul className="navigation">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="header-action"><button className="cta button">Request Invite</button></div>
                </div>
            </div>
        </header>
    )
}

export default Header;
