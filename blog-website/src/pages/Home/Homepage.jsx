import React from 'react'
import './homepage.css'
import Navbar from '../../components/navbar/Navbar'
import image from '../../assets/image.jpeg'

const Homepage = () => {
  return (
    
    <div className='body'>
        < Navbar/>

        <div className="picture">
          <div className="image">
            <img src={image}></img>
          </div>
        </div>

        
    </div>
  )
}

export default Homepage