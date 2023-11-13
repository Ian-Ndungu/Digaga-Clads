import React from 'react';
import './casual.css'
import { useNavigate } from 'react-router-dom';


function MenCasual () {
  const navigate = useNavigate();

  
  const handleCategory=(path) => {
    navigate(path)
    

  }

  return (
       
    <div className='landing-casual'>
      <h1 id='title'>Men</h1>
        {/* <video autoPlay muted loop className="video-element">
          <source src={digagaVideo} type="video/mp4" />
        </video> */}
   
      <div className="all_casual-cards">
        <div id='hoodies-container' onClick={() => handleCategory('/men/casual/hoodies')}>
          <img id="hoodieimg" src='../images to use/men/tuxedo.jpg' alt="Tuxedo"/>
          <h2>Hoodies</h2>
        </div>
        
        <div id='t-shirts-container' onClick={() => handleCategory('/men/casual/t-shirts')}>
          <img id="t-shirtimg" src='images to use/men/mens_casua_wallpaperl.jpg' alt="mens_casua_wallpaperl"/>
          <h2>T-shirts</h2>
        </div>

        <div id='sweats-container' onClick={() => handleCategory('/men/casual/sweatpants')}>
          <img id="sweatsimg" src='images to use/men/shirt_men.jpg' alt="smart_casual-icon"/>
          <h2>Sweat Pants</h2>
        </div>

        <div id='shoes-container' onClick={() => handleCategory('/men/casual/shoes/')}>
          <img id="shoeimg" src='images to use/men/shoes.jpg' alt="cabc5122775168105c44425361ca4ad3.jpg.jpg"/>
          <h2>Shoes</h2>
        </div>
      </div>
   
    </div>
  );
}

export default MenCasual;