import React, { useState, useEffect } from 'react';

function KidsSweatpants() {
  const [kidsSweatpants, setKidsSweatpants] = useState([]);
  const [filteredKidsSweatpants, setFilteredKidsSweatpants] = useState([]);
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    
    fetch('https://digaga-clads-main.onrender.com/kids/sweatpants')
      .then(response => response.json())
      .then(data => {
        setKidsSweatpants(data);
        setFilteredKidsSweatpants(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    
    if (selectedType === 'All') {
      setFilteredKidsSweatpants(kidsSweatpants);
    } else {
      const filtered = kidsSweatpants.filter(kidsSweatpants => kidsSweatpants.type === selectedType);
      setFilteredKidsSweatpants(filtered);
    }
  }, [selectedType, kidsSweatpants]);

  const handleFilterChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleClickCard = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <div className="kids-sweatpants-cards">
        {filteredKidsSweatpants.map(kidsSweatpants => (
          <div
            key={kidsSweatpants.id}
            className={`kids-sweatpants-card ${kidsSweatpants.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(kidsSweatpants.type)}
          >
            <img src={kidsSweatpants.product_image} alt={kidsSweatpants.name} />
            <h2>{kidsSweatpants.name}</h2>
            <p>{kidsSweatpants.description}</p>
            <p>Price: KES {kidsSweatpants.unit_price}/=</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KidsSweatpants;
