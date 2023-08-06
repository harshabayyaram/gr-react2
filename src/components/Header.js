import react from "react";
import "../../src/style.css";
import logo from "../images/logo.png";

function Header() {
  return (
    <header>
      <nav className="header">
        <div className="flex">
          <img src={logo} className="header-logo" />
          <h1>Latest Tech news</h1>
        </div>
        <div>
          <ul className="header-list">
            <li>About Us</li>
            <li>Daily-News</li>
            <li>Weekly-News</li>
            <li>Contact-Us</li>
            <li>Subscribe</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
