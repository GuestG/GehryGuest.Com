import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

const Projects = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);
    return (
        <section className="project-outer-wrapper">
            <div className="project-wrapper" id="project-wrapper">
                <div className="project-info">
                    <div className="projects-title-wrapper">
                        <h1 className="projects-title" data-aos="fade-up">
                            Projects
                        </h1>
                    </div>

                    <div className="projects-wrapper">
                        <div className="project1" data-aos="fade-right">
                            <h1 className="project-header">Mana Filter</h1>
                            <img className="project1-img" />
                            <p className="project-desc">This personal project of mine,
                            I used a public API to query Magic the Gathering cards images.
                            The application has users inputing text/name of the card, in order to retrieve card image from the 
                            API's database.
                            </p>
                            <button className="project1-button" id="project1-button">
                                Check it out
                            </button>
                        </div>
                        <div className="project2">
                            <h1 className="project-header"></h1>
                            <p className="project-desc">

                            </p>
                        </div>

                        <div className="break"></div>

                        {/* <div className="project3">
                            <h1 className="project-header">Scryfall</h1>
                            <p className="project-desc">This personal project of mine,
                            I used a public API to query Magic the Gathering cards images.
                            The application filtered based on user choices on what to fetch.</p>
                        </div>
                        <div className="project4">
                            <h1 className="project-header">Scryfall</h1>
                            <p className="project-desc">This personal project of mine,
                            I used a public API to query Magic the Gathering cards images.
                            The application filtered based on user choices on what to fetch.</p>
                        </div> */}
                    </div>

                    {/* <container className="project-cards">
                        <row>
                            <col> </col>

                        </row>
                        
                    </container> */}
                </div>
            </div>
        </section>
    )
}

export default Projects
