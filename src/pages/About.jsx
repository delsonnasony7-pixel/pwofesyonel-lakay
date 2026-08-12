import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* HERO */}
        <section className="about-hero">

          <div className="about-hero-content">

            <span className="about-label">
              SOU NOU
            </span>

            <h1>
              Nou konekte moun ak
              <span> bon pwofesyonèl yo.</span>
            </h1>

            <p>
              Pwofesyonèl Lakay se yon platfòm ki fèt pou ede
              moun jwenn pwofesyonèl serye toupre yo, fasil,
              rapid epi san tèt chaje.
            </p>

          </div>

        </section>


        {/* WHO WE ARE */}
        <section className="about-story">

          <div className="about-container">

            <div className="about-story-text">

              <span className="section-label">
                KI MOUN NOU YE?
              </span>

              <h2>
                Yon fason pi fasil pou jwenn moun ou ka fè konfyans.
              </h2>

              <p>
                Nou konnen li pa toujou fasil pou jwenn yon bon
                pwofesyonèl lè ou bezwen yon sèvis. Pafwa ou oblije
                mande plizyè moun, rele anpil nimewo oswa pran risk
                ak yon moun ou pa konnen.
              </p>

              <p>
                Pwofesyonèl Lakay fèt pou rann pwosesis sa a pi
                senp. Nou mete kliyan ak pwofesyonèl nan menm
                espas la pou yo ka jwenn sèvis yo bezwen pi fasil.
              </p>

            </div>


            <div className="about-story-card">

              <div className="about-card-icon">
                🤝
              </div>

              <h3>
                Koneksyon ki baze sou konfyans
              </h3>

              <p>
                Nou vle kreye yon kominote kote kliyan ak
                pwofesyonèl ka jwenn youn lòt fasil.
              </p>

            </div>

          </div>

        </section>


        {/* MISSION */}
        <section className="about-mission">

          <div className="about-container">

            <div className="about-section-heading">

              <span className="section-label">
                MISYON NOU
              </span>

              <h2>
                Fè sèvis pwofesyonèl pi aksesib.
              </h2>

              <p>
                Objektif nou se ede moun jwenn bon moun pou bon
                travay la, pandan n ap bay pwofesyonèl yo plis
                opòtinite pou montre talan yo.
              </p>

            </div>


            <div className="mission-grid">

              <div className="mission-card">
                <div className="mission-icon">
                  🔎
                </div>

                <h3>
                  Fasil pou jwenn
                </h3>

                <p>
                  Chèche pwofesyonèl selon sèvis ak zòn ou.
                </p>
              </div>


              <div className="mission-card">
                <div className="mission-icon">
                  ⭐
                </div>

                <h3>
                  Pi bon chwa
                </h3>

                <p>
                  Konpare pwofil, sèvis ak evalyasyon
                  pwofesyonèl yo.
                </p>
              </div>


              <div className="mission-card">
                <div className="mission-icon">
                  🤝
                </div>

                <h3>
                  Pi bon koneksyon
                </h3>

                <p>
                  Mete kliyan ak pwofesyonèl an kontak
                  dirèkteman.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* HOW IT WORKS */}
        <section className="about-how">

          <div className="about-container">

            <div className="about-section-heading">

              <span className="section-label">
                KIJAN LI MACHE?
              </span>

              <h2>
                Senp. Rapid. Pratik.
              </h2>

            </div>


            <div className="about-steps">

              <div className="about-step">

                <span>01</span>

                <h3>
                  Chèche
                </h3>

                <p>
                  Antre sèvis ou bezwen an ak zòn kote
                  ou ye a.
                </p>

              </div>


              <div className="about-step">

                <span>02</span>

                <h3>
                  Chwazi
                </h3>

                <p>
                  Gade pwofil pwofesyonèl yo epi chwazi
                  moun ki pi bon pou bezwen ou.
                </p>

              </div>


              <div className="about-step">

                <span>03</span>

                <h3>
                  Kontakte
                </h3>

                <p>
                  Kontakte pwofesyonèl la epi òganize
                  sèvis la dirèkteman.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="about-cta">

          <div className="about-cta-content">

            <h2>
              Pare pou jwenn bon pwofesyonèl la?
            </h2>

            <p>
              Chèche sèvis ou bezwen an epi jwenn yon
              pwofesyonèl toupre ou.
            </p>

            <a href="/professionals" className="about-cta-btn">
              Jwenn yon pwofesyonèl →
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default About;