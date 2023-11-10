import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './homepage';
import Cart from './cart';
import Navbar from './navbar';
import Contact from './contact';
import Accessories from './accessories';
import About from './about';
import Footer from './footer';
import Men from './components men/landingpage';
import View from './user-auth/View';
import './App.css';
import OfficialMen from './components men/Official/officialpage';
import Casual from './components men/Casual/casual';
import Women from './components women\'s/landingpage';
import Kids from './components kid\'s/landingpage';
import MensPants from './components men/Official/pants';
import MenOfficial from './components men/Official/officialpage';

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
        <Route path="/officialpage" element={<OfficialMen/>} />
        <Route path='/casual' element={<Casual/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/pants' element={<MensPants/>}/>
        <Route path='/official' element={<MenOfficial/>}/>
      </Routes>
      <Footer/>
    </div>
  </Router>
  )
}

export default App;
