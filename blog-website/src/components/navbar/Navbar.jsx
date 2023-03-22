import React from 'react'
import './navbar.css'
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
        Log In
        </div>
    </div>
    </div>
  )
}

export default Navbar