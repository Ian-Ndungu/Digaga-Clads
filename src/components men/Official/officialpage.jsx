import React from 'react';
import './official.css'
import { useNavigate } from 'react-router-dom';


function MenOfficial () {
  const navigate = useNavigate();

  
  const handleCategory=(path) => {
    navigate(path)
    

  }

  return (
       
    <div className='landing-official'>
      <h1 id='title'>Men</h1>
        {/* <video autoPlay muted loop className="video-element">
          <source src={digagaVideo} type="video/mp4" />
        </video> */}
   
      <div className="all_officials-cards">
        <div id='suits-container' onClick={() => handleCategory('/official')}>
          <img id="officialimg" src='images to use/men/tuxedo.jpg' alt="Tuxedo"/>
          <h2>Suits</h2>
        </div>
        
        <div id='pants-container' onClick={() => handleCategory('/casual')}>
          <img id="casualimg" src='images to use/men/mens_casua_wallpaperl.jpg' alt="mens_casua_wallpaperl"/>
          <h2>Pants</h2>
        </div>

        <div id='shirt-container' onClick={() => handleCategory('/smart-casual')}>
          <img id="smart-casualimg" src='images to use/men/shirt_men.jpg' alt="smart_casual-icon"/>
          <h2>Shirt</h2>
        </div>

        <div id='shoes-container' onClick={() => handleCategory('/smart-casual')}>
          <img id="smart-casualimg" src='images to use/men/shoes.jpg' alt="cabc5122775168105c44425361ca4ad3.jpg.jpg"/>
          <h2>Shoes</h2>
        </div>
      </div>
   
    </div>
  );
}

export default MenOfficial;