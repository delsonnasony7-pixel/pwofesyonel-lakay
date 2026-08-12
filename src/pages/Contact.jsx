import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1800&q=85",
    category: "ELEKTRISYEN",
    title: "ABC Électricité",
    text: "Solisyon elektrik serye pou kay ak biznis.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1800&q=85",
    category: "PLONBYE",
    title: "Pro Plomberie",
    text: "Enstalasyon ak reparasyon plonbri rapid ak pwofesyonèl.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85",
    category: "KONSTRIKSYON",
    title: "Bati Plus",
    text: "Konstriksyon ak renovasyon pou kay ak biznis.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1800&q=85",
    category: "MEKANISYEN",
    title: "Auto Expert",
    text: "Antretyen ak reparasyon machin avèk bon jan sèvis.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",
    category: "ENFÒMATIK",
    title: "Tech Solutions",
    text: "Sèvis enfòmatik ak solisyon teknoloji pou biznis ou.",
  },
];

const Contact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />

      <main className="contact-page">

        {/* =========================
            BUSINESS ADVERTISEMENT
        ========================= */}

        <section className="contact-slider">

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`contact-slide ${
                index === currentSlide ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >

              <div className="slide-overlay"></div>

              <div className="slider-content">

                <span className="slider-category">
                  {slide.category}
                </span>

                <h1>
                  {slide.title}
                </h1>

                <p>
                  {slide.text}
                </p>

                <button className="slider-btn">
                  Dekouvri biznis la →
                </button>

              </div>

            </div>
          ))}


          {/* SLIDER DOTS */}

          <div className="slider-dots">

            {slides.map((_, index) => (
              <button
                key={index}
                className={index === currentSlide ? "active" : ""}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}

          </div>

        </section>


        {/* =========================
            CONTACT INFORMATION
        ========================= */}

        <section className="contact-section">

          <div className="contact-container">

            <div className="contact-heading">

              <span className="section-label">
                KONTAKTE NOU
              </span>

              <h2>
                Nou la pou ede w.
              </h2>

              <p>
                Ou gen yon kesyon, yon sijesyon oswa ou vle
                fè biznis ou parèt sou Pwofesyonèl Lakay?
                Kontakte nou.
              </p>

            </div>


            <div className="contact-info-grid">

              <div className="contact-card">

                <div className="contact-icon">
                  📍
                </div>

                <div>
                  <small>Adrès</small>
                  <h3>Port-au-Prince, Haïti</h3>
                </div>

              </div>


              <div className="contact-card">

                <div className="contact-icon">
                  📞
                </div>

                <div>
                  <small>Telefòn</small>
                  <h3>+509 0000-0000</h3>
                </div>

              </div>


              <div className="contact-card">

                <div className="contact-icon">
                  ✉️
                </div>

                <div>
                  <small>Email</small>
                  <h3>
                    contact@professionnellakay.com
                  </h3>
                </div>

              </div>


              <div className="contact-card">

                <div className="contact-icon">
                  🕐
                </div>

                <div>
                  <small>Orè</small>
                  <h3>Lendi – Vandredi</h3>
                  <p>8:00 AM – 5:00 PM</p>
                </div>

              </div>

            </div>


            {/* CONTACT FORM */}

            <div className="contact-form-wrapper">

              <div className="contact-form-text">

                <span className="section-label">
                  VOYE YON MESAJ
                </span>

                <h2>
                  Ki jan nou ka ede w?
                </h2>

                <p>
                  Ranpli fòm lan epi ekip nou an ap
                  kontakte ou pi vit posib.
                </p>

              </div>


              <form className="contact-form">

                <div className="form-row">

                  <div className="form-group">

                    <label>Non ou</label>

                    <input
                      type="text"
                      placeholder="Antre non ou"
                    />

                  </div>


                  <div className="form-group">

                    <label>Email</label>

                    <input
                      type="email"
                      placeholder="Antre email ou"
                    />

                  </div>

                </div>


                <div className="form-group">

                  <label>Telefòn</label>

                  <input
                    type="tel"
                    placeholder="+509..."
                  />

                </div>


                <div className="form-group">

                  <label>Mesaj</label>

                  <textarea
                    rows="5"
                    placeholder="Ekri mesaj ou..."
                  ></textarea>

                </div>


                <button
                  type="submit"
                  className="contact-submit"
                >
                  Voye mesaj →
                </button>

              </form>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default Contact;