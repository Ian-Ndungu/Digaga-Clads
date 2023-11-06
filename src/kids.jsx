import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import  './kids.css'

const Kids = ({kidsData}) => 
{
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredData = kidsData.filter((item) => {
  (selectedCategory === 'All' || item.name === selectedCategory).map(
    (item) => item.details)
  .flat();
  });
  //All is to reset the selection to default for the user.

  return (
    <div>
    <h1>Kids Products</h1>
    <div>
      <h2>Categories:</h2>
      <ul>
        <li>
          <button onClick={() => setSelectedCategory('All')}>All</button>
        </li>
        {kidsData.map((item) => (
          <li key={item.id}>
            <button onClick={() => setSelectedCategory(item.name)}>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h2>Filter by: {selectedCategory}</h2>
      {filteredData.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Color: {item.color}</p>
          <p>Size: {item.size}</p>
        </div>
      ))}
    </div>
  </div>
);
};


export default Kids;
