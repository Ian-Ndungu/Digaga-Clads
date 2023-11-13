import React from 'react';
import './smartcasual.css'
import { useNavigate } from 'react-router-dom';


function MenSmart_Casual () {
  const navigate = useNavigate();

  
  const handleCategory=(path) => {
    navigate(path)
    

  }

  return (
       
    <div className='landing-smartcasual'>
      <h1 id='title'>Men</h1>
        {/* <video autoPlay muted loop className="video-element">
          <source src={digagaVideo} type="video/mp4" />
        </video> */}
   
      <div className="all_smartcasual-cards">
        <div id='Shirt-container' onClick={() => handleCategory('/men/smartcasual/shirts')}>
          <img id="shirtimg" src='../images to use/men/tuxedo.jpg' alt="Tuxedo"/>
          <h2>Shirts</h2>
        </div>
        
        <div id='pants-container' onClick={() => handleCategory('/men/smartcasual/pants')}>
          <img id="pantsimg" src='../images to use/men/mens_casua_wallpaperl.jpg' alt="mens_casua_wallpaperl"/>
          <h2>Pants</h2>
        </div>

        <div id='Flannel-container' onClick={() => handleCategory('/men/smartcasual/flannels')}>
          <img id="flannelsimg" src='../images to use/men/shirt_men.jpg' alt="smart_casual-icon"/>
          <h2>Flannels</h2>
        </div>

        <div id='shoes-container' onClick={() => handleCategory('/men/smartcasual/shoes/')}>
          <img id="shoeimg" src='../images to use/men/shoes.jpg' alt="cabc5122775168105c44425361ca4ad3.jpg.jpg"/>
          <h2>Shoes</h2>
        </div>
      </div>
   
    </div>
  );
}

export default MenSmart_Casual;