import { useNavigate } from "react-router-dom";
import "./ProfessionalProfile.css";

const ProfessionalProfile = () => {
  const navigate = useNavigate();

  return (
    <main className="professional-profile">

      <div className="profile-container">

        {/* BACK TO HOME */}

        <div className="profile-arrows">

          <button
            className="profile-arrow"
            onClick={() => navigate("/")}
            aria-label="Retounen nan Akèy"
          >
            ←
          </button>

        </div>


        {/* PROFILE HEADER */}

        <div className="profile-header">

          <div className="profile-avatar">
            👨🏾‍🔧
          </div>

          <div className="profile-main-info">

            <span className="profile-status">
              ● Disponib kounye a
            </span>

            <h1>Jean Pierre</h1>

            <p className="profile-profession">
              Elektrisyen
            </p>

            <p className="profile-location">
              📍 Delmas, Haïti
            </p>

            <div className="profile-rating">
              ★★★★★ <span>4.9</span>
            </div>

          </div>

        </div>


        {/* PROFILE CONTENT */}

        <div className="profile-content">

          {/* ABOUT */}

          <section className="profile-about">

            <h2>
              Tout Saw dwe konnen de Jean Pierre
            </h2>

            <p>
              Jean Pierre se yon elektrisyen pwofesyonèl
              ki disponib pou ede w ak sèvis elektrik
              lakay ou oswa nan biznis ou.
            </p>

          </section>


          {/* SERVICES */}

          <section className="profile-services">

            <h2>
              Sèvis mwen yo
            </h2>

            <ul>

              <li>
                Enstalasyon elektrik
              </li>

              <li>
                Reparasyon elektrik
              </li>

              <li>
                Enstalasyon limyè
              </li>

              <li>
                Reparasyon priz ak switch
              </li>

            </ul>

          </section>


          {/* CONTACT BUTTON */}

          <button
            className="contact-professional-btn"
            onClick={() =>
              navigate("/professional/jean-pierre/contact")
            }
          >
            Kontakte Jean Pierre
          </button>

        </div>

      </div>

    </main>
  );
};

export default ProfessionalProfile;