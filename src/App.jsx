import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, useParams, Routes } from 'react-router-dom';

function App() {

  const [Women, setWomen] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      const apiUrl = 'digaga-clads-url/women/${category}';
      
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setWomen(data);
        })
        .catch((error) => {
          console.error('Error fetching Women data:', error);
        });
    }
  }, [category]);

  return (
    
    <Router>
      <Routes>
      <Route path="/women/:category" 
      element={<Women />} />
      </Routes>
    </Router>
  );
}

export default App;
