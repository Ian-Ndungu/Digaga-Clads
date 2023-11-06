import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Men from './men';
import menData from './menData'


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/Men/Official">Official</Link>
          </li>
          <li>
            <Link to="/Men/Casual">Casual</Link>
          </li>
          <li>
            <Link to="/Men/Smart Casual">Smart Casual</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/Men/:category">
            <Men menData={menData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
