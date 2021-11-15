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
                    <div className="footer-primary">
                        <div className="flex">
                            <div className="flex-even">
                                <img alt="Easy Bank logo" src={logo} />
                                <div className="social">
                                    <a href="#" title="Facebook"><img alt="Facebook" src={facebook} /></a>
                                    <a href="#" title="Youtube"><img alt="Youtube" src={youtube} /></a>
                                    <a href="#" title="Twitter"><img alt="Twitter" src={twitter} /></a>
                                    <a href="#" title="Pinterest"><img alt="Pinterest" src={pinterest} /></a>
                                    <a href="#" title="Instagram"><img alt="Instagram" src={instagram} /></a>
                                </div>
                            </div>
                            <div className="links flex flex-even">
                                <div className="flex-even">
                                    <a href="#">About Us</a>
                                    <a href="#">Contact</a>
                                    <a href="#">Blog</a>
                                </div>
                                <div className="flex-even">
                                    <a href="#">Careers</a>
                                    <a href="#">Support</a>
                                    <a href="#">Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-secondary">
                        <button className="cta button">Request Invite</button>
                        <p className="copyrights">© Easybank. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
