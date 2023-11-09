import React from 'react'
import { FaTwitter, FaInstagram, FaComments } from 'react-icons/fa';
import './footer.css';


function Footer() {
  return (
    <div id='footer'>
        <footer>
          <FaTwitter className="twitter-icon" />
          <FaInstagram className="instagram-icon" />
          <FaComments className="threads-icon" />
          <p>&copy; 2019 Copyright by Digaga</p>
        </footer>
    </div>
  )
}

export default Footer