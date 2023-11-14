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
import Women from './components women/landingpage';
import Kids from './components kid/landingpage';
import MensPants from './components men/Official/pants';
import MenOfficial from './components men/Official/officialpage';
import OfficialSuits from './components men/Official/suits';
import CasualHoodies from './components men/Casual/hoodies';
import CasualT_Shirts from './components men/Casual/t-shirts';
import CasualSweatPants from './components men/Casual/sweatpants';
import CasualShoes from './components men/Casual/shoes';
import MenSmart_Casual from './components men/Smart Casual/smartcasual';
import WomenShoes from './components women/Official/shoes';
import OfficialWomenSuits from './components women/Official/suits';
import WomenOfficial from './components women/Official/officialpage';
import OfficialWomen from './components women/Official/shirt';
import WomenCasual from './components women/Casual/casual';
import WomenHoodies from './components women/Casual/hoodies';
import WomenCasualShoes from './components women/Casual/womenshoes';
import WomenSweatpants from './components women/Casual/sweatpants';
import WomenTShirts from './components women/Casual/t-shirts';
import KidsCasual from './components kid/Casual/casual';
import KidsHoodies from './components kid/Casual/hoodies';
import KidsShoes from './components kid/Casual/shoes';
import KidsTShirts from './components kid/Casual/t-shirts';
import KidsSweatpants from './components kid/Casual/sweatpants';

function App() {
  return (
    <Router>
      <div className='body'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/about" element={<About />} />
          <Route path="/men" element={<Men />} />
          {/* <Route path="/view" element={<View />} /> */}
          <Route path="/officialpage" element={<OfficialMen />} />
          <Route path="/men/casual" element={<MenCasual />} />
          <Route path="/men/casual/hoodies" element={<CasualHoodies />} />
          <Route path="/men/casual/t-shirts" element={<CasualT_Shirts />} />
          <Route path="/men/casual/sweatpants" element={<CasualSweatPants />} />
          <Route path="/men/casual/shoes" element={<CasualShoes />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/pants" element={<MensPants />} />
          <Route path="/men/official" element={<MenOfficial />} />
          <Route path="/men/official/suits" element={<OfficialSuits />} />
          <Route path="/men/smartcasual" element={<MenSmart_Casual />} />
          <Route path="/women/official/shoes" element={<WomenShoes />} />
          <Route path="/women/official/suits" element={<OfficialWomenSuits />} />
          <Route path="/women/official/officialpage" element={<WomenOfficial />} />
          <Route path="/women/official/shirt" element={<OfficialWomen />} />
          <Route path="/women/casual" element={<WomenCasual />} />
          <Route path="/women/casual/hoodies" element={<WomenHoodies />} />
          <Route path="/women/casual/womenshoes" element={<WomenCasualShoes />} />
          <Route path="/women/casual/sweatpants" element={<WomenSweatpants />} />
          <Route path="/women/casual/t-shirts" element={<WomenTShirts />} />
          <Route path="/kids/casual" element={<KidsCasual />} />
          <Route path="/kids/casual/hoodies" element={<KidsHoodies />} />
          <Route path="/kids/casual/shoes" element={<KidsShoes />} />
          <Route path="/kids/casual/t-shirts" element={<KidsTShirts />} />
          <Route path="/kids/casual/sweatpants" element={<KidsSweatpants />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
