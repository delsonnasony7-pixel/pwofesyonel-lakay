import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const Navbar = ({ onRegisterClick }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
    setMenuOpen(false);
  };

  const openRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
    setMenuOpen(false);

    if (onRegisterClick) {
      onRegisterClick();
    }
  };

  const closeRegister = () => {
    setShowRegister(false);

    if (onRegisterClick) {
      onRegisterClick(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">

        <div className="navbar-container">

          {/* LOGO */}
          <Link
            to="/"
            className="logo"
            onClick={closeMenu}
          >
            <span className="logo-icon">
              PL
            </span>

            <span className="logo-text">
              Pwofesyonèl <strong>Lakay</strong>
            </span>
          </Link>


          {/* DESKTOP MENU */}
          <nav className="nav-links">

            <Link to="/">
              Akèy
            </Link>

            <Link to="/professionals">
              Pwofesyonèl
            </Link>

            <Link to="/categories">
              Kategori
            </Link>

            <Link to="/about">
              Sou nou
            </Link>

            <Link to="/contact">
              Kontak
            </Link>

          </nav>


          {/* DESKTOP BUTTONS */}
          <div className="nav-actions">

            <button
              className="login-btn"
              onClick={openLogin}
            >
              Konekte
            </button>

            <button
              className="register-btn"
              onClick={openRegister}
            >
              Enskri
            </button>

          </div>


          {/* MOBILE MENU BUTTON */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvri meni"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>


        {/* MOBILE MENU */}
        <div
          className={`mobile-menu ${
            menuOpen ? "active" : ""
          }`}
        >

          <Link
            to="/"
            onClick={closeMenu}
          >
            Akèy
          </Link>

          <Link
            to="/professionals"
            onClick={closeMenu}
          >
            Pwofesyonèl
          </Link>

          <Link
            to="/categories"
            onClick={closeMenu}
          >
            Kategori
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
          >
            Sou nou
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
          >
            Kontak
          </Link>


          {/* MOBILE BUTTONS */}
          <div className="mobile-menu-actions">

            <button
              className="login-btn"
              onClick={openLogin}
            >
              Konekte
            </button>

            <button
              className="register-btn"
              onClick={openRegister}
            >
              Enskri
            </button>

          </div>

        </div>

      </header>


      {/* LOGIN MODAL */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onSwitchToRegister={openRegister}
      />


      {/* REGISTER MODAL */}
      <RegisterModal
        isOpen={showRegister}
        onClose={closeRegister}
        onSwitchToLogin={openLogin}
      />

    </>
  );
};

export default Navbar;