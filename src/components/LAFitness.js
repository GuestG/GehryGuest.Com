import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import '../css/projects.css';
import Persona1 from "../assets/LAPhotos/Jones.png";
import Persona2 from "../assets/LAPhotos/Mia.png";

import Sketch1 from "../assets/LAPhotos/LA1.jpg";
import Sketch2 from "../assets/LAPhotos/LA2.jpg";

// import MobilePresentation from "../assets/LAPhotos/LAMobilePresentation.png";
import presentation from "../assets/LAPhotos/LAFitnessPresentation.png";

import low1 from "../assets/LAPhotos/lowFi.png";
import low2 from "../assets/LAPhotos/aboutus.png";
import low3 from "../assets/LAPhotos/map.png";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faSearch, faCheckCircle, faExclamationCircle, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

function LAFitness() {
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
                    <h1 className="introTitle">LA Fitness</h1>
                    <p className="introSubTitle">2022 | Redesign | Responsive Website</p>
                </div>


                <div className="headerWrapper">
                    <h2 className="headerTitle">Trimming the Fat</h2>
                    <p className="processText">
                        The current design of LA Fitness has trouble with
                        user navigation, too many useless features that actually take away from the user experience.
                        In this case study I reduced the clutter and generally minimalize the website. 
                        Designing the website to be responsive so users with any device can use the website.
                        But also simplifying the process it takes to become a member of the gym
                        itself.
                        

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
                            A rework of the current LA Fitness website, improving its user flows and appearance.
                        </p>  
                        <p className="bulletTitle"> 
                            UX / UI Design:
                        </p>
                        <p>
                            <ul>
                                <li>Competitive Analysis</li>
                                <li>Site Maps</li>
                                <li>Design Systems</li>
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
                                <li>Personas</li>
                                <li>Usability Tests and Findings</li>
                            </ul>
                        </p>
                    </div>
                    

                    <div className="columns" id="edgeColumnCenter">
                        <hr id="breakLine"/>
                        <h2 className="overviewTitle">Role</h2>
                        <p className="overviewText">
                            This is a redesign project where I assumed the following positions:
                            </p>
                        <p className="bulletTitle">
                            Roles:
                        </p>
                        <p>
                            <ul>
                                <li>Visual Designer</li>
                                <li>User Interface (UI) Designer</li>
                                <li>User Experience (UX) Designer</li>
                                <li>User Experience (UXR) Researcher</li>
                            </ul>
                        </p>
                    </div>


                    <div className="columns" id="edgeColumnRight">
                        <hr id="breakLine"/>
                        <h2 className="overviewTitle">Project Specifications</h2>
                        <p className="overviewText">
                            Duration: 2 weeks

                        </p>
                        <p className="bulletTitle">
                            Tools: 
                        </p>
                        <p>
                            <ul>
                                <li>Adobe XD</li>
                                <li>Jamboard</li>
                                <li>Google Suite</li>
                            </ul>
                        </p>
                        <br></br>
                        <p className="bulletTitle">
                            Process Overview: 
                        </p>
                        <p>
                            <ol className="processList">
                                <li>Empathize</li>
                                <li>Define</li>
                                <li>Ideate</li>
                                <li>Low Fidelity Prototype</li>
                                <li>Test</li>
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
                        
                        My research first centered around the competition space in order to understand how other gyms are 
                        addressing similar issues. To this end I set these research goals:
                        <ul>
                            <li>Organizing information to answer user questions</li>
                            <li>Understanding what the users really needs and what is fluff, in order to minimalize the website</li>
                        </ul>
                        <br></br>
                        I also wanted to answer the following questions for LA Fitness:
                        <ul>
                            <li>How users interact with the responsive design?</li>
                            <li>How many users need the features from the current website?</li>
                            <li>How to pull in people to sign up?</li>
                        </ul>
                        
                    </p>
                    <p className="sectionTitle">Developing Empathy With LA Fitness Patrons</p>
                    <p className="processText" id="boldProcessText">
                        who is this for?
                    </p>
                    <p className="processText">
                        This redesign is for the current and incoming members of LA Fitness gyms. To facilitate 
                        there questions and sign ups for memberships or gym classes. 
                    </p>
                    <p className="processText" id="boldProcessText">
                        what problems do these users have?
                    </p>
                    <p className="processText">
                        <ul>
                            <li>Making information quick to find</li>
                            <li>Designing the website less overwhelming by reducing clutter</li>
                            <li>The ability to select a gym and sign up for classes</li>
                        </ul>            
                    </p>
                    <p className="processText">
                        Being a frequent LA Fitness goer myself, it was much quicker to empathize with the other
                        members. I understand how poor the website and mobile app are constructed, they work but are very
                        overwhelming to navigate. That is my starting point then, selecting a time for attending gym classes 
                        and finally work on the membership sign up process. Wanting to make every process simpler just like the competition has done.
                    </p>
                    <h2 className="sectionTitle">Personas</h2>
                    <div className="personaContainer">
                        <img className="personas" src={Persona1} alt="Jones"/>
                        <img className="personas" src={Persona2} alt="Mia"/>
                    </div>


                    <h2 className="sectionTitle">Competitive Analysis</h2>
                    <p className="processText">
                        Looking at three other gyms, those being Planet Fitness, Anytime Fitness and Westcoast Fitness. The first toward
                        being more corporate while the last gym being a local one.
                        <br/>
                        <br/>
                        Noticing that the two corporate gyms offered a simplistic website with gym finders, upfront pricing and virtual tours.
                        Many photos to show the tone the gym is trying to give off. That being fun, energetic and a way to help you improve.
                        <br/>
                        <br/>
                        The local gym Westcoast Fitness was more of a serious tone, you come here to workout with no one to bother you.
                        with no extra features you couldn't even sign up online you had to call or be in person. 
                        <br/>
                        <br/>
                        Seeing the stark difference between local and nationwide. The more energetic tone and features of the nationwide
                        gyms was what I was going to take into consideration when designing. As LA Fitness is known for their trainers 
                        and fun tone. 
                        LA Fitness is itself a corporate gym so I took some inspiration from Planet Fitness and Anytime Fitness into consideration
                        for the ideation phase.
                      
                        
                    </p>

                    <p className="sectionTitle">Ideate</p>
                    <p className="processText">
                        Using the crazy eights exercise, I created the framework for the website and its responsive features.
                       
                    </p>
                    <div className="personaContainer">
                        <img className="sketch" src={Sketch1} alt="Sketch1"/>
                        <img className="sketch" src={Sketch2} alt="Sketch2"/>
                    </div>

                    <p className="sectionTitle">Learning User Flow Through Low Fidelity Prototyping</p>
                    <p className="processText">
                        Turning the wireframe into a prototype for usability tests. The responsive nature meant three 
                        prototypes were made. One for desktop, tablet and mobile.
                    </p>
                    <div className="personaContainer">
                        <img className="web" src={low1} alt="low1"/>
                        <img className="web" src={low2} alt="low2"/>
                        <img className="web" src={low3} alt="low3"/>
                    </div>
                    <div className="gifHolder">
                        {/* <iframe src="https://giphy.com/embed/yCz8qWrkehdgDjUEUp" className="giphy-embed"></iframe> */}
                    </div>


                    <p className="sectionTitle">Goals & Surfacing Issues</p>
                    <p className="processText">
                        Having a remote unmoderated study, with 20 minute sessions. 4 participants total 3 males and 1 female, 
                        all patrons of LA Fitness. Using key performance indicators like use of navigation vs search, conversion 
                        rates and user error rates to measure results.

                    </p>
                    <p className="processText">
                        Test Objectives:
                    </p>
                    <p className="processText">
                        <ul>
                            <li>How successful are user navigation and user flow</li>
                            <li>Understanding the membership process</li>
                            <li>What extra features users would ask for</li>
                            <li>Does the responsive nature of the website cause any problems for the user</li>
                        </ul>
                    </p>
                    <p className="processText">
                        Results:
                    </p>
                    <p className="processText">
                        <ul>
                            <li>75% needed to create appointments for gym classes</li>
                            <li>90% of users completed navigational tasks</li>
                            <li>100% user understood the membership process</li>
                            {/* <li>60% of users had trouble sorting the news page and handlers. (mobile app)</li> */}
                        </ul>

                        
                    </p>

                    
                    <p className="sectionTitle">High-Fidelity Prototype</p>
                    <p className="processText">
                        Using the results from usability testing, the issues were taking into design consideration when building the 
                        hi fidelity prototype.
                    </p>
                    <div className="personaContainer">
                        {/* <img className="web" src={MobilePresentation} alt="MobilePresentation"/> */}
                        <img className="web" src={presentation} alt="presentation"/>
                    </div>

                    <div className="buttonContainer">
                        <a href="https://www.figma.com/file/XjIPFSVRWSR2Khht3y7fMa/LA-Fitness-Redesign?node-id=0%3A1&t=h27PRFUjYLYeL5ou-1" className="hiFiButton">View Prototype</a>
                    </div>

                {/* **************** */}
                {/*    Conclusion    */}
                {/* **************** */}

                <div className="optimizationWrapper">
                    <h2 className="optimizationTitle">What's Next</h2>
                        <p className="optimizationText">
                            Due to the limited time of the project, I was unable to implement all the features I originally wanted.
                            So the first major step would be to finish those and preform usability tests.
                        </p>
                        <p className="optimizationText">
                            <ul>
                                <li>Usability testing on high fidelity prototype</li>
                                <li>Redesign of the current LA Fitness mobile app</li>
                                <li>do usability tests with people who don't go to LA Fitness, to get their perspective</li>
                                <li>add a "sub website" for each individual gym, when searching by area</li>
                            </ul>
                        </p>
                        <h2 className="optimizationTitle">Lessons Learned</h2>
                        <p className="optimizationText">
                            I would also take much greater care to make sure there was reassuring and legally affirming language to address
                            the monthly fee, and waivers needed to be signed during membership sign up.
                        </p>
                        <p className="optimizationText">
                            <ol>
                                <li>Do not compromise functionality for aesthetics. This occurred when taking away so many features from 
                                    the current LA Fitness website. Needed more time and testing to determine what features the users use.
                                </li>
                                <li>To consider business needs when designing. For example maybe I wanted the tone to be more
                                    serious, but the business itself is trying to draw as many people as possible so a different tone
                                    will reach more audiences.
                                </li>
                                <li>Size matters in visual hierarchy. This leads the users to see what you want them to see first, then it 
                                    guides them along.</li>
                            </ol>
                            
                           
                        </p>
                </div>

{/* FOR RITO People search for things to watch in many different ways, and if those variables are available for filtering purposes, they would rather have more, not less options. */}
       
       {/* Going through each step one by one really helps make a great product,along with user research being the pinnacle of feedback. */}
       {/* One test user commented that the tasks were "almost too simple." Like many others, 
                        the tasks were correctly executed but their simplicity left a lot of room for 
                        speculation and doubt.      */}
                
            
                <p className="footers">
                    Gehry Guest <span className="my-name-color">©2021</span>
                </p>
            </div>
        </section>
    )
}

export default LAFitness