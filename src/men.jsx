import React, { useState } from 'react';

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

const Men = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setSelectedColor('All'); 
    setSelectedSize('All'); 
  };

  const handleColorFilter = (color) => {
    setSelectedColor(color);
  };

  const handleSizeFilter = (size) => {
    setSelectedSize(size);
  };

  const filteredCategories = selectedCategory === 'All'
    ? menData
    : menData.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <h1>Men's Page</h1>

      <div>
        <h2>Categories</h2>
        <ul>
          <li>
            <button onClick={() => handleCategoryFilter('Official')}>Official</button>
          </li>
          <li>
            <button onClick={() => handleCategoryFilter('Casual')}>Casual</button>
          </li>
          <li>
            <button onClick={() => handleCategoryFilter('Smart Casual')}>Smart Casual</button>
          </li>
        </ul>
      </div>

      <div>
        <h2>Colors</h2>
        <ul>
          <li>
            <button onClick={() => handleColorFilter('All')}>All Colors</button>
          </li>
          {filteredCategories.flatMap(item => item.details.map(detail => detail.color))
            .filter((color, index, self) => self.indexOf(color) === index)
            .map((color) => (
              <li key={color}>
                <button onClick={() => handleColorFilter(color)}>
                  {color}
                </button>
              </li>
            ))}
        </ul>
      </div>

      <div>
        <h2>Sizes</h2>
        <ul>
          <li>
            <button onClick={() => handleSizeFilter('All')}>All Sizes</button>
          </li>
          {filteredCategories.flatMap(item => item.details.map(detail => detail.size))
            .filter((size, index, self) => self.indexOf(size) === index)
            .map((size) => (
              <li key={size}>
                <button onClick={() => handleSizeFilter(size)}>
                  {size}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Men;
