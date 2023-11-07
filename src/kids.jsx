import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import  './kids.css'

const Kids = () => 
{
  useParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredData = Kids.filter((item) => {
  (selectedCategory === 'All' || item.name === selectedCategory).map(
  (item) => item.details)
  .flat();
  });

  //flat 'compresses' the nested arrays to a single array
  // for the needed data. 

  const fetchData = async () => {
    try {
      const response = await fetch('digaga-clads-url');
      if (!response.ok) {
        throw new Error('Network error!');
      }
      const data = await response.json();
      setKids(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); //Empty to feetch on completion.

  useEffect(() => {
    // selectedCategory filter
    const newFilteredData = Kids.filter((item) => {
      return selectedCategory === 'All' || item.name === selectedCategory;
    });
    setFilteredData(newFilteredData);
  }, [selectedCategory]);
    // API fetch function.

  return (
    <div>
    <h1>Kid's Products</h1>
    <div>
      <h2>Categories:</h2>
      <ul>
        <li>
          <button onClick={() => setSelectedCategory('All')}>All</button>
        </li>
        {Kids.map((item) => (
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
