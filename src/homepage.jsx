import React from 'react';
import digagaVideo from '../src/tools/digaga.mp4';
import './homepage.css';

function Homepage() {
 return (
    <div>
      
      <div className="background-video">
        <video autoPlay muted loop className="video-element">
          <source src={digagaVideo} type="video/mp4" />
        </video>
      </div>
      <div className='footer'>
        
      </div>
    </div>
 );
}

export default Homepage;
