import { useState } from "react";
import { Link } from "react-router-dom";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const Navbar = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);


  // Ouvri Login
  const openLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };


  // Ouvri Register
  const openRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };


  return (
    <>
      <header className="navbar">

        <div className="navbar-container">

          {/* LOGO */}

          <Link to="/" className="logo">

            <span className="logo-icon">
              PL
            </span>

            <span className="logo-text">
              Pwofesyonèl <strong>Lakay</strong>
            </span>

          </Link>


          {/* MENU */}

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


          {/* BUTTONS */}

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

        </div>

      </header>


      {/* LOGIN */}

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onSwitchToRegister={openRegister}
      />


      {/* REGISTER */}

      <RegisterModal
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onSwitchToLogin={openLogin}
      />

    </>
  );
};


export default Navbar;