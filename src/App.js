import Navbar from './Components/Navbar/Navbar.component';
import Hero from './Components/Hero/Hero.component';
import Levels from './Components/Levels/Levels.component'
import Intro from './Components/Intro/Intro.component';

const App = () => {
  return (
    <div className="App">
      < Navbar />
      < Hero />
      < Intro />
      < Levels />
    </div>
  );
}

export default App;
