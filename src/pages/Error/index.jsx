import './style.scss';
import React, { useContext } from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import errorImage from 'assets/images/error.svg';

const Error = () => {

  const {theme} = useContext(ThemeContext);

  return(
  <div className={theme ? 'Error-page dark' : 'Error-page'}>
    <div className="center">
      <h1 className={theme ? 'title error-txt dark' : 'title center error-txt'}>Erreur 404</h1>
    </div>
    <div className="center">
      <img className={theme ? 'img-error dark' : 'img-error'} src={errorImage} alt="Error" />
    </div>
  </div>
  )
};

export default Error;
