import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Women from './women';

function App() {
  const { category } = useParams();

  return (
    <Router>
      <Routes>
        <Route
          path="/women"
          element={<Women />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
