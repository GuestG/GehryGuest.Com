import React from 'react';
import '../App.css';
import { HashLink as Link } from 'react-router-hash-link';

function ThankYou() {
    return (
        <section className='ThankYouSection'>
            <div className='ThankYouContainer'>
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" id="ThankYouSVG"xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.625 100.378L42.1875 76.9359L48.8109 70.3125L65.625 87.1219L101.18 51.5625L107.812 58.1953L65.625 100.378Z" fill="#00FD19" />
                    <path d="M75 9.375C62.0206 9.375 49.3327 13.2238 38.5407 20.4348C27.7487 27.6458 19.3374 37.895 14.3704 49.8864C9.4034 61.8778 8.10381 75.0728 10.636 87.8028C13.1681 100.533 19.4183 112.226 28.5961 121.404C37.7739 130.582 49.4672 136.832 62.1972 139.364C74.9272 141.896 88.1222 140.597 100.114 135.63C112.105 130.663 122.354 122.251 129.565 111.459C136.776 100.667 140.625 87.9794 140.625 75C140.625 57.5952 133.711 40.9032 121.404 28.5961C109.097 16.289 92.4048 9.375 75 9.375ZM75 131.25C63.8748 131.25 52.9994 127.951 43.7492 121.77C34.4989 115.589 27.2892 106.804 23.0318 96.5259C18.7743 86.2476 17.6604 74.9376 19.8308 64.0262C22.0012 53.1147 27.3585 43.0919 35.2252 35.2252C43.0919 27.3585 53.1147 22.0012 64.0262 19.8308C74.9376 17.6604 86.2476 18.7743 96.5259 23.0318C106.804 27.2892 115.589 34.4989 121.77 43.7492C127.951 52.9994 131.25 63.8748 131.25 75C131.25 89.9184 125.324 104.226 114.775 114.775C104.226 125.324 89.9184 131.25 75 131.25Z" fill="#00FD19" />
                </svg>
                <h1 className="projects-title" id="thankyouTitle">
                    Thank You!
                </h1>
                <p>Your message was successfully sent, I'll be in touch soon!</p>
                <div className='btnContainer'>
                    <Link className="btn6" id="contact-btn6" to="/#"> Return Home</Link>
                </div>
            </div>
        </section>
    )

}

export default ThankYou;