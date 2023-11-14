import React, { useState, useEffect } from 'react';
import './official.css';

function OfficialWomenShoes() {
  const [womenOfficialShoes, setWomenOfficialShoes] = useState([]);
  const [filteredWomenOfficialShoes, setFilteredWomenOfficialShoes] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [lastDirectory, setLastDirectory] = useState('');

  useEffect(() => {
    
    fetch('https://digaga-clads.onrender.com/women/shoes') 
      .then(response => response.json())
      .then(data => {
        setWomenOfficialShoes(data);
        setFilteredWomenOfficialShoes(data);
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
      setFilteredWomenOfficialShoes(womenOfficialShoes);
    } else {
      const filtered = womenOfficialShoes.filter(womenShoes => womenShoes.type === selectedType);
      setFilteredWomenOfficialShoes(filtered);
    }
  }, [selectedType, womenOfficialShoes]);

  const handleFilterChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleClickCard = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <div className="womenofficialshoes-cards">
        {filteredWomenOfficialShoes.map(womenShoes => (
          <div
            key={womenShoes.id}
            className={`womenofficialshoes-card ${womenShoes.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(womenShoes.type)}
          >
            <img src={womenShoes.product_image} alt={womenShoes.name} />
            <h2>{womenShoes.name}</h2>
            <p>{womenShoes.description}</p>
            <p>Price: ${womenShoes.unit_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfficialWomenShoes;
