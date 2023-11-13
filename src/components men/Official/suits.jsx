import React from "react";
import { useState, useEffect } from 'react';
import './official.css';


function OfficialSuits(){

    const [mensuits, serMenSuits] = useState([]);
    const [filteredMenOfficial, setFilteredMenSuits] = useState([]);
    const [selectedType, setSelectedType] = useState('All');
    const [lastDirectory, setLastDirectory] = useState('');
    

    useEffect(() => {
        // Fetch 
        fetch('https://digaga-clads-main.onrender.com/men/suits')
        .then(response => response.json())
        .then(data => {
            serMenSuits(data);
            setFilteredMenSuits(data);
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
        setFilteredMenSuits(mensuits);
        } else {
        const filtered = mensuits.filter(all_men => all_men.type === selectedType);
        setFilteredMenSuits(filtered);
        }
    }, [selectedType, mensuits]);

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
        <div className="mensuits-cards">
        {mensuits.map(mensuits => (
          <div
            key={mensuits.id}
            className={`mensuits-card ${mensuits.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(mensuits.type)}
          >
            <img src={mensuits.product_image}/>
            <h2>{mensuits.name}</h2>
            <p>{mensuits.description}</p>
            <p>Price: ${mensuits.unit_price}</p>
          </div>
        ))}
      </div>
      </div>
    )
}
export default OfficialSuits;