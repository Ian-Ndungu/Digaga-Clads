import React from 'react';
import './men.css';
import { useNavigate } from 'react-router-dom';


function Men () {
  const navigate = useNavigate();

  
  const handleCategory=(path) => {
    navigate(path)
    

  }

  return (
       
    <div className='men'>
      <h1 id='title'>Men</h1>
   
      <div className="all_men-cards">
        <div id='official-container' onClick={() => handleCategory('/men/official')}>
          <img id="officialimg" src='images to use/men/tuxedo.jpg' alt="Tuxedo"/>
          <h2>Official</h2>
        </div>
        
        <div id='casual-container' onClick={() => handleCategory('/casual')}>
        <img id='casualimg' src="https://images.pexels.com/photos/6311687/pexels-photo-6311687.jpeg" alt="Man in Denim Jacket and Jeans"/>          
        <h2>Casual</h2>
        </div>

        <div id='smart_casual-container' onClick={() => handleCategory('/smart-casual')}>
          <img id="smart-casualimg" src='images to use/men/smart_casual- icon.jpg' alt="smart_casual-icon"/>
          <h2>Smart Casual</h2>
        </div>
      </div>
   
    </div>
  );
}

export default Men;
