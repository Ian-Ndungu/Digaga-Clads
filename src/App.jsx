import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Women from './women';
import womenData from './womenData'


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/Women/Official">Official</Link>
          </li>
          <li>
            <Link to="/Women/Casual">Casual</Link>
          </li>
          <li>
            <Link to="/Women/Smart Casual">Smart Casual</Link>
          </li>
        </ul>

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
