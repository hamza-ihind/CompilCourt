import React from "react";

import Hero from "../container/Hero/Hero";
import About from "../container/About/About";
import Levels from "../container/Levels/Levels";
import Contact from "../container/Contact/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Levels />
      <Contact />
    </>
  );
};

export default HomePage;
