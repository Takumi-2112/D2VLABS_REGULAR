import "../styles/Navbar.css";
import d2vLogo from "../assets/d2v-logo.png";

function Navbar({ handleLoginModalOpen }) {
  return (
    <nav className="master-navbar">
      <div className="nav-logo">
        <img className="d2v-logo" src={d2vLogo} alt="" />
      </div>
      <div className="nav-links">
        <div className="link">
          <button className="nav-buttons" onClick={handleLoginModalOpen}>
            <span>Login</span>
          </button>
        </div>
        <div className="link">
          <button className="nav-buttons">
            <span>Sign Up</span>
          </button>
        </div>
        <div className="link">
          <button className="nav-buttons">
            <span>Projects</span>
          </button>
        </div>
        <div className="link">
          <button className="nav-buttons">
            <span>Contact</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
