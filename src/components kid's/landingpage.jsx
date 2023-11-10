import React from 'react';
import './kids.css';
import { useNavigate } from 'react-router-dom';


function Kids () {
  const navigate = useNavigate();

  
  const handleCategory=(path) => {
    navigate(path)
    

  }

  return (
       
    <div className='kids'>
      <h1 id='title'>Kids</h1>
   
      <div className="all-kids">
        <div id='official-container' onClick={() => handleCategory('/official')}>
          <img id="officialimg" src='images to use/men/tuxedo.jpg' alt="Tuxedo"/>
          <h2>Official</h2>
        </div>
        
        <div id='casual-container' onClick={() => handleCategory('/casual')}>
          <img id="casualimg" src='images to use/men/mens_casua_wallpaperl.jpg' alt="mens_casua_wallpaperl"/>
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

export default Kids;
