import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { HashLink as Link } from 'react-router-hash-link';
// import {Link } from "react-router-dom";

const Projects = () => {
    useEffect(() => {
        Aos.init({
            duration: 800
        });
    }, []);
    return (
        <section className="project-outer-wrapper" id="project-outer-wrapper">
            <div className="project-wrapper" id="project-wrapper">
                <h1 className="projects-title">
                    Work
                </h1>


                <div className="gallery-wrapper" id="gallery-wrapper">


                    <div className="projects" id="projects">

                        {/* Column One */}
                        <div className="projects_colum">
                            <div className="project_card" id="techInterviews" data-aos="fade-right" data-aos-anchor="#LAFitnessCard" data-aos-once="true">
                                <div className="card_content">
                                    <h2 className="card_title">
                                        Techinterviews.io
                                        </h2>
                                    <h3 className="card_body">
                                        Teaching software developers the skills they need to pass that interview.
                                        </h3>
                                    <Link className='button' to='Techinterviews/#bodyWrapper'>See Case Study</Link>

                                </div>
                            </div>

                            <div className="project_card" id="rito" data-aos="fade-right" data-aos-anchor="#LAFitnessCard" data-aos-once="true">
                                    <div className="card_content">
                                        <h2 className="card_title">
                                            Rito Food
                                        </h2>
                                        <h3 className="card_body">
                                            Food Truck application to make ordering food quick and seemless.
                                        </h3>

                                        <Link className='button' to='Rito/#bodyWrapper'>See Case Study</Link>

                                    </div>
                                </div>
                            
                        

                        </div>

                        {/* Column Two */}
                        <div className="projects_colum">


                        <div className="project_card" id="Gabi" data-aos="fade-right"  data-aos-anchor="#LAFitnessCard" data-aos-once="true">
                                <div className="card_content">
                                    <h2 className="card_title">
                                        Gabi's Kids
                                    </h2>
                                    <h3 className="card_body">
                                        Created webapge for a charity for low income families, Providing food and other services.
                                    </h3>
                                    <a className='button' href='https://guestg.github.io/GabisKids/'>See Website</a>

                                </div>
                            </div>
                            


                            <div className="project_card" id="laFitness" data-aos="fade-right" data-aos-anchor="#LAFitnessCard" data-aos-once="true">
                                <div className="card_content">
                                    <h2 className="card_title" id="LAFitnessCard">
                                        LA Fitness
                                    </h2>
                                    <h3 className="card_body">
                                        Complete rework of the LA Fitness website. Reducing clutter & improving user flow.
                                    </h3>
                                    <Link className='button' to='LAFitness/#bodyWrapper'>See Case Study</Link>

                                </div>
                            </div>
                            {/* <div className="project_card" id="LifeTracker" data-aos="fade-right" data-aos-delay="900" data-aos-anchor="#LAFitnessCard" data-aos-once="true">
                                    <div className="card_content">
                                        <h2 className="card_title" id="lifeTracker">
                                            MTG Life Tracker
                                        </h2>
                                        <h3 className="card_body">
                                            Collaboration with a mobile developer to bring a MTG utility app to life.
                                        </h3>
                                        <Link className='button' to=''>See App</Link>

                                    </div>
                            </div> */}
                        </div>
                            

                        {/* Column Three */}
                        <div className="projects_colum">

                        <div className="project_card" id="braphics" data-aos="fade-right"  data-aos-anchor="#LAFitnessCard" data-aos-once="true">
                                    <div className="card_content">
                                        <h2 className="card_title">
                                            Braphics
                                        </h2>
                                        <h3 className="card_body">
                                            Created a portfolio page for a client. Using bootstrap, owl carousel & isotope libraries.
                                        </h3>
                                        <a className='button' href='https://www.braphics.com/'>See Website</a>

                                    </div>
                            </div>
                        
                            <div className="project_card" id="comingSoon" data-aos="fade-right"  data-aos-anchor="#LAFitnessCard" data-aos-once="true">
                                <div className="card_content">
                                    <h2 className="card_title">
                                        Coming Soon...
                                    </h2>
                                    <h3 className="card_body">
                                        Currently building something special, but don't tell anyone it's a secret.
                                    </h3>
                                    <a className='button' href='\#'>Coming Soon...</a>

                                </div>
                            </div>
                            

                            
                                
                            </div>
                        </div>
                    </div>


                </div>
            {/* </div> */}
        </section >
    )
}

export default Projects
