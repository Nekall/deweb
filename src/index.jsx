//CSS
import './sass/fonts.scss';
import './sass/style.scss';
//React Imports
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Other Imports
import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';
import Navbar from 'components/Navbar';


const App = () => {


  return (
    <div>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
