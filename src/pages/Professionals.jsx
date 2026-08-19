import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfessionalCard from "../components/ProfessionalCard";
import professionals from "../data/professionals";
import "./Professionals.css";

const Professionals = () => {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");

  return (
    <>
      <Navbar />

      <main className="professionals-page">

        {/* PAGE HEADER */}
        <section className="professionals-header">

          <div className="professionals-header-content">

            <span className="page-label"></span>

            <h1>
              Jwenn pwofesyonèl
              <span> ou bezwen an</span>
            </h1>

            <p>
              Chèche teknisyen ak pwofesyonèl serye
              selon sèvis ak zòn ou.
            </p>

          </div>

        </section>


        {/* SEARCH & FILTER */}
        <section className="professionals-search">

          <div className="professionals-search-container">

            <div className="professional-search-field">

              <span>🔧</span>

              <div>

                <small>Sèvis</small>

                <input
                  type="text"
                  placeholder="Tape sèvis ou bezwen..."
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                />

              </div>

            </div>


            <div className="professional-search-field">

              <span>📍</span>

              <div>

                <small>Zòn</small>

                <input
                  type="text"
                  placeholder="Tape zòn ou..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />

              </div>

            </div>


            <button className="professional-search-btn">
              Chèche
            </button>

          </div>

        </section>


        {/* PROFESSIONALS LIST */}
        <section className="professionals-list-section">

          <div className="professionals-list-container">

            <div className="professionals-list-header">

              <div>

                <h2>
                  Pwofesyonèl disponib
                </h2>

                <p>
                  {professionals.length} pwofesyonèl jwenn
                </p>

              </div>


              <select className="sort-select">

                <option>
                  Pi rekòmande
                </option>

                <option>
                  Pi byen note
                </option>

                <option>
                  Pi pre mwen
                </option>

                <option>
                  Pi nouvo
                </option>

              </select>

            </div>


            {/* PROFESSIONAL CARDS */}
            <div className="professionals-page-grid">

              {professionals.map((professional) => (

                <ProfessionalCard
                  key={professional.id}
                  id={professional.id}
                  name={professional.name}
                  profession={professional.profession}
                  location={professional.location}
                  rating={professional.rating}
                  image={professional.image}
                />

              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default Professionals;