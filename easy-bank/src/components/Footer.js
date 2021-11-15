import React from 'react';
import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import youtube from '../images/icon-youtube.svg';
import instagram from '../images/icon-instagram.svg';

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="flex footer-content">
                    <div className="flex">
                        <div>
                            <img alt="Easy Bank logo" src={logo} />
                            <div className="social">
                                <img alt="Facebook" src={facebook} />
                                <img alt="Youtube" src={youtube} />
                                <img alt="Twitter" src={twitter} />
                                <img alt="Pinterest" src={pinterest} />
                                <img alt="Instagram" src={instagram} />
                            </div>
                        </div>
                        <div className="links flex">
                            <div>
                                <a href="#">About Us</a>
                                <a href="#">Contact</a>
                                <a href="#">Blog</a>
                            </div>
                            <div>
                                <a href="#">Careers</a>
                                <a href="#">Support</a>
                                <a href="#">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="cta button">Request Invite</button>
                        <p className="copyrights">© Easybank. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
