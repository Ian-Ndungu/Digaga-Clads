import React, { useState, useEffect } from 'react';
import './men.css';

function Men () {
  const [accessories, setAccessories] = useState([]);
  const [filteredAccessories, setFilteredAccessories] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [lastDirectory, setLastDirectory] = useState('');

  useEffect(() => {
    // Fetch 
    fetch('https://digaga-clads.onrender.com/men')
      .then(response => response.json())
      .then(data => {
        setAccessories(data);
        setFilteredAccessories(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const currentURL = window.location.pathname;
    const urlParts = currentURL.split('/');
    const extractedLastDirectory = urlParts[urlParts.length - 1];
    setLastDirectory(extractedLastDirectory);
  }, []);

  useEffect(() => {
    if (selectedType === 'All') {
      setFilteredAccessories(accessories);
    } else {
      const filtered = accessories.filter(all_men => all_men.type === selectedType);
      setFilteredAccessories(filtered);
    }
  }, [selectedType, accessories]);

  const handleFilterChange = (e) => {
    setSelectedType(e.target.value);
  }

  const handleClickCard = (type) => {
    setSelectedType(type);
  }

  return (
    <div className='access'>
      <h1 id='title'>Men</h1>
      {/* <label htmlFor="typeFilter">Filter by Type:</label>
      <select id="typeFilter" onChange={handleFilterChange} value={selectedType}>
        <option value="All">All</option>
        <option value="Necklace">Necklace</option>
        <option value="Earrings">Earrings</option>
        <option value="Bracelet">Bracelet</option>
        <option value="Ring">Ring</option>
      </select> */}
      <div className="all_men-cards">
        {accessories.map(all_men => (
          <div
            key={all_men.id}
            className={`all_men-card ${all_men.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(all_men.type)}
          >
            <img src='{all_men.product_image}' />
            <h2>{all_men.name}</h2>
            <p>{all_men.description}</p>
            <p>Price: ${all_men.unit_price}</p>
          </div>
        ))}
      </div>
      print(
        <h1>Last Directory in the URL:</h1>
         <p>{lastDirectory}</p>
         )
    </div>
  );
}

export default Men;
