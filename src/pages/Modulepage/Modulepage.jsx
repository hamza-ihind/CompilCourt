import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import "./ModulePage.scss";
import { Modules } from "../../constants/modules";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import images from "../../constants/images";

const Modulepage = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  const { id } = useParams();
  const { name, prof, res, td, ds } = Modules[id];

  const [document, setDocument] = useState([]);

  const filterDocument = (document) => {
    setTimeout(() => {
      const updatedDoc = Modules[id][document];
      setDocument(updatedDoc);
    }, 420);
  };

  return (
    <>
      <img src={images.blob1} alt="blob" className="blob1" />
      <img src={images.blob2} alt="blob" className="blob2" />

      <div className="app__module">
        {/* <h1 className="app__module-title">{name}</h1>
         */}
        <div className="app__module-title">
          <h1>{name}</h1>
          <div className="div-title"></div>
        </div>

        <div className="app__module-buttons">
          <button
            className={
              isDarkModeActive
                ? "button-stroke button-level dark"
                : "button-stroke button-level"
            }
            onClick={() => filterDocument("res")}
          >
            Résumé
          </button>
          <button
            className={
              isDarkModeActive
                ? "button-stroke button-level dark"
                : "button-stroke button-level"
            }
            onClick={() => filterDocument("td")}
          >
            TD
          </button>
          <button
            className={
              isDarkModeActive
                ? "button-stroke button-level dark"
                : "button-stroke button-level"
            }
            onClick={() => filterDocument("ds")}
          >
            DS
          </button>
        </div>

        <div className="app__module-document">
          <embed
            src={document}
            // width="640"
            // height="480"
            // allow="autoplay"
          ></embed>
        </div>
      </div>
    </>
  );
};

export default Modulepage;
