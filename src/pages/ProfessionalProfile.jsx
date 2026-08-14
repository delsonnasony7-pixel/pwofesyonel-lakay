import { useNavigate, useParams } from "react-router-dom";
import "./ProfessionalProfile.css";
import ReviewSection from "../components/ReviewSection";

const professionals = {
  "jean-pierre": {
    name: "Jean Pierre",
    profession: "Elektrisyen",
    location: "Delmas, Haïti",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
    description:
      "Jean Pierre se yon elektrisyen pwofesyonèl ki disponib pou ede w ak sèvis elektrik lakay ou oswa nan biznis ou.",
    services: [
      "Enstalasyon elektrik",
      "Reparasyon elektrik",
      "Enstalasyon limyè",
      "Reparasyon priz ak switch",
    ],
  },

  "marie-louis": {
    name: "Marie Louis",
    profession: "Plonbye",
    location: "Pétion-Ville, Haïti",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    description:
      "Marie Louis se yon plonbye pwofesyonèl ki gen eksperyans nan enstalasyon ak reparasyon sistèm dlo pou kay ak biznis.",
    services: [
      "Enstalasyon tiyo",
      "Reparasyon tiyo",
      "Reparasyon twalèt",
      "Enstalasyon sistèm dlo",
    ],
  },

  "paul-joseph": {
    name: "Paul Joseph",
    profession: "Mekanisyen",
    location: "Carrefour, Haïti",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    description:
      "Paul Joseph se yon mekanisyen pwofesyonèl ki espesyalize nan antretyen ak reparasyon machin.",
    services: [
      "Diagnostik machin",
      "Chanjman lwil",
      "Reparasyon motè",
      "Sistèm fren ak sispansyon",
    ],
  },

  "david-charles": {
    name: "David Charles",
    profession: "Pent",
    location: "Tabarre, Haïti",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    description:
      "David Charles se yon pent pwofesyonèl ki espesyalize nan penti kay, biwo ak lòt espas.",
    services: [
      "Penti enteryè",
      "Penti eksteryè",
      "Dekorasyon mi",
      "Preparasyon sifas",
    ],
  },

  "samuel-jean": {
    name: "Samuel Jean",
    profession: "Mason",
    location: "Pétion-Ville, Haïti",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500",
    description:
      "Samuel Jean se yon mason ki gen eksperyans nan konstriksyon ak renovasyon kay ak biznis.",
    services: [
      "Konstriksyon mi",
      "Platray",
      "Renovasyon",
      "Travay beton",
    ],
  },

  "sarah-michel": {
    name: "Sarah Michel",
    profession: "Enfimyè",
    location: "Delmas, Haïti",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500",
    description:
      "Sarah Michel se yon enfimyè pwofesyonèl ki ofri sèvis swen ak asistans pou pasyan.",
    services: [
      "Swen lakay",
      "Pran tansyon",
      "Swen pasyan",
      "Suivi sante",
    ],
  },
};

const ProfessionalProfile = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const professional = professionals[id];

  /* =========================================
     SI PWOFESYONÈL LA PA EGZISTE
  ========================================= */

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

        {/* =========================================
            BACK BUTTON
        ========================================= */}

        <div className="profile-arrows">

          <button
            className="profile-arrow"
            onClick={() => navigate("/professionals")}
            aria-label="Retounen"
          >
            ←
          </button>

        </div>


        {/* =========================================
            PROFILE HEADER
        ========================================= */}

        <div className="profile-header">

          {/* PHOTO */}

          <div className="profile-avatar">

            <img
              src={professional.image}
              alt={professional.name}
            />

          </div>


          {/* INFORMATION */}

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


        {/* =========================================
            PROFILE CONTENT
        ========================================= */}

        <div className="profile-content">

          {/* ABOUT */}

          <section className="profile-about">

            <h2>
              Tout sa ou dwe konnen de{" "}
              {professional.name}
            </h2>

            <p>
              {professional.description}
            </p>

          </section>


          {/* SERVICES */}

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


          {/* CONTACT */}

          <button
            className="contact-professional-btn"
            onClick={() =>
              navigate(
                `/professional/${id}/contact`
              )
            }
          >
            Kontakte {professional.name}
          </button>

        </div>


        {/* =========================================
            REVIEWS
        ========================================= */}

        <ReviewSection />

      </div>

    </main>
  );
};

export default ProfessionalProfile;