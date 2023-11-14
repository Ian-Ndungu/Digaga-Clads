import React, { useState, useEffect } from 'react';
import './official.css';

function OfficialWomen() {
  const [womenOfficial, setWomenOfficial] = useState([]);
  const [filteredWomenOfficial, setFilteredWomenOfficial] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [lastDirectory, setLastDirectory] = useState('');

  useEffect(() => {
    
    fetch('https://digaga-clads.onrender.com/women/shirts') 
      .then(response => response.json())
      .then(data => {
        setWomenOfficial(data);
        setFilteredWomenOfficial(data);
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
      setFilteredWomenOfficial(womenOfficial);
    } else {
      const filtered = womenOfficial.filter(women => women.type === selectedType);
      setFilteredWomenOfficial(filtered);
    }
  }, [selectedType, womenOfficial]);

  const handleFilterChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleClickCard = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <div className="womenofficial-cards">
        {filteredWomenOfficial.map(womenOfficial => (
          <div
            key={womenOfficial.id}
            className={`womenofficial-card ${womenOfficial.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(womenOfficial.type)}
          >
            <img src={womenOfficial.product_image} alt={womenOfficial.name} />
            <h2>{womenOfficial.name}</h2>
            <p>{womenOfficial.description}</p>
            <p>Price: ${womenOfficial.unit_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfficialWomen;
