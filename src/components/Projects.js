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
                            <div className="project_card" id="algoAcademy" data-aos="fade-right" data-aos-anchor="#LAFitnessCard" data-aos-once="true">
                                <div className="card_content">
                                    <h2 className="card_title">
                                        Aceable Course
                                        </h2>
                                    <h3 className="card_body">
                                        Teaching software developers the skills they need to pass that interview.
                                        </h3>
                                    <Link className='button' to='Aceable/#bodyWrapper'>See Case Study</Link>

                                </div>
                            </div>
                            <div className="project_card" id="kiwi" data-aos="fade-right" data-aos-delay="600" data-aos-anchor="#LAFitnessCard" data-aos-once="true">
                                <div className="card_content">
                                    <h2 className="card_title">
                                        Kiwi Oasis Charity
                                    </h2>
                                    <h3 className="card_body">
                                        Designing for social good, an app to aid in adopting an endangered bird species.
                                    </h3>
                                    <Link className='button' to='Kiwi/#bodyWrapper'>See Case Study</Link>

                                </div>
                            </div>
                            <div className="project_card" id="Marcella" data-aos="fade-right" data-aos-delay="900" data-aos-anchor="#LAFitnessCard" data-aos-once="true">
                                <div className="card_content">
                                    <h2 className="card_title">
                                        Marcella's Design
                                    </h2>
                                    <h3 className="card_body">
                                        Developed a portfolio for upholsterer to show her work and ways to get in touch.
                                    </h3>
                                    <a className='button' href='https://maricellasdesign.com/'>See Website</a>

                                </div>
                            </div>
                            

                        </div>

                        {/* Column Two */}
                        <div className="projects_colum">

                            <div className="project_card" id="laFitness" data-aos="fade-right" data-aos-delay="600" data-aos-anchor="#LAFitnessCard" data-aos-once="true">
                                <div className="card_content">
                                    <h2 className="card_title" id="LAFitnessCard">
                                        LA Fitness Gym
                                    </h2>
                                    <h3 className="card_body">
                                        Complete rework of the LA Fitness website. Reducing clutter & improving user flow.
                                    </h3>
                                    <Link className='button' to='LAFitness/#bodyWrapper'>See Case Study</Link>

                                </div>
                            </div>
                            <div className="project_card" id="LifeTracker" data-aos="fade-right" data-aos-delay="900" data-aos-anchor="#LAFitnessCard" data-aos-once="true">
                                    <div className="card_content">
                                        <h2 className="card_title" id="lifeTracker">
                                            MTG Life Tracker
                                        </h2>
                                        <h3 className="card_body">
                                            Collaboration with a mobile developer to bring a MTG utility app to life.
                                        </h3>
                                        <Link className='button' to=''>See App</Link>

                                    </div>
                            </div>
                            <div className="project_card" id="Gabi" data-aos="fade-right" data-aos-delay="1200" data-aos-anchor="#LAFitnessCard" data-aos-once="true">
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
                        </div>

                        {/* Column Three */}
                        <div className="projects_colum">

                            <div className="project_card" id="rito" data-aos="fade-right" data-aos-delay="900" data-aos-anchor="#LAFitnessCard" data-aos-once="true">
                                    <div className="card_content">
                                        <h2 className="card_title">
                                            Rito Food app
                                        </h2>
                                        <h3 className="card_body">
                                            Food Truck application to make ordering food quick and seemless.
                                        </h3>

                                        <Link className='button' to='Rito/#bodyWrapper'>See Case Study</Link>

                                    </div>
                                </div>

                                <div className="project_card" id="TheSailingFish" data-aos="fade-right" data-aos-delay="1200" data-aos-anchor="#LAFitnessCard" data-aos-once="true">
                                    <div className="card_content">
                                        <h2 className="card_title">
                                            The Sailing Fish
                                        </h2>
                                        <h3 className="card_body">
                                            Using basic design principles to create a minimalist seafood restaurant's menu.
                                        </h3>
                                        <Link className='button' to='TheSailingFish/#bodyWrapper'>See Menu</Link>

                                    </div>
                                </div>

                                <div className="project_card" id="comingSoon" data-aos="fade-right" data-aos-delay="1500" data-aos-anchor="#LAFitnessCard" data-aos-once="true">
                                    <div className="card_content">
                                        <h2 className="card_title">
                                            Coming Soon...
                                        </h2>
                                        <h3 className="card_body">
                                            This Project currently has nothing in it, but it will soon! but here's a hint: Hiking.
                                        </h3>
                                        <Link className='button' to=''>Not Available</Link>

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
