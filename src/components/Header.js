import React, { useEffect }  from "react";
import Typed from "react-typed";
import Aos from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
    return (
        <section className="header-outer-wrapper">
            
            <div className="header-wrapper" id="header-wrapper">
                <div className="main-info">
                    
                    <a className="githubIconHeader" href='https://github.com/GuestG' data-aos="fade-right">
                        <FontAwesomeIcon icon={["fab","github"]} />
                    </a>
                    <a className="linkedinIconHeader" href='https://linkedin.com/in/gehry-guest-903570177' data-aos="fade-right">
                        <FontAwesomeIcon icon={["fab","linkedin"]}/>
                    </a>
                    
                    <h1 className="intro-message">Hey! I'm <span className="my-name-color">Gehry Guest.</span> </h1>
                    <Typed
                        className="typed-text"
                        strings={["A UX Designer.", "A Web Developer.", "A Team Player."]}
                        typeSpeed={80}
                        backSpeed={60}
                        backDelay={2000}
                        smartBackspace={false}
                        loop
                    />
                    <a href="#project-outer-wrapper" className="btn-main-offer">See Work</a>    
                    
                </div>
            </div>
            
        </section>
    )
}

export default Header;
