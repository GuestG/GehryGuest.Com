import React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';

function BackToTopButton() {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {

        Aos.init({ duration: 800 })

        window.addEventListener("scroll", () => {
            if(window.scrollY > 400) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return<div className="App">

        {backToTopButton && (
            <button className="backToTopButtonProjects" onClick={scrollUp} data-aos="fade-left" data-aos-once="true"><FontAwesomeIcon id="upArrowProjects" icon={faArrowUp} /></button>
        )}
    </div>;
}

export default BackToTopButton;