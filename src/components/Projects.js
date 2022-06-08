import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { HashLink as Link } from 'react-router-hash-link';
// import {Link } from "react-router-dom";

const Projects = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);
    return (
        <section className="project-outer-wrapper" id="project-outer-wrapper">
            <div className="project-wrapper" id="project-wrapper">
                <h1 className="projects-title">
                    Work
                </h1>


                <div className="gallery-wrapper">


                    <div className="projects" id="projects">

                        <div className="projects_colum">
                            <div className="project_card" id="project1" data-aos="fade-right">
                                <div className="card_content">
                                    <h2 className="card_title">
                                        Rito
                                        </h2>
                                    <h3 className="card_body">
                                        Food Truck application to make ordering food seemless.
                                        </h3>

                                    <Link className='button' to='Rito/#ritoWrapper'>See Case Study</Link>

                                </div>
                            </div>
                            {/* <div className="project_card" id="project3" data-aos="fade-right">
                                <div className="card_content">
                                    <h2 className="card_title">
                                        project 3
                                        </h2>
                                    <h3 className="card_body">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                        </h3>
                                        <Link className='button'to='Rito'>Learn More</Link>
                                    
                                </div>
                            </div> */}
                        </div>

                        <div className="projects_colum">
                            {/* <div className="project_card" id="project2" data-aos="fade-left">

                                <div className="card_content">
                                    <h2 className="card_title">
                                        LA Fitness
                                            </h2>
                                    <h3 className="card_body">
                                        Rework of the LA Fitness app for an improved experience.
                                            </h3>
                                    <Link className='button' to='Rito'>Learn More</Link>

                                </div>
                            </div>
                            <div className="project_card" id="project4" data-aos="fade-left">
                                <div className="card_content">
                                    <h2 className="card_title">
                                        project 4
                                        </h2>
                                    <h3 className="card_body">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </h3>
                                    <Link className='button' to='Rito'>Learn More</Link>

                                </div>
                            </div> */}
                        </div>
                    </div>


                </div>
            </div>
        </section >
    )
}

export default Projects
