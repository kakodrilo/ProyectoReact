import React from 'react';
import Home from './Views/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Calculadora from './Views/Calculadora'
import './App.css';

function show_menu() {
  var nav = document.querySelector('.navbar-menu');
  if(nav.className === "navbar-menu") {
      nav.className = "navbar-menu is-active";
  } else {
      nav.className = "navbar-menu";
  }
};



function App() {
  return (
    <div>
      <Router>
        <nav className="navbar is-dark is-fixed-top " role="navigation" aria-label="main navigation" >
          <div className="navbar-brand">
            <a href="."  className="navbar-item">
              <h1 className="subtitle has-text-light has-text-weight-medium"><i className="logo fas fa-square-root-alt"></i> <b>Newton</b>Calculator</h1>
            </a>
        
            <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={show_menu}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
        
          <div className="navbar-menu" id="menu_movil">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                <i className="icono_navbar fas fa-home fa-1x"></i>
                Home
                </Link>
              
              <a href="." className="navbar-item">
                <i className="icono_navbar fas fa-user-astronaut fa-1x"></i>
                Sobre Nosotros
              </a>
      
            </div>
            <div className="navbar-end">
              <Link to="/calculadora"className="navbar-item">
                <div className="buttons">
                  <button className="button is-danger">
                      <i className="icono_navbar fas fa-calculator fa-1x" ></i> Calculadora
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </nav>
        
        <div className="div_app">
          <Switch>
            <Route path="/calculadora">
              <Calculadora />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <footer className="footer is-fixed-bottom">
          <div className="content has-text-centered">
            <p>
              <strong>NewtonCalculator</strong> by <a href="https://www.facebook.com/maripo.52">Paz</a> y <a href="https://www.facebook.com/joaquin.castillotapia">Kako</a>.
            </p>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
