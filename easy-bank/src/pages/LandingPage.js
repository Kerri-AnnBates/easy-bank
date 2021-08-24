import React from "react";
import Articles from "../components/Articles";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const LandingPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Content />
            <Articles />
            <Footer />
        </>
    )
}

export default LandingPage;
