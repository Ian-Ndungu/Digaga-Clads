import React from "react";
import { useState, useEffect } from 'react';
import './official.css';


function MensPants(){

    const [menspants, setMenOffical] = useState([]);
    const [mensfilteredpants, menssetFilteredpants] = useState([]);
    const [selectedType, setSelectedType] = useState('All');
    const [lastDirectory, setLastDirectory] = useState('');
    

    useEffect(() => {
        // Fetch 
        fetch('https://digaga-clads.onrender.com/men/pants')
        .then(response => response.json())
        .then(data => {
            setMenOffical(data);
            menssetFilteredpants(data);
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
        menssetFilteredpants(menspants);
        } else {
        const filtered = menspants.filter(all_men => all_men.type === selectedType);
        menssetFilteredpants(filtered);
        }
    }, [selectedType, menspants]);

    const handleFilterChange = (e) => {
        setSelectedType(e.target.value);
    }

    const handleClickCard = (type) => {
        setSelectedType(type);
    }

    const handleAddToCart = () => {
        addToCart({
            id: 3,  
      name: 'Product 3',
      price: 25.0, 
      quantity: 1
    });
};
    return (
        <div className="menspants-cards">
        {menspants.map(menspants => (
          <div
            key={menspants.id}
            className={`menspants-card ${menspants.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(menspants.type)}
          >
            <img src={menspants.product_image}/>
            <h2>{menspants.name}</h2>
            <p>{menspants.description}</p>
            <p>Price: ${menspants.unit_price}</p>
          </div>
        ))}
      </div>
    )
}
export default MensPants;