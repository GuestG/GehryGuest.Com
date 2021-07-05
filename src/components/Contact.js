import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
    return (
        <div className="contact-wrapper" id="contact-wrapper">
            <p className="contact-me-title" id="contact-me-title">
                Contact Me
            </p>
            <div className="contact-info">

                <input type="text" id="name" className="name" placeholder="Your Name">
                </input>
                
                <input type="text" id="email" className="email" placeholder="Your e-mail address">
                </input>

                <input id="subject" className="subject" placeholder="Subject">
                </input>

                <textarea id="message" className="message" placeholder="Type your message here..">
                </textarea>

            </div>

            <div className="button-container" id="button-container">
                <button className="submit-message" id="submit-message">
                    Submit!
                </button>
            </div>

            <div className="external-links-wrapper">
                    <a className="githubIcon" href='https://github.com/GuestG'>
                        <FontAwesomeIcon icon={["fab","github"]} />
                    </a>
                    <a className="linkedinIcon" href='https://linkedin.com/in/gehry-guest-903570177'>
                        <FontAwesomeIcon icon={["fab","linkedin"]} />
                    </a>
            </div>
        </div>
    )
}

export default Contact
