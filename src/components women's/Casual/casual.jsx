import React from 'react';
import './casual.css';
import { useNavigate } from 'react-router-dom';

function WomenCasual() {
  const navigate = useNavigate();

  const handleCategory = (path) => {
    navigate(path);
  };

  return (
    <div className='landing-casual'>
      <h1 id='title'>Women</h1>

      <div className="all_casual-cards">
        <div id='hoodies-container' onClick={() => handleCategory('/women/casual/hoodies')}>
          <img id="hoodieimg" src='../images to use/women/women_hoodie.jpg' alt="Women Hoodie"/>
          <h2>Hoodies</h2>
        </div>

        <div id='t-shirts-container' onClick={() => handleCategory('/women/casual/t-shirts')}>
          <img id="t-shirtimg" src='../images to use/women/women_tshirt.jpg' alt="Women T-shirt"/>
          <h2>T-shirts</h2>
        </div>

        <div id='sweats-container' onClick={() => handleCategory('/women/casual/sweatpants')}>
          <img id="sweatsimg" src='../images to use/women/women_sweatpants.jpg' alt="Women Sweat Pants"/>
          <h2>Sweat Pants</h2>
        </div>

        <div id='shoes-container' onClick={() => handleCategory('/women/casual/shoes')}>
          <img id="shoeimg" src='../images to use/women/women_shoes.jpg' alt="Women Shoes"/>
          <h2>Shoes</h2>
        </div>
      </div>
    </div>
  );
}

export default WomenCasual;
