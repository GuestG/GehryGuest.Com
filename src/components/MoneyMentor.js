import React, { useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "aos/dist/aos.css";
import '../css/projects.css';
import BackToTopButton from "./BacktoTop";

import doubleDiamond from "../assets/moneyMentor/doubleDiamond.png";
// import interview from "../assets/moneyMentor/interview.png";
import savings from "../assets/moneyMentor/savingsSteward.png";
import allocator from "../assets/moneyMentor/optimalAllocator.png";
import journey from "../assets/moneyMentor/JourneyMap.png";
import concept from "../assets/moneyMentor/ConceptDesign.png";
// import conceptTesting from "../assets/moneyMentor/concepttesting.jpeg";
import competitive from "../assets/moneyMentor/competitive.png";

// Use we in this project, as group projects. Show collaberation
// Crazy long portfolios
// Have a hook on each case study, paraphrase the study, and ask a question
// find open source things
// Use recruiter to answer questions and to prep you.
// connect with others that work with that company to prep with company.
// asked recruiter how things went, what i can work on better, howd Id do?
// acquent recuirters


function MoneyMentor() {
    useEffect(() => {
        
    }, []);
    return (
        <section className="bodySection" >
                <div className="header-wrapper-projects" id="header-wrapper-MoneyMentor"> 
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
                            <h1 className="introTitle">MoneyMentor</h1>
                            <p className="introSubTitle">2024 <span className="subtitleBold">|</span> UX Process <span className="subtitleBold">|</span> UX Research <span className="subtitleBold">|</span> Interaction Design</p>
                        </div>
                    </div>
                </div>
        <div className="Project-Section-Padding">  
            <div className="headerWrapper">
                    <h2 className="headerTitle">Summing It Up</h2>
                    <p className="processText">
                        This was the capstone project for the University of Washington UX Design course. 
                        We were provided a project brief designed to introduce me to the process of User 
                        Experience design from start (business requirements and user research) to finish 
                        (UI Design, high-fidelity clickable prototype and user testing). In short The prompt my team received
                        was "Improve financial literacy in young professionals."
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
                            UX Design Student
                        </p>  
                    </div>
                    <div className="Duration">
                        <h2 className="overviewTitle">Duration</h2>
                        <p className="overviewText">
                            6 months
                        </p>
                    </div>
                    <div className="Tools">
                        <h2 className="overviewTitle">Tools</h2>
                        <p className="overviewText">
                            Figma<br></br>
                            Balsamiq<br></br>
                            Mural <br></br>
                            Otter.ai <br></br>
                            Optimal Workshop<br></br>
                            
                        </p>
                    </div>
                    <div className="Team">
                        <h2 className="overviewTitle">Team</h2>
                        <p className="overviewText">
                            UX Design Students<br></br>
                            UX Researcher<br></br>

                        </p>
                    </div>
                    <div className="Techniques">
                        <h2 className="overviewTitle">Methodology</h2>
                        <p className="overviewText">
                            User Interviews <br></br>
                            Personas <br></br>
                            User Stories <br></br>
                            Journey Map <br></br>
                            Competitive Analysis <br></br>
                            Concept Testing<br></br>
                            Synthesis <br></br>
                            {/* Mid/High-Fidelity Prototypes <br></br>
                            Interactive Prototypes <br></br>
                            User Testing <br></br> */}
                        </p> 
                    </div>
                </div>      
        </div>
        <hr id="breakLine"/>


            {/* **************** */}
            {/*     Research     */}
            {/* **************** */}
            <h2 className="sectionTitle">Overview</h2>
            <p className="processText">
                
                <span className="subSectionTitle">Problem</span><br></br>
                As per information provided by anuity.org <br></br>
                75% of American teens lack confidence in their knowledge of personal finance.<br></br>
                25% of Americans say they don't have anyone they can ask for trusted financial guidance.<br></br>
                23% of U.S. adults ages 18 to 29 have credit card debt that's over 90 days overdue.<br></br>
                <br></br>
                Many individuals, especially the younger generation, face a significant deficiency in financial education, 
                often requiring them to learn the ropes through experiences. The absence of proper education has resulted in 
                individuals not comprehending essential concepts like interest rates or credit scores, potentially leading 
                to life-altering consequences.

                <br></br>
                <br></br>
                <span className="subSectionTitle">Solution</span><br></br>
                The goal for this project was to create a mobile app that helps users learn and plan their finances. 
                To be able to learn financial concepts, calculate interests, meet with a professional in order to make
                the individual feel confident about their finances and financial decisions.
                <br></br>
                <br></br>
                <span className="subSectionTitle">Process</span><br></br>
                {/* Throughout this project, I kept a user centered mindset. I followed the double diamond method for the beginning
                of this Journey, the first steps being to discover/understand the problems then define them. Once defined 
                create solutions and then test those solutions. Otherwise in short discover, define, develope, deliver. */}

                There were three different phases of this project those being understanding and defining the problem, prototyping and the testing phases. During the research phase
                We followed the double diamond method in order to understand the users needs and their motivations, and what other
                options they had in the marketplace. Once we had a solid foundation on their issues we then moved on to developing & testing
                the concepts. Ultimately synthesizing a concept that addresses the user issues.
                
                {/* The first phase was all about understanding the user: their needs and motivations, the context in which 
                they'd be using the product, and what other options they had in the marketplace. With a solid foundation, 
                I then moved on to developing and testing out ideas. Growing in complexity from pencil sketches to 
                wireframes to mid fidelity mockups, the constant iteration ensured that I entered the final phase 
                with the best possible framework for the app. Lacking any sort of graphic design background, 
                creating a final prototype was at times challenging. But in the end, I had a product that worked 
                for the final rounds of user testing, which confirmed most of my design (and also gave me some minor 
                things to follow up on). Scroll down to read about each phase of my project, and to see some of the 
                deliverables. */}
                <br></br>
                <br></br>
                <div className="personaContainer">
                    <img className="web" src={doubleDiamond} alt="doubleDiamond"/>
                </div>
                <br></br>
                The next phase was prototyping, this phase includes the product itself from pencil 
                sketches to mid/high fidelity mockups and usability testing. Constant iteration ensured that we had a product 
                that was addressing the user needs.
                <br></br>
                <br></br>
                Scroll down to read about each phase of my project, and to see some of the deliverables.
            </p>



            <p className="sectionTitle">Understanding & Defining</p>
            <p className="processText">
            <span className="subSectionTitle">User Interview</span><br></br>
                The first step is to understand the user needs and motivations. We started that with user interviews,
                asking open ended questions and following a discussion guide to avoid bias. 
                The interviews brought to light many perspectives, like saving as much as possible and living frugally, 
                the lack of financial knowledge with stocks or types of debts. From these interviews my team and I 
                developed two archetypes.
                
            <br></br>
            <div className="personaContainer">
                {/* <img className="web" src={interview} alt="interview"/> */}
            </div>

               
            <br></br>
            <br></br>



            <span className="subSectionTitle">Behavioral Archetypes</span><br></br>
                The interviews showed us the two main types of archetypes. Those being people who put everything they can
                into savings and retirement in order to try and retire early, we called them the "savings steward". The other 
                archetype is the "optimal allocators" who thrive on finding the most efficient ways to achieve their lifestyle goals.

                <br></br>
                <br></br>
            <div className="personaContainer">
                <img className="web" src={savings} alt="savingsSteward"/>
            </div>
            <br></br>
            <div className="personaContainer">
                <img className="web" src={allocator} alt="optimalAllocator"/>
            </div>
            <br></br>
            <br></br>



            <span className="subSectionTitle">Journey Map</span><br></br>
            The journey map is depicting the archetypes as they want to reach a certain savings goal. It starts with a triggering event, when they are not on
            track to meet their savings goal. Then they move into a research portion where they try and find what will work for them. Now adjusting their
            lifestyle to the plan and reflect. Some of these processes are cyclic in nature, meaning they may have to be repeated to find the right plan for
            the person. This shows that people have to possibly try many plans along with make the effort to see what works for them, many if not most are unguided throughout this process.

            <br></br>
            <br></br>
            <div className="personaContainer">
                <img className="web" src={journey} alt="journeyMap"/>
            </div>
            <br></br>
            <br></br>
            


            <span className="subSectionTitle">Executive Summary</span><br></br>
                Having gained insight into the challenges users face and having mapped out their savings process, 
                the next step involves providing stakeholders with a concise overview. This summary aims to elucidate 
                the current scenario, the user's predicament, and the potential for resolution.
                <br></br>
                <br></br>
                <ul>
                    <li>The situation revolves around a deficiency in financial education, leaving users perplexed about the 
                                    financial system and apprehensive about its repercussions on their daily and future lives.</li>
                                    <br></br>
                    <li>The tension arises from the realization among young professionals that delving into financial topics 
                                    is both time-consuming and arduous. The absence of a mentor can exacerbate their sense of disorientation.</li>
                                    <br></br>
                    <li>The opportunity is to diminish the barriers to learning, to enhance people's financial literacy.</li>
                </ul>
                <br></br>
                With these presented to the stakeholders, everyone know understands what the user is going through, next with 
                proceed with comparing other products currently on the market.
            <br></br>
            <br></br>



            <span className="subSectionTitle">Competitive Analysis</span><br></br>
                We had primary, secondary and tertiary sources for the competitive analysis. Primary means more of the mobile app style
                we are trying to create, secondary are digital products used for financial purposes. Tertiary included more abstract
                things such as in person events, laws, financial influencers and podcasts. All these sources gave each person on our team
                the beginnings of a unique concept to test with users.
            <br></br>
            <br></br>
            <div className="personaContainer">
                <img className="web" src={competitive} alt="competitive Analysis"/>
            </div>
            <br></br>
            <br></br>



            <span className="subSectionTitle">Concept Study</span><br></br>
            How might we make financial planning and education easily available to the younger generation?
                <br></br>
                <br></br>
                The UX team each independently developed a concept to test. I came up with the concept MoneyMentor
                a way to have people meet local financial advisors. Other ideas my team came up with was make a financial calculator app,
                turning the act of saving into a game, a financial application that rewards people based on meeting their goals. The
                names of these concepts are Gains, Wealth Quest, Abacus and MoneyMentor.
                <br></br>
                <br></br>
                The concept of MoneyMentor came out when thinking about Uber and how a company can hire anyone and use their cars.
                In this case MoneyMentor hires out financial advisors in banks from which people can schedule local meetings. On top of that
                instead of searching through the internet to find what works for you, its all consolidated into one stop with clear concise definitions of financial concepts.
            <br></br>
            <br></br>
            <div className="personaContainer">
                <img className="web" src={concept} alt="conceptSketches"/>
            </div>
            <br></br>
            <br></br>
        


            <span className="subSectionTitle">Concept Study Findings</span><br></br>
                Four concepts were presented to our concept testers, the end result was much more interesting than I thought.
                <br></br>
                <br></br>
                <ul>
                    <li>Gains: People loved the thought of being rewarded for meeting their financial goals, "who doesn't love free stuff" one participant said.
                        Although many disliked the thought of being shamed by the app when they weren't on track to meet a goal. 
                    </li>
                    <br></br>
                    <li>Wealth Quest: The gamifaction caught people off guard, turning finances into fun with rewards. While those who liked the idea
                        really liked it, others didn't want to turn something so serious into a game.
                    </li>
                    <br></br>
                    <li>Abacus: Testers enjoyed the utility of the application, people mentioned it wouldn't replace what they do just enhance their time
                when working with finances. Liked the tools tips to teach users what every financial term means in app.</li>
                <br></br>
                    <li>MoneyMentor: Testers loved the possibility to meet people in person, but some had reservations due to possible judgment.
                Many like the database and categorizing of the user in order to supply plans that have worked for others.</li>
                </ul>
            <br></br>
            <br></br>
            <span className="subSectionTitle">Concept Conclusion</span><br></br>
                From the findings it seems we needed to add some sort of reward system, along with the ability to meet someone 
                in person for a tailored plan while being judgement free. Having a database of concepts with a financial calculator and
                the possibility of pop up in person events. This conclusion ended up being a strange mix of all of our concepts into one
                in order to provide the financial education that people need.
            </p>



            <p className="sectionTitle">Prototyping</p>
            <p className="processText">
                This section is currently being worked on, should be finished soon. 
            </p>

            <p className="sectionTitle">Testing</p>
            <p className="processText">
                This section is in the works, should be finished a couple months into 2024. 
                
            </p>



            {/* <p className="sectionTitle">What I Learned</p>
            <p className="processText">
            
            </p> */}

            {/* <div className="buttonContainer">
                <a href="https://techinterviews.io/" className="hiFiButton">View techinterviews.io</a>
            </div> */}


            </div>
            {/* <p className="footers" id="projectFooters">
                    Gehry Guest <span className="my-name-color">©2021</span>
            </p> */}
            <BackToTopButton />
        </section>
        
        )
    }
    
    export default MoneyMentor

