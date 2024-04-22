import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
//import particlesEffects from "react-tsparticles";
//import { loadFull } from "tsparticles";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./component/navbar";
//import ParticlesEffect from './utils/particles'

function App() {
  // const handleInit = async (main) => {
  //   await loadFull(main);
  // };

  return (
    <div className="App">
      {/* particles*/}
      
      {/* {id="particles" options={particlesEffects} init={handleInit}} */}

      {/* navbar*/}
      <Navbar />
      {/* main page content*/}
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
