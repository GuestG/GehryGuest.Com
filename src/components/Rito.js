import '../Rito.css';
import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faClock, faClipboard } from "@fortawesome/free-solid-svg-icons";

function Rito() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: -100
        });
    }, []);
    return (
        <section className="ritoSection" >
            <div id="ritoWrapper">

                <div className="headerWrapper">
                    <h1 className="introTitle">Rito</h1>
                    <p className="introSubTitle">2022-2022 | UX Research | Personas | Hi-Fidelity Prototype</p>
                </div>


                <div className="problemWrapper">
                    <h2 className="problemTitle">User Problems</h2>
                    <p className="problemText">
                        Ordering food was causing users long
                        wait times for the Rito Food Trucks.
                        Wanting to speed up the process by
                        allowing users to order beforehand.
                        Rito wanted to develope a mobile app
                        and keep the ordering process as easy
                        as possible. Being a new application with a fresh
                        design, the I wanted to understand the
                        flow of the application along with any pain
                        points the user might encounter when using the application.
            </p>
                </div>





                <div className="processWrapper">
                    <h2 className="processTitle">Process</h2>
                    <div className="processImgWrapper">
                        <div className="processImg">

                        </div>
                    </div>
                    <p className="processSubTitles">Empathize, Define, Ideate</p>
                    <p className="processText">
                        To understand the struggles of the user you need to empathize with the user
                        allowing you to see the product from their perspective.
                        Define is where we narrow down the problems users are having and why. Then in the Ideate
                        portion we design solutions for the problems found in the define phase. These
                        first steps are crucial to the identify what portions of the app need to be improved.
                    </p>
                    <p className="processSubTitles">Low Fedelity Prototype</p>
                    <p className="processText">
                        Creating an early layout of the application with no photos, minimal text just bare
                        functionality. This tests whether any early features or if navigation is a user pain point.

                    </p>
                    <p className="processSubTitles">Testing</p>
                    <p className="processText">
                        Through study sessions with users that will test the prototypes. 
                        A series of questions and tasks are given to participants and they 
                        give their feedback. This feedback is consolidated and taken into 
                        consideration for the applications improvement.
                    </p>
                    <p className="processSubTitles">High Fedelity Prototype</p>
                    <p className="processText">
                        This mockup application will contain pictures, fonts, color
                        schemes in order to make it appear as close as possible to
                        the final product. At this point the users needs should have been taken
                        into consideration and improved for the high fedelity prototype.
                    </p>
                    <p className="processSubTitles">Repeat</p>
                    <p className="processText">
                        Repeating these processes many times are how on each iteration of the application
                        are improved, though being defined, designed for, then tested. Keeping a healthy
                        flow of user feedback and building off of previous versions increases our chance
                        of building a successful product for both user and company.
                    </p>
                </div>






                <div className="userResearchWrapper">
                    <h2 className="userReaseachTitle">User Research Experience</h2>
                    <img alt=""></img>
                    {/* <p className="userReaseachText">Unmoderated Usablity Session.</p> */}
                    <p className="userReaseachSubTitles">Research Methods</p>
                    <p className="userReaseachText">
                        Through the use of unmodereated usablity sessions,
                        we answered our questions of how long does it take
                        to complete a task? What portion of the user flow causes
                        the most confusion to the user. Conducting primary research
                        for this project using methods such as time on task, use of navigation and
                        conversion rates. These methods gave the me quantitative results
                        and the viewing of the unmoderated sessions gave qualitative insights.
                </p>

                    <div className="icons">
                        {/* <div className="iconsCardWrapper"> */}
                        <div className="iconsCard" id="clock">
                            <FontAwesomeIcon icon={faClock} />
                            <p className="iconsText">Time on Task</p>
                        </div>

                        <div className="iconsCard" id="users">
                            <FontAwesomeIcon icon={faUsers} />
                            <p className="iconsText">Use of Navigation</p>
                        </div>

                        <div className="iconsCard" id="clipboard">
                            <FontAwesomeIcon icon={faClipboard} />
                            <p className="iconsText">Conversion Rate</p>
                        </div>
                        {/* </div> */}
                    </div>

                    <p className="userReaseachText">
                        With these new understandings the next iteration of
                        prototypes would be improved to address the pain points found with
                        early wireframes. Those user pain points include order review before
                        purchasing food, customization menu is lackluster and font sizes/some buttons
                        were too small. These user pain points were taken into consideration during our next
                        iteration of ideate and test phases.

                </p>

                    <p className="userReaseachSubTitles">Personas</p>
                    <p className="userReaseachText">
                        Personas were created to identify a particular user group.
                        This group included adults who during there busy work day, had little time to
                        cook their own meals. These personas are used during the creation of the app in order
                        to relate to the users, in a sense put a face to the users we tested for me to
                        empathize with.
                </p>
                </div>




                <div className="prototypeWrapper">
                    <h2 className="prototypeTitle">Prototyping</h2>
                    <p className="prototypeText">
                        During this project I learned how to use Figma. Creating wireframes,
                        both low and high fedelity prototypes. These were used to determine
                        user pain points during tests and the visual design of the application.
                        The begging stages were very bare bones with no different font and only
                        a two color scheme. Later high fedelity portions went with a warm color scheme
                        including orange as an action color, a golden yellow and white for background.
                        The font evolved into a more cowboy theme, the final version of Rito went for a more
                        minimal and open apporach rather then boxing everything together.
                </p>

                    <p className="prototypeHeaders" id="prototypeHeaders">Low-Fidelity Prototype</p>
                    <div className="cardWrapper">


                        <div className="imageCard" id="imageCard1">


                        </div>
                        <div className="imageCard" id="imageCard2">


                        </div>
                        <div className="imageCard" id="imageCard3">


                        </div>
                        <div className="imageCard" id="imageCard4">


                        </div>
                    </div>

                    <p className="prototypeHeaders" id="prototypeHeaders">High-Fidelity Prototype</p>
                    <div className="cardWrapper">
                        <div className="imageCard" id="imageCard5">


                        </div>
                        <div className="imageCard" id="imageCard6">


                        </div>
                        <div className="imageCard" id="imageCard7">


                        </div>
                        <div className="imageCard" id="imageCard8">


                        </div>
                    </div>
                </div>




                <div className="optimizationWrapper">
                    <h2 className="optimizationTitle">Results</h2>
                    <p className="optimizationText">
                        Sometimes less is more, less drop downs, a more open design,
                        visual on ingredients. This made the user expierence much simpler
                        and more visually appealing. I also learned the design process to 
                        successfully create a user application, to empathize and define problems. 
                        The tools to make prototypes such as figma taught me the visual design portion
                        of the application.


                        The most important lession I learned that users will guide your path as a UX developer. 
                        The creation of a product takes repetition of user studies to 
                        build a better and improve a product. 
                    </p>
                </div>



                <p className="footers">
                    Gehry Guest <span className="my-name-color">©2021</span>
                </p>
            </div>
        </section>
    )
}

export default Rito