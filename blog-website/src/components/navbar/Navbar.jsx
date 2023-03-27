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
       <a href='https://www.facebook.com/karloslazaroo'><i><FontAwesomeIcon icon={faFacebookF} /></i></a>
       <a href='https://www.instagram.com/karloslazaroo'><i><FontAwesomeIcon icon={faInstagram} /></i></a>
       <a href='https://www.linkedin.com/in/karlos-lazaro-06ba29260/'><i><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
       <a href='https://www.twitter.com/karloslazaroo'><i><FontAwesomeIcon icon={faTwitter} /></i></a>
        


        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar