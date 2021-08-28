import React from 'react';
import introDesktop from "../images/bg-intro-desktop.svg";

const Hero = () => {
    return (
        <section>
            <div className="hero">
                <div className="wrapper">
                    <div className="intro-message">
                        <h1>Next generation digital banking</h1>
                        <p>Take your financial life online. Your Easybank account will be a one-stop-shop  for spending, saving, budgeting, investing, and much more.</p>
                        <div><button className="cta button">Request Invite</button></div>
                    </div>
                    <div className="intro-image-wrapper">
                        <div className="intro-image"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
