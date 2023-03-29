import React from 'react'
import image from '../../assets/image.jpeg'
import html from '../../assets/html.jpeg'
import inventory from '../../assets/inventory.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import MainLayout from '../../layout/MainLayout'
import './projects.css'

function Projects (){
  return (
    <MainLayout>
        <div className="container-projects">
          <div className="projects-main">
            <h3>Personal Projects</h3>
            <p>In this section you will find all the latest projects made by Karlos Lazaro. 
              I hope you'll learn something.</p>

            <div className="sample">
              <img src={inventory}></img>
            <p id='date'> 11 December 2011 </p>  
            <p id='title'>Sales & Inventory Management System</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sapien efficitur mi rutrum volutpat. 
              Nulla non augue vulputate, semper magna et, volutpat lacus. Cras commodo ipsum sed tincidunt lobortis. 
              Duis fringilla nisi eget nisi gravida consectetur. 
              Praesent in pulvinar orci, ac viverra massa. </p>
              <div className="readbutton">
              <a id='readlink' >
                <p id='readmore'>Read more</p> <i id='readicon'> <FontAwesomeIcon icon={faCircleArrowRight}/></i>
              
              </a>
              </div>
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
          
        </div>
    </MainLayout>
  )
}

export default Projects