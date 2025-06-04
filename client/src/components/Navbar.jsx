import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="master-navbar">
      <div className="navbar-logo"></div>
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
