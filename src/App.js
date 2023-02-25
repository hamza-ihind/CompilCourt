import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import Homepage from "./pages/Homepage/Homepage";
import Modulepage from "./pages/Modulepage/Modulepage";
import Navbar from "./components/Navbar/Navbar";

import { ThemeModeContext } from "./contexts/ThemeModeContext";

function App() {
  const { isDarkModeActive } = useContext(ThemeModeContext);

  return (
    <div className={isDarkModeActive ? "App dark" : "App light"}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Homepage />} />
          <Route path="/module/:name/:id" element={<Modulepage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
