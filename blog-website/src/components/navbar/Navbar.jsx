import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  return (
  <div className="header">
    <div className='Navbar'>
        <div className="appear">
        
           <a href='#' className='title'>Karlos Lazaro.</a>  
        
        <div className="pages">
            <a href="#" >Home</a>
            <a href="#" >Projects</a>
            <a href="#" >Posts</a>
            <a href="#" >About Me</a>
        </div>
        Log In
        </div>
    </div>
    </div>
  )
}

export default Navbar