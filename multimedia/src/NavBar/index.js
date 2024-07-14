import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };
  return (
    <div>
      <nav id="navbar">
        <img src="./Images/multimedia.png" alt="logo" className="logo" />
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/Home" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/Video" onClick={toggleMenu}>
            Video
          </Link>
          <Link to="/Writing" onClick={toggleMenu}>
            Writing
          </Link>
          <Link to="/Podcast" onClick={toggleMenu}>
            Podcast
          </Link>
          <Link to="/Portfolios" onClick={toggleMenu}>
            Portfolios
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;