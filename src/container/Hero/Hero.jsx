import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Hero.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Hero = () => (
  <div className="app__hero app__flex">
    <div className="ellipse"></div>
    <div className="ellipse-2"></div>
    <div className="app__hero-content">
      <div className="app__hero-tag">FSF Presents :</div>
      <h1 className="app__hero-title">Compil'Court</h1>
      <h3 className="app__hero-slogan">
        Your personal study program starts here!
      </h3>
      <div className="app__hero-buttons">
        <button className="button-main">Get started</button>
        <button className="button-stroke">Learn more</button>
      </div>
    </div>
    <img src={images.hero} alt="hero" className="app__hero-img" />
  </div>
);

export default AppWrap(MotionWrap(Hero, "app__hero"), "hero", "app__primarybg");
