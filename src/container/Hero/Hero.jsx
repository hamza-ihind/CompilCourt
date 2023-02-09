import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Hero.scss";

const Hero = () => (
  <div className="app__hero app__flex app__wrapper">
    <div className="ellipse"></div>
    <div className="ellipse-2"></div>

    <div className="app__hero-content">
      <div className="app__hero-tag">FSF Presents :</div>
      <h1 className="app__hero-title">Compil'Court</h1>
      <h3 className="app__hero-slogan">
        Your personal study program starts here!
      </h3>
      <div className="app__hero-buttons">
        <a href="#levels">
          <button className="button-main" style={{ fontWeight: 400 }}>
            Get started
          </button>
        </a>
        <a href="#about">
          <button className="button-stroke">Learn more</button>
        </a>
      </div>
    </div>
    <img src={images.hero} alt="hero" className="app__hero-img" />
  </div>
);

export default AppWrap(MotionWrap(Hero, "app__hero"), "hero", "app__primarybg");
