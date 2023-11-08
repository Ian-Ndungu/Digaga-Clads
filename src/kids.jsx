import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './kids.css';
import kidsData from './kidsData';

const Kids = () => 
{
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedName, setSelectedName] = useState('All');
  const [filteredData, setFilteredData] = useState([]);
  const [Kids, setKids] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5173/kids`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setkids(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
      const jsonData = await response.json();
      setFilteredData(jsonData);
  };


  useEffect(() => {
    fetchData();
  }, [category]);

  const filterByColor = (color) => {
    const filtered = Kids.filter((item) => item.details.some((detail) => detail.color === color));
    setFilteredData(filtered);
  };

  const filterBySize = (size) => {
    const filtered = Kids.filter((item) => item.details.some((detail) => detail.size === size));
    setFilteredData(filtered);
  };

  const getUniqueName= (data) => {
    const name= data.map((item) => item.name);
    return [...new Set(name)];
  };
  //Populate by selected product

  const getUniqueCategory= (data) => {
    const category= data.map((item) => item.category);
    return [...new Set(category)];
  };
  //populate by selected ctaegory

    //to get data from the kidsData.


  //-------- SETUP OF FUNCTIONS, DEPENDENCIES AND NECESSARY STATEMENTS ----------//------------//
  let content = null;

  if (selectedName === 'All') {
    content = (
      <div>
        <h3>Clothing for {selectedName}</h3>
        {filteredData.map((item) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>Color: {item.color}</p>
            <p>Size: {item.size}</p>
          </div>
        ))}
      </div>
    );
  } else {
    content = <div>null</div>;
  }

  return (
    <div className='landing-page'>
      <h1>Kids's Products</h1>
      <div>
      <h2>Filter by: {selectedName}</h2> 
      <select
      value={selectedName}
      onChange={(e) => setSelectedName(e.target.value)}
    >
      <option value="All">All Categories</option>
      {getUniqueName(kidsData).map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>

  {filteredData
    .filter((item) => item.name === selectedName)
    .map((item) => (
      <div key={item.id}>
        <h4>{item.title}</h4>
        <p>Color: {item.color}</p>
        <p>Size: {item.size}</p>
      </div>
    ))}

      <input
        type="text"
        placeholder="Show products.."
        value={filteredData}
        onChange={(e) => filteredData(e.target.value)}
      />

      {filteredData
        .filter(
          (item) =>
            item.name === selectedCategory &&
            (filteredData === '' ||
              item.title.toLowerCase().includes(filteredData.toLowerCase()))
        )
        .map((item) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>Color: {item.color}</p>
            <p>Size: {item.size}</p>
          </div>
        ))}
    </div>


        <div className='landing-page'>
          <h3>Filter by Product:</h3>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            {getUniqueCategory(kidsData).map((details) => (
              <option key={details} value={details}>
                {details}
              </option>
            ))}
          </select>
        </div>
      </div>
  );
            }
export default Kids;