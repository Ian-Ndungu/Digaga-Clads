import React from 'react';
import './official.css';
import { useNavigate } from 'react-router-dom';

function WomenOfficial() {
  const navigate = useNavigate();

  const handleCategory = (path) => {
    navigate(path);
  };

  return (
    <div className='landing-official'>
      <h1 id='title'>Women</h1>

      <div className="all_officials-cards">
        <div id='suits-container' onClick={() => handleCategory('/women/official/suits')}>
          <img id="suitsimg" src='../images to use/women/women_suit.jpg' alt="Women Suit"/>
          <h2>Suits</h2>
        </div>

        <div id='pants-container' onClick={() => handleCategory('/women/official/pants')}>
          <img id="pantsimg" src='../images to use/women/women_pants.jpg' alt="Women Pants"/>
          <h2>Pants</h2>
        </div>

        <div id='shirt-container' onClick={() => handleCategory('/women/official/shirts')}>
          <img id="shirtsimg" src='../images to use/women/women_shirt.jpg' alt="Women Shirt"/>
          <h2>Shirt</h2>
        </div>

        <div id='shoes-container' onClick={() => handleCategory('/women/official/shoes')}>
          <img id="shoesimg" src='../images to use/women/women_shoes.jpg' alt="Women Shoes"/>
          <h2>Shoes</h2>
        </div>
      </div>
    </div>
  );
}

export default WomenOfficial;
