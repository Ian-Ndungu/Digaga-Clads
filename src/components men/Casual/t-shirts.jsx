import React from "react";
import { useState, useEffect } from 'react';
// import './official.css';


function CasualT_Shirts(){

    const [menst_shirt, setMenst_shirt] = useState([]);
    const [filteredMenst_shirt, setFilteredMenst_shirt] = useState([]);
    const [selectedType, setSelectedType] = useState('All');
    const [lastDirectory, setLastDirectory] = useState('');
    

    useEffect(() => {
        // Fetch 
        fetch('https://digaga-clads-main.onrender.com/men/hoodies')
        .then(response => response.json())
        .then(data => {
            setMenst_shirt(data);
            setFilteredMenst_shirt(data);
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
        setFilteredMenst_shirt(menst_shirt);
        } else {
        const filtered = menst_shirt.filter(all_men => all_men.type === selectedType);
        setFilteredMenst_shirt(filtered);
        }
    }, [selectedType, menst_shirt]);

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
        <div className="menst_shirt-cards">
        {menst_shirt.map(menst_shirt => (
          <div
            key={menst_shirt.id}
            className={`menst_shirt-card ${menst_shirt.type === selectedType ? 'active' : ''}`}
            onClick={() => handleClickCard(menst_shirt.type)}
          >
            <img src={menst_shirt.product_image}/>
            <h2>{menst_shirt.name}</h2>
            <p>{menst_shirt.description}</p>
            <p>Price: KES {menst_shirt.unit_price}/=</p>
          </div>
        ))}
      </div>
      </div>
    )
}
export default CasualT_Shirts;