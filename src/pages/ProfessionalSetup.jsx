import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IdentityVerification from "../components/IdentityVerification";
import "./ProfessionalSetup.css";

const ProfessionalSetup = () => {
  const navigate = useNavigate();

  const [documentType, setDocumentType] = useState("NIF");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Pwofil pwofesyonèl ou an soumèt ak siksè!");
  };

  return (
    <main className="professional-setup">

      <div className="setup-container">

        {/* BACK BUTTON */}

        <button
          className="setup-back"
          type="button"
          onClick={() => navigate("/")}
        >
          ← Retounen
        </button>


        {/* HEADER */}

        <div className="setup-header">

          <span>
            KONFIGIRASYON PWOFESYONÈL
          </span>

          <h1>
            Konplete pwofil ou
          </h1>

          <p>
            Bay kèk enfòmasyon sou ou ak sèvis ou yo
            pou kliyan yo ka konnen pwofesyonèl yo ap kontakte a.
          </p>

        </div>


        {/* FORM */}

        <form
          className="setup-form"
          onSubmit={handleSubmit}
        >

          {/* =====================================
              01 — ENFÒMASYON PÈSONÈL
          ====================================== */}

          <section className="setup-section">

            <div className="setup-section-title">

              <span>01</span>

              <div>

                <h2>
                  Enfòmasyon pèsonèl
                </h2>

                <p>
                  Enfòmasyon sa yo ap ede kliyan yo idantifye ou.
                </p>

              </div>

            </div>


            <div className="setup-grid">

              <div className="setup-field">

                <label>
                  Prenon
                </label>

                <input
                  type="text"
                  placeholder="Egzanp: Jean"
                  required
                />

              </div>


              <div className="setup-field">

                <label>
                  Non
                </label>

                <input
                  type="text"
                  placeholder="Egzanp: Pierre"
                  required
                />

              </div>


              <div className="setup-field">

                <label>
                  Dat nesans
                </label>

                <input
                  type="date"
                  required
                />

              </div>


              <div className="setup-field">

                <label>
                  Telefòn / WhatsApp
                </label>

                <input
                  type="tel"
                  placeholder="+509..."
                  required
                />

              </div>

            </div>


            {/* FOTO PWOFIL */}

            <div className="setup-field">

              <label>
                Foto pwofil
              </label>

              <input
                type="file"
                accept="image/png,image/jpeg"
              />

            </div>

          </section>


          {/* =====================================
              02 — ENFÒMASYON PWOFESYONÈL
          ====================================== */}

          <section className="setup-section">

            <div className="setup-section-title">

              <span>02</span>

              <div>

                <h2>
                  Enfòmasyon pwofesyonèl
                </h2>

                <p>
                  Di kliyan yo ki sèvis ou ofri.
                </p>

              </div>

            </div>


            <div className="setup-grid">

              {/* METYE */}

              <div className="setup-field">

                <label>
                  Metye
                </label>

                <select required>

                  <option value="">
                    Chwazi metye ou
                  </option>

                  <option>
                    Elektrisyen
                  </option>

                  <option>
                    Plonbye
                  </option>

                  <option>
                    Mekanisyen
                  </option>

                  <option>
                    Mason
                  </option>

                  <option>
                    Pent
                  </option>

                  <option>
                    Enfòmatik
                  </option>

                  <option>
                    Lòt
                  </option>

                </select>

              </div>


              {/* EXPERYANS */}

              <div className="setup-field">

                <label>
                  Ane eksperyans
                </label>

                <select required>

                  <option value="">
                    Chwazi
                  </option>

                  <option>
                    Mwens pase 1 ane
                  </option>

                  <option>
                    1 - 3 ane
                  </option>

                  <option>
                    4 - 7 ane
                  </option>

                  <option>
                    8 - 10 ane
                  </option>

                  <option>
                    Plis pase 10 ane
                  </option>

                </select>

              </div>


              {/* ZÒN */}

              <div className="setup-field">

                <label>
                  Zòn sèvis
                </label>

                <input
                  type="text"
                  placeholder="Egzanp: Delmas"
                  required
                />

              </div>


              {/* SÈVIS */}

              <div className="setup-field">

                <label>
                  Sèvis ou ofri
                </label>

                <input
                  type="text"
                  placeholder="Egzanp: Enstalasyon elektrik"
                  required
                />

              </div>

            </div>


            {/* DESKRIPSYON */}

            <div className="setup-field">

              <label>
                Deskripsyon pwofesyonèl
              </label>

              <textarea
                rows="5"
                placeholder="Prezante tèt ou ak eksperyans ou..."
                required
              ></textarea>

            </div>

          </section>


          {/* =====================================
              03 — VERIFIKASYON DOKIMAN
          ====================================== */}

          <section className="setup-section">

            <div className="setup-section-title">

              <span>03</span>

              <div>

                <h2>
                  Verifikasyon idantite
                </h2>

                <p>
                  Chwazi yon dokiman epi bay enfòmasyon
                  ki nesesè pou verifye idantite ou.
                </p>

              </div>

            </div>


            {/* DOCUMENT TYPE */}

            <div className="setup-field">

              <label>
                Kalite dokiman
              </label>

              <div className="document-options">

                <button
                  type="button"
                  className={
                    documentType === "NIF"
                      ? "document-option active"
                      : "document-option"
                  }
                  onClick={() => setDocumentType("NIF")}
                >
                  NIF
                </button>


                <button
                  type="button"
                  className={
                    documentType === "NINU"
                      ? "document-option active"
                      : "document-option"
                  }
                  onClick={() => setDocumentType("NINU")}
                >
                  NINU
                </button>


                <button
                  type="button"
                  className={
                    documentType === "Paspò"
                      ? "document-option active"
                      : "document-option"
                  }
                  onClick={() => setDocumentType("Paspò")}
                >
                  Paspò
                </button>

              </div>

            </div>


            {/* DOCUMENT NUMBER */}

            <div className="setup-field">

              <label>
                Nimewo {documentType}
              </label>

              <input
                type="text"
                placeholder={`Antre nimewo ${documentType}`}
                required
              />

            </div>


            {/* DOCUMENT SCAN */}

            <div className="setup-field">

              <label>
                Eskane pyès idantite ou an
              </label>

              <p className="verification-description">
                Louvri kamera a pou pran yon foto klè devan pyès
                idantite ou.
              </p>

            </div>

          </section>


          {/* =====================================
              04 — VERIFIKASYON VIZAJ
          ====================================== */}

          <section className="setup-section">

            <div className="setup-section-title">

              <span>04</span>

              <div>

                <h2>
                  Verifikasyon vizaj
                </h2>

                <p>
                  Sèvi ak kamera aparèy ou pou verifye
                  vizaj ou.
                </p>

              </div>

            </div>


            <IdentityVerification />

          </section>


          {/* =====================================
              SUBMIT
          ====================================== */}

          <div className="setup-submit-area">

            <p>
              🔒 Enfòmasyon prive ou yo ap rete pwoteje.
            </p>

            <button
              type="submit"
              className="setup-submit"
            >
              Soumèt pwofil pou verifikasyon →
            </button>

          </div>

        </form>

      </div>

    </main>
  );
};

export default ProfessionalSetup;