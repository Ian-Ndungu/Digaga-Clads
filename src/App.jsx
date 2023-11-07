import React from 'react';
import { BrowserRouter as Router, Route, Switch as RouterSwitch } from 'react-router-dom';
import Kids from './Kids';

function App() {

  const [kidsData, setKidsData] = useState([]);
  const { category } = useParams();
  const RouterSwitch = 'A Switch'; 

  useEffect(() => {
    if (category) {
      const apiUrl = `digaga-clads-url/${category}`;
      
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setKidsData(data);
        })
        .catch((error) => {
          console.error('Error fetching kids data:', error);
        });
    }
  }, [category]);

  return (

    <Router>
      <div>
        <RouterSwitch>
          <Route path="/kids/:category">
            <Kids kidsData={kidsData} />
          </Route>
        </RouterSwitch>
      </div>
    </Router>
  );
}

export default App;
