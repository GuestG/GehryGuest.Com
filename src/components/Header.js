import React, { useEffect }  from "react";
// import Typed from "react-typed";
import Aos from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import Pdf from "/Users/gehryguest/GehryGuest.Com/src/resume/GehryGuestResume.pdf";

const Header = () => {
    useEffect(() => {
        Aos.init({duration: 800});
    }, []);
    return (
        <section className="header-outer-wrapper">
            
            <div className="header-wrapper" id="header-wrapper">
                
                <div className="main-info">
                    
                    <a className="githubIconHeader" href='https://github.com/GuestG' data-aos="fade-right" data-aos-once="true">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className="linkedinIconHeader" href='https://www.linkedin.com/in/gehryguest/' data-aos="fade-right" data-aos-once="true">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <div className="header-message-container"> 
                        <h1 className="intro-message">
                            Hi! I'm 
                            <span className="my-name-color"> Gehry Guest.</span> 
                        </h1>
                        <p className="designer-statement">
                            A developer focused on designing user experiences & creating software for web products.
                        </p>
                        {/* <Typed
                            className="typed-text"
                            strings={["A UX Designer.", "A Web Developer."]}
                            typeSpeed={80}
                            backSpeed={60}
                            backDelay={2000}
                            smartBackspace={false}
                            loop
                        /> */}
                        <div className="header-button-container">
                            <a href="#project-outer-wrapper" className="btn-sec-offer">View Work</a>  
                            {/* <a className="btn-sec-offer" href={Pdf} target="_blank" rel="noreferrer">Resume</a> */}
                        </div>  
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Header;
