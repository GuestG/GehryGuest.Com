import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { HashLink as Link } from 'react-router-hash-link';
// import {Link } from "react-router-dom";

const Projects = () => {
    useEffect(() => {
      Aos.init({ duration: 800 });  
    }, []);
    return (
        <section className="project-outer-wrapper" id="project-outer-wrapper">
            <div className="project-wrapper" id="project-wrapper">
                <h1 className="projects-title">
                    Work
                </h1>
                <p className="contact-query" id="work-desc">
                    Explore these intriguing case studies along with a couple of websites I've crafted from scratch.
                </p>

                <div className="gallery-wrapper" id="gallery-wrapper">


                    <div className="projects" id="projects">

                        {/* Column One */}
                        <div className="projects_colum">
                            <div className="project_card" id="techInterviews">
                                <div className="card_content">
                                    <h2 className="card_title">
                                        Techinterviews.io
                                        </h2>
                                    <h3 className="card_body">
                                        A website teaching software engineers how to succeed in interviews.
                                        </h3>
                                    {/* <Link className='button' to='Techinterviews/#bodyWrapper'>See Case Study</Link> */}
                                    <Link className="btn6" to='Techinterviews/#bodyWrapper'>
                                        See Case Study
                                    </Link>

                                </div>
                            </div>

                            <div className="project_card" id="braphics"  >
                                    <div className="card_content">
                                        <h2 className="card_title">
                                            Braphics
                                        </h2>
                                        <h3 className="card_body">
                                            Created a portfolio page for a client. Using bootstrap, owl carousel & isotope libraries.
                                        </h3>
                                        <a className='btn6' href='https://www.braphics.com/'>See Website</a>

                                    </div>
                        </div>
                            
                            
                        

                        </div>

                        {/* Column Two */}
                        <div className="projects_colum">
                            


                            <div className="project_card" id="moneymentor">
                                <div className="card_content">
                                    <h2 className="card_title" id="moneymentorCard">
                                        MoneyMentor
                                    </h2>
                                    <h3 className="card_body">
                                        A mobile application designed to lower the barriers in order to educate those on financial literacy.
                                    </h3>
                                    <Link className='btn6' to='MoneyMentor/#bodyWrapper'>See Case Study</Link>

                                </div>
                            </div>


                            <div className="project_card" id="Gabi">
                                <div className="card_content">
                                    <h2 className="card_title">
                                        Gabi's Kids
                                    </h2>
                                    <h3 className="card_body">
                                        Created webapge for charity for low income families, Providing food and other services.
                                    </h3>
                                    <a className='btn6' href='https://guestg.github.io/GabisKids/'>See Website</a>

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
                        {/* <div className="project_card" id="braphics" data-aos="fade-right"  data-aos-anchor="#LAFitnessCard" data-aos-once="true"> */}
                        <div className="project_card" id="rito" >
                                    <div className="card_content">
                                        <h2 className="card_title">
                                            Rito
                                        </h2>
                                        <h3 className="card_body">
                                        A mobile application designed for efficient ordering and reduced waiting times at food truck venues.
                                        </h3>

                                        <Link className='btn6' to='Rito/#bodyWrapper'>See Case Study</Link>

                                    </div>
                                </div>
                        
                            <div className="project_card" id="comingSoon">
                                <div className="card_content">
                                    <h2 className="card_title">
                                        Coming Soon...
                                    </h2>
                                    <h3 className="card_body">
                                        Currently designing special project, if you wouldn't mind not telling anyone it's a secret.
                                    </h3>
                                    <a className='btn6' href='\#'>Coming Soon...</a>

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
