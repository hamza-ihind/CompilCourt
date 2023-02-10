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
            Compil'Court, a foundation created by ENSA students to help their
            fellow classmates by using their professionalism in LaTeX to correct
            past exams and write lessons that are clear and easy to understand..
            Here are four reasons why this foundation is the best resource for
            first and second year students. So be sure to take advantage of this
            wonderful resource. Compil'Court is here to help you succeed!
          </p>
        </div>
        <hr className="v-line" />
        <div className="app__about-content-side">
          <div className="app__about-content-title">
            <h3>Our Values</h3>
            <div className="div-title"></div>
          </div>
          <ul className="app__about-content-list">
            <li>
              ✅ Expertise: The students behind Compil'Court have a deep
              understanding of mathematics, physics, and computer science.
            </li>
            <li>
              ✅ Selflessness: This foundation is non-profit, meaning that the
              students are doing this just for fun and to help each other.
            </li>
            <li>
              ✅ Quality work: The students behind Compil'Court take pride in
              their work and make sure that everything they produce is of the
              highest quality.
            </li>
            <li>
              ✅ Cost-effective: Best of all, the services offered by
              Compil'Court are free!
            </li>
          </ul>
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
