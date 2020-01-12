import React from 'react';
import Home from './Views/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import About from './Views/About'

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar is-link">
          <div className= "navbar-menu">
            <div className= "navbar-start">
              <Link to="/" className="navbar-item">Home</Link>
              <Link to="/about" className="navbar-item">About</Link>
            </div>
          </div>
        </nav>
        <div className="container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
