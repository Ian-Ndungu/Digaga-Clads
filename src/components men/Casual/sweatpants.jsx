import React from "react";
import { useState, useEffect } from 'react';
// import './official.css';


function CasualSweatPants(){

    const [menssweatpants, setMensSweatPants] = useState([]);
    const [filteredMenssweatPants, setFilteredMenssweatPants] = useState([]);
    const [selectedType, setSelectedType] = useState('All');
    const [lastDirectory, setLastDirectory] = useState('');
    

    useEffect(() => {
        // Fetch 
        fetch('https://digaga-clads-main.onrender.com/men/hoodies')
        .then(response => response.json())
        .then(data => {
            setMensSweatPants(data);
            setFilteredMenssweatPants(data);
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
        setFilteredMenssweatPants(menssweatpants);
        } else {
        const filtered = menssweatpants.filter(all_men => all_men.type === selectedType);
        setFilteredMenssweatPants(filtered);
        }
    }, [selectedType, menssweatpants]);

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
        <div className="menssweatpants-cards">
        {menssweatpants.map(menssweatpants => (
          <div
            key={menssweatpants.id}
            className={`menssweatpants-card ${menssweatpants.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(menssweatpants.type)}
          >
            <img src={menssweatpants.product_image}/>
            <h2>{menssweatpants.name}</h2>
            <p>{menssweatpants.description}</p>
            <p>Price: KES {menssweatpants.unit_price}/=</p>
          </div>
        ))}
      </div>
      </div>
    )
}
export default CasualSweatPants;