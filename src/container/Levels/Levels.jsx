import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import { Modules } from "../../constants/modules";
import "./Levels.scss";

const Levels = () => {
  const [modules, setModules] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const filterLevel = (level) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      const updatedLevel = Modules.filter((currentLevel) => {
        return currentLevel.level === level;
      });
      setModules(updatedLevel);
    }, 420);
  };

  return (
    <div className="app__levels app__flex app__wrapper">
      <h2 className="app__levels-title">
        Pick your level and start{" "}
        <span style={{ color: "var(--secondary-color)", fontWeight: 700 }}>
          WORKING!💪
          <div className="div-title"></div>
        </span>
      </h2>

      <div className="app__levels-buttons">
        <button className="button-stroke" onClick={() => filterLevel("S1")}>
          Semestre 1
        </button>
        <button className="button-stroke" onClick={() => filterLevel("S2")}>
          Semestre 2
        </button>
        <button className="button-stroke" onClick={() => filterLevel("S3")}>
          Semestre 3
        </button>
        <button className="button-stroke" onClick={() => filterLevel("S4")}>
          Semestre 4
        </button>
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.4, delayChildren: 0.4 }}
        className="app__levels-cards"
      >
        {modules.map((element) => {
          const { name, prof, icon } = element;
          return (
            <div className="app__levels-card">
              <div className="div-level">
                <div className="level-ellipse"></div>
                <img src={icon} alt={icon} className="app__levels-card-img" />
              </div>
              <div className="app__levels-card-text">
                <h4 className="app__levels-card-text-name">{name}</h4>
                <p className="app__levels-card-text-prof">{prof}</p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Levels, "app__levels"),
  "levels",
  "app__primarybg"
);
