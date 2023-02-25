import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import "./App.scss";
import App from "./App";
import ThemeModeContextProvider from "./contexts/ThemeModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeModeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeModeContextProvider>
  </React.StrictMode>
);
