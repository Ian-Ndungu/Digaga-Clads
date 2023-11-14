import React, { useState, useEffect } from 'react';

function WomenCasualShoes() {
  const [womenShoes, setWomenShoes] = useState([]);
  const [filteredWomenShoes, setFilteredWomenShoes] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [lastDirectory, setLastDirectory] = useState('');

  useEffect(() => {
    
    fetch('https://digaga-clads-main.onrender.com/men/hoodies') 
      .then(response => response.json())
      .then(data => {
        setWomenShoes(data);
        setFilteredWomenShoes(data);
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
      setFilteredWomenShoes(womenShoes);
    } else {
      const filtered = womenShoes.filter(shoe => shoe.type === selectedType);
      setFilteredWomenShoes(filtered);
    }
  }, [selectedType, womenShoes]);

  const handleFilterChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleClickCard = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <div className="womenshoes-cards">
        {filteredWomenShoes.map(womenShoe => (
          <div
            key={womenShoe.id}
            className={`womenshoes-card ${womenShoe.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(womenShoe.type)}
          >
            <img src={womenShoe.product_image} alt={womenShoe.name} />
            <h2>{womenShoe.name}</h2>
            <p>{womenShoe.description}</p>
            <p>Price: KES {womenShoe.unit_price}/=</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WomenCasualShoes;
