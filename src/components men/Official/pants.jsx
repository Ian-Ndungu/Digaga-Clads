import React from "react";
import { useState, useEffect } from 'react';
import './official.css';


function OfficialMen(){

    const [menofficial, setMenOffical] = useState([]);
    const [filteredMenOfficial, setFilteredMenOfficial] = useState([]);
    const [selectedType, setSelectedType] = useState('All');
    const [lastDirectory, setLastDirectory] = useState('');
    

    useEffect(() => {
        // Fetch 
        fetch('https://digaga-clads.onrender.com/men/pants')
        .then(response => response.json())
        .then(data => {
            setMenOffical(data);
            setFilteredMenOfficial(data);
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
        setFilteredMenOfficial(menofficial);
        } else {
        const filtered = menofficial.filter(all_men => all_men.type === selectedType);
        setFilteredMenOfficial(filtered);
        }
    }, [selectedType, menofficial]);

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
        // <div id="allOfficial-container">
        //     <div className="suits">
        //         <img id="officialimg" src="images to use/men/tuxedo.jpg" alt="tuxedo"/>
        //         <button onClick={handleAddToCart}>Add to Cart</button>
        //     </div>
        // </div>

        <div>
        <div className="menofficial-cards">
        {menofficial.map(menofficial => (
          <div
            key={menofficial.id}
            className={`menofficial-card ${menofficial.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(menofficial.type)}
          >
            <img src={menofficial.product_image}/>
            <h2>{menofficial.name}</h2>
            <p>{menofficial.description}</p>
            <p>Price: ${menofficial.unit_price}</p>
          </div>
        ))}
      </div>
      </div>
    )
}
export default OfficialMen;