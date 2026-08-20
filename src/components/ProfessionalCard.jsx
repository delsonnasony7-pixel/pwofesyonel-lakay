import { useNavigate } from "react-router-dom";
import "./ProfessionalCard.css";

const ProfessionalCard = ({
  id,
  name,
  profession,
  location,
  rating,
  image,
}) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/professional/${id}`);
  };

  return (
    <div className="professional-card">

      <div className="professional-card-image">
        <img
          src={image}
          alt={name}
        />
      </div>

      <div className="professional-card-content">

        <div className="professional-card-rating">
          ★★★★★
          <span>{rating}</span>
        </div>

        <h3>{name}</h3>

        <p className="professional-card-profession">
          {profession}
        </p>

        <p className="professional-card-location">
          📍 {location}
        </p>

        <button
          type="button"
          className="professional-card-btn"
          onClick={handleViewProfile}
        >
          Gade pwofil →
        </button>

      </div>

    </div>
  );
};

export default ProfessionalCard;