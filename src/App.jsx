import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Men from './men';

function App() {

  const [menData, setmenData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      const apiUrl = 'digaga-clads-url/${category}';
      
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setmenData(data);
        })
        .catch((error) => {
          console.error('Error fetching men data:', error);
        });
    }
  }, [category]);

  return (

    <Router>
      <div>
        <Switch>
          <Route path="/men/:category">
            <men />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
