
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

          <div className="footer-logo">
            <span className="footer-logo-icon">PL</span>

            <span>
              Pwofesyonèl <strong>Lakay</strong>
            </span>
          </div>

          <p>
            Konekte ak pwofesyonèl serye toupre ou,
            rapidman ak fasilite.
          </p>

          <div className="footer-socials">
            <a href="#">f</a>
            <a href="#">in</a>
            <a href="#">ig</a>
            <a href="#">x</a>
          </div>

        </div>


        {/* LINKS */}
        <div className="footer-column">

          <h3>Eksplore</h3>

          <a href="#">Akèy</a>
          <a href="#">Pwofesyonèl</a>
          <a href="#">Kategori</a>
          <a href="#">Kijan li mache</a>

        </div>


        {/* SERVICES */}
        <div className="footer-column">

          <h3>Sèvis</h3>

          <a href="#">Plonbye</a>
          <a href="#">Elektrisyen</a>
          <a href="#">Mekanisyen</a>
          <a href="#">Pent</a>

        </div>


        {/* CONTACT */}
        <div className="footer-column">

          <h3>Kontakte nou</h3>

          <p>📍 Port-au-Prince, Haïti</p>

          <p>📞 +509 0000-0000</p>

          <p>✉️ contact@professionnellakay.com</p>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Pwofesyonèl Lakay. Tout dwa rezève.
        </p>

        <div>
          <a href="#">Konfidansyalite</a>
          <a href="#">Kondisyon</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;