
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub, faHtml5, faBootstrap, faReact, faJsSquare, faFigma} from "@fortawesome/free-brands-svg-icons";
import { faBars, faExclamationCircle, faUser} from "@fortawesome/free-solid-svg-icons";

import Home from './components/Home';

// need to make contact actually work

// NPM start, NPM run build, NPM run deploy
// git add . , git status, git commit -m "" , git push

//change use of navigation to arrow and conversion rates to check mar
library.add(faLinkedin, faGithub, faBars, faFigma, faHtml5, faBootstrap, faReact, faJsSquare, faUser, faExclamationCircle);

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;

// Try this pro tip: Walk through your website while describing who you are, what you do, and the work you’ve completed. If moving through your portfolio feels clunky, consider revising the structure so it flows more naturally. That might mean changing an image carousel layout to a continuous scroll layout or reorganizing your content.


// Intro splash or welcome page

// Brand identity

// Consistent tone of voice

// At least three case studies, including your role on the team, the product’s goal, the research, the users, information architecture, wireframes, mockups, prototypes, results from usability studies or other research, final polished designs, takeaways or a conclusion, and lots of images of your design process. 

// Links to extra information (like research or reports), if necessary

// Clear navigation

// A description of who you are

// A link to your UX resume

// Contact information