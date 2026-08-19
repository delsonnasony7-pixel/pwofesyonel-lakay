import { useNavigate, useParams } from "react-router-dom";
import "./ProfessionalProfile.css";
import ReviewSection from "../components/ReviewSection";
import professionals from "../data/professionals";

const ProfessionalProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const professional = professionals.find(
    (person) => person.id === id
  );

  if (!professional) {
    return (
      <main className="professional-profile">
        <div className="profile-container">

          <div className="profile-arrows">
            <button
              className="profile-arrow"
              onClick={() => navigate("/professionals")}
              aria-label="Retounen"
            >
              ←
            </button>
          </div>

          <div className="profile-content">
            <h1>
              Pwofesyonèl sa a pa jwenn
            </h1>

            <p>
              Pwofil ou ap chèche a pa disponib.
            </p>

            <button
              className="contact-professional-btn"
              onClick={() => navigate("/professionals")}
            >
              Gade tout pwofesyonèl
            </button>
          </div>

        </div>
      </main>
    );
  }

  return (
    <main className="professional-profile">

      <div className="profile-container">

        <div className="profile-arrows">
          <button
            className="profile-arrow"
            onClick={() => navigate("/professionals")}
            aria-label="Retounen"
          >
            ←
          </button>
        </div>

        <div className="profile-header">

          <div className="profile-avatar">
            {professional.image ? (
              <img
                src={professional.image}
                alt={professional.name}
              />
            ) : (
              <div className="profile-avatar-placeholder">
                👤
              </div>
            )}
          </div>

          <div className="profile-main-info">

            <span className="profile-status">
              ● Disponib kounye a
            </span>

            <h1>
              {professional.name}
            </h1>

            <p className="profile-profession">
              {professional.profession}
            </p>

            <p className="profile-location">
              📍 {professional.location}
            </p>

            <div className="profile-rating">
              ★★★★★
              <span>
                {professional.rating}
              </span>
            </div>

          </div>

        </div>

        <div className="profile-content">

          <section className="profile-about">
            <h2>
              Tout sa ou dwe konnen de{" "}
              {professional.name}
            </h2>

            <p>
              {professional.description}
            </p>
          </section>

          <section className="profile-services">

            <h2>
              Sèvis mwen yo
            </h2>

            <ul>
              {professional.services.map(
                (service, index) => (
                  <li key={index}>
                    {service}
                  </li>
                )
              )}
            </ul>

          </section>

          <button
            className="contact-professional-btn"
            onClick={() =>
              navigate(
                `/professional/${professional.id}/contact`
              )
            }
          >
            Kontakte {professional.name}
          </button>

        </div>

        <ReviewSection />

      </div>

    </main>
  );
};

export default ProfessionalProfile;