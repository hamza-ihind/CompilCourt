import React from "react";
import { motion } from "framer-motion";

import "./Hero.styles.scss";

const Hero = () => {
  return (
    <div className="app__hero">
      <motion.div
      className="phrase"
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 0.3,
        ease: [0, 0.50, 0.2, 1.01]
      }}
    >
        Wa ELfounani matb9ash Tkeffet
    </motion.div>

    <motion.div
      className="description"
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 0.6,
        ease: [0, 1, 0.8, 1]
      }}
    >
        Compil'Court huwa wahd site dial zeb, a gha bash t3erfo rah Bahti kffat
        w khass li7wih,
        <br />w Zakaria rah 7wa Hassan f amphi Theatre, w matnssash dir no9ta
        bash ngul lik sh7al nta zwen hhhh
    </motion.div>

    </div>
  );
};

export default Hero;
