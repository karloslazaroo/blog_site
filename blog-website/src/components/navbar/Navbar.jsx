import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  <div className="header">
    <div className='Navbar'>
        <div className="appear">
        
           <a href='#' className='title'>Karlos Lazaro.</a>  
        
        <div className="pages">
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/aboutme'>About Me</Link>
        </div>
        <div className="socials">
        <i><FontAwesomeIcon icon={faFacebookF} /></i>
        <i><FontAwesomeIcon icon={faInstagram} /></i>
        <i><FontAwesomeIcon icon={faLinkedinIn} /></i>
        <i><FontAwesomeIcon icon={faTwitter} /></i>
        


        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar