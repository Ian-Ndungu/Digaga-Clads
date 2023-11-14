import React, { useState, useEffect } from 'react';

function WomenSweatpants() {
  const [womenSweatpants, setWomenSweatpants] = useState([]);
  const [filteredWomenSweatpants, setFilteredWomenSweatpants] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [lastDirectory, setLastDirectory] = useState('');

  useEffect(() => {
    
    fetch('https://digaga-clads-main.onrender.com/men/hoodies') 
      .then(response => response.json())
      .then(data => {
        setWomenSweatpants(data);
        setFilteredWomenSweatpants(data);
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
      setFilteredWomenSweatpants(womenSweatpants);
    } else {
      const filtered = womenSweatpants.filter(sweatpants => sweatpants.type === selectedType);
      setFilteredWomenSweatpants(filtered);
    }
  }, [selectedType, womenSweatpants]);

  const handleFilterChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleClickCard = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <div className="womensweatpants-cards">
        {filteredWomenSweatpants.map(womenSweatpants => (
          <div
            key={womenSweatpants.id}
            className={`womensweatpants-card ${womenSweatpants.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(womenSweatpants.type)}
          >
            <img src={womenSweatpants.product_image} alt={womenSweatpants.name} />
            <h2>{womenSweatpants.name}</h2>
            <p>{womenSweatpants.description}</p>
            <p>Price: KES {womenSweatpants.unit_price}/=</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WomenSweatpants;
