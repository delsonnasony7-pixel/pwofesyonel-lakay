import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfessionalCard from "../components/ProfessionalCard";
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
                  356 pwofesyonèl jwenn
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

              {/* JEAN PIERRE */}
              <ProfessionalCard
                id="jean-pierre"
                name="Jean Pierre"
                profession="Elektrisyen"
                location="Delmas"
                rating="4.9"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500"
              />


              {/* MARIE LOUIS */}
              <ProfessionalCard
                id="marie-louis"
                name="Marie Louis"
                profession="Plonbye"
                location="Pétion-Ville"
                rating="4.8"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
              />


              {/* PAUL JOSEPH */}
              <ProfessionalCard
                id="paul-joseph"
                name="Paul Joseph"
                profession="Mekanisyen"
                location="Carrefour"
                rating="4.9"
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
              />


              {/* DAVID CHARLES */}
              <ProfessionalCard
                id="david-charles"
                name="David Charles"
                profession="Pent"
                location="Tabarre"
                rating="4.7"
                image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500"
              />


              {/* SAMUEL JEAN */}
              <ProfessionalCard
                id="samuel-jean"
                name="Samuel Jean"
                profession="Mason"
                location="Pétion-Ville"
                rating="4.8"
                image="https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500"
              />


              {/* SARAH MICHEL */}
              <ProfessionalCard
                id="sarah-michel"
                name="Sarah Michel"
                profession="Enfimyè"
                location="Delmas"
                rating="4.9"
                image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500"
              />

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default Professionals;