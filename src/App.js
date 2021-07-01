
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

//import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

import { library } from "@fortawesome/fontawesome-svg-core"; 
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedin, faGithub, faBars);
{/* <Particles
      
      params={{
        className="particles-canvas"
        paricles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          }
        }
      }}
    /> */}
function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Projects/>
      <About/>
      <Contact/>
    </>
  );
}

export default App;
