import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className="footer">

    <div className="footer1">
        <div className="footer2">
            <div className="footer3">
                <h3>Karlos Lazaro</h3>
                <p>Daily newspaper magazine with interesting scientific articles and guides on 
                    modern technology and fashion.</p>
            </div>
            <div className="footer4">
                <div className="footer5">
                    <h4>Company</h4>
                    <a>Home page</a>
                    <a>About us</a>
                    <a>Blog</a>
                    <a>Simple posts</a>
                    <a>Shop</a>
                </div>
                <div className="footer6">
                    <h4>Categories</h4>
                    <a>Home page</a>
                    <a>About us</a>
                    <a>Blog</a>
                    <a>Simple posts</a>
                </div>
            </div>
        </div>
<div className="footer7">
    <div className="footer8">
        <div className="footer9">
            <i><FontAwesomeIcon icon={faEnvelope}/></i>
            <p>karloplazaro@yahoo.com</p>
        </div>

    </div>
    <p>
Copyright © 2021 Newspaper Magazine. All right reserved.</p>
</div>
    </div>
    </div>


   
  )
}

export default Footer