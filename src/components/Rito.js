import React, { useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "aos/dist/aos.css";
import '../css/projects.css';
import BackToTopButton from "./BacktoTop";


import doubleDiamond from "../assets/moneyMentor/doubleDiamond.png";

import Persona1 from "../assets/ritoPhotos/Persona1.png";
import Persona2 from "../assets/ritoPhotos/Persona2.png";

import PainPoints from "../assets/ritoPhotos/PainPoints.png"


import RitoWireframe from "../assets/ritoPhotos/RitoWireframe.png";

import RitoPresentation from "../assets/ritoPhotos/RitoPresentation.png";





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

                    {/* This case study summarizes the results of a two-week long design sprint. The goal of this project 
                    was to design a mobile app for a food truck business using the Design Thinking process — emphasize, define, 
                    ideate, prototype and test. The first week was centered around understanding users, the 
                    second was dedicated to design and prototyping. */}
                        Here I explore the journey of enhancing the customer experience at a local burrito
                        truck known as Rito, through the design and implementation of a user-friendly mobile application.
                        The goal is to streamline the ordering process, improve customer satisfaction, 
                        and boost the overall efficiency of the burrito truck business. Using the Design Thinking 
                        process — emphasize, define, ideate, prototype and test. The first week was centered around understanding users, the 
                        second was dedicated to design and prototyping.
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
                            2 Week Sprint
                        </p>
                    </div>
                    <div className="Tools">
                        <h2 className="overviewTitle">Tools</h2>
                        <p className="overviewText">
                            Figma<br></br>
                            FigJam<br></br>

                        </p>
                    </div>
                    <div className="Team">
                        <h2 className="overviewTitle">Team</h2>
                        <p className="overviewText">
                             UX Designer<br></br>
                             IOS Developer<br></br>

                        </p>
                    </div>
                    <div className="Techniques">
                        <h2 className="overviewTitle">Techniques</h2>
                        <p className="overviewText">
                            Double Diamond <br></br>
                            How Might we... <br></br>
                            User testing <br></br>
                            Low/high-fidelity Mockups <br></br>
                            Interactive Prototypes <br></br>
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

                Nico Gonzales, based in Olympia, Washington, operates the food truck business known as Rito. 
                With extensive experience as a chef, he ventured into entrepreneurship by 
                launching his own food truck business, which quickly took off he now faces new challenges that come with success. 
                    <br></br>
                    <br></br>
                Nico identified challenges in managing long queues, order accuracy, and cash payments. 
                To address these issues, he sought to create a mobile app that would enhance the way customers interact 
                with his business. He needed the app to handle the influx of orders, allow for customers to pay online and find
                his food trucks current location.

                <br></br>
                <br></br>
                To break down this problem I went with the double diamond method. This means to find the problems and define them, 
                once we know they problems we generate solutions and pick the best one to solve the users pain points.
                <br></br>
                <br></br>
                <div className="personaContainer">
                    <img className="web" src={doubleDiamond} alt="doubleDiamond"/>
                </div>
            </p>

        
            
            
        
            
            <h2 className="sectionTitle">Order Process & Insights</h2>
            <p className="processText">

                <span className="subSectionTitle">Defining the Order Process</span><br></br>
                The order process is very manual for the customer and the business owner, he would receive orders through texts or phone calls
                He also would have to keep track mentally of what orders he has done and what he hasn't, reducing order accuracy. So I needed to 
                design the steps of the ordering process in order to generate ideas.
                <br></br>
                <br></br>
                {/* <div className="personaContainer">
                    <img className="web" src={PainPoints} alt="PainPoints"/>
                </div> */}
                <div className="personaContainer">
                    <img className="web" src={PainPoints} alt="PainPoints"/>
                </div> 
                Steps For Ordering:
                <ol>
                    <li>Set flyers in neighborhoods with menu, location and a phone number to order.</li>
                    <li>Customer calls or texts to place their order and what time to pickup.</li>
                    <li>Customer Pays in cash at the food truck.</li>
                </ol>
               
                <br></br>
                <br></br>
                <span className="subSectionTitle">Customer Interviews</span><br></br>
                To properly define the user problem and business objective, it was necessary to get a broader 
                understanding of the stakeholder and his customers. Qualitative interviews of Rito's customers really helped in getting 
                those insights.
                <br></br>
                <br></br>
                {/* <div className="personaContainer">
                    <img className="web" src={webComponents} alt="webcomponents"/>
                </div> */}
                Customers Pain Points during ordering process:
                <ul>
                    <li>Customer is not up to date with current menu.</li>
                    <li>Customers may not even find flyer or flyer may be damage by weather.</li>
                    <li>Customers need to write order manually.</li>
                    <li>Rito cannot keep track of all orders coming in.</li>
                    <li>No secure way to pay online or beforehand.</li>
                </ul>
                <br></br>

                After understanding the pain points that the customers were having while trying to order, 
                certain key takeaways were brought to light. This shows where customers had negative emotions during the interview
                these range from uncertainty, frustration to anxiety when trying to accomplish these tasks.

                <br></br>
                <br></br>
                {/* <div className="personaContainer">
                    <img className="web" src={webComponents} alt="webcomponents"/>
                </div> */}
                Key Takeaways:
                <ul>
                    <li>Customers don't like the current process of making an order via text/phone.</li>
                    <li>Where the food truck is currently located.</li>
                    <li>Quicker process in ordering, some people are pressed for time during the work day.</li>
                    <li>The payment process currently can't be done online. Customers pay at the food truck.</li>
                    <li>The current ordering process involves a lot of manual input from both the business owner and the customers themselves.</li>
                </ul>

                <br></br>
                <br></br>
                <span className="subSectionTitle">Personas</span><br></br>
                From these takeaways I developed personas to help the owner empathize with what his customer base needs.
                <br></br>
                <br></br>
                <div className="personaContainer">
                    <img className="web" src={Persona1} alt="Persona1"/>
                </div>
                <br></br>
                <div className="personaContainer">
                    <img className="web" src={Persona2} alt="Persona2"/>
                </div>
            </p>





            <h2 className="sectionTitle">How Might We...</h2>
            <p className="processText">
                After the research, I identified the main problems I wanted to focus on. 
                I felt I had to them breakdown into 5 different HMWs as they each related 
                to different stages of the process.
                <br></br>
                <br></br>
                How Might We:
                <ul>
                    <li>How Might We allow customers to let cooks know about their personal preferences?</li>
                    <li>How Might We spread the orders so that the waiting time is reduced?</li>
                    <li>How Might We make the payment process fast and secure for the customers?</li>
                    <li>How Might We make it easy for the customers to know where the truck is located and how to reach it?</li>
                    <li>How Might We display the Rito menu in an appealing way that matches the Hispanic branding?</li>
                </ul>
            </p>

            <h2 className="sectionTitle">Prototype & Iterations</h2>
            <p className="processText">
            <span className="subSectionTitle">Low Fidelity Mockup</span><br></br>
                Having already come up with a rough idea of what the app would include using the 
                Crazy 8 and the MOSCOW methods, I started sketching a lo-fi prototype. The prototype 
                showed the flow of a user opening the app from a push notification, ordering a burrito, 
                choosing a pick-up time, and paying.
                <br></br>
                <br></br>
                While our app does not involve a lot of navigation, sketching the lo-fi version turned out 
                more complex than I thought. I had a lot of personal assumptions of how elements should be 
                presented. I created a survey to validate these assumptions with users and guide us in the way 
                forward. Some very interesting and unexpected results came out.

                <br></br>
                <br></br>
                <div className="personaContainer">
                    <img className="web" src={RitoWireframe} alt="RitoWireframe"/>
                </div>

                <br></br>
                Having validated those assumptions, I was confident to build our high-fi prototype.
                <br></br>
                <br></br>
                <span className="subSectionTitle">High Fidelity Mockup</span><br></br>
                I tested our high-fi with users on Figma, again asking them to think out loud as they were navigating 
                through it. Their opinions were completely unbiased as they had never seen any prototypes of this project 
                before. I received encouraging feedback.
                <br></br>
                <br></br>
                He then gave us suggestions on the design such as: a photo of his truck as the app background, more of his 
                logo, smaller photos of the food, an about me page, a banner displaying adverts, food reviews and overall
                more pictures.
                <br></br>
                <br></br>
                I agreed that the first version of the high-fi did not reflect his branding enough but with 35 hours 
                left on our deadline, I had to prioritize his feedback. Starting off from our current design system, I 
                re-used several components and tweaked them to empathize his branding a little more, while maintaining the 
                elegant feeling of Rito and our vision as designers.
                <br></br>
                <br></br>
                Here is the final version of our high-fi, which received great feedback from both the client and Rito's customers:
            </p>
            <br></br>
            <br></br>
            <div className="personaContainer">
                    <img className="web" src={RitoPresentation} alt="RitoPresentation"/>
            </div>





            <h2 className="sectionTitle">Impact & Reflection</h2>
            <p className="processText">
            
            <span className="subSectionTitle">Our Impact on the Business</span><br></br>
            {/* Increasing the amount of order inaccuracys to almost none, */}
            more to be added in early 2024...

            <br></br>
            <br></br>
            <span className="subSectionTitle">What I Learned</span><br></br>
            {/* Test assumptions, even the ones that feel obvious — we are not designing for ourselves, 
            we are not the user so what seems obvious to us is not for someone else. Testing those 
            assumptions with users to back our decisions made us feel more confident in our product. */}
            
            more to be added in early 2024...
            <br></br>
            <br></br>
            {/* It's all about good balance — embracing the client's feedback and knowing when to stand our 
            ground as the designers was sometimes difficult to do. */}
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                
            </p>


            <div className="personaContainer">
                        {/* <img className="web" src={low1} alt="low1"/> */}
                        {/* <img className="web" src={low2} alt="low2"/> */}
                        {/* <img className="web" src={low3} alt="low3"/> */}
            </div>
            
            






            </div>
            {/* <p className="footers" id="projectFooters">
                    Gehry Guest <span className="my-name-color">©2021</span>
            </p> */}
            <BackToTopButton />
        </section>
        
        )
    }
    
    export default Rito

