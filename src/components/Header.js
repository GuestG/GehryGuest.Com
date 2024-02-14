import React, { useEffect } from "react";
// import Typed from "react-typed";
import Aos from 'aos';
import "aos/dist/aos.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import IntroAnimation from "../components/HeaderAnimation.js";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });

  }, []);
  return (
    <section className="header-outer-wrapper">

      <div className="header-wrapper" id="header-wrapper">



        <section className="modernWebSection">
          <div className="modernWrap section__wrap">
            <div className="center">
              <div className="part part-1"></div>
              <div className="part part-2"><span>&#123; &#125;</span></div>
              <div className="part part-3"></div>
            </div>
            <h1 id="modernWrap_h1">Once a Coder now a Designer</h1>
          </div>
        </section>





        {/* <div className="card-track"> */}

        {/* <div className="main-info">

                    <a className="githubIconHeader" href='https://github.com/GuestG' data-aos="fade-right" data-aos-once="true">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className="linkedinIconHeader" href='https://www.linkedin.com/in/gehryguest/' data-aos="fade-right" data-aos-once="true">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    
                    <div className="header-message-container">
                        <h1 className="intro-message">
                            Hello! I'm Gehry Guest
                        </h1>
                        <p className="designer-statement">
                            A UX Designer with a background in computer science,<br></br> who loves complex problems
                            in search of delightful<br></br>  user experiences.
                        </p>
                       
                        <div className="header-button-container">
                            <a href="#project-outer-wrapper" className="btn-sec-offer">View Work</a>

                        </div>
                    </div> */}
        {/* </div>  */}
      </div>



      {/* <IntroAnimation /> */}

    </section>

  )
}

export default Header;
