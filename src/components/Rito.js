import React, { useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "aos/dist/aos.css";
import '../css/projects.css';
import BackToTopButton from "./BacktoTop";

// import HiFi from "../assets/ritoPhotos/RitoHiFi.png";

// import Presentation from "../assets/ritoPhotos/RitoPresentation.png";

// import Persona1 from "../assets/ritoPhotos/Kyle.jpg";
// import Persona2 from "../assets/ritoPhotos/Amy.jpg";

// import Sketch1 from "../assets/ritoPhotos/Rito1.jpg";
// import Sketch2 from "../assets/ritoPhotos/Rito2.jpg";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faSearch, faCheckCircle, faExclamationCircle, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";




function Rito() {
    useEffect(() => {
        
    }, []);
    return (
        <section className="bodySection" >
            <div className="header-wrapper-projects" id="header-wrapper-rito"> 
                    <div id="bodyWrapper">
                    
                        <div className="introWrapper">
                            <Link className="BackLink" to="/#header-wrapper"> 
                                <div id="backButtonIcon">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="backButtonIconhover" d="M18.9063 26.375L8.375 15.875C8.25 15.75 8.16125 15.6146 8.10875 15.4688C8.05625 15.3229 8.03042 15.1667 8.03125 15C8.03125 14.8333 8.05708 14.6771 8.10875 14.5313C8.16042 14.3854 8.24917 14.25 8.375 14.125L18.9063 3.59375C19.1979 3.30208 19.5625 3.15625 20 3.15625C20.4375 3.15625 20.8125 3.3125 21.125 3.625C21.4375 3.9375 21.5938 4.30208 21.5938 4.71875C21.5938 5.13542 21.4375 5.5 21.125 5.8125L11.9375 15L21.125 24.1875C21.4167 24.4792 21.5625 24.8387 21.5625 25.2662C21.5625 25.6937 21.4063 26.0633 21.0938 26.375C20.7813 26.6875 20.4167 26.8438 20 26.8438C19.5833 26.8438 19.2188 26.6875 18.9063 26.375Z" fill="white"/>
                                    </svg>
                                </div>

                                <div className="backButtonText">
                                    Back
                                </div>
                            </Link>
                            <h1 className="introTitle">Rito</h1>
                            <p className="introSubTitle">2023 <span className="subtitleBold">|</span> Usability Testing <span className="subtitleBold">|</span> Communication <span className="subtitleBold">|</span> Burritos</p>
                        </div>
                    </div>
                </div>
        <div className="Project-Section-Padding"> 
            <div className="headerWrapper">
                    <h2 className="headerTitle">Bite Sized Brief</h2>
                    <p className="processText">
                        Here we explore the journey of enhancing the customer experience at a popular burrito
                        truck through the design and implementation of a user-friendly mobile application.
                        The goal is to streamline the ordering process, improve customer satisfaction, 
                        and boost the overall efficiency of the burrito truck business.
                    </p>
            </div>

            {/* **************** */}
            {/* Project Overview */}
            {/* **************** */}
            <div className="OverviewWrapper">
                <div className="overviewContainer">
                    <div className="Role">
                        <h2 className="overviewTitle">Role</h2>
                        <p className="overviewText">
                            UX Designer
                        </p>  
                    </div>
                    <div className="Duration">
                        <h2 className="overviewTitle">Duration</h2>
                        <p className="overviewText">
                            2 months
                        </p>
                    </div>
                    <div className="Tools">
                        <h2 className="overviewTitle">Tools</h2>
                        <p className="overviewText">
                            Figma<br></br>
                            InVision <br></br>

                        </p>
                    </div>
                    <div className="Team">
                        <h2 className="overviewTitle">Team</h2>
                        <p className="overviewText">
                             UX Researcher<br></br>
                            

                        </p>
                    </div>
                    <div className="Techniques">
                        <h2 className="overviewTitle">Techniques</h2>
                        <p className="overviewText">
                            Process flows <br></br>
                            User stories <br></br>
                            Mid/high-fidelity prototypes <br></br>
                            Interactive Prototypes <br></br>
                            User testing <br></br>
                        </p> 
                    </div>
                </div>      
        </div>
        <hr id="breakLine"/>


            {/* **************** */}
            {/*     Research     */}
            {/* **************** */}
            <h2 className="sectionTitle">Problem</h2>
            <p className="processText">
                The client is a well-established burrito truck known for its delicious and diverse menu. 
                Despite its popularity, the client identified challenges in managing long queues, order 
                accuracy, and customer engagement. To address these issues, they sought to create a mobile 
                app that would revolutionize the way customers interact with their burrito truck.
        
                
            </p>

            {/* <p className="sectionTitle">Solution</p> */}
            

            
            
        
            
            {/* <h2 className="sectionTitle">Process</h2>
            <p className="processText">
                
               
            </p>

            <div className="backToTopLink" data-aos="fade-left" data-aos-once="true" >
                    <Link className="nav-link" id="backToTop" to="/#header-wrapper" style={{color:"var(--primary-dark)", border:"4px solid var(--primary-dark)"}}><FontAwesomeIcon id="upArrow" icon={faArrowUp} /></Link>
            </div> */}


            <div className="personaContainer">
                        {/* <img className="web" src={low1} alt="low1"/> */}
                        {/* <img className="web" src={low2} alt="low2"/> */}
                        {/* <img className="web" src={low3} alt="low3"/> */}
            </div>
            
            {/* <p className="sectionTitle">Ideate</p>
            <p className="processText">
                Several rounds of rapid sketching on paper to get the foundation of future prototypes.
            </p> */}
            {/* <div className="personaContainer"> */}
                        {/* <img className="web" src={low1} alt="low1"/> */}
                        {/* <img className="web" src={low2} alt="low2"/> */}
                        {/* <img className="web" src={low3} alt="low3"/> */}
            {/* </div> */}



            {/* <p className="sectionTitle">Stakeholder Interview</p>
            <p className="processText">
            Lastly, this project changed the way I think about accessibility. I should 
            have checked my color scheme and typeface with the WCAG before designing. While my designs do follow some of the 
            guidelines for accessibility, I could have done a better job. This is something I had to address, coming back to the 
            project and editing some colors according to the WCAG standard.
            </p> */}
            {/* <div className="personaContainer">
                <img className="web" src={presentation} alt="presentation"/>
            </div> */}


            {/* <p className="sectionTitle">Visit the Site</p>
            <p className="processText">
                Heres a link to the final version of the courses website.
            </p>

            <div className="buttonContainer">
                <a href="https://techinterviews.io/" className="hiFiButton">View techinterviews.io</a>
            </div>

            <p className="sectionTitle">What's Next?</p>
            <p className="processText">
               
            </p> */}

            </div>
            {/* <p className="footers" id="projectFooters">
                    Gehry Guest <span className="my-name-color">©2021</span>
            </p> */}
            <BackToTopButton />
        </section>
        
        )
    }
    
    export default Rito

