import React from "react";
import { useState, useEffect } from 'react';
// import './official.css';


function CasualHoodies(){

    const [menshoodies, setMensHoodies] = useState([]);
    const [filteredMensHoodies, setFilteredMensHoodies] = useState([]);
    const [selectedType, setSelectedType] = useState('All');
    const [lastDirectory, setLastDirectory] = useState('');
    

    useEffect(() => {
        // Fetch 
        fetch('https://digaga-clads-main.onrender.com/men/hoodies')
        .then(response => response.json())
        .then(data => {
            setMensHoodies(data);
            setFilteredMensHoodies(data);
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
        setFilteredMensHoodies(menshoodies);
        } else {
        const filtered = menshoodies.filter(all_men => all_men.type === selectedType);
        setFilteredMensHoodies(filtered);
        }
    }, [selectedType, menshoodies]);

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
        <div className="menshoodies-cards">
        {menshoodies.map(menshoodies => (
          <div
            key={menshoodies.id}
            className={`menshoodies-card ${menshoodies.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(menshoodies.type)}
          >
            <img src={menshoodies.product_image}/>
            <h2>{menshoodies.name}</h2>
            <p>{menshoodies.description}</p>
            <p>Price: KES {menshoodies.unit_price}/=</p>
          </div>
        ))}
      </div>
      </div>
    )
}
export default CasualHoodies;