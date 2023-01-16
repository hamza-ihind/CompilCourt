import { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Work.scss";

const works = [
  {
    title: "Electrostatique",
    prof: "Pr. Driss Agliz",
    tags: ["CP-1"],
    imgUrl: images.ensa,
  },
  {
    title: "Magnetostatique",
    prof: "Pr. Abdelfattah Narjis",
    tags: ["CP-1"],
    imgUrl: images.ensa,
  },
  {
    title: "Mécanique du point",
    prof: "Pr. Abdellah Tihane",
    tags: ["CP-1"],
    imgUrl: images.ensa,
  },
  {
    title: "Algèbre I",
    prof: "Pr. Abdellah Bnouhachem",
    tags: ["CP-1"],
    imgUrl: images.ensa,
  },
  {
    title: "Analyse I",
    prof: "Pr. Said Taarabti",
    tags: ["CP-1"],
    imgUrl: images.ensa,
  },
  {
    title: "Informatique I",
    prof: "Pr. Abdenbi Abnaou",
    tags: ["CP-1"],
    imgUrl: images.ensa,
  },
  {
    title: "TEC",
    prof: "Pr. Aouatif Ouzid",
    tags: ["CP-1"],
    imgUrl: images.ensa,
  },
  {
    title: "Algèbre II",
    prof: "Pr. Lahcen Taoufiq",
    tags: ["CP-1"],
    imgUrl: images.ensa,
  },
  {
    title: "Analyse II",
    prof: "Pr. Hicham Mahdioui",
    tags: ["CP-1"],
    imgUrl: images.ensa,
  },
  {
    title: "Electrocinétique I",
    prof: "Pr. Wissam Jenkal",
    tags: ["CP-1"],
    imgUrl: images.ensa,
  },
  {
    title: "Electrocinétique II",
    prof: "Pr. A. Elazzaoui",
    tags: ["CP-1"],
    imgUrl: images.ensa,
  },
  {
    title: "Informatique II",
    prof: "Pr. Abdenbi Abnaou",
    tags: ["CP-1"],
    imgUrl: images.ensa,
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") setFilterWork(works);
      else setFilterWork(works.filter((work) => work.tags.includes(item)));
    }, 400);
  };

  return (
    <>
      <h2 className="head-text">
        Pick your level and start <span> WORKING! </span>
      </h2>

      {/* <img src={images.pattern} alt="pattern" className='pattern' />
            <img src={images.pattern} alt="pattern" className='pattern-rotated' /> */}

      <div className="app__work-filter">
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
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.4, delayChildren: 0.4 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            
            <div className="app__work-img app_flex">
              <img src={work.imgUrl} alt={work.name} />
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text app__work-content-title">
                {work.title}
              </h4>
              <p
                className="p-text app__work-content-prof"
              >
                {work.prof}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__work"), "work", "app__whitebg");
