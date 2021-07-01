import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <section className="header-outer-wrapper">
            <div className="header-wrapper">
                <div className="main-info">
                    <h1>Hi im Gehry, A front end web developer.</h1>
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
