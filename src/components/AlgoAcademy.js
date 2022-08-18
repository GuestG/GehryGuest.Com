import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import '../css/projects.css';

function AlgoAcademy() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: -100
        });
    }, []);
    return (
        <section className="bodySection" >
            <div id="bodyWrapper">

                <div className="introWrapper">
                    <h1 className="introTitle">AlgoAcademy</h1>
                    <p className="introSubTitle">2022 | Web Design | Interview Course</p>
                    <h1 className="introTitle">This project is in the works.</h1>
                </div>
            </div>
        </section>
        )
    }
    
    export default AlgoAcademy

