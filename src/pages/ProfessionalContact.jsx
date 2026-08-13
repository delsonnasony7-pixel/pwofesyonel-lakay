import { useParams, useNavigate } from "react-router-dom";
import "./ProfessionalContact.css";

const ProfessionalContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <main className="professional-contact">

      <div className="contact-professional-container">

        {/* BACK BUTTON */}

        <button
          className="back-button"
          onClick={() => navigate(`/professional/${id}`)}
        >
          ←
        </button>


        {/* PAGE HEADER */}

        <div className="contact-professional-header">

          <span>CONTACT PWOFESYONÈL</span>

          <h1>Kontakte pwofesyonèl la</h1>

          <p>
            Jwenn tout enfòmasyon ou bezwen pou kontakte
            pwofesyonèl ou chwazi a.
          </p>

        </div>


        {/* PROFESSIONAL CARD */}

        <div className="professional-contact-card">

          {/* PROFILE */}

          <div className="contact-profile">

            <div className="contact-profile-avatar">

              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500"
                alt="Jean Pierre"
              />

            </div>


            <div className="contact-profile-info">

              <span className="contact-status">
                ● Disponib kounye a
              </span>

              <h2>Jean Pierre</h2>

              <p className="contact-profession">
                Elektrisyen
              </p>

              <p className="contact-location">
                📍 Delmas, Haïti
              </p>

              <div className="contact-rating">
                ★★★★★
                <span>4.9</span>
              </div>

            </div>

          </div>


          {/* CONTACT INFORMATION */}

          <div className="contact-information">

            <h3>
              Enfòmasyon pou kontakte li
            </h3>

            <div className="contact-info-grid">

              <div className="contact-info-item">

                <span>👤</span>

                <div>
                  <small>Non</small>
                  <strong>Jean</strong>
                </div>

              </div>


              <div className="contact-info-item">

                <span>👤</span>

                <div>
                  <small>Prenon</small>
                  <strong>Pierre</strong>
                </div>

              </div>


              <div className="contact-info-item">

                <span>📞</span>

                <div>
                  <small>Telefòn</small>
                  <strong>+509 0000-0000</strong>
                </div>

              </div>


              <div className="contact-info-item">

                <span>✉️</span>

                <div>
                  <small>Email</small>
                  <strong>jeanpierre@email.com</strong>
                </div>

              </div>


              <div className="contact-info-item">

                <span>💬</span>

                <div>
                  <small>WhatsApp</small>
                  <strong>+509 0000-0000</strong>
                </div>

              </div>


              <div className="contact-info-item">

                <span>📍</span>

                <div>
                  <small>Zòn sèvis</small>
                  <strong>Delmas, Haïti</strong>
                </div>

              </div>

            </div>

          </div>


          {/* TRUST MESSAGE */}

          <div className="contact-message">

            <div className="contact-message-icon">
              🤝
            </div>

            <div>

              <h3>
                Mèsi paske w fè nou konfyans.
              </h3>

              <p>
                Pwofesyonèl Lakay la pou ede w jwenn
                pwofesyonèl serye toupre ou. Nou espere
                ou jwenn bon moun nan pou sèvis ou bezwen an.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
};

export default ProfessionalContact;