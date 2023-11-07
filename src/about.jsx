import React from 'react';
import './about.css';
import ceoPicture from '../src/tools/ceo.jpg'; 
import { FaTwitter, FaInstagram, FaComments } from 'react-icons/fa';

function about() {
  return (
    <div id='About'>
        <h1 className='heads'>Our Story</h1>
        <div className='Our-Story'>
            <img src={ceoPicture} alt="Our Story" className='CEO-Image' /> 
            <div className='Story-Text'>
                <p>
                    It all started with a passion and a dream. Back in 2021 a group of like-minded individuals
                    came together with a shared vision: to Deliver quality fashion styles at all costs. With determination and
                    hard work, we embarked on a journey that would shape the future of our company.
                </p>
                <p>
                    We are grateful for the support of our customers, partners, and team members who have been an integral
                    part of our story. As we look ahead, we are excited about what the future holds and remain committed to
                    selling quality products  which reduces knockoffs in the world market.
                </p>
                <div className='icons'>
                    <FaTwitter className="twitter-icon" />
                    <FaInstagram className="instagram-icon" />
                    <FaComments className="threads-icon" />
                </div>
            </div>
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

export default about;
