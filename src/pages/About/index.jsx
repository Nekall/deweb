import teamImage from 'assets/images/team-deweb.jpg';
import React, { useContext } from 'react';
import {ThemeContext} from '../../context/ThemeContext';


const About = () => {

  const {theme} = useContext(ThemeContext);

  return(
  <div className={theme ? 'AboutPage dark' : 'AboutPage'}>
    <div className={theme ? 'about-section1 dark' : 'about-section1'}>
      <div className={theme ? 'about-s1-img1 dark' : 'about-s1-img1'}>
        <img className={theme ? 'img-team dark' : 'img-team'} src={teamImage} alt="the deweb team" />
      </div>
      <div className="about-s1-text1">
        <p className="title">Confiez vos rêves à des experts du Web</p>
        <p className="fs-1">Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.
    Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.</p>
      </div>
    </div>
  </div>
  )
};

export default About;
