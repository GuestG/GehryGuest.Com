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
                            <div className="project_card" id="algoAcademy" data-aos="fade-right">
                                <div className="card_content">
                                    <h2 className="card_title">
                                        Algo Academy
                                        </h2>
                                    <h3 className="card_body">
                                        Teaching software developers the skills they need to pass that interview.
                                        </h3>
                                    <Link className='button' to='AlgoAcademy/#bodyWrapper'>See Case Study</Link>

                                </div>
                            </div>
                            <div className="project_card" id="rito" data-aos="fade-right">
                                <div className="card_content">
                                    <h2 className="card_title">
                                        Rito
                                        </h2>
                                    <h3 className="card_body">
                                        Food Truck application to make ordering food quick and seemless.
                                        
                                        </h3>

                                    <Link className='button' to='Rito/#bodyWrapper'>See Case Study</Link>

                                </div>
                            </div>
                            

                        </div>
                        <div className="projects_colum">

                            <div className="project_card" id="laFitness" data-aos="fade-left">
                                <div className="card_content">
                                    <h2 className="card_title">
                                        LA Fitness
                                        </h2>
                                    <h3 className="card_body">
                                        Complete rework of the LA Fitness website. Reducing clutter & improving user flow.
                                        </h3>
                                    <Link className='button' to='LAFitness/#bodyWrapper'>See Case Study</Link>

                                </div>
                            </div>
                            <div className="project_card" id="kiwi" data-aos="fade-left">
                                <div className="card_content">
                                    <h2 className="card_title">
                                        Kiwi Oasis
                                        </h2>
                                    <h3 className="card_body">
                                        Designing for social good, an app to aid in adopting an endangered bird species.
                                        </h3>
                                    <Link className='button' to='Kiwi/#bodyWrapper'>See Case Study</Link>

                                </div>
                            </div>
                        </div>

                        {/* <div className="projects_colum"> */}
                            


                            
                            {/* <div className="project_card" id="project3" data-aos="fade-right">
                                <div className="card_content">
                                    <h2 className="card_title">
                                        placeholder
                                        </h2>
                                    <h3 className="card_body">
                                        A complete rework of LA Fitness website.
                                        </h3>
                                    <Link className='button' to='LAFitness/#LAWrapper'>See Case Study</Link>

                                </div>
                            </div> */}
                        {/* </div> */}
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
                        {/* </div> */}
                    </div>


                </div>
            </div>
        </section >
    )
}

export default Projects
