import "./Home.css";
import Navbar from "../components/Navbar";
import ProfessionalCard from "../components/ProfessionalCard";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <main className="home">

        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-container">

            <div className="hero-content">

              <span className="hero-badge">
                <h4>* Sèvis pwofesyonèl toupre ou </h4>
              </span>

              <h1>
                Jwenn bon
                <span> pwofesyonèl la</span>
                <br />
                toupre lakay ou.
              </h1>

              <p>
                Pwofesyonèl Lakay konekte w ak teknisyen ak pwofesyonèl
                serye nan zòn ou an. Chèche sèvis ou bezwen an fasil,
                rapid epi san tèt chaje.
              </p>

              <div className="hero-buttons">

                <button className="primary-btn">
                  Jwenn yon pwofesyonèl
                </button>

                <button className="secondary-btn">
                  Mwen se yon pwofesyonèl
                </button>

              </div>

            </div>


            <div className="hero-visual">

              <div className="hero-card">

                <div className="hero-card-top">
                  <span className="status-dot"></span>
                  Disponib kounye a
                </div>

                <div className="professional-avatar">
                  👨🏾‍🔧
                </div>

                <h3>Jean Pierre</h3>

                <p>Elektrisyen</p>

                <div className="rating">
                  ★★★★★
                  <span>4.9</span>
                </div>

                <div className="location">
                  📍 Delmas, Haïti
                </div>

                <button className="profile-btn" 
                onClick={() => navigate("/professional/jean-pierre")}
                >
                  Gade pwofil
                </button>

              </div>

            </div>

          </div>
        </section>


       
{/* SEARCH SECTION */}
<section className="search-section">

  <div className="search-container">

    <div className="search-heading">

      <span>JWENN YON PWOFESYONÈL</span>

      <h2>
        Ki sèvis ou bezwen?
      </h2>

      <p>
        Tape sèvis la ak zòn ou ye a pou jwenn
        pwofesyonèl ki toupre ou.
      </p>

    </div>


    <div className="search-box">

      {/* SERVICE */}
      <div className="search-field">

        <span className="search-icon">
          🔧
        </span>

        <div>
          <small>Sèvis</small>

          <input
            type="text"
            placeholder="Tape sèvis ou bezwen..."
          />
        </div>

      </div>


      <div className="search-divider"></div>


      {/* LOCATION */}
      <div className="search-field">

        <span className="search-icon">
          📍
        </span>

        <div>
          <small>Zòn</small>

          <input
            type="text"
            placeholder="Tape zòn ou..."
          />
        </div>

      </div>


      <button className="search-btn">
        🔍 Chèche
      </button>

    </div>

  </div>

</section>


        {/* CATEGORIES SECTION */}
        <section className="categories-section">

          <div className="section-container">

            <div className="section-heading">

              <div>

                <span>
                  DOMÈN POPILÈ
                </span>

                <h2>
                  Ki sèvis ou bezwen?
                </h2>

              </div>


              <button className="view-all-btn">
                Gade tout →
              </button>

            </div>


            <div className="categories-grid">

              <div className="category-card">

                <div className="category-icon">
                  🔧
                </div>

                <h3>
                  Plonbye
                </h3>

                <p>
                  124 pwofesyonèl
                </p>

              </div>


              <div className="category-card">

                <div className="category-icon">
                  ⚡
                </div>

                <h3>
                  Elektrisyen
                </h3>

                <p>
                  98 pwofesyonèl
                </p>

              </div>


              <div className="category-card">

                <div className="category-icon">
                  🚗
                </div>

                <h3>
                  Mekanisyen
                </h3>

                <p>
                  76 pwofesyonèl
                </p>

              </div>


              <div className="category-card">

                <div className="category-icon">
                  🎨
                </div>

                <h3>
                  Pent
                </h3>

                <p>
                  65 pwofesyonèl
                </p>

              </div>


              <div className="category-card">

                <div className="category-icon">
                  🧱
                </div>

                <h3>
                  Mason
                </h3>

                <p>
                  82 pwofesyonèl
                </p>

              </div>


              <div className="category-card">

                <div className="category-icon">
                  💻
                </div>

                <h3>
                  Enfòmatik
                </h3>

                <p>
                  54 pwofesyonèl
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* PROFESSIONALS SECTION */}
        <section className="professionals-section">

          <div className="section-container">

            <div className="section-heading">

              <div>

                <span>
                  PROFESYONÈL REKÒMANDE
                </span>

                <h2>
                  Moun ou ka fè konfyans
                </h2>

              </div>


              <button className="view-all-btn">
                Gade tout →
              </button>

            </div>


            <div className="professionals-grid">

              <ProfessionalCard
                name="Jean Pierre"
                profession="Elektrisyen"
                location="Delmas"
                rating="4.9"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500"
              />


              <ProfessionalCard
                name="Marie Louis"
                profession="Plonbye"
                location="Pétion-Ville"
                rating="4.8"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
              />


              <ProfessionalCard
                name="Paul Joseph"
                profession="Mekanisyen"
                location="Carrefour"
                rating="4.9"
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
              />

            </div>

          </div>

        </section>


        {/* HOW IT WORKS */}
        <section className="how-section">

          <div className="section-container">

            <div className="center-heading">

              <span>
                FASIL EPI RAPID
              </span>

              <h2>
                Kijan Pwofesyonèl Lakay mache?
              </h2>

              <p>
                Nan kèk etap sèlman, ou ka jwenn moun ki kapab
                ede w ak sèvis ou bezwen an.
              </p>

            </div>


            <div className="steps">

              <div className="step">

                <div className="step-number">
                  01
                </div>

                <h3>
                  Chèche sèvis ou
                </h3>

                <p>
                  Chwazi sèvis ou bezwen an epi antre zòn kote
                  ou ye a.
                </p>

              </div>


              <div className="step">

                <div className="step-number">
                  02
                </div>

                <h3>
                  Chwazi pwofesyonèl
                </h3>

                <p>
                  Konpare pwofesyonèl yo, gade pwofil yo,
                  eksperyans ak evalyasyon yo.
                </p>

              </div>


              <div className="step">

                <div className="step-number">
                  03
                </div>

                <h3>
                  Kontakte li
                </h3>

                <p>
                  Kontakte pwofesyonèl ou chwazi a epi
                  òganize sèvis la.
                </p>

              </div>

            </div>

          </div>

        </section>

      </main>
      <Footer/>
    </>
  );
};

export default Home;