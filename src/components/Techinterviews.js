import React, { useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "aos/dist/aos.css";
import '../css/projects.css';

import webComponents from "../assets/techinterviews/WebsiteComponents.png";
import stakeHolder from "../assets/techinterviews/StakeholderInter.png";
import affinityMap from "../assets/techinterviews/techinterviewsAffinitymap.png";
// import splashScreen from "../assets/techinterviews/techinterviewsSplash.png";
import userflow from "../assets/techinterviews/userflow.jpg";
import prototype from "../assets/techinterviews/prototype.png";
import finishedWireframe from "../assets/techinterviews/finalWireframe.png";
import BackToTopButton from "./BacktoTop";
import techinterviewsPresentaion from "../assets/techinterviews/TechinterviewsPresentation.png";

// import Competitor1 from "../assets/techinterviews/educative.png";
// import Competitor2 from "../assets/techinterviews/algoexpert.png";
// import Competitor3 from "../assets/techinterviews/cake.png";


function Techinterviews() {
    useEffect(() => {

    }, []);
    return (
        <section className="bodySection" >
            <div className="header-wrapper-projects" id="header-wrapper-techinterviews"> 
                    <div id="bodyWrapper">
                    
                        <div className="introWrapper">
                            <Link className="BackLink" to="/#"> 
                                <div id="backButtonIcon">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="backButtonIconhover" d="M18.9063 26.375L8.375 15.875C8.25 15.75 8.16125 15.6146 8.10875 15.4688C8.05625 15.3229 8.03042 15.1667 8.03125 15C8.03125 14.8333 8.05708 14.6771 8.10875 14.5313C8.16042 14.3854 8.24917 14.25 8.375 14.125L18.9063 3.59375C19.1979 3.30208 19.5625 3.15625 20 3.15625C20.4375 3.15625 20.8125 3.3125 21.125 3.625C21.4375 3.9375 21.5938 4.30208 21.5938 4.71875C21.5938 5.13542 21.4375 5.5 21.125 5.8125L11.9375 15L21.125 24.1875C21.4167 24.4792 21.5625 24.8387 21.5625 25.2662C21.5625 25.6937 21.4063 26.0633 21.0938 26.375C20.7813 26.6875 20.4167 26.8438 20 26.8438C19.5833 26.8438 19.2188 26.6875 18.9063 26.375Z" fill="white"/>
                                    </svg>
                                </div>

                                <div className="backButtonText">
                                    Back
                                </div>
                            </Link>
                            <h1 className="introTitle">Techinterviews.io</h1>
                            <p className="introSubTitle">2024 <span className="subtitleBold">|</span> UX Design <span className="subtitleBold">|</span> User Testing <span className="subtitleBold">|</span> Web Development</p>
                        </div>
                    </div>
                </div>
        <div className="Project-Section-Padding"> 
            <div className="headerWrapper">
                    <h2 className="headerTitle">The Rundown</h2>
                    <p className="processText">
                       A startup offering online coding courses to help students get jobs in the software engineering scene, they required 
                       design and development services. The company needed a structure
                       on the user process. I conducted user research by engaging in stakeholder interviews and created a 
                       user flow. Focusing on three key concepts understanding the business requirements, creating mid/high fidelity wireframes for rapid iterative designs 
                       and testing the interactive prototype with end users to validate desirability the website.
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
                            UX Designer / Front End Developer
                        </p>  
                    </div>
                    <div className="Duration">
                        <h2 className="overviewTitle">Duration</h2>
                        <p className="overviewText">
                            3 months
                        </p>
                    </div>
                    <div className="Tools">
                        <h2 className="overviewTitle">Tools</h2>
                        <p className="overviewText">
                            Figma<br></br>
                            Otter.ai <br></br>
                            Visual Studio Code <br></br>

                        </p>
                    </div>
                    <div className="Team">
                        <h2 className="overviewTitle">Team</h2>
                        <p className="overviewText">
                            Software Engineers <br></br>
                            Project Manager <br></br>
                            UX Designers <br></br>
                        </p>
                    </div>
                    <div className="Techniques">
                        <h2 className="overviewTitle">Methodology</h2>
                        <p className="overviewText">
                            Stakeholder Interviews <br></br>
                            Process Flows <br></br>
                            User Stories <br></br>
                            Synthesis <br></br>
                            Low/High-Fidelity Mockups <br></br>
                            Interactive Prototypes <br></br>
                            User Testing <br></br>
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
                The owners main problem came in the form of having all this curriculum and lecture videos but having no way to display
                that information for the students. Currently they didn't have any website so they were starting from scratch, but they
                wanted a great user experience through organized interface, painless sign up process and a way to inform the customer about
                the product. This is were the stakeholder interviews come into play we need to understand what content they have and the 
                processes of the business.
        
                
            </p>



            <p className="sectionTitle">Empathize & Define</p>
            <p className="processText">
            <span className="subSectionTitle">Stakeholder Interview</span><br></br>
                The main goal of interview was to grab insights into the business goals, understanding the competitors, identifying potential concerns and success metrics what that is in their perspective.
                Using the bits and pieces from the interview to build a map of a process flow. We used a voice recorder app called Otter.ai to transcribe the interviews 
                to read later for insight gathering.

                <br></br>
                <br></br>
                <div className="personaContainer">
                    <img className="web" src={stakeHolder} alt="Stakeholder Interview"/>
                </div>
                <br></br>
                <br></br>
                <span className="subSectionTitle">Mural Affinity Map</span><br></br>
                The affinity map was to organize the information gathered and to focus on the value of what we hoped to deliver to our users. 
                organizing the interviews insights into sticky notes and ranking them based on website needs with stakeholder input. 
                <br></br>
                <br></br>
                <div className="personaContainer">
                    <img className="web" src={affinityMap} alt="affinity map"/>
                </div>
                <br></br>
                <br></br>
                <span className="subSectionTitle">Synthesis</span><br></br>
                Based on what we heard from the stakeholders we was able to make assumptions that we then grouped into 
                three key concepts: Conversion rates, Ease of Use, and Organization. We led the stakeholder through an 
                exercise that refined and validated these assumptions and concepts, and then used those as a jumping off 
                point for writing a series of user stories that we would use to inform the designs for MVP.
            </p>

            <p className="sectionTitle">Ideate</p>
            <p className="processText">
                <span className="subSectionTitle">User Flow & Sketches</span><br></br>
                Now for the fun part - designing!
                <br></br>
                I started sketching low fidelity prototypes, initially focusing on general navigation: Landing page, Subscription page, 
                Course page, Settings, and lecture pages.
                <br></br>
                <br></br>
                <div className="personaContainer">
                    <img className="web" src={userflow} alt="userflow"/>
                </div>
                
                <br></br>
                <span className="subSectionTitle">High fidelity Wireframe</span><br></br>
                I used Figma to create high fidelity screens for the prototype, adding in design 
                elements like color, font, and images. I wanted a distinct look, I thought a more professional color palette 
                with a strong accent color would work best. 
                I chose a deep blue & white color, paired with a sans serif font for easy reading.
                <br></br>
                <br></br>
                <div className="personaContainer">
                    <img className="web" src={finishedWireframe} alt="FinshedMockup"/>
                </div>
            </p>

            <p className="sectionTitle">Prototype & Testing</p>
            <p className="processText">
                <span className="subSectionTitle">Prototype</span><br></br>
                Once we put the screens together into a clickable prototype, we found a lot of
                holes and design flaws based on the interaction design. As an example, I had 
                designed the drawers for the course, but not a button that would collapse or open all drawers at once.
                Another instance would be we missed a crucial page such as billing history. 
                <br></br>
                <br></br>
                <div className="personaContainer">
                    <img className="web" src={prototype} alt="prototype"/>
                </div>

                <br></br>
                <span className="subSectionTitle">User Testing</span><br></br>
                With the bulk of the design finished, and all screens accounted for and linked 
                together in Figma, we moved on to user testing. we created a usability test plan 
                (with a communications plan and test script), and had six participants within my target 
                audience undergo the tests. we completed two remote and four in person sessions, tasking 
                participants with signing up for the course, navigating the course content, and to "finish" a coding quiz.
            </p>

            <p className="sectionTitle">Front End Development</p>
            <p className="processText">
                <span className="subSectionTitle">Components</span><br></br>
                Here is where I began to create components for the front end. From buttons, drawers to forms, Built using
                HTML, CSS, React JS and TypeScript. Building the components for the front end helped expedite the 
                the development process of the website, as the other developer simply needed to align and place the components. I 
                absolutely love to help developers any chance I get!

                <br></br>
                <br></br>
                <div className="personaContainer">
                    <img className="web" src={webComponents} alt="webcomponents"/>
                </div>
            </p>

            <p className="sectionTitle">Impact</p>
            <p className="processText">
            
            </p>

            <p className="sectionTitle">What I Learned</p>
            <p className="processText">
            This project really emphasized the importance of user interface design - correctly using the elements of color, 
            hierarchy, and spacing are imperative to a good user experience. Similar to a recruiter viewing resumes, you only 
            have a limited amount of time to make an impact on your user. The structure and function have to be there, but it 
            has to be visually appealing as well. Lastly, this project changed the way I think when designing in general as I designed for 
            desktop first, I should have known better being an ex developer. This lead to many problems as I didn't account for the bare 
            minimum requirements of the application. I learned its easier to add than to take away from a project, In the future I will always design 
            mobile first.
            </p>

            <p className="sectionTitle">Visit the Site</p>
            <p className="processText">
            <span className="subSectionTitle">Final Prototype & Website Link</span><br></br>
            
                Here is the final version of the the prototype showing the long form homepage along with course catalog and account information.
                But if you want to see the final live website click on the button below. 
                <br></br>
                <br></br>
                Thank you for reading the case study in it's entirety! You are Awesome!
                <br></br>
                <br></br>
                <div className="personaContainer">
                    <img className="web" src={techinterviewsPresentaion} alt="techinterviewsPresentaion"/>
                </div>
            </p>

            <div className="buttonContainer">
                <a href="https://techinterviews.io/" className="hiFiButton">View techinterviews.io</a>
            </div>
            <br></br>
            <br></br>



            </div>
            {/* <p className="footers" id="projectFooters">
                    Gehry Guest <span className="my-name-color">©2021</span>
            </p> */}
            <BackToTopButton />
        </section>
        
        )
    }
    
    export default Techinterviews

