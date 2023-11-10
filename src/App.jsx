import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './homepage';
import Cart from './cart';
import Navbar from './navbar';
import Contact from './contact';
import Accessories from './accessories';
import About from './about';
import Footer from './footer';
import Men from './men components/landingpage';
import View from './user-auth/View';
import './App.css';

const express = require('express');
const app = express();

const port = process.env.PORT || 5173;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function App() {
  
  return (
    <Router>
    <div className='body'>
      <Navbar /> {/* This component can remain outside the router */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/view" element={<View/>} />
      </Routes>
      <Footer/>
    </div>
  </Router>
  )
}

export default App;
