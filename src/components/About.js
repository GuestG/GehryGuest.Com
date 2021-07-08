import React, { useEffect } from "react";
import MyPic from "../assets/temp.png";
import Aos from 'aos';
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <section className="square">
            <div className="about-wrapper" id="about-wrapper">
                <div className="about-inner-warpper">

                    <img src= { MyPic } alt="" className="my-photo" id="my-photo" data-aos="fade-right"/>
                    
                    <div className="text-wrapper" data-aos="fade-left">
                        <p className="about-title"> About Me</p>
                        <p className="about-text" id="about-text">Hey! I'm Gehry Guest a front end web devopler,
                        who's a alumni of University of Washington's computer science and systems program.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default About
