
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub, faHtml5, faBootstrap, faReact, faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Particles from 'react-particles-js';

// need to make contact actually work
//change hamburger button color? kinda did
// {
//   <Particles
//     className="particles-canvas"
//     params={{

//       particles: {
//         number: {
//           value: 100,
//           density: {
//             enable: true,
//             value_area: 1000
//           }
//         },
//         line_linked: {
//           enable: false
//         },
//         move: {
//           direction: "right",
//           speed: 0.05
//         },
//         size: {
//           value: 2
//         },
//         opacity: {
//           anim: {
//             enable: true,
//             speed: 1,
//             opacity_min: 0.05
//           }
//         }
//       },
//       retina_detect: true
//     }}
//   />
// }

library.add(faLinkedin, faGithub, faBars, faHtml5, faBootstrap, faReact, faJsSquare);

function App() {
  return (
    <>
    { <Particles
        className="particles-canvas"
        params={{

          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1000
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              direction: "right",
              speed: 0.05
            },
            size: {
              value: 2
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05
              }
            }
          },
          retina_detect: true
        }}
      />}
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
