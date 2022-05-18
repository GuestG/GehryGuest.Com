
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub, faHtml5, faBootstrap, faReact, faJsSquare, faFigma} from "@fortawesome/free-brands-svg-icons";
import { faBars, faUser} from "@fortawesome/free-solid-svg-icons";

import Home from './components/Home';

// need to make contact actually work
// spell check rito, and maybe add bold to some words.

// NPM start, NPM run build, NPM run deploy
// git add . , git status, git commit -m "" , git push

library.add(faLinkedin, faGithub, faBars, faFigma, faHtml5, faBootstrap, faReact, faJsSquare, faUser);

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
