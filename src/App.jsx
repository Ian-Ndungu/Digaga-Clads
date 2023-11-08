import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, useParams, Routes } from 'react-router-dom';

function App() {

  const [Kids, setKids] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      const apiUrl = 'http://localhost:5173/kids';
      
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setKids(data);
        })
        .catch((error) => {
          console.error('Error fetching kids data:', error);
        });
    }
  }, [category]);

  return (
    
    <Router>
    <Routes>
    <Route path="/kids/:category" element={<Kids />} />
    </Routes>
    </Router>

  );
}

export default App;
