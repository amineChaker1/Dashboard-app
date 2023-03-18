import React from "react";
import Contact from "../components/LandingPage/Contact";
import CTA from "../components/LandingPage/CTA";
import Footer from "../components/LandingPage/Footer";
import Hero from "../components/LandingPage/Hero";
import Main from "../components/LandingPage/Main";

import Navbar from "../components/LandingPage/Navbar";

const Landing = () => {
  return (
    <>
      <Hero />
      <Main />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
};

export default Landing;
