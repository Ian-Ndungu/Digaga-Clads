import React from 'react';
import './casual.css';
import { useNavigate } from 'react-router-dom';

function KidsCasual() {
  const navigate = useNavigate();

  const handleCategory = (path) => {
    navigate(path);
  };

  return (
    <div className='landing-casual'>
      <h1 id='title'>Kids</h1>

      <div className="all_casual-cards">
        <div id='kids-hoodies-container' onClick={() => handleCategory('/kids/casual/hoodies')}>
          <img id="kids-hoodieimg" src='../images to use/kids/kids_hoodie.jpg' alt="Kids Hoodie"/>
          <h2>Kids Hoodies</h2>
        </div>

        <div id='kids-t-shirts-container' onClick={() => handleCategory('/kids/casual/t-shirts')}>
          <img id="kids-t-shirtimg" src='../images to use/kids/kids_tshirt.jpg' alt="Kids T-shirt"/>
          <h2>Kids T-shirts</h2>
        </div>

        <div id='kids-sweats-container' onClick={() => handleCategory('/kids/casual/sweatpants')}>
          <img id="kids-sweatsimg" src='../images to use/kids/kids_sweatpants.jpg' alt="Kids Sweat Pants"/>
          <h2>Kids Sweat Pants</h2>
        </div>

        <div id='kids-shoes-container' onClick={() => handleCategory('/kids/casual/shoes')}>
          <img id="kids-shoeimg" src='../images to use/kids/kids_shoes.jpg' alt="Kids Shoes"/>
          <h2>Kids Shoes</h2>
        </div>
      </div>
    </div>
  );
}

export default KidsCasual;
