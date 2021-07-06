import React from "react";
import MyPic from "../assets/temp.png";

function About() {
    return (
        <section className="square">
            <div className="about-wrapper" id="about-wrapper">
                <div className="about-inner-warpper">

                    <img src= { MyPic } alt="" className="my-photo" id="my-photo"/>
                    
                    <div className="text-wrapper">
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
