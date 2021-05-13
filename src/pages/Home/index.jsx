import './style.scss';
import codingImage from 'assets/images/coding.svg';
import React, { useContext } from 'react';
import {ThemeContext} from '../../context/ThemeContext';

const Home = () => {

  const {theme} = useContext(ThemeContext);

  return(
    <div className={theme ? 'HomePage dark' : 'HomePage'}>
      <div className={theme ? 'home-section1 dark' : 'home-section1'}>
        <div className={theme ? 'home-s1-text1 dark' : 'home-s1-text1'}>
          <p className="title">Confiez vos rêves à des experts du Web</p>
          <p className="fs-1">Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.
  Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.</p>
        </div>
        <div className="home-s1-img1">
          <img className={theme ? 'img-coding dark' : 'img-coding'} src={codingImage} alt="Coding" />
        </div>
      </div>
    </div>
  )
};
export default Home;
