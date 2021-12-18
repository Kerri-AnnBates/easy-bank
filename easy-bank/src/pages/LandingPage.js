import React from "react";
import Articles from "../components/Articles";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const LandingPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <Articles />
            <Footer />
        </>
    )
}

export default LandingPage;
