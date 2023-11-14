import React, { useState, useEffect } from 'react';
import './official.css';

function OfficialWomenSuits() {
  const [womenSuits, setWomenSuits] = useState([]);
  const [filteredWomenSuits, setFilteredWomenSuits] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [lastDirectory, setLastDirectory] = useState('');

  useEffect(() => {
    
    fetch('https://digaga-clads-main.onrender.com/women/suits') 
      .then(response => response.json())
      .then(data => {
        setWomenSuits(data);
        setFilteredWomenSuits(data);
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
      setFilteredWomenSuits(womenSuits);
    } else {
      const filtered = womenSuits.filter(womenSuit => womenSuit.type === selectedType);
      setFilteredWomenSuits(filtered);
    }
  }, [selectedType, womenSuits]);

  const handleFilterChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleClickCard = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <div className="womensuits-cards">
        {filteredWomenSuits.map(womenSuit => (
          <div
            key={womenSuit.id}
            className={`womensuits-card ${womenSuit.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(womenSuit.type)}
          >
            <img src={womenSuit.product_image} alt={womenSuit.name} />
            <h2>{womenSuit.name}</h2>
            <p>{womenSuit.description}</p>
            <p>Price: ${womenSuit.unit_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfficialWomenSuits;
