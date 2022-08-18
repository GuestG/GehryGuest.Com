import React, { useEffect } from "react";
import MyPic from "../assets/Other/me.jpg";
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
                <h1 className="about-title"> About Me</h1>
                <div className="about-inner-warpper">

                    <img src={MyPic} alt="" className="my-photo" id="my-photo" data-aos="fade-right" />

                    <div className="text-wrapper" data-aos="fade-left">

                        <p className="about-text" id="about-text">
                        {/* I'm an energetic self taught UX Designer.
                        I embrace human centered design and accessibility, creating an applications
                        that everyone can use is a win for the user and the company. Being a
                        Graduate from University of Washington with a Bachelors of
                        Science in Computer Science. I bring the software developer aspect to UX
                        field, exceptional for working in teams and knowing the limits of software. */}
                        
                        My name is Gehry Guest. I am a aspiring UX/UI designer based in Washington. I have a great passion 
                        for modern and minimalist interfaces. I have been a part of different teams to help design
                        user centric interfaces for their softwares.
‍
                        Being a graduating with a bachelors in computer science I found my passion for design 
                        when building & designing front end for software.
                        


                        I am currently looking for a full-time position to join a team where I could
                        use my skills to bring value to the company while learning to grow for the better. 

                        I know how frustrating some interfaces could be and my goal is to make the 
                        lives of people effortless, so they can concentrate on
                        what's really important.
                         {/* Interaction Design Foundation IxDF is my primary source of learning
                        on UX and UI design. I believe in constant learning to stay updated with the latest tools 
                        and trends. */}



                        

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
                                <FontAwesomeIcon icon={["fab", "bootstrap"]} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={["fab", "react"]} />
                            </div>
                        </div>
                        <p className="design-text" id="about-text">
                            User Centered Design, Visual Designer.
                        </p>
                    </div>
                    <div className="about-me-icon-text-wrapper" data-aos="fade-up">
                        <p className="about-me-titles">
                            Code
                        </p>
                        <div className="about-me-icons">
                            <div className="icon">
                                <FontAwesomeIcon icon={["fab", "html5"]} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={["fab", "js-square"]} />
                            </div>
                        </div>
                        <p className="code-text" id="about-text">
                            HTML, CSS, JavaScript, React.
                        </p>

                    </div>
                    <div className="about-me-icon-text-wrapper" data-aos="fade-left">
                        <p className="about-me-titles">
                            Tools
                        </p>
                        <div className="about-me-icons">
                            <div className="icon">
                                <FontAwesomeIcon icon={["fab", "figma"]} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={["fab", "github"]} />
                            </div>
                        </div>
                        <p className="tools-text" id="about-text">

                            Adobe XD, Figma, Sketch, Github.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
