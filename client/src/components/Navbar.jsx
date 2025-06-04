import '../styles/Navbar.css';
import d2vLogo from "../assets/d2v-logo.png";

function Navbar() {
  return (
    <nav className="master-navbar">
      <div className="nav-logo"><img className='d2v-logo' src={d2vLogo} alt="" /></div>
      <div className="nav-links">
        <div className="link">
          <a href="/home">Home</a>
        </div>
        <div className="link">
          <a href="/about">About</a>
        </div>
        <div className="link">
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
