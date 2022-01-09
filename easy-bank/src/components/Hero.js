import React from 'react';
import introPhone from "../images/image-mockups.png";

const Hero = () => {
    return (
        <section className="hero">
            <div className="wrapper">
                <div className="intro">
                    <div className="intro-message">
                        <h1>Next generation digital banking</h1>
                        <p>Take your financial life online. Your Easybank account will be a one-stop-shop  for spending, saving, budgeting, investing, and much more.</p>
                        <div className='cta-wrapper'><button className="cta button">Request Invite</button></div>
                    </div>
                    <div className="img-wrapper">
                        <img src={introPhone} alt="Banking online phone" />
                    </div>
                </div>
            </div>
            <div className="bg-wrapper">
                <div className="bg-intro"></div>
            </div>
        </section>
    )
}

export default Hero;
