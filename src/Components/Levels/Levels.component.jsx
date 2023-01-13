import React from "react";
import { motion } from "framer-motion";

import "./Levels.styles.scss";

const Levels = () => {
  return (
    <div className="app__levels">
      <motion.div
        className="description"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.6,
          ease: [0, 1, 0.8, 1],
        }}
      >
        hamza
      </motion.div>
    </div>
  );
};

export default Levels;
