import "./LoginModal.css";
const LoginModal = ({ isOpen, onClose, onSwitchToRegister }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="login-modal-overlay" onClick={onClose}>

      <div
        className="login-modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}
        <button
          className="login-modal-close"
          onClick={onClose}
          aria-label="Fèmen"
        >
          ×
        </button>


        {/* HEADER */}
        <div className="login-modal-header">

          <div className="login-modal-logo">
            PL
          </div>

          <h2>
            Byenveni
          </h2>

          <p>
            Konekte sou kont Pwofesyonèl Lakay ou.
          </p>

        </div>


        {/* FORM */}
        <form className="login-form">

          <div className="login-form-group">

            <label htmlFor="login-email">
              Email
            </label>

            <input
              id="login-email"
              type="email"
              placeholder="Antre email ou"
            />

          </div>


          <div className="login-form-group">

            <label htmlFor="login-password">
              Modpas
            </label>

            <input
              id="login-password"
              type="password"
              placeholder="Antre modpas ou"
            />

          </div>


          <div className="login-form-options">

            <label className="remember-me">

              <input type="checkbox" />

              <span>
                Sonje mwen
              </span>

            </label>


            <button
              type="button"
              className="forgot-password"
            >
              Ou bliye modpas?
            </button>

          </div>


          <button
            type="submit"
            className="login-submit"
          >
            Konekte
          </button>

        </form>


        {/* REGISTER LINK */}
        <div className="login-register">

          <span>
            Ou poko gen kont?
          </span>

          <button
            type="button"
            onClick={onSwitchToRegister}
          >
            Enskri
          </button>

        </div>

      </div>

    </div>
  );
};

export default LoginModal;

