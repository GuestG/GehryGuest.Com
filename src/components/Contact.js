import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
    return (
        <div className="contact-wrapper" id="contact-wrapper">
            <div className="contact-info">

            
                <div className="external-links">
                    <a href='https://github.com/GuestG'>
                        <FontAwesomeIcon icon={["fab","github"]}/>
                    </a>
                    <a href='https://linkedin.com/in/gehry-guest-903570177'>
                        <FontAwesomeIcon icon={["fab","linkedin"]}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
