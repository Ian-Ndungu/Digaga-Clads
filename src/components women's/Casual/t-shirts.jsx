import React, { useState, useEffect } from 'react';

function WomenTShirts() {
  const [womenTShirts, setWomenTShirts] = useState([]);
  const [filteredWomenTShirts, setFilteredWomenTShirts] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [lastDirectory, setLastDirectory] = useState('');

  useEffect(() => {
    
    fetch('https://digaga-clads-main.onrender.com/men/hoodies') 
      .then(response => response.json())
      .then(data => {
        setWomenTShirts(data);
        setFilteredWomenTShirts(data);
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
      setFilteredWomenTShirts(womenTShirts);
    } else {
      const filtered = womenTShirts.filter(tshirt => tshirt.type === selectedType);
      setFilteredWomenTShirts(filtered);
    }
  }, [selectedType, womenTShirts]);

  const handleFilterChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleClickCard = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <div className="womentshirt-cards">
        {filteredWomenTShirts.map(womenTShirt => (
          <div
            key={womenTShirt.id}
            className={`womentshirt-card ${womenTShirt.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(womenTShirt.type)}
          >
            <img src={womenTShirt.product_image} alt={womenTShirt.name} />
            <h2>{womenTShirt.name}</h2>
            <p>{womenTShirt.description}</p>
            <p>Price: KES {womenTShirt.unit_price}/=</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WomenTShirts;
