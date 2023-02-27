import React, { useContext } from "react";
import { motion } from "framer-motion";

// import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Hero.scss";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Hero = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);

  return (
    <div className="app__hero">
      <img
        src={images.FSF}
        alt="Logo FSF"
        className="logo-head logo-head-fsf"
      />
      <img
        src={images.APPS}
        alt="Logo APPS"
        className="logo-head logo-head-apps"
      />

      <div className="app__hero-content">
        <div className="app__hero-header">
          <h3 className="app__hero-header-text">
            AppsClub x Club FSF presents :
          </h3>
        </div>

        <h1 className="app__hero-title">Compil'Court</h1>

        <h3 className="app__hero-slogan">
          Your personal study program starts here!
        </h3>

        <div className="app__hero-buttons">
          <a href="#levels">
            <button
              className={isDarkModeActive ? "button-main dark" : "button-main"}
              style={{ fontWeight: 400 }}
            >
              Get started
            </button>
          </a>
          <a href="#about">
            <button
              className={
                isDarkModeActive ? "button-stroke dark" : "button-stroke"
              }
            >
              Learn more
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
