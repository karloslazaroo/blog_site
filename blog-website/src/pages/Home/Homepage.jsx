import React from 'react'
import './homepage.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import image from '../../assets/image.jpeg'
import html from '../../assets/html.jpeg'
import inventory from '../../assets/inventory.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'

const Homepage = () => {
  return (
    
    <div className='body'>
        < Navbar/>

        <div className="picture">
          <div className="image">
            <img src={image}></img>
          </div>
        </div>

        <div className="container">
          <div className="projects">
            <h3>Personal Projects</h3>
            <p>In this section you will find all the latest articles added by our blog specialists. 
              We invite you to read.</p>

            <div className="sample">
              <img src={inventory}></img>
            <p id='date'> 11 December 2011 </p>  
            <p id='title'>Sales & Inventory Management System</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sapien efficitur mi rutrum volutpat. 
              Nulla non augue vulputate, semper magna et, volutpat lacus. Cras commodo ipsum sed tincidunt lobortis. 
              Duis fringilla nisi eget nisi gravida consectetur. 
              Praesent in pulvinar orci, ac viverra massa. </p>
              
              <a id='readlink' >
                <p id='readmore'>Read more</p> <i id='readicon'> <FontAwesomeIcon icon={faCircleArrowRight}/></i>
              
              </a>
              </div>

              <div className="sample">
              <img src={inventory}></img>
            <p id='date'> 11 December 2011 </p>  
            <p id='title'>Sales & Inventory Management System</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sapien efficitur mi rutrum volutpat. 
              Nulla non augue vulputate, semper magna et, volutpat lacus. Cras commodo ipsum sed tincidunt lobortis. 
              Duis fringilla nisi eget nisi gravida consectetur. 
              Praesent in pulvinar orci, ac viverra massa. </p>
              <a id='readlink'>
                <p id='readmore'>Read more</p> <i id='readicon'><FontAwesomeIcon icon={faCircleArrowRight} /></i>
              
              </a>
              </div>

              <div className="sample">
              <img src={inventory}></img>
            <p id='date'> 11 December 2011 </p>  
            <p id='title'>Sales & Inventory Management System</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sapien efficitur mi rutrum volutpat. 
              Nulla non augue vulputate, semper magna et, volutpat lacus. Cras commodo ipsum sed tincidunt lobortis. 
              Duis fringilla nisi eget nisi gravida consectetur. 
              Praesent in pulvinar orci, ac viverra massa. </p>
              <a id='readlink'>
                <p id='readmore'>Read more</p> <i id='readicon'><FontAwesomeIcon icon={faCircleArrowRight} /></i>
              
              </a>
              </div>

          </div>
          <div className="posts">
            <div className="text">
            <h2>Blog Posts</h2>
            </div>

            <div className="sample">
              <img src={html}></img>
            <p id='date'> 11 December 2011 </p>  
            <p id='title'>Sales & Inventory Management System</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sapien efficitur mi rutrum volutpat. 
              Nulla non augue vulputate, semper magna et, volutpat lacus. Cras commodo ipsum sed tincidunt lobortis. 
              Duis fringilla nisi eget nisi gravida consectetur. 
              Praesent in pulvinar orci, ac viverra massa. </p>
              <a id='readlink'>
                <p id='readmore'>Read more</p> <i id='readicon'><FontAwesomeIcon icon={faCircleArrowRight} /></i>
              
              </a>
              </div>

              <div className="sample">
              <img src={html}></img>
            <p id='date'> 11 December 2011 </p>  
            <p id='title'>Sales & Inventory Management System</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sapien efficitur mi rutrum volutpat. 
              Nulla non augue vulputate, semper magna et, volutpat lacus. Cras commodo ipsum sed tincidunt lobortis. 
              Duis fringilla nisi eget nisi gravida consectetur. 
              Praesent in pulvinar orci, ac viverra massa. </p>
              <a id='readlink'>
                <p id='readmore'>Read more</p> <i id='readicon'><FontAwesomeIcon icon={faCircleArrowRight} /></i>
              
              </a>
              </div>

              <div className="sample">
              <img src={html}></img>
            <p id='date'> 11 December 2011 </p>  
            <p id='title'>Sales & Inventory Management System</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sapien efficitur mi rutrum volutpat. 
              Nulla non augue vulputate, semper magna et, volutpat lacus. Cras commodo ipsum sed tincidunt lobortis. 
              Duis fringilla nisi eget nisi gravida consectetur. 
              Praesent in pulvinar orci, ac viverra massa. </p>
              <a id='readlink'>
                <p id='readmore'>Read more</p> <i id='readicon'><FontAwesomeIcon icon={faCircleArrowRight} /></i>
              
              </a>
              </div>

          </div>
        </div>

       <Footer/>

        
    </div>
  )
}

export default Homepage