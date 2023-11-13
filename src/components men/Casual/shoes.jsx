import React from "react";
import { useState, useEffect } from 'react';
// import './official.css';


function CasualShoes(){

    const [mensshoes, setMensShoes] = useState([]);
    const [filteredMensShoes, setFilteredMensShoes] = useState([]);
    const [selectedType, setSelectedType] = useState('All');
    const [lastDirectory, setLastDirectory] = useState('');
    

    useEffect(() => {
        // Fetch 
        fetch('https://digaga-clads-main.onrender.com/men/hoodies')
        .then(response => response.json())
        .then(data => {
            setMensShoes(data);
            setFilteredMensShoes(data);
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
        setFilteredMensShoes(mensshoes);
        } else {
        const filtered = mensshoes.filter(all_men => all_men.type === selectedType);
        setFilteredMensShoes(filtered);
        }
    }, [selectedType, mensshoes]);

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
        <div className="mensshoes-cards">
        {mensshoes.map(mensshoes => (
          <div
            key={mensshoes.id}
            className={`mensshoes-card ${mensshoes.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(mensshoes.type)}
          >
            <img src={mensshoes.product_image}/>
            <h2>{mensshoes.name}</h2>
            <p>{mensshoes.description}</p>
            <p>Price: KES {mensshoes.unit_price}/=</p>
          </div>
        ))}
      </div>
      </div>
    )
}
export default CasualShoes;