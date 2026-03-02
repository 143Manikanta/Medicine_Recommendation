import "./Navbar.css";
import Medicine_logo from "./Images/medicine_logo.jpg";

function Navbar({ scrollToSection }) {
  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="logo-container">
        <img
          src={Medicine_logo}
          alt="Medicine App Logo"
          className="app-logo"
        />
        <div className="logo">Medicine-App</div>
      </div>

      <ul className="menu">
        <li onClick={() => scrollToSection("upload")}>Home</li>
        <li onClick={() => scrollToSection("upload")}>Model</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

      <div className="nav-spacer" />
    </nav>
  );
}

export default Navbar;