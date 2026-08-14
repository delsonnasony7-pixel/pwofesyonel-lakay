import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

        <button
          className="setup-back"
          onClick={() => navigate("/")}
        >
          ← Retounen
        </button>

        <div className="setup-header">

          <span>KONFIGIRASYON PWOFESYONÈL</span>

          <h1>Konplete pwofil ou</h1>

          <p>
            Bay kèk enfòmasyon sou ou ak sèvis ou yo
            pou kliyan yo ka konnen pwofesyonèl yo ap kontakte a.
          </p>

        </div>

        <form
          className="setup-form"
          onSubmit={handleSubmit}
        >

          {/* ENFÒMASYON PÈSONÈL */}

          <section className="setup-section">

            <div className="setup-section-title">
              <span>01</span>

              <div>
                <h2>Enfòmasyon pèsonèl</h2>

                <p>
                  Enfòmasyon sa yo ap ede kliyan yo idantifye ou.
                </p>
              </div>
            </div>

            <div className="setup-grid">

              <div className="setup-field">
                <label>Prenon</label>

                <input
                  type="text"
                  placeholder="Egzanp: Jean"
                  required
                />
              </div>

              <div className="setup-field">
                <label>Non</label>

                <input
                  type="text"
                  placeholder="Egzanp: Pierre"
                  required
                />
              </div>

              <div className="setup-field">
                <label>Dat nesans</label>

                <input
                  type="date"
                  required
                />
              </div>

              <div className="setup-field">
                <label>Telefòn / WhatsApp</label>

                <input
                  type="tel"
                  placeholder="+509..."
                  required
                />
              </div>

            </div>

            <div className="setup-field">

              <label>Foto pwofil</label>

              <input
                type="file"
                accept="image/png,image/jpeg"
              />

            </div>

          </section>


          {/* ENFÒMASYON PWOFESYONÈL */}

          <section className="setup-section">

            <div className="setup-section-title">
              <span>02</span>

              <div>
                <h2>Enfòmasyon pwofesyonèl</h2>

                <p>
                  Di kliyan yo ki sèvis ou ofri.
                </p>
              </div>
            </div>

            <div className="setup-grid">

              <div className="setup-field">

                <label>Metye</label>

                <select required>

                  <option value="">
                    Chwazi metye ou
                  </option>

                  <option>Elektrisyen</option>
                  <option>Plonbye</option>
                  <option>Mekanisyen</option>
                  <option>Mason</option>
                  <option>Pent</option>
                  <option>Enfòmatik</option>
                  <option>Lòt</option>

                </select>

              </div>


              <div className="setup-field">

                <label>Ane eksperyans</label>

                <select required>

                  <option value="">
                    Chwazi
                  </option>

                  <option>MWens pase 1 ane</option>
                  <option>1 - 3 ane</option>
                  <option>4 - 7 ane</option>
                  <option>8 - 10 ane</option>
                  <option>Plis pase 10 ane</option>

                </select>

              </div>


              <div className="setup-field">

                <label>Zòn sèvis</label>

                <input
                  type="text"
                  placeholder="Egzanp: Delmas"
                  required
                />

              </div>


              <div className="setup-field">

                <label>Sèvis ou ofri</label>

                <input
                  type="text"
                  placeholder="Egzanp: Enstalasyon elektrik"
                  required
                />

              </div>

            </div>


            <div className="setup-field">

              <label>Deskripsyon pwofesyonèl</label>

              <textarea
                rows="5"
                placeholder="Prezante tèt ou ak eksperyans ou..."
                required
              ></textarea>

            </div>

          </section>


          {/* VERIFIKASYON */}

          <section className="setup-section">

            <div className="setup-section-title">

              <span>03</span>

              <div>
                <h2>Verifikasyon idantite</h2>

                <p>
                  Enfòmasyon sa yo rete prive.
                </p>
              </div>

            </div>


            <div className="setup-field">

              <label>Kalite dokiman</label>

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


            <div className="setup-field">

              <label>Dokiman idantite</label>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />

            </div>

          </section>


          {/* SUBMIT */}

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