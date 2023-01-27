import "./App.scss";

import { About, Testimonial, Work, Skills, Hero, Contact } from "./container";
import { Navbar } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Work />
      {/* <Skills /> */}
      {/* <Testimonial /> */}
      <Contact />
    </div>
  );
}

export default App;
