import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
    useEffect(() => {
        Aos.init({duration: 1000,
                  offset: -100});
    }, []);
    return (
        <div className="contact-wrapper" id="contact-wrapper">
            <h1 className="contact-me-title" id="contact-me-title" data-aos="fade-up">
                Contact Me
            </h1>
           
            <div className="contact-info">

                <input type="text" id="name" className="name" placeholder="Your Name" >
                </input>
                
                <input type="text" id="email" className="email" placeholder="Your e-mail address" >
                </input>

                <textarea id="message" className="message" placeholder="Type your message here.." >
                </textarea>
                <div className="button-container" id="button-container" data-aos="fade-left">
                    <button className="submit-message" id="submit-message">
                        Submit
                    </button>
                </div>
            </div>

            

            <div className="external-links-wrapper">
                    <a className="githubIcon" href='https://github.com/GuestG' data-aos="fade-right">
                        <FontAwesomeIcon icon={["fab","github"]} />
                    </a>
                    <a className="linkedinIcon" href='https://linkedin.com/in/gehry-guest-903570177' data-aos="fade-left">
                        <FontAwesomeIcon icon={["fab","linkedin"]} />
                    </a>
            </div>
            <p className="footers">
                Gehry Guest <span className="my-name-color">©2021</span>
            </p>
        </div>
    )
}

export default Contact
