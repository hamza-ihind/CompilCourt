// import { useState, useEffect } from 'react'

import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

import { images } from "../../constants";

const About = () => {
  return (
    <>

      {/* <img src={images.pattern} alt="pattern" className="pattern" />
      <img src={images.pattern} alt="pattern" className="pattern-rotated" /> */}

      <div className="aboutus">
        <h1 className="aboutus__title">ABOUT US</h1>
        <div className="aboutus__hero">
          <h4>WE LIVE BY THE CODE OF PASSION</h4>
          <hr className="line" />
        </div>
      </div>

      <div className="app__flex">
        <div className="app__us">
          <div className="app__us__content">
            <h2 className="app__us__content-title"> WHO ARE WE ?? </h2>
            <p className="app__us__content-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              numquam. Vitae, totam laudantium animi culpa numquam quibusdam
              nesciunt. Alias ducimus omnis facilis culpa commodi adipisci eius
              nihil assumenda nobis voluptatibus! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Totam, numquam. Vitae, totam
              laudantium animi culpa numquam quibusdam nesciunt. Alias ducimus
              omnis facilis culpa commodi adipisci eius nihil assumenda nobis
              voluptatibus!
            </p>
          </div>

          <hr className="v-line" />

          <div className="app__us__stats">
            <div className="app__us__stats-card">
              <h4 className="app__us__stats-card-title">10,000+</h4>
              <p className="app__us__stats-card-p">students</p>
            </div>
            <div className="app__us__stats-card">
              <h4 className="app__us__stats-card-title">Since 2021</h4>
              <p className="app__us__stats-card-p">Founded</p>
            </div>
            <div className="app__us__stats-card">
              <h4 className="app__us__stats-card-title">10 Students</h4>
              <p className="app__us__stats-card-p">Writing with LaTeX</p>
            </div>
          </div>

          <hr className="v-line" />

          <div className="app__us__content">
            <h2 className="app__us__content-title"> Mission & Vision </h2>
            <p className="app__us__content-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              numquam. Vitae, totam laudantium animi culpa numquam quibusdam
              nesciunt. Alias ducimus omnis facilis culpa commodi adipisci eius
              nihil assumenda nobis voluptatibus! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Totam, numquam. Vitae, totam
              laudantium animi culpa numquam quibusdam nesciunt. Alias ducimus
              omnis facilis culpa commodi adipisci eius nihil assumenda nobis
              voluptatibus!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
