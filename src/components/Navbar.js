import React from "react"

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// figure out why its not importing rabars, i have two react fontawesome libarays
//import { faBars } from "@fontawesome/fontawesome-free-solid";
//only crashes on above, for no reasn.
import {faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands';

// var FontAwesome = require('react-fontawesome')
/* <a href='https://github.com/yourusernamehere'>
  <FontAwesomeIcon className ='font-awesome' icon={faGithub} />
</a> */
const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* uncomment this to just have regular hamburger. */}
                    <span className="navbar-toggler-icon"></span>
                    
                    {/* <FontAwesomeIcon
                        className="super-crazy-colors"
                        name='faGithub'
                        size="2x"
                        spin
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    /> */}
                    
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>         
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar
