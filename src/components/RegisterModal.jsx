import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterModal.css";

const RegisterModal = ({
  isOpen,
  onClose,
  onSwitchToLogin,
}) => {

  const [accountCreated, setAccountCreated] = useState(false);

  const navigate = useNavigate();

  if (!isOpen) {
    return null;
  }

  const handleRegister = (e) => {
    e.preventDefault();

    setAccountCreated(true);
  };

  const handleContinue = () => {
    onClose();
    navigate("/professional-setup");
  };

  return (
    <div
      className="register-modal-overlay"
      onClick={onClose}
    >

      <div
        className="register-modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}

        <button
          className="register-modal-close"
          onClick={onClose}
          aria-label="Fèmen"
        >
          ×
        </button>


        {/* ================================
            ACCOUNT CREATED
        ================================= */}

        {accountCreated ? (

          <div className="account-success">

            <div className="success-icon">
              ✓
            </div>

            <h2>
              Kont ou an kreye ak siksè!
            </h2>

            <p>
              Mèsi paske ou chwazi Pwofesyonèl Lakay.
              Kont ou pare. Kounye a ou ka kontinye
              konfigirasyon pwofil ou.
            </p>

            <button
              type="button"
              className="continue-setup-btn"
              onClick={handleContinue}
            >
              Kontinye konfigirasyon →
            </button>

          </div>

        ) : (

          <>
            {/* ================================
                HEADER
            ================================= */}

            <div className="register-modal-header">

              <div className="register-modal-logo">
                PL
              </div>

              <h2>
                Kreye kont ou
              </h2>

              <p>
                Enskri sou Pwofesyonèl Lakay pou kòmanse.
              </p>

            </div>


            {/* ================================
                FORM
            ================================= */}

            <form
              className="register-form"
              onSubmit={handleRegister}
            >

              {/* NAME */}

              <div className="register-form-group">

                <label htmlFor="register-name">
                  Non konplè
                </label>

                <input
                  id="register-name"
                  type="text"
                  placeholder="Antre non konplè ou"
                  required
                />

              </div>


              {/* EMAIL */}

              <div className="register-form-group">

                <label htmlFor="register-email">
                  Email
                </label>

                <input
                  id="register-email"
                  type="email"
                  placeholder="Antre email ou"
                  required
                />

              </div>


              {/* PHONE */}

              <div className="register-form-group">

                <label htmlFor="register-phone">
                  Telefòn
                </label>

                <input
                  id="register-phone"
                  type="tel"
                  placeholder="+509..."
                  required
                />

              </div>


              {/* PASSWORD */}

              <div className="register-form-group">

                <label htmlFor="register-password">
                  Modpas
                </label>

                <input
                  id="register-password"
                  type="password"
                  placeholder="Kreye yon modpas"
                  required
                />

              </div>


              {/* CONFIRM PASSWORD */}

              <div className="register-form-group">

                <label htmlFor="register-confirm-password">
                  Konfime modpas
                </label>

                <input
                  id="register-confirm-password"
                  type="password"
                  placeholder="Ekri modpas la ankò"
                  required
                />

              </div>


              {/* TERMS */}

              <label className="register-terms">

                <input
                  type="checkbox"
                  required
                />

                <span>
                  Mwen dakò ak kondisyon ak règleman
                  Pwofesyonèl Lakay yo.
                </span>

              </label>


              {/* SUBMIT */}

              <button
                type="submit"
                className="register-submit"
              >
                Kreye kont
              </button>

            </form>


            {/* ================================
                LOGIN
            ================================= */}

            <div className="register-login">

              <span>
                Ou deja gen yon kont?
              </span>

              <button
                type="button"
                onClick={onSwitchToLogin}
              >
                Konekte
              </button>

            </div>

          </>

        )}

      </div>

    </div>
  );
};

export default RegisterModal;