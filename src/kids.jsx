import React, { useState } from 'react';
import './kids.css'

const Kids = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedClothing, setSelectedClothing] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  //All is to reset the selection to default for the user.


  //test data to see functionality
  const kidsData = [
    {
      id: 1,
      name: 'Winter Outfits',
      category: 'Official',
      details: [
        { id: 1, color: 'Black', size: 'M', image: '/home/nesh/Digaga-Clads/public/KidsofficialW1M.jpeg', // Set the actual image path
        title: 'Girls Plaid Tweed Jacket & Dress - Size M' },

        { id: 2, color: 'Navy', size: 'L', image: '/home/nesh/Digaga-Clads/public/kidsofficialW3L.jpeg', 
        title: 'Girls Bow Front Dress - Size L'},

        { id: 3, color: 'Brown', size: 'XL', image: '/home/nesh/Digaga-Clads/public/kidsofficialW4S.jpeg',
        title: 'Girls Summer Dress - size S' },

        {id: 4, color: 'Blue', size: 'L', image: '/home/nesh/Digaga-Clads/public/kidsofficialM1L.jpeg',
        title: 'Boys Jacket Coat and Jeans - Size L'},

        {id: 5, color: 'Brown', size: 'M', image: '/home/nesh/Digaga-Clads/public/kidsofficialM2M.jpeg',
        title: 'Boys Matching Jacket Coat and Jeans - Size M'},
        
        {id: 6, color: 'White', size: 'S', image: '/home/nesh/Digaga-Clads/public/kidsofficialM3S.jpeg',
        title: 'Boys Sweater Jacket with Jeans - Size S'}

      ],
    },
    {
      id: 2,
      name: 'Sweaters',
      category: 'Casual',
      details: [
        { id: 4, color: 'Red', size: 'S' },
        { id: 5, color: 'Blue', size: 'M' },
      ],
    },
    {
      id: 3,
      name: 'Hoodies',
      category: 'Smart Casual',
      details: [
        { id: 6, color: 'Black', size: 'L' },
        { id: 7, color: 'Gray', size: 'XL' },
      ],
    },
  ];

  // clothing by user selection
  const getAvailableClothing = () => {
    if (selectedCategory === 'All') {
      return kidsData;
    }
    return kidsData.filter((item) => item.category === selectedCategory);
  };

  // color by user selection
  const getAvailableColors = () => {
    if (selectedClothing === 'All') {
      return getAvailableClothing().flatMap((item) =>
        item.details.map((detail) => detail.color)
      );
    }
    return getAvailableClothing()
      .find((item) => item.name === selectedClothing)
      .details.map((detail) => detail.color);
  };

  // size by user selection
  const getAvailableSizes = () => {
    if (selectedColor === 'All') {
      return getAvailableClothing()
        .flatMap((item) => item.details.map((detail) => detail.size))
        .filter((value, index, self) => self.indexOf(value) === index);
    }
    return getAvailableClothing()
      .find((item) => item.name === selectedClothing)
      .details.filter((detail) => detail.color === selectedColor)
      .map((detail) => detail.size);
  };

//filtering based on the data given in the kidsData

const getImageForCategory = (category) => {
  switch (category) {
    case 'Official':
      return require(`../images/kidsofficial.jpeg`);
    case 'Smart Casual':
      return require(`../images/kidssmartcasual.jpeg`);
    case 'Casual':
      return require(`../images/kidscasual.jpeg`);
    default:
      return require(`../images/default.jpeg`);
  }
};
  //importing images as per user requirement. 


  return (
    <div>
      <h1>Kids's Page</h1>
      <div className="category-Official">
          {clothingData.map((item) => (
          <div key={item.id} className={`clothing-item category-${item.category}`}>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>Category: {item.category}</p>
      </div>
      ))}
    </div>


      <div>
        <h2>Categories: </h2>
        <ul>
          <li>
            <button id="mainButton" onClick={() => setSelectedCategory('All')}>All</button>
          </li>
          <li>
            <button id="mainButton" onClick={() => setSelectedCategory('Official')}>Official</button>
          </li>
          <li>
            <button id="mainButton" onClick={() => setSelectedCategory('Casual')}>Casual</button>
          </li>
          <li>
            <button id="mainButton" onClick={() => setSelectedCategory('Smart Casual')}>Smart Casual</button>
          </li>
        </ul>
      </div>

      <div>
        <h2>Clothing: </h2>
        <ul>
          <li>
            <button onClick={() => setSelectedClothing('All')}>All</button>
          </li>
          {getAvailableClothing().map((item) => (
            <li key={item.name}>
              <button id="mainButton" onClick={() => setSelectedClothing(item.name)}>{item.name}</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Colors: </h2>
        <ul>
          <li>
            <button onClick={() => setSelectedColor('All')}>All Colors</button>
          </li>
          {getAvailableColors().map((color) => (
            <li key={color}>
              <button id="mainButton" onClick={() => setSelectedColor(color)}>{color}</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Sizes: </h2>
        <ul>
          <li>
            <button onClick={() => setSelectedSize('All')}>All Sizes</button>
          </li>
          {getAvailableSizes().map((size) => (
            <li key={size}>
              <button id="mainButton" onClick={() => setSelectedSize(size)}>{size}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Kids;
