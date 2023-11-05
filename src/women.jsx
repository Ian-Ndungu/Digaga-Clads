import React, { useState } from 'react';
import './women.css';
import SelectedImage from './selectedImg';

const Women = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedClothing, setSelectedClothing] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');

  const womenData = [
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

  const getAvailableClothing = () => {
    if (selectedCategory === 'All') {
      return womenData;
    }
    return womenData.filter((item) => item.category === selectedCategory);
  };

  const getAvailableColor = () => {
    if (selectedClothing === 'All') {
      return getAvailableClothing()
        .flatMap((item) => item.details.map((detail) => detail.color));
    }
    return getAvailableClothing()
      .find((item) => item.name === selectedClothing)
      .details.map((detail) => detail.color);
  };

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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedClothing('All');
    setSelectedColor('All');
    setSelectedSize('All');
  };

  const handleClothingChange = (clothing) => {
    setSelectedClothing(clothing);
    setSelectedColor('All');
    setSelectedSize('All');
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="landingbg">
      <div>
        <h1>Women's Page</h1>

        <div className="categories-section">
          <h2>Categories: </h2>
          <ul>
            {['Official', 'Smart Casual', 'Casual'].map((item) => (
              <li key={item.id}>
                <div className="category-alignment">
                  <SelectedImage
                    imageUrl={{
                      normal: `/home/nesh/Digaga-Clads/public/womenlanding.jpeg`,
                      hover: `/home/nesh/Digaga-Clads/public/womenlanding.jpeg`,
                    }}
                    altText={`${item.category} category`}
                    category={item.name}
                    availableClothing={getAvailableClothing(item.category)}
                    onCategoryChange={handleCategoryChange}
                    onClothingChange={handleClothingChange}
                    onColorChange={handleColorChange}
                    onSizeChange={handleSizeChange}
                  />
                  <p>{item.category}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Women;
