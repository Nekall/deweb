import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import {ThemeContext} from '../../context/ThemeContext';

const Navbar = () => {

  const {theme} = useContext(ThemeContext);

  return(
    <nav className={theme ? 'navbar dark' : 'navbar'} >
      <div className={theme ? 'typing-demo dark' : 'typing-demo'}>
        deweb
      </div>
      <div className="links-navbar">
        <Link className={theme ? 'link-nav dark' : 'link-nav'} to="/">Home</Link>
        <Link className={theme ? 'link-nav dark' : 'link-nav'} to="/works">Works</Link>
        <Link className={theme ? 'link-nav dark' : 'link-nav'} to="/about">About</Link>
      </div>
    </nav>
  )
};

export default Navbar;
