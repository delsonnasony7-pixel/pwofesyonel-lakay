
import { useState } from "react";
import "./ReviewSection.css";

const ReviewSection = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Marie L.",
      rating: 5,
      comment:
        "Jean fè travay la trè byen. Li te vini alè epi li te trè pwofesyonèl.",
      date: "12 Out 2026",
    },
    {
      id: 2,
      name: "Paul J.",
      rating: 5,
      comment:
        "Bon sèvis, bon kominikasyon e travay la te fèt jan li te pwomèt la.",
      date: "8 Out 2026",
    },
    {
      id: 3,
      name: "David M.",
      rating: 4,
      comment:
        "Mwen satisfè ak sèvis la. Mwen ta rekòmande pwofesyonèl sa a.",
      date: "3 Out 2026",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0 || comment.trim() === "") {
      alert("Tanpri bay yon nòt epi ekri yon commentaire.");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: "Ou",
      rating,
      comment,
      date: "Jodi a",
    };

    setReviews([newReview, ...reviews]);

    setRating(0);
    setComment("");
  };

  const averageRating =
    reviews.reduce((total, review) => total + review.rating, 0) /
    reviews.length;

  return (
    <section className="reviews-section">

      <div className="reviews-container">

        {/* HEADER */}

        <div className="reviews-header">

          <div>
            <span className="reviews-label">
              AVIS KLIYAN
            </span>

            <h2>
              Sa kliyan yo di
            </h2>

            <p>
              Dekouvri eksperyans lòt kliyan ak pwofesyonèl sa a.
            </p>
          </div>


          {/* RATING SUMMARY */}

          <div className="rating-summary">

            <strong>
              {averageRating.toFixed(1)}
            </strong>

            <div className="summary-stars">
              {"★★★★★"}
            </div>

            <span>
              {reviews.length} avis
            </span>

          </div>

        </div>


        {/* WRITE REVIEW */}

        <div className="write-review">

          <h3>
            Kijan eksperyans ou te ye?
          </h3>

          <p>
            Bay pwofesyonèl sa a yon nòt epi pataje eksperyans ou.
          </p>


          <form onSubmit={handleSubmit}>

            {/* STARS */}

            <div className="review-rating">

              <span>
                Bay yon nòt:
              </span>

              <div className="rating-buttons">

                {[1, 2, 3, 4, 5].map((star) => (

                  <button
                    key={star}
                    type="button"
                    className={
                      star <= rating
                        ? "star-button active"
                        : "star-button"
                    }
                    onClick={() => setRating(star)}
                    aria-label={`${star} zetwal`}
                  >
                    ★
                  </button>

                ))}

              </div>

            </div>


            {/* COMMENT */}

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Ekri commentaire ou sou sèvis la..."
              rows="4"
            />


            <button
              type="submit"
              className="submit-review"
            >
              Soumèt avis
            </button>

          </form>

        </div>


        {/* REVIEWS LIST */}

        <div className="reviews-list">

          {reviews.map((review) => (

            <article
              className="review-card"
              key={review.id}
            >

              <div className="review-top">

                <div className="review-user">

                  <div className="review-avatar">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <h4>
                      {review.name}
                    </h4>

                    <span>
                      {review.date}
                    </span>
                  </div>

                </div>


                <div className="review-stars">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>

              </div>


              <p className="review-comment">
                {review.comment}
              </p>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ReviewSection;
