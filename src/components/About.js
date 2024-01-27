import React, { useEffect } from "react";
// import MyPic from "../assets/Other/me.jpg";
import Aos from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faUsers} from "@fortawesome/free-solid-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

function About() {
    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);

    return (
        <section className="square">
            <div className="about-wrapper" id="about-wrapper">
                <h1 className="about-title"> About Me</h1>
                <div className="about-inner-wrapper">

                    {/* <img src={MyPic} alt="" className="my-photo" id="my-photo" /> */}

                    <div className="text-wrapper">

                        <p className="about-text" id="about-text">
                        {/* I'm an energetic self taught UX Designer.
                        I embrace human centered design and accessibility, creating an applications
                        that everyone can use is a win for the user and the company. Being a
                        Graduate from University of Washington with a Bachelors of
                        Science in Computer Science. I bring the software developer aspect to UX
                        field, exceptional for working in teams and knowing the limits of software. */}
                        
                        {/* My name is Gehry Guest. I am an aspiring UX/UI designer based in Washington. I have a great passion 
                        for modern and minimalist interfaces. I have been a part of different teams to help design
                        user centric interfaces for their softwares. As a graduate in computer science I found my passion for design 
                        when building & designing front end for software. I know how frustrating some interfaces could be and my goal is to make the 
                        lives of people effortless, so they can concentrate on
                        what's really important. */}
                         {/* Interaction Design Foundation IxDF is my primary source of learning
                        on UX and UI design. I believe in constant learning to stay updated with the latest tools 
                        and trends. */}
                        
                        {/* Hello! My name is Gehry, I'm a web developer who graduated from the University 
                        of Washington with a Bachelor's in Computer Science.
                
                        I've been interested in frontend development for almost two years now. During my studies
                        at university, during class projects I always focused on the frontend aspect while most
                        others didn't. This was my first experiences with frontend development. I'm a creative problem solver
                        and have a keen eye for details. Cooperation with others gives me satisfaction and a change to improve
                        my coding skills. Currently looking for a remote role. In private I love Magic the Gathering and D&D. */}
                        
                        As a UX Designer in Olympia, Washington I have a passion for creating intuitive and stunning UI's that draw 
                        user Engagement. My interest in UX was born during my time at University of Washington Computer Science program, 
                        when my peers wouldn't care about the look or use of the application as long as it functioned correctly. Since then
                        I've been invested into front end design and usability. Always keeping up on the latest trends in order to create a 
                        pixel perfect designs that stand the test of both aesthetics and usability. In my free time I love to hike, listening to people's 
                        life stories and crafting worlds as a dungeon master for my D&D group.
                       
                            {/* <br></br>
                            <br></br> */}
                        


                        

                        </p>
                    </div>
                </div>
                <div className="break"></div>
                <div className="about-me-more-info-wrapper">
                    <div className="about-me-icon-text-wrapper" data-aos="fade-right" data-aos-once="true">
                        <p className="about-me-titles">
                            Design
                        </p>
                        <div className="about-me-icons">

                            
                            <div className="icon">
                                <FontAwesomeIcon icon={faPenNib} />
                            </div>
                        </div>
                        <p className="skills-text" id="about-text">
                            UX/UI Design, User Research, User Engagement.
                        </p>
                    </div>
                    <div className="about-me-icon-text-wrapper" data-aos="fade-up" data-aos-once="true">
                        <p className="about-me-titles">
                            Skills
                        </p>
                        <div className="about-me-icons">
                            <div className="icon">
                                <FontAwesomeIcon icon={faUsers} />
                            </div>
                        </div>
                        <p className="skills-text" id="about-text">
                            User flows, Journy Maps, Personas, Wireframing, User Testing, Programming.
                        </p>

                    </div>
                    <div className="about-me-icon-text-wrapper" data-aos="fade-left" data-aos-once="true">
                        <p className="about-me-titles">
                            Tools
                        </p>
                        <div className="about-me-icons">
                            <div className="icon">
                                <FontAwesomeIcon icon={faFigma} />
                            </div>
                            
                        </div>
                        <p className="skills-text" id="about-text">

                            Figma, Sketch, InVision, Balsamiq, Adobe Creative Suite.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
