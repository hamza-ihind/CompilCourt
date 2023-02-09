// import { useState, useEffect } from 'react'

import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

import { images } from "../../constants";

const About = () => {
  return (
    <div className="app__about app__flex app__wrapper">
      <div className="ellipse-2"></div>
      <div className="ellipse"></div>
      <div className="app__about-content">
        <div className="app__about-content-side">
          <div className="app__about-content-title">
            <h3>Our mission</h3>
            <div className="div-title"></div>
          </div>
          <p className="app__about-content-text">
            <img
              src={images.compil}
              alt="logo CompilCourt"
              className="compil"
            />
            Compil'Court dolor sit amet consectetur adipisicing elit. Neque
            omnis quae, eveniet minus corrupti autem ratione reiciendis eos,
            unde aut accusantium. Voluptas suscipit impedit maxime ipsam omnis
            nam odio doloremque cum. Aspernatur praesentium ipsam voluptas
            temporibus ab ea dolores odit autem, tempora explicabo cumque culpa
            perferendis in, at sapiente.
          </p>
        </div>
        <hr className="v-line" />
        <div className="app__about-content-side">
          <div className="app__about-content-title">
            <h3>Our Values</h3>
            <div className="div-title"></div>
          </div>
          <p className="app__about-content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque omnis
            quae, eveniet minus corrupti autem ratione reiciendis eos, unde aut
            accusantium. Voluptas suscipit impedit maxime ipsam omnis nam odio
            doloremque cum. Aspernatur praesentium ipsam voluptas temporibus ab
            ea dolores odit autem, tempora explicabo cumque culpa perferendis
            in, at sapiente.
          </p>
        </div>
      </div>
      <div className="app__about-stats">
        <div className="app__about-stats-card">
          <div className="app__about-stats-card-icon">
            <div className="overlay-ellipse"></div>
            <img
              src={images.student}
              alt="student"
              className="app__about-stats-card-img"
            />
          </div>
          <div className="app__about-content-title">
            <h1 className="app__about-stats-card-title">10,000+</h1>
            <div className="div-title"></div>
          </div>
          <p className="app__about-stats-card-text">Students</p>
        </div>
        <div className="app__about-stats-card">
          <div className="app__about-stats-card-icon">
            <div className="overlay-ellipse"></div>
            <img
              src={images.idea}
              alt="student"
              className="app__about-stats-card-img"
            />
          </div>
          <div className="app__about-content-title">
            <h1 className="app__about-stats-card-title">Since 2021</h1>
            <div className="div-title"></div>
          </div>
          <p className="app__about-stats-card-text">Founded</p>
        </div>
        <div className="app__about-stats-card">
          <div className="app__about-stats-card-icon">
            <div className="overlay-ellipse"></div>
            <img
              src={images.write}
              alt="student"
              className="app__about-stats-card-img"
            />
          </div>
          <div className="app__about-content-title">
            <h1 className="app__about-stats-card-title">10 Students</h1>
            <div className="div-title"></div>
          </div>
          <p className="app__about-stats-card-text">Writing with LaTeX</p>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__primarybg"
);
