import teamImage from 'assets/images/team-deweb.jpg';


const About = () => (
  <div className="AboutPage">
    <div className="about-section1">
    <div className="about-s1-img1">
      <img className="img-team" src={teamImage} alt="the deweb team" />
    </div>
      <div className="about-s1-text1">
        <p className="title">Confiez vos rêves à des experts du Web</p>
        <p className="fs-1">Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.
  Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.</p>
      </div>
  </div>
  </div>
);

export default About;
