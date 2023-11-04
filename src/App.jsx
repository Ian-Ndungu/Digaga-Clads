import React from 'react' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './cart'

function App() {
  return (
  <div>
         <Router>
      
          <Cart/> 
         </Router>
  </div>
  )
}

export default App;
