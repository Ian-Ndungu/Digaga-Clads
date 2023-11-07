import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Kids from './kids';

function App() {

  const [kidsData, setKidsData] = useState([]);
  const { category } = useParams();

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
        <Switch>
          <Route path="/kids/:category">
            <Kids kidsData={kidsData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
