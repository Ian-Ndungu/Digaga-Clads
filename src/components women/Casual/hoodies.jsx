import React, { useState, useEffect } from 'react';

function WomenHoodies() {
  const [womenHoodies, setWomenHoodies] = useState([]);
  const [filteredWomenHoodies, setFilteredWomenHoodies] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [lastDirectory, setLastDirectory] = useState('');

  useEffect(() => {
    
    fetch('https://digaga-clads-main.onrender.com/women/hoodies') 
      .then(response => response.json())
      .then(data => {
        setWomenHoodies(data);
        setFilteredWomenHoodies(data);
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
      setFilteredWomenHoodies(womenHoodies);
    } else {
      const filtered = womenHoodies.filter(hoodie => hoodie.type === selectedType);
      setFilteredWomenHoodies(filtered);
    }
  }, [selectedType, womenHoodies]);

  const handleFilterChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleClickCard = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <div className="womenhoodies-cards">
        {filteredWomenHoodies.map(womenhoodie => (
          <div
            key={womenhoodie.id}
            className={`womenhoodies-card ${womenhoodie.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(womenhoodie.type)}
          >
            <img src={womenhoodie.product_image} alt={womenhoodie.name} />
            <h2>{womenhoodie.name}</h2>
            <p>{womenhoodie.description}</p>
            <p>Price: KES {womenhoodie.unit_price}/=</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WomenHoodies;
