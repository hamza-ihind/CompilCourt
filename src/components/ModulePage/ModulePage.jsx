import React from "react";
import { useParams } from "react-router-dom";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./ModulePage.scss";
import { images } from "../../constants";

const Module = () => {
  const { name, link } = useParams();

  return (
    <>
      <div className="app__module app__wrapper">
        <h1 className="app__module-title">{name}</h1>
        <div className="app__module-pdf">
          <iframe
            src="https://drive.google.com/file/d/1c4oreGC9qONHhFYgKMz3I-ujEzYz3rPJ/preview"
            width="100%"
            height="1000"
            style={{ border: "black" }}
          />
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Module, "app__module"),
  "module",
  "app__primarybg"
);
