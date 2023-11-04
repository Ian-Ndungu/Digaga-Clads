import React, { useState } from 'react';

const Men = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedClothing, setSelectedClothing] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  //All is to reset the selection to default for the user.


  //test data to see functionality
  const menData = [
    {
      id: 1,
      name: 'Suits',
      category: 'Official',
      details: [
        { id: 1, color: 'Black', size: 'M' },
        { id: 2, color: 'Navy', size: 'L' },
        { id: 3, color: 'Gray', size: 'XL' },
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
      return menData;
    }
    return menData.filter((item) => item.category === selectedCategory);
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

//filtering based on the data given in the menData

  return (
    <div>
      <h1>Men's Page</h1>

      <div>
        <h2>Categories: </h2>
        <ul>
          <li>
            <button onClick={() => setSelectedCategory('All')}>All</button>
          </li>
          <li>
            <button onClick={() => setSelectedCategory('Official')}>Official</button>
          </li>
          <li>
            <button onClick={() => setSelectedCategory('Casual')}>Casual</button>
          </li>
          <li>
            <button onClick={() => setSelectedCategory('Smart Casual')}>Smart Casual</button>
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
              <button onClick={() => setSelectedClothing(item.name)}>{item.name}</button>
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
              <button onClick={() => setSelectedColor(color)}>{color}</button>
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
              <button onClick={() => setSelectedSize(size)}>{size}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Men;
