import "./App.scss";

import HomePage from "./components/HomePage";
import ModulePage from "./components/ModulePage/ModulePage";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="/module/:name/:id" element={<ModulePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
