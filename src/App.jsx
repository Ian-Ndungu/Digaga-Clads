import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Women from './women';

function App() {

  const [womenData, setWomenData] = useState([]);
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
          setWomenData(data);
        })
        .catch((error) => {
          console.error('Error fetching women data:', error);
        });
    }
  }, [category]);

  return (

    <Router>
      <div>
        <Switch>
          <Route path="/Women/:category">
            <Women womenData={womenData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
