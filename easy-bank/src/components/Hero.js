import React from 'react';
import introDesktop from "../images/bg-intro-desktop.svg";
import introPhone from "../images/image-mockups.png";

const Hero = () => {
    return (
        <section>
            <div className="hero">
                <div className="wrapper">
                    <div className="intro">
                        <div className="intro-message">
                            <h1>Next generation digital banking</h1>
                            <p>Take your financial life online. Your Easybank account will be a one-stop-shop  for spending, saving, budgeting, investing, and much more.</p>
                            <div><button className="cta button">Request Invite</button></div>
                        </div>
                        <div className="img-wrapper">
                            <img src={introPhone} />
                        </div>
                    </div>
                </div>
                <div className="bg-wrapper">
                    <div className="bg-intro"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
