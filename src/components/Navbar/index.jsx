import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar" >
    <div className="typing-demo">
      deweb
    </div>
    <div className="links-navbar">
      <Link className="link-nav" to="/">Home</Link>
      <Link className="link-nav" to="/works">Works</Link>
      <Link className="link-nav" to="/about">About</Link>
    </div>
  </nav>
);

export default Navbar;
