import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { AppWrap, MotionWrap } from "../../wrapper";

import "./ModulePage.scss";
import { images } from "../../constants";
import { Modules } from "../../constants/modules";

const Modulepage = () => {
  const { id } = useParams();
  const { name, prof, res, td, ds } = Modules[id];

  // const [document, setDocument] = useState([]);
  // const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  // const filterDocument = (res, td, ds) => {
  //   setAnimateCard([{ y: 100, opacity: 0 }]);

  //   setTimeout(() => {
  //     setAnimateCard([{ y: 0, opacity: 1 }]);
  //     const updatedDocument = Modules.filter((id) => {
  //       return id.res === Module.res;
  //     });
  //     setDocument(updatedDocument);
  //   }, 420);
  // };

  return (
    <>
      <div className="app__module app__wrapper">
        <h1 className="app__module-title">{name}</h1>

        <div className="app__levels-buttons">
          <button
            className="button-stroke button-level"
            // onClick={() => filterDocument("res")}
          >
            Résumé
          </button>
          <button
            className="button-stroke button-level"
            // onClick={() => filterDocument("td")}
          >
            TD
          </button>
          <button
            className="button-stroke button-level"
            // onClick={() => filterDocument("ds")}
          >
            DS
          </button>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Modulepage;
