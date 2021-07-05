import React from "react";
import Typed from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <section className="header-outer-wrapper">
            <div className="header-wrapper">
                <div className="main-info">

                    <a className="githubIconHeader" href='https://github.com/GuestG'>
                        <FontAwesomeIcon icon={["fab","github"]} />
                    </a>
                    <a className="linkedinIconHeader" href='https://linkedin.com/in/gehry-guest-903570177'>
                        <FontAwesomeIcon icon={["fab","linkedin"]} />
                    </a>

                    <h1 className="intro-message">Creative Fontend Developer.</h1>
                    <Typed
                        className="typed-text"
                        strings={["Web Development", "React", "Python", "JavaScript"]}
                        typeSpeed={30}
                        backSpeed={60}
                        loop
                    />
                    <a href="#contact-wrapper" className="btn-main-offer">Contact Me</a>    

                </div>
            </div>
        </section>
    )
}

export default Header;
