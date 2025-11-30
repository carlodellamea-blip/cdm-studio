"use client";

export default function CdmStudioPage() {
  return (
    <div className="cdm-page">
      <header className="cdm-hero" id="top">
        <div className="cdm-shell">
          <nav className="cdm-nav">
            <div className="cdm-logo">CDM Studio</div>
            <div className="cdm-nav-links">
              <a href="#produzioni">Produzioni</a>
              <a href="#chi-sono">Chi sono</a>
              <a href="#contatti">Contatti</a>
            </div>
          </nav>

          <div className="cdm-hero-content">
            <p className="cdm-kicker">Carlo Della Mea · Giornalista & Reporter</p>
            <h1>
              Reportage, contenuti giornalistici e consulenza per la comunicazione.
            </h1>
            <p className="cdm-hero-line cdm-hero-line-strong">
              Redattore @ Telenuovo.
            </p>
            <p className="cdm-hero-line">
              Realizzo servizi, articoli e format digitali per media, istituzioni e realtà del
              territorio. Amo leggere il telegiornale e produrre dirette: è lì che il racconto
              diventa immediato.
            </p>

            <div className="cdm-hero-cta">
              <a href="#contatti" className="cdm-btn cdm-btn-primary">
                Parliamo di un progetto
              </a>
              <a href="#produzioni" className="cdm-btn cdm-btn-secondary">
                Guarda cosa realizzo
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="cdm-main">
        {/* PRODUZIONI */}
        <section id="produzioni" className="cdm-section">
          <div className="cdm-shell">
            <h2>Produzioni</h2>
            <div className="cdm-grid">
              <article className="cdm-card">
                <h3>Servizi TV &amp; Reportage</h3>
                <p>
                  Produzione di servizi, interviste e contributi giornalistici per telegiornali,
                  speciali e dirette.
                </p>
                <p className="cdm-extra">
                  Mi trovate su{" "}
                  <a
                    href="https://www.telenuovo.it"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Telenuovo
                  </a>
                  .
                </p>
              </article>

              <article className="cdm-card">
                <h3>Articoli &amp; Contenuti Editoriali</h3>
                <p>
                  Scrittura di articoli, analisi e racconti per redazioni, media digitali e progetti
                  informativi.
                </p>
              </article>

              <article className="cdm-card">
                <h3>Consulenza Editoriale &amp; Comunicazione</h3>
                <p>
                  Supporto ai progetti di comunicazione: piani editoriali, storytelling e
                  coordinamento dei contenuti per enti e organizzazioni.
                </p>
              </article>

              <article className="cdm-card">
                <h3>Dirette &amp; Conduzioni</h3>
                <p>
                  In diretta ogni volta che il Biancoscudo scende in campo con{" "}
                  <strong>Alè Padova</strong> su Telenuovo.
                </p>
                <p className="cdm-extra">
                  Rivedi le puntate{" "}
                  <a
                    href="https://www.telenuovo.it" // TODO: sostituisci con la pagina specifica di Alè Padova
                    target="_blank"
                    rel="noreferrer"
                  >
                    QUI
                  </a>
                  .
                </p>
                <p className="cdm-extra">
                  Speciali live, conduzioni e moderazioni per appuntamenti pubblici ed eventi dal
                  vivo.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CHI SONO */}
        <section id="chi-sono" className="cdm-section cdm-section-alt">
          <div className="cdm-shell">
            <h2>Chi sono</h2>
            <div className="cdm-text-block">
              <p>
                Sono Carlo Della Mea, giornalista e reporter. Lavoro ogni giorno tra redazione,
                strade, piazze e stadi raccontando ciò che accade nello sport, nella politica e
                nella vita delle città.
              </p>
              <p>
                Padovano classe 1979, osservatore instancabile e papà innamorato.
              </p>
              <p>
                In diretta ogni volta che il Biancoscudo scende in campo con{" "}
                <strong>Alè Padova</strong> su Telenuovo.{" "}
                <a
                  href="https://www.telenuovo.it" // TODO: sostituisci con la pagina specifica delle puntate
                  target="_blank"
                  rel="noreferrer"
                >
                  Rivedi le puntate qui
                </a>
                .
              </p>
              <p>
                Negli anni ho affiancato al lavoro in TV e in redazione una produzione più ampia di
                contenuti: format video, newsletter, progetti speciali per realtà che cercano uno
                sguardo giornalistico capace di usare linguaggi nuovi.
              </p>
              <p>
                <strong>CDM Studio</strong> è il modo in cui tengo insieme tutto questo: un punto di
                contatto unico per chi vuole lavorare con me.
              </p>
            </div>
          </div>
        </section>

        {/* CONTATTI */}
        <section id="contatti" className="cdm-section">
          <div className="cdm-shell">
            <h2>Contatti</h2>
            <div className="cdm-text-block">
              <p>
                <strong>Per segnalazioni, progetti e collaborazioni:</strong>
                <br />
                📧{" "}
                <a href="mailto:carlodellamea@gmail.com">
                  carlodellamea@gmail.com
                </a>
              </p>

              <p>
                <strong>Seguimi qui:</strong>
                <br />
                Instagram · TikTok · YouTube · Facebook
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="cdm-footer">
        <div className="cdm-shell cdm-footer-inner">
          <p>© {new Date().getFullYear()} CDM Studio – Carlo Della Mea</p>
          <p>Giornalismo, reportage e contenuti per il territorio.</p>
        </div>
      </footer>
    </div>
  );
}

