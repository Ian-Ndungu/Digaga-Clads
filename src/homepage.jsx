import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import digagaVideo from '../src/tools/digaga.mp4';
import Navbar from './navbar'; 
import Cart from './cart'
import './homepage.css';
import { FaTwitter, FaInstagram, FaComments } from 'react-icons/fa';

function Homepage() {
 return (
    <div>
      <Router>
       <div>
        <Navbar />
          <Cart/>
        </div>
      </Router>
      <div className="background-video">
        <video autoPlay muted loop className="video-element">
          <source src={digagaVideo} type="video/mp4" />
        </video>
      </div>
      <div className='footer'>
        <footer>
          <FaTwitter className="twitter-icon" />
          <FaInstagram className="instagram-icon" />
          <FaComments className="threads-icon" />
          <p>&copy; 2019 Copyright by Digaga</p>
        </footer>
      </div>
    </div>
 );
}

export default Homepage;
