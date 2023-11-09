import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './homepage';
import Cart from './cart';
import Navbar from './navbar';
import Contact from './contact';
import Accessories from './accessories';
import About from './about';
import Footer from './footer';
import './App.css';

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
      </Routes>
      <Footer/>
    </div>
  </Router>
  )
}

export default App;
