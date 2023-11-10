import React, { useState, useEffect } from 'react';
import './accessories.css';

function FashionAccessories() {
  const [accessories, setAccessories] = useState([]);
  const [filteredAccessories, setFilteredAccessories] = useState([]);
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    // Fetch 
    fetch('https://digaga-clads-main.onrender.com/accessories')
      .then(response => response.json())
      .then(data => {
        setAccessories(data);
        setFilteredAccessories(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (selectedType === 'All') {
      setFilteredAccessories(accessories);
    } else {
      const filtered = accessories.filter(accessory => accessory.type === selectedType);
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
      <h1>Fashion Accessories</h1>
      <label htmlFor="typeFilter">Filter by Type:</label>
      <select id="typeFilter" onChange={handleFilterChange} value={selectedType}>
        <option value="All">All</option>
        <option value="Necklace">Necklace</option>
        <option value="Earrings">Earrings</option>
        <option value="Bracelet">Bracelet</option>
        <option value="Ring">Ring</option>
      </select>
      <div className="accessory-cards">
        {accessories.map(accessory => (
          <div
            key={accessory.id}
            className={`accessory-card ${accessory.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(accessory.type)}
          >
            <h2>{accessory.name}</h2>
            <p>{accessory.description}</p>
            <p>Price: ${accessory.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FashionAccessories;
