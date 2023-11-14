import React, { useState, useEffect } from 'react';

function KidsShoes() {
  const [kidsShoes, setKidsShoes] = useState([]);
  const [filteredKidsShoes, setFilteredKidsShoes] = useState([]);
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    
    fetch('https://digaga-clads-main.onrender.com/kids/shoes')
      .then(response => response.json())
      .then(data => {
        setKidsShoes(data);
        setFilteredKidsShoes(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    
    if (selectedType === 'All') {
      setFilteredKidsShoes(kidsShoes);
    } else {
      const filtered = kidsShoes.filter(kidsShoe => kidsShoe.type === selectedType);
      setFilteredKidsShoes(filtered);
    }
  }, [selectedType, kidsShoes]);

  const handleFilterChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleClickCard = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <div className="kids-shoes-cards">
        {filteredKidsShoes.map(kidsShoe => (
          <div
            key={kidsShoe.id}
            className={`kids-shoes-card ${kidsShoe.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(kidsShoe.type)}
          >
            <img src={kidsShoe.product_image} alt={kidsShoe.name} />
            <h2>{kidsShoe.name}</h2>
            <p>{kidsShoe.description}</p>
            <p>Price: KES {kidsShoe.unit_price}/=</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KidsShoes;
