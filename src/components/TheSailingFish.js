import React, { useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Aos from 'aos';
import "aos/dist/aos.css";
import '../css/projects.css';

import Menu1 from "../assets/TheSailingFish/FancyCoverFront.png";
import Menu2 from "../assets/TheSailingFish/FancyMenu.png";
import Menu3 from "../assets/TheSailingFish/FancyCoverBack.png";


function TheSailingFish() {
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

                    <h1 className="introTitle">The Sailing Fish</h1>
                    <p className="introSubTitle">2023 | Restaurant Menu | Product Design</p>
                </div>


                <div className="headerWrapper">
                    <h2 className="headerTitle">Time to cook</h2>
                    <p className="processText">
                        Creating restaurant menus is an art that requires careful planning and 
                        attention to detail. The menu is a key component of a restaurant's brand, 
                        as it communicates the type of cuisine and dining experience that customers 
                        can expect. I will outline the process of creating two 
                        different types of menus: one for a seafood restaurant and one for a high-end 
                        meats menu. 
                        <br></br>
                        <br></br>
                        Seafood Restaurant Menu:
                        <br></br>
                            A minimal digital menu, with simple colored icons and simple graphics to determine what is vegan,
                            gluten free and spicy. Focused on a simple two column layout with a disclosure at the
                            bottom of the menu.
                        <br></br>
                        <br></br>
                        Meats Menu:
                        <br></br>
                            Using Adobe Photoshop & Adobe Illustrator I added a picture of delicious meat to to the front of the menu. As this will
                            sell the product more than any words on the menu. On the back is a simple three item menu, with
                            a Great visual hierarchy and standard practice for pricing on restaurant menus.
                        
                    </p>

                </div>

                <div className="personaContainer">
                    <img className="personas" src={Menu1} alt="Menu1"/>
                    <img className="personas" src={Menu2} alt="Menu2"/>
                    <img className="personas" src={Menu3} alt="Menu3"/>
                </div>
                <p className="footers" id="projectFooters">
                    Gehry Guest <span className="my-name-color">©2021</span>
                </p>
            </div>
            
        </section>
    )

}

export default TheSailingFish



