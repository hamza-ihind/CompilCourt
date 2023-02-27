import React from "react";
import { images } from "../../constants";

import "./Stat.scss";

const Stat = (props) => {
  const { iconStat, titleStat, textStat } = props;
  return (
    <div className="app__stats">
      <div className="app__stats-card-icon">
        <div className="overlay-ellipse"></div>
        <img src={iconStat} alt="student" className="app__stats-card-img" />
      </div>
      <div className="app__stats-card-content">
        <h1 className="app__stats-card-title">{titleStat}</h1>
        <div className="div-title"></div>
      </div>
      <p className="app__stats-card-text">{textStat}</p>
    </div>
  );
};

export default Stat;
