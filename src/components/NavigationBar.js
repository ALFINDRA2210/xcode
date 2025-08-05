import React, { useState } from "react";
import logo from "../img/logo.png";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @media (max-width: 991px) {
          .main-nav .nav {
            display: none;
            flex-direction: column;
            gap: 10px;
            background: #fff;
            padding: 15px;
            margin-top: 10px;
          }

          .main-nav .nav.show {
            display: block;
          }

          .menu-trigger {
            display: block;
            cursor: pointer;
            user-select: none;
          }
        }

        @media (min-width: 992px) {
          .menu-trigger {
            display: none;
          }
        }
      `}</style>

      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* Logo */}
                <a href="/" className="logo ms-3">
                  <img src={logo} alt="Xcode Logo" />
                </a>

                {/* Navigation Menu */}
                <ul className={`nav ${menuOpen ? "show" : ""}`}>
                  <li className="scroll-to-section">
                    <a href="#top" className="active" onClick={closeMenu}>Home</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about" onClick={closeMenu}>About</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#service" onClick={closeMenu}>Pentest Service</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#faq" onClick={closeMenu}>FAQ</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                  </li>
                </ul>

                {/* Trigger untuk Mobile */}
                <a className="menu-trigger" onClick={toggleMenu}>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavigationBar;
