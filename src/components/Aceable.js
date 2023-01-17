import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import '../css/projects.css';


import presentation from "../assets/algoPhotos/AceablePresentation.png";

import Competitor1 from "../assets/algoPhotos/educative.png";
import Competitor2 from "../assets/algoPhotos/algoexpert.png";
import Competitor3 from "../assets/algoPhotos/cake.png";



function Aceable() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: -100
        });
    }, []);
    return (
        <section className="bodySection" >
            <div id="bodyWrapper">

                <div className="introWrapper">
                    <h1 className="introTitle">Aceable</h1>
                    <p className="introSubTitle">2022 | UX/UI Design | Coding Interviews</p>
                </div>
            </div>
            <div className="headerWrapper">
                    <h2 className="headerTitle">Cracking the Coding Interview</h2>
                    <p className="processText">
                        Aceable is a code interview prep course. Teaching users both technical and behavioral concepts
                        in order to ace software engineer interviews. Aceable stands out by teaching users 
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
                crucial during the designing of Aceable to condense the information in a user friendly way:
                <ul>
                    <li>Identify best practices for organizing/condensing information. This information includes account information, 
                        subscription plans, course curriculum and coding challenges.</li>
                    <li>Design a clean user flow for subscribing to the product, differentiate between annual pass and 4 month pass.</li>
                </ul>
                <br></br>
                I also resolved to answer the following questions for users of Aceable:
                <ul>
                    <li>Which is the best way to present what Aceable is?</li>
                    <li>What is the most user friendly way to display the courses curriculum?</li>
                    <li>What aspects of the Aceable's design will cause user pain points?</li>
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
                The main competitors of Aceable are Educative, Algo Expert and Interview Cake
                <br/>
                <br/>
                Educative is the largest and is beautifully designed website with many courses for developers.
                They have many courses on programming topics but fewer on the interviews itself.
                <div className="personaContainer">
                        <img className="web" src={Competitor1} alt="other1"/>
                </div>
                <br/>
                <br/>
                Algo Expert is more similar to Aceable, they both focus on coding interviews. Algo Experts 
                explanations are long winded and only tell you the solutions to the problem at hand. Aceable differs through
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
                <a href="https://guestg.github.io/GabisKids/" className="hiFiButton">View Aceable</a>
            </div>

            <p className="sectionTitle">What's Next?</p>
            <p className="processText">
                If I were to continue work on Aceable, the first thing I would do is 
                usability testing for course navigation and code tests. Determine any user
                struggles and start brainstorming ideas for solutions to these problems.
                <br/>
                <br/>
                Another task would be to make a mobile application for the course and its readings. 
                Many users or any product are mobile users, so this would be a method to attract 
                that demographic to Aceable.
            </p>

        
        </section>
        )
    }
    
    export default Aceable

