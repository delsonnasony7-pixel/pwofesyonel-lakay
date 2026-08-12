
const ProfessionalCard = ({
  name,
  profession,
  location,
  rating,
  image,
}) => {
  return (
    <article className="professional-card">

      <div className="professional-image">
        <img src={image} alt={name} />

        <span className="available-badge">
          Disponib
        </span>
      </div>

      <div className="professional-info">

        <h3>{name}</h3>

        <p className="professional-profession">
          {profession}
        </p>

        <div className="professional-rating">
          <span>★</span>
          {rating}
        </div>

        <p className="professional-location">
          📍 {location}
        </p>

        <button className="professional-btn">
          Gade pwofil
        </button>

      </div>

    </article>
  );
};

export default ProfessionalCard;

