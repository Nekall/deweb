import codingImage from 'assets/images/coding.svg';


const Home = () => (
  <div className="HomePage">
    <div className="home-section1">
      <div className="home-s1-text1">
        <p className="title">Confiez vos rêves à des experts du Web</p>
        <p className="fs-1">Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.
Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.</p>
      </div>
      <div className="home-s1-img1">
        <img className="img-coding" src={codingImage} alt="Coding" />
      </div>
    </div>
  </div>
);
export default Home;
