import React, { useEffect } from "react";
import MyPic from "../assets/Other/me.jpg";
import Aos from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faUsers} from "@fortawesome/free-solid-svg-icons";
import { faCss3Alt, faFigma, faHtml5, faSketch } from "@fortawesome/free-brands-svg-icons";

function About() {
    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);

    return (
        <section className="square">
            <div className="about-wrapper" id="about-wrapper">
                <h1 className="about-title"> About Me</h1>
                <div className="about-inner-wrapper">

                    <img src={MyPic} alt="" className="my-photo" id="my-photo" />

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
                        
                        Hello! My name is Gehry, I'm a UX Designer and an ex web developer who graduated from the University 
                        of Washington with a Bachelor's degree in Computer Science.
                            <br></br>
                            <br></br>
                        After spending some time working in the field as a web developer, I realized that my true 
                        passion lies in designing user experiences. I became fascinated with the idea of creating 
                        interfaces that are intuitive, user-friendly, and aesthetically pleasing. This interest 
                        led me to pursue a career in UX design and leave the web development field.
                            <br></br>
                            <br></br>
                        Overall, I am a creative problem solver who is passionate about using design to improve 
                        people's lives. I am excited to bring my skills and experience to a career in UX design, 
                        and I'm looking forward to the challenges and opportunities that lie ahead.


                        

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
                                <FontAwesomeIcon icon={faUsers} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faPenNib} />
                            </div>
                        </div>
                        <p className="design-text" id="about-text">
                            User Centered Design, Interface Designer, Accessibility & User Research.
                        </p>
                    </div>
                    <div className="about-me-icon-text-wrapper" data-aos="fade-up" data-aos-once="true">
                        <p className="about-me-titles">
                            Code
                        </p>
                        <div className="about-me-icons">
                            <div className="icon">
                                <FontAwesomeIcon icon={faHtml5} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faCss3Alt} />
                            </div>
                        </div>
                        <p className="code-text" id="about-text">
                            HTML5, CSS3, Java, JavaScript, Python, React & Responsive Applications.
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
                            <div className="icon">
                                <FontAwesomeIcon icon={faSketch} />
                            </div>
                        </div>
                        <p className="tools-text" id="about-text">

                            Adobe Creative Suite, Figma, Sketch, InVision, Github & Agile.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
