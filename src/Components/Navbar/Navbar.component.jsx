import React from "react";
import { Outlet } from "react-router";

//svgs
import { ReactComponent as Chevron } from "../../assets/chevron.svg";
import Logo from "../../assets/logo.png";

import "./Navbar.styles.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <button onclick="toggleMenu()" class="burger"></button>

        <button className="button">
          <img src={Logo} className="logo" alt="logo" />
        </button>

        <div className="dropdowns">
          <div className="dropdown">
            <button class="button">
              Niveaux
              < Chevron />
            </button>
            <div className="dropdown-menu">
              <button>1ère année CP</button>
              <button>2ème année CP</button>
              <button>1ère année CI</button>
              <button>2ème année CI</button>
              <button>3ème année CI</button>
            </div>
          </div>

          <div className="dropdown">
            <button className="button">
              Filières
              < Chevron />
            </button>
            <div className="dropdown-menu">
              <button>Génie Info</button>
              <button>Génie Civil</button>
              <button>Génie Finance</button>
              <button>Génie Indus</button>
              <button>Génie Mécanique</button>
              <button>Génie Electrique</button>
              <button>Génie Energétique</button>
            </div>
          </div>

          <div className="dropdown">
            <button className="button">
              Support
              < Chevron />
            </button>
            <div className="dropdown-menu">
              <button>Live Chat</button>
              <button>Send Email</button>
              <button>Request Help</button>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;