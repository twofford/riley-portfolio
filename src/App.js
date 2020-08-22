import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import RileyNavbar from './frontend/navbar';
import Home from './frontend/home';
import Styling from './frontend/styling';
import Development from './frontend/development';
import About from './frontend/about';

const App = () => {
  return (
    <>
      <RileyNavbar />

      <Router>

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/styling">
            <Styling />
          </Route>

          <Route exact path="/development">
            <Development />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

        </Switch>

      </Router>
    </>
  );
}

export default App;
