import { useState, useContext } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

import "./Navbar.scss";

import { images } from "../../constants";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import { useRef } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [light, setLight] = useState(true);

  const { isDarkModeActive, switchToLightMode, switchToDarkMode } =
    useContext(ThemeModeContext);

  // toggle navbar :
  // const navRef = useRef();
  // const showNavbar = () => {
  //   navRef.current.classList.toggle("Responsive_nav");
  // };

  function toggleMode() {
    if (isDarkModeActive) {
      switchToLightMode();
      return;
    }
    switchToDarkMode();
  }

  function mixed() {
    toggleMode();
    setLight(!light);
  }

  return (
    <div>
      <div className={isDarkModeActive ? "app__navbar dark" : "app__navbar"}>
        <div className="app__navbar-logo">
          <a href="#home">
            <img src={images.COMPIL} alt="Logo" />
          </a>
        </div>

        <ul className="app__navbar-links">
          {["home", "about", "explore", "contact"].map((item) => (
            <li key={`link-${item}`}>
              <a
                className={
                  isDarkModeActive
                    ? "app__navbar-link dark"
                    : "app__navbar-link"
                }
                href={`./#${item}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="app__navbar-buttons">
          <button className="button-toggle" onClick={mixed}>
            L/D
          </button>
          <button className="button-toggle">Contact Us</button>
        </div>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [500, 0] }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["hero", "about", "levels", "contact"].map((item) => (
                  <li key={item}>
                    <a href={`./#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
