import React from "react";

import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Levels from "../../components/Levels/Levels";
import Contact from "../../components/Contact/Contact";

import "./Homepage.scss";

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Levels />
      <Contact />
    </>
  );
};

export default Homepage;
