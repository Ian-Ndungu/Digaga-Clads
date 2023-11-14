import React, { useState, useEffect } from 'react';

function KidsHoodies() {
  const [kidsHoodies, setKidsHoodies] = useState([]);
  const [filteredKidsHoodies, setFilteredKidsHoodies] = useState([]);
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    
    fetch('https://digaga-clads-main.onrender.com/kids/hoodies')
      .then(response => response.json())
      .then(data => {
        setKidsHoodies(data);
        setFilteredKidsHoodies(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    
    if (selectedType === 'All') {
      setFilteredKidsHoodies(kidsHoodies);
    } else {
      const filtered = kidsHoodies.filter(kidsHoodie => kidsHoodie.type === selectedType);
      setFilteredKidsHoodies(filtered);
    }
  }, [selectedType, kidsHoodies]);

  const handleFilterChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleClickCard = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <div className="kids-hoodies-cards">
        {filteredKidsHoodies.map(kidsHoodie => (
          <div
            key={kidsHoodie.id}
            className={`kids-hoodies-card ${kidsHoodie.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(kidsHoodie.type)}
          >
            <img src={kidsHoodie.product_image} alt={kidsHoodie.name} />
            <h2>{kidsHoodie.name}</h2>
            <p>{kidsHoodie.description}</p>
            <p>Price: KES {kidsHoodie.unit_price}/=</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KidsHoodies;
