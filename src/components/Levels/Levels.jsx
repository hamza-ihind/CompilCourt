import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

// import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import Card from "../Card/Card";

import { Modules } from "../../constants/modules";
import "./Levels.scss";
import { Link } from "react-router-dom";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Levels = (link) => {
  const { isDarkModeActive } = useContext(ThemeModeContext);

  const [modules, setModules] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  link = Modules.link;

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
    <div id="explore" className="app__levels">
      <h2 className="app__levels-title">
        Pick your level and start{" "}
        <span style={{ color: "var(--secondary-color)", fontWeight: 700 }}>
          WORKING!
          {/* <div className="div-title"></div> */}
        </span>
        💪
      </h2>

      <div className="app__levels-buttons">
        <button
          className={
            isDarkModeActive
              ? "button-stroke button-level dark"
              : "button-stroke button-level"
          }
          onClick={() => filterLevel("S1")}
        >
          S1
        </button>
        <button
          className={
            isDarkModeActive
              ? "button-stroke button-level dark"
              : "button-stroke button-level"
          }
          onClick={() => filterLevel("S2")}
        >
          S2
        </button>
        <button
          className={
            isDarkModeActive
              ? "button-stroke button-level dark"
              : "button-stroke button-level"
          }
          onClick={() => filterLevel("S3")}
        >
          S3
        </button>
        <button
          className={
            isDarkModeActive
              ? "button-stroke button-level dark"
              : "button-stroke button-level"
          }
          onClick={() => filterLevel("S4")}
        >
          S4
        </button>
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.4, delayChildren: 0.4 }}
        className="app__levels-cards"
      >
        {modules.map((element) => {
          const { id, name, prof, light, dark } = element;
          return (
            <Card
              name={name}
              prof={prof}
              id={id}
              light={light}
              dark={dark}
              className="app__levels-cards-item"
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Levels;
