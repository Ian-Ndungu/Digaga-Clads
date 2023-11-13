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
// import View from './user-auth/View';
import './App.css';
import OfficialMen from './components men/Official/officialpage';
import MenCasual from './components men/Casual/casual';
import Women from './components women\'s/landingpage';
import Kids from './components kid\'s/landingpage';
import MensPants from './components men/Official/pants';
import MenOfficial from './components men/Official/officialpage';
import OfficialSuits from './components men/Official/suits';
import CasualHoodies from './components men/Casual/hoodies';
import CasualT_Shirts from './components men/Casual/t-shirts';
import CasualSweatPants from './components men/Casual/sweatpants';
import CasualShoes from './components men/Casual/shoes';
import MenSmart_Casual from './components men/Smart Casual/smartcasual';
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
        {/* <Route path="/view" element={<View/>} /> */}
        <Route path="/officialpage" element={<OfficialMen/>} />
        <Route path='/men/casual' element={<MenCasual/>}/>
        <Route path='/men/casual/hoodies' element={<CasualHoodies/>}/>
        <Route path='/men/casual/t-shirts' element={<CasualT_Shirts/>}/>
        <Route path='/men/casual/sweatpants' element={<CasualSweatPants/>}/>
        <Route path='/men/casual/shoes' element={<CasualShoes/>}/>        
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/pants' element={<MensPants/>}/>
        <Route path='/men/official' element={<MenOfficial/>}/>
        <Route path='/men/official/suits' element={<OfficialSuits/>}/>
        <Route path='/men/smartcasual' element={<MenSmart_Casual/>}/>
      </Routes>
      <Footer/>
    </div>
  </Router>
  )
}

export default App;
