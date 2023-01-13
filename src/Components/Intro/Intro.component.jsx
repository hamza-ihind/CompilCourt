import React from "react";

import "./Intro.styles.scss";

const Intro = () => {
  return (
    <div className="app__intro">
      <div className="content">
        <h1 className="content__title">Mission & Vision 🫃🏿</h1>
        <div className="content__card">
          <h6 className="content__card-title">Mission</h6>
          <p className="content__card-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            exercitationem est maiores tempore odit suscipit mollitia
            repellendus.
          </p>
        </div>
        <div className="content__card">
          <h6 className="content__card-title">Vision</h6>
          <p className="content__card-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            exercitationem est maiores tempore odit suscipit mollitia
            repellendus.
          </p>
        </div>
      </div>

      <div className="info">

        <div className="line">
          <hr />
        </div>

        <div className="info__cards">
          <div className="info__card">
            <h3 className="info__card-title">10,000+</h3>
            <p className="info__card-description">Students</p>
          </div>

          <div className="info__card">
            <h3 className="info__card-title">Since 2021</h3>
            <p className="info__card-description">Founded</p>
          </div>

          <div className="info__card">
            <h3 className="info__card-title">10 Writers</h3>
            <p className="info__card-description">using LATEX</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
