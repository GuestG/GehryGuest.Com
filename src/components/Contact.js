import React, { useEffect } from 'react';
import Aos from 'aos';
// import Popup from './Popup';
import "aos/dist/aos.css";
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


function Contact() {

    useEffect(() => {   
        Aos.init({ duration: 800 });
    }, []);
    return (
        <div className="contact-wrapper" id="contact-wrapper">
            <h1 className="contact-me-title" id="contact-me-title">
                Contact Me
            </h1>
            <p className="contact-query" data-aos="fade-up" data-aos-once="true">
                Have a question or want to work together?
            </p>
     
                
            <form action="https://api.web3forms.com/submit" method="POST" className="contact-info">

                <input type="hidden" name="access_key" value="b6c2303d-fb79-4647-ab58-c7873e7f25df"></input>

                <input type="hidden" name="redirect" value="http://gehryguest.com/Popup"></input>

                <p className="input-titles">Name</p>
                <input type="text" name="name" id="name" className="name" required>
                </input>

                <p className="input-titles">Email</p>
                <input type="email" name="email" id="email" className="email" required>
                </input>

                <p className="input-titles">Message</p>
                <textarea type="text" name="textarea" id="message" className="message" required>
                </textarea>

                <button type="submit" className="btn6" id="contact-btn6">Submit</button>

    
            </form>

            <div className="backToTopLink" data-aos="fade-left" data-aos-once="true">
                {/* <Link className="nav-link" id="backToTop" to="/#header-wrapper">Return to top<span className="sr-only"></span></Link> */}
                <Link className="nav-link" id="backToTop" to="/#header-wrapper"><FontAwesomeIcon id="upArrow" icon={faArrowUp} /></Link>
            </div>


            <div className="external-links-wrapper">

                <a className="githubIcon" href='https://github.com/GuestG' data-aos="fade-right" data-aos-once="true">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className="linkedinIcon" href='https://www.linkedin.com/in/gehryguest/' data-aos="fade-left" data-aos-once="true">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>

            <div className="footerContainer">
                <p className="footers">
                    Gehry Guest <span className="my-name-color">© 2024</span>
                </p>
            </div>



        </div>
    )
}

export default Contact
