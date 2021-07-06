import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return (   
        
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
            
            <div className="container-fluid">

                <p className="my-name">Gehry Guest</p>

                <button className="navbar-toggler ms-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* uncomment this to just have regular hamburger. */}
                    <span className="navbar-toggler-icon"></span>
                    {/* <FontAwesomeIcon icon={["fab","faBars"]}/>    */}
                </button>

                

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ms-auto">
                    
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#project-wrapper">Projects</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#about-wrapper">About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contact-wrapper">Contact</a>
                        </li>
                    </ul>         
                </div>
                
            </div>
            
        </nav>
    )
}

export default Navbar
