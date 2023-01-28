// import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Levels.scss";

// const modules = [
//   {
//     title: "Electrostatique",
//     prof: "Pr. Driss Agliz",
//     level: "CP-1",
//     semester: "S1",
//     imgUrl: images.ensa,
//   },
//   {
//     title: "Electrostatique",
//     prof: "Pr. Driss Agliz",
//     level: "CP-1",
//     semester: "S1",
//     imgUrl: images.ensa,
//   },
//   {
//     title: "Electrostatique",
//     prof: "Pr. Driss Agliz",
//     level: "CP-1",
//     semester: "S1",
//     imgUrl: images.ensa,
//   },
// ];

// const semesters = [
//   {
//     level: "CP-1",
//     semester: ["S1", "S2"],
//   },
// ];

const Levels = () => {
  // const [activeFilter, setActiveFilter] = useState("");
  // const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  // const [filterLevel, setFilterLevel] = useState([]);
  // const [filterModule, setFilterModule] = useState([]);

  // const handleSemesterFilter = (item) => {
  //   setActiveFilter(item);
  //   setAnimateCard([{ y: 100, opacity: 0 }]);

  //   setTimeout(() => {
  //     setAnimateCard([{ y: 0, opacity: 1 }]);

  //     if (item === "All") setFilterSemester(modules);
  //     else setFilterSemester(module.filter((module) => module.tags.includes(item)));
  //   }, 300);
  // };

  return (
    <div className="app__levels">
      <h2 className="head-text">
        Pick your level and start <span> WORKING!💪 </span>
      </h2>

      {/* <img src={images.pattern} alt="pattern" className='pattern' />
            <img src={images.pattern} alt="pattern" className='pattern-rotated' /> */}

      {/* <div className="app__work-filter">
        {[
          "CP-1",
          "CP-2",
          "G. Info",
          "G. Finance",
          "G. Industriel",
          "G. BTP",
          "G. Mécanique",
          "G. Electrique",
          "G. Energétique",
        ].map((item, index) => (

          // <div
          //   key={index}
          //   onClick={() => handleLevelFilter(item)}
          //   className={`app__work-filter-item app__flex p-text ${
          //     activeFilter === item ? "item-active" : ""
          //   }`}
          // >
          //   {item}
          // </div>

        ))}
      </div> */}

      {/* <motion.div
        animate={animateCard}
        transition={{ duration: 0.4, delayChildren: 0.4 }}
        className="app__work-portfolio"
      >
        {filterLevel.map((level, index) => (
          <div className="app__work-item app__flex" key={index}>
            
            <div className="app__work-img app_flex">
              <img src={level.imgUrl} alt={level.name} />
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text app__work-content-title">
                {level.title}
              </h4>
              <p
                className="p-text app__work-content-prof"
              >
                {level.prof}
              </p>
            </div>
          </div>
        ))}
      </motion.div> */}
    </div>
  );
};

export default AppWrap(
  MotionWrap(Levels, "app__levels"),
  "levels",
  "app__primarybg"
);
