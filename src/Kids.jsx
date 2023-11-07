import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import  './kids.css'

const Kids = ({kidsData}) => 
{
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredData, setFilteredData] = useState([]);
  //All is to reset the selection to default for the user.

  const fetchData = async () => {
    try {
      const response = await fetch('Digaga-clads-url');
      if (!response.ok) {
        throw new Error('Network error!');
      }
      const data = await response.json();
      setkidsData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 
  //Empty to fetch on completion.

  useEffect(() => {
    // selectedCategory filter
    const newFilteredData = kidsData.filter((item) =>
     selectedCategory === 'All' || item.name === selectedCategory)
      .flatMap((item) => item.details);
    setFilteredData(newFilteredData);
  }, [selectedCategory, kidsData]);
  //flatMap flattens data from kids category based on category and 
  // 'compresses' the nested data array into a single array of details.

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
