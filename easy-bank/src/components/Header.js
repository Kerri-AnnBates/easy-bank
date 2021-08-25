import React from 'react';
import logo from "../images/logo.svg";

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <div className="flex header-container">
                    <div className="logo"><img src={logo} alt="Easy Bank" /></div>
                    <div className="nav-wrapper">
                        <ul className="navigation">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div><button className="cta button">Request Invite</button></div>
                </div>
            </div>
        </header>
    )
}

export default Header;
