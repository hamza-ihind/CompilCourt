import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./Card.scss";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Card = ({ name, prof, id, icon, link }) => {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  return (
    <>
      <Link
        className={isDarkModeActive ? "app__card-item dark" : "app__card-item"}
        key={id}
        to={`/module/${name}/${id}`}
      >
        <img
          className={isDarkModeActive ? "app__card-img dark" : "app__card-img"}
          src={icon}
          alt={name}
        />

        <div className="app__card-content">
          <h2 className="bold-text">{name}</h2>
          <p style={{ marginTop: 10 }}>{prof}</p>
        </div>
      </Link>
    </>
  );
};

export default Card;
