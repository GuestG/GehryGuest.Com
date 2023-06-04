import React, { useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Aos from 'aos';
import "aos/dist/aos.css";
import '../css/projects.css';
// import HiFi from "../assets/ritoPhotos/RitoHiFi.png";

import Presentation from "../assets/ritoPhotos/RitoPresentation.png";

import Persona1 from "../assets/ritoPhotos/Kyle.jpg";
import Persona2 from "../assets/ritoPhotos/Amy.jpg";

import Sketch1 from "../assets/ritoPhotos/Rito1.jpg";
import Sketch2 from "../assets/ritoPhotos/Rito2.jpg";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faSearch, faCheckCircle, faExclamationCircle, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

function Rito() {
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
                    <h1 className="introTitle">Rito</h1>
                    <p className="introSubTitle">2022 | IOS App | Food Truck</p>
                </div>


                <div className="headerWrapper">
                    <h2 className="headerTitle">The Rito in Burrito</h2>
                    <p className="processText">
                    Rito is a mobile app developed for a food truck company that serves Mexican-style food. 
                    The food trucks are located in many large cities, providing customers with easy access 
                    to their favorite dishes. Previously, the company did not have an app, which meant that 
                    customers had to wait in long lines or place their orders in-person.
                    <br></br>
                    <br></br>
                    One of the main objectives of Rito is to reduce wait times for customers. By allowing 
                    group orders and enabling customers to order before they arrive at the truck, Rito 
                    ensures that customers can skip the line and get their food quickly. This is especially 
                    important for customers who have limited time during their lunch breaks or for those who 
                    want to avoid the long lines during peak hours.
                    <br></br>
                    <br></br>
                    Rito was built with busy users in mind, so users are able to rate items, add extra
                    toppings at a press of a button and choose which truck they are shopping from. This 
                    case study will outline the process in which the user problems were broken down and 
                    how the product came to be.
                        
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
                            Design a IOS App to allow a food truck company to improve sales and users to order remotely.
                        </p>  
                        <p className="bulletTitle"> 
                            UX / UI Design:
                        </p>
                        <p>
                            <ul>
                                <li>Competitive Analysis</li>
                                <li>User Journey</li>
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
                            This is a design project where I assumed the following positions:
                            </p>
                        <p className="bulletTitle">
                            Roles:
                        </p>
                        <p>
                            <ul>
                                <li>Visual Designer</li>
                                <li>User Interface (UI) Designer</li>
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
                                <li>Figma</li>
                                <li>Unsplash</li>
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
                    <h2 className="sectionTitle">Quantitative Research</h2>
                    <p className="processText">
                        
                        Rito's design came with a lot of questions I needed to answer, the ways to answer these questions 
                        were to create personas to understand the target audience, conduct usability studies, competitive analysis
                        <br></br>
                        <br></br>
                        I also wanted to answer the following questions for Rito:
                        <ul>
                            <li>What designs are users already familiar with for mobile food apps and how to apply that to Rito?</li>
                            <li>How should I design the user flow?</li>
                            <li>How long does it take to order food from the app?</li>
                            <li>What tone should I use for the app?</li>
                        </ul>
                        <br></br>
                        A way to start the journey to understanding the customers was to 
                        first find who the target audience is. 
                        <br></br>
                        <br></br>
                        Conducting a survey of 40 customers who frequent food trucks on google forms.
                        <ul>
                            <li>How often do you eat from food trucks? The average was 2-3 times a Month</li>
                            <li>Does the food truck have a mobile app? 91% said no</li>
                            <li>Do you go to food truck during work hours? 68% said yes</li>
                            <li>What is the main reason you chosen to eat at a food truck rather than a 
                        traditional restaurant? 47% mentioned the convenience, the other 36% for the cuisine</li>
                        </ul>
                        <br></br>
                        So who is this for and what problems are they having?
                        <br></br>
                        <br></br>
                        From the survey I came to the conclusion that Rito has two target audiences those who 
                        are busy workers and families/individuals who are craving mexican cuisine. Time to empathize 
                        with the target audience.

    
                        
                    </p>
                    <p className="sectionTitle">Developing Empathy</p>
                    
                    <p className="processText">
                        What problems do these users have?
                    </p>
                    <p className="processText">
                        <ul>
                            <li>Seeing menu and order beforehand, to shorten wait time at food truck</li>
                            <li>Ability to quickly checkout food in cart</li>
                            <li>Locating closest food truck</li>
                        </ul>            
                    </p>
                    <p className="processText">
                        Peoples time is valuable, especially if the target group is on workers. So I need to make the App
                        very easy to use and with a clean user flow. From theses problems I made some personas to represent 
                        the target user.
                        
                    </p>

                    <h2 className="sectionTitle">Personas</h2>
                    <div className="personaContainer">
                        <img className="personas" src={Persona1} alt="Kyle"/>
                        <img className="personas" src={Persona2} alt="Amy"/>
                    </div>
                    


                    <h2 className="sectionTitle">Competitive Analysis</h2>
                    <p className="processText">
                        Starting the research with a competitive audit, in order to see what other food trucks are doing successfully and
                        what they are failing at.
                        <br/>
                        <br/>
                        I looked at 4 food truck apps to see their ordering processes and visual style. 3 were direct competitors, 1 was indirect
                        the establishments I audited were California Tacos, Port Taco Truck and Bar, El Camion and YumBit (the only indirect competitor).
                        All are located in Washington and business size varied from small to medium, all targeting families as an audience. Some offered alcohol
                        so they targeted a older demographic.
                        <br/>
                        <br/>
                        The bad: Many had issues with outdated applications, poor images of food, no real brand identity to the food truck and
                        ability to not even order online.
                        The Good: Other language accessible, user flow from menu to payment is very easy, very detailed ingredient descriptions.
                        <br/>
                        <br/>
                        This prompted me to design for a strong brand identity, the ability to see good photos / prices with detailed ingredient descriptions and order online easily.
                        
                    </p>

                    <p className="sectionTitle">Ideate</p>
                    <p className="processText">
                        Brainstorming numerous ideas through sketches of a low fi prototype the users can interact with & test.
                    </p>
                    <div className="personaContainer">
                        <img className="sketch" src={Sketch1} alt="Sketch1"/>
                        <img className="sketch" src={Sketch2} alt="Sketch2"/>
                    </div>
                    

                    <p className="sectionTitle">Testing User Flow Through Low Fidelity Prototyping</p>
                    <p className="processText">
                        New insights with user flow and users needs were gained from testing the low fidelity prototype.
                    </p>
                    <div className="gifHolder">
                        <iframe src="https://giphy.com/embed/VhQlP5VyucFsXk7QJR" className="giphy-embed" title="LowFi"/>
                    </div>


                    <p className="sectionTitle">Goals & Surfacing Issues</p>
                    <p className="processText">
                        Key performance indicators to keep track of success rates are very important here. I choose to
                        use time on task and conversion rates for the key performance indicators in these tests. Conducting
                        a Moderated usability study with 5 participants. Duration was 20 minutes and users were chosen for the 
                        study based on visiting a food truck at least once a month.

                    </p>
                    <p className="processText">
                        Test Objectives:
                    </p>
                    <p className="processText">
                        <ul>
                            <li>What parts of the user flow do the users get stuck in?</li>
                            <li>Any features that the app is missing and that users would like?</li>
                            <li>Is the overall design of the app easy to use and visually appealing?</li>
                            <li>Time is takes user to complete the ordering process?</li>
                        </ul>
                    </p>
                    <p className="processText">
                        Results:
                    </p>
                    <p className="processText">
                        <ul>
                            <li>100% of users had a very easy time with navigating menus</li>
                            <li>80% of users mentioned they at least wanted an order review screen before finalizing the order</li>
                            <li>Location selection was a bit vague as 40% of users had trouble proceeding to checkout due to not seeing the selection location button</li>
                        </ul>

                        
                    </p>

                    
                    <p className="sectionTitle">High-Fidelity Prototype</p>
                    <p className="processText">
                       Redesigning & reimagining the prototype from the feedback gathered. This prototype will be a similar to the 
                       final release as possible. Testing will be necessary on this prototype to create better iterations in the future. 
                       You can see the first iteration then the second iteration after coming back to redesign this project after learning more UI/UX skills.
                    </p>
                    <div>
                        <img className="HiFiMobilePhoto" src={Presentation} alt="Presentation"/>
                    </div>
                    <div className="buttonContainer">
                        <a href="https://www.figma.com/proto/MmifNGBemA2OwLV4micVER/Rito-Reworked?node-id=324%3A3130&scaling=min-zoom&page-id=324%3A3094&starting-point-node-id=324%3A3130" className="hiFiButton">View Prototype</a>
                    </div>

                {/* **************** */}
                {/*    Conclusion    */}
                {/* **************** */}

                <div className="optimizationWrapper">
                    <h2 className="optimizationTitle">If I had more time...</h2>
                        <p className="optimizationText">
                            Several subject areas in the current iteration will need to be worked into 
                            the user flows:
                        </p>
                        <p className="optimizationText">
                            <ul>
                                <li>Add a favorite food option to the app</li>
                                <li>Preform more usability testing on high fidelity prototype to create better Rito iterations</li>
                                <li>Refine select location button and make users more aware that a location is selected</li>
                                <li>Add a rewards system for loyal customers</li>
                            </ul>
                        </p>
                        <h2 className="optimizationTitle">Lessons Learned</h2>
                        <p className="optimizationText">
                            Being my very first UX project, I learned a lot about the UX process, mockups and prototypes. How these
                            all are determined by the user, creating a user centered design that in the end benefits the user and the business.
                        </p>
                        <p className="optimizationText">
                            <ol>
                                <li>
                                    Going through each step one by one really helps make a great product,along with user research being the pinnacle of feedback.
                                </li>
                                <li>
                                    People search for foods in many different ways, and if those variables are available for filtering purposes, they would rather have more, not less options.
                                </li>
                                <li>
                                    I am not a user, Many times during the project I wanted to make assumptions on the empathize process.
                                    But thats wrong, I am not everybody, each user is different and will make their own decisions.
                                </li>
                            </ol>
                            
                           
                        </p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                </div>

{/* FOR RITO People search for things to watch in many different ways, and if those variables are available for filtering purposes, they would rather have more, not less options. */}
       
       {/* One test user commented that the tasks were "almost too simple." Like many others, 
                        the tasks were correctly executed but their simplicity left a lot of room for 
                        speculation and possible improvement.      */}
                
            
                <p className="footers" id="projectFooters">
                    Gehry Guest <span className="my-name-color">©2021</span>
                </p>
            </div>
        </section>
    )
}

export default Rito