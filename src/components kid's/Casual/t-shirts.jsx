import React, { useState, useEffect } from 'react';

function KidsTShirts() {
  const [kidsTShirts, setKidsTShirts] = useState([]);
  const [filteredKidsTShirts, setFilteredKidsTShirts] = useState([]);
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
  
    fetch('https://digaga-clads-main.onrender.com/kids/t-shirts')
      .then(response => response.json())
      .then(data => {
        setKidsTShirts(data);
        setFilteredKidsTShirts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    
    if (selectedType === 'All') {
      setFilteredKidsTShirts(kidsTShirts);
    } else {
      const filtered = kidsTShirts.filter(kidsTShirts => kidsTShirts.type === selectedType);
      setFilteredKidsTShirts(filtered);
    }
  }, [selectedType, kidsTShirts]);

  const handleFilterChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleClickCard = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <div className="kids-tshirts-cards">
        {filteredKidsTShirts.map(kidsTShirt => (
          <div
            key={kidsTShirt.id}
            className={`kids-tshirt-card ${kidsTShirt.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(kidsTShirt.type)}
          >
            <img src={kidsTShirt.product_image} alt={kidsTShirt.name} />
            <h2>{kidsTShirt.name}</h2>
            <p>{kidsTShirt.description}</p>
            <p>Price: KES {kidsTShirt.unit_price}/=</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KidsTShirts;
