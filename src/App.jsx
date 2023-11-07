import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, useParams, Routes } from 'react-router-dom';

function App() {

  const [Men, setMen] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      const apiUrl = 'digaga-clads-url/men/${category}';
      
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setMen(data);
        })
        .catch((error) => {
          console.error('Error fetching Men data:', error);
        });
    }
  }, [category]);

  return (
    
    <Router>
      <Routes>
      <Route path="/men/:category" 
      element={<Men />} />
      </Routes>
    </Router>
  );
}

export default App;
