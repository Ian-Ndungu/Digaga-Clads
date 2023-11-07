import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './homepage';
import Cart from './cart';
import Navbar from './navbar';
import Contact from './contact';
import Accessories from './accessories';
import './App.css';
import Footer from './footer';
function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* This component can remain outside the router */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

