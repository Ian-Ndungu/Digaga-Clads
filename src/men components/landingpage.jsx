import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import OfficialMen from './officialpage';
import './men.css';

function Men () {
  const [accessories, setAccessories] = useState([]);
  const [filteredAccessories, setFilteredAccessories] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [lastDirectory, setLastDirectory] = useState('');

  useEffect(() => {
    // Fetch 
    fetch('https://digaga-clads-main.onrender.com/men/')
      .then(response => response.json())
      .then(data => {
        setAccessories(data);
        setFilteredAccessories(data);
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
      setFilteredAccessories(accessories);
    } else {
      const filtered = accessories.filter(all_men => all_men.type === selectedType);
      setFilteredAccessories(filtered);
    }
  }, [selectedType, accessories]);

  const handleFilterChange = (e) => {
    setSelectedType(e.target.value);
  }

  const handleClickCard = (type) => {
    setSelectedType(type);
  }
  const handleCategory=(e) => {
    e.preventDefault();
    <Router>
    <Route path='/official' element={<OfficialMen/>} />
    </Router>

  }

  return (
       
    <div className='men'>
      <h1 id='title'>Men</h1>
   
      <div className="all_men-cards">
        <div id='official-container' onClick={handleCategory}>
          <img id="officialimg" src='images to use/men/tuxedo.jpg' alt="Tuxedo"/>
          <h2>Official</h2>
        </div>

        <div id='casual-container' onClick={handleCategory}>
          <img id="casualimg" src='images to use/men/mens_casua_wallpaperl.jpg' alt="mens_casua_wallpaperl"/>
          <h2>Casual</h2>
        </div>

        <div id='smart_casual-container' onClick={handleCategory}>
          <img id="smart-casualimg" src='images to use/men/smart_casual- icon.jpg' alt="smart_casual-icon"/>
          <h2>Smart Casual</h2>
        </div>
      </div>
   
    </div>
  );
}

export default Men;
