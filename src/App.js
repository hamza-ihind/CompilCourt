import "./App.scss";

import { About, Levels, Hero, Contact } from "./container";
import { Navbar } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Levels />
      <Contact />
    </div>
  );
}

export default App;
