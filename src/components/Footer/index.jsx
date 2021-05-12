import React, { useContext } from 'react';
import {ThemeContext} from '../../context/ThemeContext';

const Footer = () => {

  const {theme} = useContext(ThemeContext);

  return(
    <div className={theme ? 'Footer dark' : 'Footer'}>
      <div className="fs-2 center">
        <p className={theme ? 'footer-txt dark' : 'footer-txt'}>© 2021 Copyright deweb</p>
      </div>
    </div>
    )
};

export default Footer;
