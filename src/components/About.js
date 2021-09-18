import React, { useEffect } from "react";
import MyPic from "../assets/My-Photo-close.JPG";
import Aos from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <section className="square">
            <div className="about-wrapper" id="about-wrapper">
                <div className="about-inner-warpper">

                    <img src={MyPic} alt="" className="my-photo" id="my-photo" data-aos="fade-right" />

                    <div className="text-wrapper" data-aos="fade-left">
                        <h1 className="about-title"> About Me</h1>
                        <p className="about-text" id="about-text">
                        Graduate from University of Washington with a Bachelors of 
                        Science in Computer Science. I'm an energetic front-end 
                        developer specializing in creating elegant, responsive 
                        websites using JavaScript and React. I feel very passionate
                         about working in a team to deliver quality products and 
                         expand my skill set while helping my fellow team members
                          achieve success. I am also a capable back-end developer 
                          with experience in Java, and Python, along with knowledge
                           on managing databases with SQL.
                        </p>
                    </div>
                </div>
                <div className="break"></div>
                <div className="about-me-more-info-wrapper">
                    <div className="about-me-icon-text-wrapper" data-aos="fade-right">
                        <p className="about-me-titles">
                            Design
                        </p>
                        <div className="about-me-icons">
                            <div className="icon">
                                <FontAwesomeIcon icon={["fab", "html5"]} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={["fab", "bootstrap"]} />
                            </div>
                        </div>
                        <p className="design-text" id="about-text">
                            HTML5, CSS, Boostrap, Responsive Web Design
                        </p>
                    </div>
                    <div className="about-me-icon-text-wrapper" data-aos="fade-up">
                        <p className="about-me-titles">
                            Code
                        </p>
                        <div className="about-me-icons">
                            <div className="icon">
                                <FontAwesomeIcon icon={["fab", "react"]} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={["fab", "js-square"]} />
                            </div>
                        </div>
                        <p className="code-text" id="about-text">
                            JavaScript, React
                        </p>

                    </div>
                    <div className="about-me-icon-text-wrapper" data-aos="fade-left">
                        <p className="about-me-titles">
                            Tools
                        </p>
                        <div className="about-me-icons">
                            <div className="icon">
                                <FontAwesomeIcon icon={["fab", "github"]} />
                            </div>
                        </div>
                        <p className="tools-text" id="about-text">

                            Github, Visual Studio Code
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
