import React, { useContext } from 'react';
import {ThemeContext} from '../../context/ThemeContext'
import sunLogo from 'assets/images/sun.svg';
import moonLogo from 'assets/images/moon.svg';

export default function BtnTheme(){

  const {toggleTheme, theme} = useContext(ThemeContext);

  return(
      <div>
        <div className="btn-dn" onClick={toggleTheme} >
          <img className="img-dn" src={theme ? moonLogo : sunLogo} alt="icon light dark mode"/>
        </div>
      </div>
  )
}
