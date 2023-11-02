import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './homepage';
import Cart from './cart';
import Navbar from './navbar';
function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* This component can remain outside the router */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          {/* You can define other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
