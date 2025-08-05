import React, { useState } from "react";
import logo from "../img/logo.png";
import "../assets/css/templatemo-chain-app-dev.css";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when link clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className="header-area header-sticky wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav d-flex justify-content-between align-items-center">
              {/* Logo */}
              <a href="/" className="logo">
                <img src={logo} alt="Xcode Logo" />
              </a>

              {/* Menu Trigger */}
              <div
                className={`menu-trigger d-lg-none ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <span>Menu</span>
              </div>

              {/* Navigation Links */}
              <ul className={`nav ${isMenuOpen ? "d-block" : "d-none d-lg-flex"} align-items-center m-0`}>
                <li className="scroll-to-section">
                  <a href="#top" onClick={handleLinkClick}>
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#about" onClick={handleLinkClick}>
                    About
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#service" onClick={handleLinkClick}>
                    Pentest Service
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#faq" onClick={handleLinkClick}>
                    FAQ
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#contact" onClick={handleLinkClick}>
                    Contact
                  </a>
                </li>
                <li>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;