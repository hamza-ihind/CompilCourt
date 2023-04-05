import React from "react";

import { motion } from "framer-motion";
// import { MotionWrap } from "../../wrapper";
import "./About.scss";

import { images } from "../../constants";
import Stat from "../Stat/Stat";

const About = () => {
  return (
    <div className="app__about">
      <img src={images.blob1} alt="blob1" className="blob1" />
      <img src={images.blob2} alt="blob1" className="blob2" />
      <div id="about" className="app__about-content">
        <div className="app__about-content-side">
          <div className="app__about-content-title">
            <h3>Our mission</h3>
            <div className="div-title"></div>
          </div>
          <p className="app__about-content-text">
            <img
              src={images.Ccompil}
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

        {/* <hr className="v-line" /> */}

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
    </div>
  );
};

export default About;
