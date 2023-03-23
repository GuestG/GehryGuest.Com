import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Pdf from "/Users/gehryguest/GuestG_Portfolio/portfolio/src/resume/GehryGuestResume.pdf";

const Navbar = () => {
    return (

        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">

            <div className="container-fluid">

                <Link className="my-name" to="/#header-wrapper">Gehry Guest</Link>

                <button className="navbar-toggler ms-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <link href="https://use.fontawesome.com/releases/v5.0.4/css/all.css" rel="stylesheet"></link>
                    <i className="fas fa-bars fa-lg"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item active" id="home">
                            <Link className="nav-link" to="/#header-wrapper">Home<span className="sr-only"></span></Link>
                        </li>

                        <li className="nav-item" id="projects">
                            <Link className="nav-link" to="/#project-wrapper">Work<span className="sr-only"></span></Link>
                        </li>

                        <li className="nav-item" id="about" >
                            <Link className="nav-link" to="/#about-wrapper">About<span className="sr-only"></span></Link>
                        </li>

                        <li className="nav-item" id="contact">
                            <Link className="nav-link" to="/#contact-wrapper">Contact<span className="sr-only"></span></Link>
                        </li>

                        <li className="nav-item" id="resume">
                            <a className="nav-link" href={Pdf} target="_blank" rel="noreferrer">Resume</a>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default Navbar
