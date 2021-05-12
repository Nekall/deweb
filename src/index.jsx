//CSS
import './sass/fonts.scss';
import './sass/style.scss';
import './sass/toolbox.scss';
import './sass/btn-theme.scss';
//React Imports
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Other Imports
import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import BtnTheme from 'components/BtnTheme';
import ThemeContextProvider from 'context/ThemeContext';


const App = () => {


  return (
    <div className="App">
      <ThemeContextProvider>
        <Router>
          <Navbar />
          <BtnTheme />
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
        <Footer />
      </ ThemeContextProvider>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
