import React, { useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Aos from 'aos';
import "aos/dist/aos.css";
import '../css/projects.css';


import presentation from "../assets/techinterviews/AceablePresentation.png";

import Competitor1 from "../assets/techinterviews/educative.png";
import Competitor2 from "../assets/techinterviews/algoexpert.png";
import Competitor3 from "../assets/techinterviews/cake.png";



function Techinterviews() {
    useEffect(() => {
        Aos.init({
            duration: 800,
            offset: -100
        });
    }, []);
    return (
        <section className="bodySection" >
            <div id="bodyWrapper">

                <div className="introWrapper">
                    <Link className="BackLink" to="/#header-wrapper"> 
                        <div id="backButtonIcon">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="backButtonIconhover" d="M18.9063 26.375L8.375 15.875C8.25 15.75 8.16125 15.6146 8.10875 15.4688C8.05625 15.3229 8.03042 15.1667 8.03125 15C8.03125 14.8333 8.05708 14.6771 8.10875 14.5313C8.16042 14.3854 8.24917 14.25 8.375 14.125L18.9063 3.59375C19.1979 3.30208 19.5625 3.15625 20 3.15625C20.4375 3.15625 20.8125 3.3125 21.125 3.625C21.4375 3.9375 21.5938 4.30208 21.5938 4.71875C21.5938 5.13542 21.4375 5.5 21.125 5.8125L11.9375 15L21.125 24.1875C21.4167 24.4792 21.5625 24.8387 21.5625 25.2662C21.5625 25.6937 21.4063 26.0633 21.0938 26.375C20.7813 26.6875 20.4167 26.8438 20 26.8438C19.5833 26.8438 19.2188 26.6875 18.9063 26.375Z" fill="black"/>
                            </svg>
                        </div>

                        <div className="backButtonText">
                            Back
                        </div>
                    </Link>
                    <h1 className="introTitle">techinterviews.io</h1>
                    <p className="introSubTitle">2022 | UX/UI Design | Coding Interviews</p>
                </div>
            </div>
            <div className="headerWrapper">
                    <h2 className="headerTitle">Cracking the Coding Interview</h2>
                    <p className="processText">
                        techinterviews.io is a code interview prep course. Teaching users both technical and behavioral concepts
                        in order to ace software engineer interviews. techinterviews.io stands out by teaching users 
                        to break down interview problems and not just memorize solutions to common interview questions, 
                        unlike their competitors. Users practice interview questions and read chapters on critical interview tips.

                    </p>
            </div>

            {/* **************** */}
            {/* Project Overview */}
            {/* **************** */}
            <div className="OverviewWrapper">
        
                <div className="columns" id="edgeColumnLeft">
                    <hr id="breakLine"/>
                    <h2 className="overviewTitle">Deliverables</h2>
                    <p className="overviewText">
                        Design a course website to market the service, display user account information 
                        and the courses curriculum in a minimal manner.
                    </p>  
                    <p className="bulletTitle"> 
                        UX / UI Design:
                    </p>
                    <p>
                        <ul>
                            <li>Competitive Analysis</li>
                            <li>Site Maps</li>
                            <li>Design Systems</li>
                            <li>Visual Design</li>
                            <li>Low Fidelity Wireframes and Prototype</li>
                            <li>High Fidelity Prototype</li>
                        </ul>
                    </p>
                    <br></br>
                    <p className="bulletTitle">
                        UX Research:
                    </p>
                    <p>
                        <ul>
                            <li>User Flow</li>
                        </ul>
                    </p>
                </div>
                

                <div className="columns" id="edgeColumnCenter">
                    <hr id="breakLine"/>
                    <h2 className="overviewTitle">Role</h2>
                    <p className="overviewText">
                        This project required me to take on the role of the following positions:
                        </p>
                    <p className="bulletTitle">
                        Roles:
                    </p>
                    <p>
                        <ul>
                            <li>Visual Designer</li>
                            <li>User Interface (UI) Designer</li>
                            <li>User Experience (UX) Designer</li>
                        </ul>
                    </p>
                </div>


                <div className="columns" id="edgeColumnRight">
                    <hr id="breakLine"/>
                    <h2 className="overviewTitle">Project Specifications</h2>
                    <p className="overviewText">
                        Duration: 1 Month

                    </p>
                    <p className="bulletTitle">
                        Tools: 
                    </p>
                    <p>
                        <ul>
                            <li>Figma</li>
                            <li>Adobe Suite</li>
                            <li>Google Suite</li>
                        </ul>
                    </p>
                    <br></br>
                    <p className="bulletTitle">
                        Process Overview: 
                    </p>
                    <p>
                        <ol className="processList">
                            <li>Define</li>
                            <li>Empathize</li>
                            <li>High Fidelity Prototype</li>
                        </ol>
                    </p>
                </div>
            
        </div>
        <hr id="breakLine"/>


            {/* **************** */}
            {/*     Research     */}
            {/* **************** */}
            <h2 className="sectionTitle">Research</h2>
            <p className="processText">
                
                This project has a lot of information that needs to be displayed for the user. It was 
                crucial during the designing of techinterviews to condense the information in a user friendly way:
                <ul>
                    <li>Identify best practices for organizing/condensing information. This information includes account information, 
                        subscription plans, course curriculum and coding challenges.</li>
                    <li>Design a clean user flow for subscribing to the product, differentiate between annual pass and 4 month pass.</li>
                </ul>
                <br></br>
                I also resolved to answer the following questions for users of techinterviews:
                <ul>
                    <li>Which is the best way to present what techinterviews is?</li>
                    <li>What is the most user friendly way to display the courses curriculum?</li>
                    <li>What aspects of the techinterviews's design will cause user pain points?</li>
                </ul>
                
            </p>
            <p className="sectionTitle">Empathizing With The User</p>
            <p className="processText" id="boldProcessText">
                Who is this for?
            </p>
            <p className="processText">
                For users who want to get a job in software engineering, this course was created to 
                teach important tips and tricks to standing out during interviews. Landing that 
                dream job and salary the user wants.
            </p>
            <p className="processText" id="boldProcessText">
                What goals do the users have?
            </p>
            <p className="processText">
                <ul>
                    <li>A structured plan on what to study.</li>
                    <li>Knowledge of what to expect during interviews.</li>
                    <li>Desire to network with other individuals who have taken the course.</li>
                </ul>            
            </p>
            <p className="processText" id="boldProcessText">
                What issues do the users have?
            </p>
            <p className="processText">
                <ul>
                    <li>Manage their account and payments.</li>
                    <li>Navigate the courses content efficiently and see what has been completed.</li>
                    <li>Ability to run code on the browser for course tests.</li>
                </ul>            
            </p>
            <p className="processText">
                
            </p>
        
            
            <h2 className="sectionTitle">Competitive Analysis</h2>
            <p className="processText">
                The main competitors of techinterviews are Educative, Algo Expert and Interview Cake
                <br/>
                <br/>
                Educative is the largest and is beautifully designed website with many courses for developers.
                They have many courses on programming topics but fewer on the interviews itself.
                <div className="personaContainer">
                        <img className="web" src={Competitor1} alt="other1"/>
                </div>
                <br/>
                <br/>
                Algo Expert is more similar to techinterviews, they both focus on coding interviews. Algo Experts 
                explanations are long winded and only tell you the solutions to the problem at hand. techinterviews differs through
                more concise videos and teaching coding patterns.
                <div className="personaContainer">
                        <img className="web" src={Competitor2} alt="other1"/>
                </div>
                <br/>
                <br/>
                Interview Cake is the oldest of these competitors, its a text only site so those with a auditory or in some cases visual learners 
                will suffer from this learning style. Also the website is slightly dated for its design choices but the information on it is still golden.
                <div className="personaContainer">
                        <img className="web" src={Competitor3} alt="other1"/>
                </div>
            </p>
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



            <p className="sectionTitle">Prototype</p>
            <p className="processText">
                After understanding the requirements I made the user flow into a high fidelity Prototype.
            </p>
            <div className="personaContainer">
                <img className="web" src={presentation} alt="presentation"/>
            </div>


            <p className="sectionTitle">Visit the Site</p>
            <p className="processText">
                Heres a link to the final version of the courses website.
            </p>

            <div className="buttonContainer">
                <a href="https://techinterviews.io/" className="hiFiButton">View techinterviews.io</a>
            </div>

            <p className="sectionTitle">What's Next?</p>
            <p className="processText">
                If I were to continue work on techinterviews, the first thing I would do is 
                usability testing for course navigation and code tests. Determine any user
                struggles and start brainstorming ideas for solutions to these problems.
                <br/>
                <br/>
                Another task would be to make a mobile application for the course and its readings. 
                Many users or any product are mobile users, so this would be a method to attract 
                that demographic to techinterviews.
            </p>

            <p className="footers" id="projectFooters">
                    Gehry Guest <span className="my-name-color">©2021</span>
            </p>
        </section>
        )
    }
    
    export default Techinterviews

