import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import '../css/projects.css';
import Persona1 from "../assets/kiwiPhotos/Jenna.png";
import Persona2 from "../assets/kiwiPhotos/Ben.png";
import HiFi from "../assets/kiwiPhotos/kiwiHiFi.png";

import Sketch1 from "../assets/kiwiPhotos/Kiwi1.jpg";
import Sketch2 from "../assets/kiwiPhotos/Kiwi2.jpg";
import Sketch3 from "../assets/kiwiPhotos/Kiwi3.jpg";

import Web1 from "../assets/kiwiPhotos/Homepage.png";
import Web2 from "../assets/kiwiPhotos/KiwiFacts.png";
import Web3 from "../assets/kiwiPhotos/Donate.png";

function Kiwi() {
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
                    <h1 className="introTitle">Kiwi Oasis</h1>
                    <p className="introSubTitle">2022 | Charity | Designing for Social Good</p>
                </div>


                <div className="headerWrapper">
                    <h2 className="headerTitle">Saving a National Icon</h2>
                    <p className="processText">
                        Kiwi Oasis is a charity devoted to the conservation of New Zealand's national bird the Kiwi. 
                        The goal of the Non-profit charity is to spread awareness of the kiwis population decline and to actively 
                        try to reverse the decline. The creation of sanctuaries, restoration of habitat and removal of pests are some of 
                        the actions the charity implements to improve the survival rates of kiwis.
                        

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
                            A Responsive website and Mobile Application, website was for spreading awareness. while
                            Mobile App was for more intimate interactions with the kiwis through donations.
                        </p>  
                        <p className="bulletTitle"> 
                            UX / UI Design:
                        </p>
                        <p>
                            <ul>
                                <li>Competitive Analysis</li>
                                <li>Site Maps</li>
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
                                <li>User personas</li>
                                <li>Usability Tests and Findings </li>
                            </ul>
                        </p>
                    </div>
                    

                    <div className="columns" id="edgeColumnCenter">
                        <hr id="breakLine"/>
                        <h2 className="overviewTitle">Role</h2>
                        <p className="overviewText">
                            This is a concept project where I assumed the following positions:
                            </p>
                        <p className="bulletTitle">
                            Roles:
                        </p>
                        <p>
                            <ul>
                                <li>Interaction (IxD) Designer</li>
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
                                <li>Figma</li>
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
                        
                        At the outset of this project, I felt it was important to identify as best as I 
                        could what aspects of the app user experience and user interface that users largely 
                        like and dislike. To this end I set these research goals:
                        <ul>
                            <li>Identify best practices for organizing information in the website & app.</li>
                            <li>Understand pain points that could make website & app usability difficult.</li>
                        </ul>
                        <br></br>
                        I also resolved to answer the following questions for both the responsive website and mobile versions of Kiwi Oasis:
                        <ul>
                            <li>Which features do Kiwi Oasis users like and dislike?</li>
                            <li>What aspects of the Kiwi Oasis app UI would users like to see improved?</li>
                            <li>What aspects of the Kiwi Oasis helps promote a sense of progress?</li>
                        </ul>
                        
                    </p>
                    <p className="sectionTitle">Empathizing With The User</p>
                    <p className="processText" id="boldProcessText">
                        Who is this for?
                    </p>
                    <p className="processText">
                        Its for users who want to support a species conservation effort. Or
                        any animal lovers who have heard of the kiwi and its endeavors.
                    </p>
                    <p className="processText" id="boldProcessText">
                        What problems do these users have?
                    </p>
                    <p className="processText">
                        <ul>
                            <li>The ability to support an endangered species</li>
                            <li>Seeing how their donations are being spent</li>
                            <li>Lack of awareness of the situation</li>
                            <li>An interactive solution to donations</li>
                        </ul>            
                    </p>
                    <p className="processText">
                        Armed with a better understanding of how users feel about animal conservation.
                        I felt it was important to define those two sides of the personas I'd be using 
                        to drive design decisions moving forward: Donators and Colleagues.
                    </p>
                    <p className="processText">
                        Defining the qualitative details of someone who was interested in lending toward 
                        a cause vs. someone learning about the cause , helped me better understand how design would 
                        need to support both.
                        The major decision I made was to have the website be more about awareness while still allowing for donations.
                        The mobile application was for users looking to have a more intimate experience, letting users "adopt" a kiwi,
                        for a monthly fee.
                        Both the website and the app still had features to inform users of news about kiwis and what the charity is doing 
                        with donations.
                        
                    </p>
                    <h2 className="sectionTitle">Personas</h2>
                    <div className="personaContainer">
                        <img className="personas" src={Persona1} alt="Jenna"/>
                        <img className="personas" src={Persona2} alt="Ben"/>
                    </div>
                    
                    <p className="sectionTitle">Ideate</p>
                    <p className="processText">
                        Several rounds of rapid sketching on paper to get the foundation of future prototypes
                       
                    </p>
                    <div className="personaContainer">
                        <img className="sketch" src={Sketch1} alt="Sketch1"/>
                        <img className="sketch" src={Sketch2} alt="Sketch2"/>
                        <img className="sketch" src={Sketch3} alt="Sketch3"/>
                    </div>


                    <p className="sectionTitle">Identifying Points Of Confusion<br/> Through Wireframe Prototypes</p>
                    <p className="processText">
                        After the sketching I made the user flow into a low fidelity, interactive wireframe.
                    </p>
                    <div className="gifHolder">
                        <iframe src="https://giphy.com/embed/yCz8qWrkehdgDjUEUp" className="giphy-embed" title="LowFi"/>
                    </div>


                    <p className="sectionTitle">Kiwi Oasis Usability Test</p>
                    <p className="processText">
                        Tests where conducted on the wireframes for both mobile and website versions of Kiwi Oasis.
                        Revealing some pain points for users.
                        Using key performance indicators such as Time on Task and Conversion Rates.
                        Having a moderated in person study with 5 participants of varying ages, cultures and genders. All of them
                        being animal lovers! 
                    </p>
                    <p className="processText">
                        Test Objectives:
                    </p>
                    <p className="processText">
                        <ul>
                            <li>User navigation and user flow. (mobile app & website)</li>
                            <li>Understanding the "my kiwis" page. (mobile app)</li>
                            <li>Understanding the messaging system. (mobile app)</li>
                            <li>Does the responsive nature of the website cause any snags for the user? (website)</li>
                        </ul>
                    </p>
                    <p className="processText">
                        Results:
                    </p>
                    <p className="processText">
                        <ul>
                            <li>100% were confused at the payment page, or lack there of. (mobile app & website)</li>
                            <li>80% found navigation very easy. (mobile app & website)</li>
                            <li>80% had no trouble completing the tasks given. (mobile app)</li>
                        </ul>

                        
                    </p>

                    
                    <p className="sectionTitle">Revealing New Short Comings With <br/> High-Fidelity Prototype Testing.</p>
                    <p className="processText">
                        Testing revealed a massive oversight, that being the donation page was missing and none even knew 
                        adopting costed money. Other problems arose such as needing a way to sort through news articles and kiwis
                        surfaced after testing. These problems were taken into consideration and new designs were created to 
                        fix these issues in the high fidelity prototype.
                    </p>
                    <div className="HiFiContainer">
                        <img className="HiFiMobilePhoto" src={HiFi} alt="HiFi"/>
                    </div>
                    <div className="personaContainer">
                        <img className="web" src={Web1} alt="Web1"/>
                        <img className="web" src={Web2} alt="Web2"/>
                        <img className="web" src={Web3} alt="Web3"/>
                    </div>
                    
                    <div className="buttonContainer">
                        <a href="https://www.figma.com/proto/P6MGwsfgecwsoTgVB3tm1U/Kiwi?node-id=221%3A227&scaling=min-zoom&page-id=216%3A215&starting-point-node-id=221%3A227&show-proto-sidebar=1" className="hiFiButton">View Prototype</a>
                    </div>


                {/* **************** */}
                {/*    Conclusion    */}
                {/* **************** */}

                <div className="optimizationWrapper">
                    <h2 className="optimizationTitle">Next Steps</h2>
                        <p className="optimizationText">
                            Specifically, several subject areas in the current iteration will need to be worked into 
                            the user flows:
                        </p>
                        <p className="optimizationText">
                            <ul>
                                <li>Usability testing on high fidelity prototypes.</li>
                                <li>Designing a method to sort through adopted kiwis.</li>
                                <li>Add elements to Make user more aware of adopting a kiwi is a monthly fee and the user does not really own the kiwi.</li>
                                <li>Creating some sort of pop up when trying to adopt a kiwi for the first time, ask to save card info for adopting others.</li>
                            </ul>
                        </p>
                        <h2 className="optimizationTitle">Conclusion</h2>
                        <p className="optimizationText">
                            Designing for social good, is a whole another feeling. knowing that my designs 
                            can help those in need is fascinating.
                            The following are just some of the lessons I learned through this process:
                        </p>
                        <p className="optimizationText">
                            <ol>
                                <li>Information can almost always be condensed into various designs, look out for that opportunity to do so.</li>
                                <li>Sometimes even the most obvious requirements can accidentally be overlooked, so testing is a must.</li>
                                <li>Never assume what the user will do and that I myself is not a user. This made me overlook simple designs like the sorting of kiwis.</li>
                            </ol>
                            
                           
                        </p>
                </div>
            
                <p className="footers">
                    Gehry Guest <span className="my-name-color">©2021</span>
                </p>
            </div>
        </section>
    )
}

export default Kiwi