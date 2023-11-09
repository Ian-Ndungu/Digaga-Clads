import React, { useState, useEffect } from 'react';

function WomenClothes() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    fetch('https://digaga-clads.onrender.com/women/')
      .then(response => response.json())
      .then(data => setClothes(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Women's Clothes</h1>
      <div className="clothes-list">
        {clothes.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <img src={item.product_image} alt={item.name} />
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WomenClothes;
