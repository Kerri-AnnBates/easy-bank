import React from 'react';
import apiIcon from "../images/icon-api.svg";
import budgetIcon from "../images/icon-budgeting.svg";
import onlineIcon from "../images/icon-online.svg";
import onboardingIcon from "../images/icon-onboarding.svg";

const Content = () => {
    return (
        <section className="content">
            <div className="wrapper">
                <div className="content_header">
                    <h2>Why choose Easybank?</h2>
                    <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                </div>

                <div className="content_feature flex">
                    <div className="feature-block">
                        <div className="icon-container">
                            <img src={onlineIcon} alt="Online Banking Icon" />
                        </div>
                        <h3>Online Banking</h3>
                        <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    </div>
                    <div className="feature-block">
                        <div className="icon-container">
                            <img src={budgetIcon} alt="Budget Icon" />
                        </div>
                        <h3>Simple Budgeting</h3>
                        <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                    </div>
                    <div className="feature-block">
                        <div className="icon-container">
                            <img src={onboardingIcon} alt="Onboarding Icon" />
                        </div>
                        <h3>Fast Onboarding</h3>
                        <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </div>
                    <div className="feature-block">
                        <div className="icon-container">
                            <img src={apiIcon} alt="API Icon" />
                        </div>
                        <h3>Open API</h3>
                        <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content;
