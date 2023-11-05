import React, { useState } from 'react';
import './men.css'
import SelectedImage from './selectedImg';
//allow for the Selected images to be called

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
  <div className="landingbg">
    <div>
      <h1>Men's Page</h1>

      <div className="categories-section">
        <h2>Categories: </h2>
        <ul>
          {menData.map((item) => (
            <li key={item.id}>
              <div className="category-alignment">
                <SelectedImage
                  imageUrl={{
                    normal: '/Suitsicon.jpeg',
                    hover: '/Suitsicon.jpeg',
                  }}
                  altText="Official category"
                  category="Official"
                  availableClothing={getAvailableClothing()}
                  onCategoryChange={setSelectedCategory}
                  onClothingChange={setSelectedClothing}
                  onColorChange={setSelectedColor}
                  onSizeChange={setSelectedSize}
                />
              </div>
            </li>
          ))};
        </ul>
      </div>
    </div>
  </div>
)
};

export default Men;

