import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: -100
        });
    }, []);
    return (
        <div className="contact-wrapper" id="contact-wrapper">
            <h1 className="contact-me-title" id="contact-me-title">
                Contact Me
            </h1>
            <p className="contact-query" data-aos="fade-up">
                Have a question or want to work together?
            </p>
            {/* <div className="contact-info"> */}
            <form action="https://formsubmit.co/e231169454c6ef1a337769280ec551af" method="POST" className="contact-info">

                {/* make to where it goes back to homepage and ignores capchta. */}

                    <input type="hidden" name="_captcha" value="false">
                    </input>
                        <input type="hidden" name="_next" value="https://guestg.github.io/GehryGuestPortfolio/">
                        </input>

                        {/* <label for="name" className="form-placeholder">Name</label> */}
                        <p className="input-titles">Name</p>
                        <input type="text" name="name" id="name" className="name" required>
                        </input>

                        {/* <label for="email" className="form-placeholder">Email</label> */}
                        <p className="input-titles">Email</p>
                        <input type="email" name="email" id="email" className="email" required>
                        </input>

                        {/* <label for="textarea" className="form-placeholder">Message</label> */}
                        <p className="input-titles">Message</p>
                        <textarea type="text" name="textarea" id="message" className="message" required>
                        </textarea>
                        
                        <input type="hidden" name="_next" value="http://localhost:3000/">
                        </input>

                        <button type="submit" className="submit-message" id="submit-message">
                            Submit
                    </button>
                </form>

                    {/* </div> */}



                    <div className="external-links-wrapper">
                        <a className="githubIcon" href='https://github.com/GuestG' data-aos="fade-right">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                        </a>
                        <a className="linkedinIcon" href='https://linkedin.com/in/gehry-guest-903570177' data-aos="fade-left">
                            <FontAwesomeIcon icon={["fab", "linkedin"]} />
                        </a>
                    </div>
                    <p className="footers">
                        Gehry Guest <span className="my-name-color">©2021</span>
                    </p>
        </div>
    )
}

export default Contact
