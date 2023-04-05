import React from "react";
import { images } from "../../constants";

import "./Clubs.scss";

const Clubs = () => {
  return (
    <div className="app__clubs app__wrapper">
      <div className="app__clubs-side">
        <h3 className="app__clubs-side-title"> Developer </h3>
        <img
          src={images.APPS}
          alt="Logo Appsclub"
          className="app__clubs-side-img"
        />
        <div className="app__about-content-title">
          <h3>AppsClub ENSA Agadir</h3>
          <div className="div-title"></div>
        </div>
        <p className="app__clubs-side-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit
          debitis modi asperiores, enim ea? Quibusdam quisquam maxime accusamus.
          Excepturi exercitationem dolor culpa vel odio cupiditate harum magni
          quae deserunt.
        </p>
      </div>
      <div className="app__clubs-side">
        <h3 className="app__clubs-side-title"> Content Creator </h3>
        <img src={images.FSF} alt="Logo FSF" className="app__clubs-side-img" />
        <div className="app__about-content-title">
          <h3>FSF ENSA Agadir</h3>
          <div className="div-title"></div>
        </div>
        <p className="app__clubs-side-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit
          debitis modi asperiores, enim ea? Quibusdam quisquam maxime accusamus.
          Excepturi exercitationem dolor culpa vel odio cupiditate harum magni
          quae deserunt.
        </p>
      </div>
    </div>
  );
};

export default Clubs;
