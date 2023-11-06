import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Kids from './kids';
import kidsData from './kidsData'


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/kids/Official">Official</Link>
          </li>
          <li>
            <Link to="/kids/Casual">Casual</Link>
          </li>
          <li>
            <Link to="/kids/Smart Casual">Smart Casual</Link>
          </li>
        </ul>

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
