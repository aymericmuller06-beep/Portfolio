import { useEffect } from 'react'
import { socialLinks } from '../config'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="py-5 px-4 text-center" style={{ minHeight: 'calc(100vh - 56px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(45, 106, 79, 0.05) 0%, rgba(82, 183, 136, 0.05) 100%)' }}>
        <div style={{ maxWidth: '700px' }}>
          <div className="mb-3">
            <span className="badge bg-primary bg-opacity-10 text-primary fw-normal mb-3">
              <i className="fa-solid fa-star me-1"></i>Bienvenue sur mon portfolio
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 800, color: 'var(--accent)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Aymeric Muller
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.35rem)', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
            Développeur Web & Administrateur Systèmes
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
            Étudiant en BTS SIO option SISR, passionné par le développement web et l'infrastructure informatique. Je crée des solutions web modernes tout en maîtrisant les systèmes et réseaux.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center mb-4">
            <a href="#about" className="btn btn-primary px-4 py-2 fw-semibold">
              <i className="fa-solid fa-arrow-down me-2"></i>Découvrir mon profil
            </a>
            <a href={`mailto:${socialLinks.email}`} className="btn btn-outline-primary px-4 py-2">
              <i className="fa-solid fa-envelope me-2"></i>Me contacter
            </a>
          </div>
        </div>
      </section>

      {/* Statistiques rapides */}
      <section className="py-5 px-4 bg-body-secondary">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3 col-sm-6 text-center">
              <h3 className="display-6 fw-bold text-primary mb-2">2</h3>
              <p className="text-muted mb-0">Années d'expérience</p>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <h3 className="display-6 fw-bold text-primary mb-2">10+</h3>
              <p className="text-muted mb-0">Projets réalisés</p>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <h3 className="display-6 fw-bold text-primary mb-2">15+</h3>
              <p className="text-muted mb-0">Compétences techniques</p>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <h3 className="display-6 fw-bold text-primary mb-2">2</h3>
              <p className="text-muted mb-0">Stages complétés</p>
            </div>
          </div>
        </div>
      </section>

      {/* À propos détaillé */}
      <section id="about" className="py-5 px-4 border-top">
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-center">À propos de moi</h2>
          <div className="row g-4 align-items-center mb-5">
            <div className="col-lg-4 text-center">
              <div style={{ aspectRatio: 1, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <img src="./src/Img/Aymeric png.webp" alt="Aymeric Muller" className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="col-lg-8">
              <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                Je suis un développeur web et administrateur systèmes en alternance, actuellement en <strong>BTS SIO option SISR</strong> chez un partenaire informatique. Mon parcours combine la créativité du développement web avec la rigueur de l'infrastructure IT.
              </p>
              <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                Ma passion ? Concevoir des solutions web performantes tout en comprenant les systèmes et réseaux qui les supportent. Je crois en une approche holistique de l'informatique où le développement et l'infrastructure travaillent en harmonie.
              </p>
              <div className="row g-3">
                <div className="col-md-6">
                  <p className="mb-2"><strong>📚 Formation actuelle</strong></p>
                  <p className="text-muted">BTS Services Informatiques aux Organisations<br />Option SISR (2025-2027)</p>
                </div>
                <div className="col-md-6">
                  <p className="mb-2"><strong>🎯 Objectif professionnel</strong></p>
                  <p className="text-muted">Maîtriser l'infrastructure pour élargir vers le développement full-stack et les DevOps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences principales */}
      <section className="py-5 px-4 border-top bg-body-secondary">
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-center">Compétences principales</h2>
          <div className="row g-4">
            {/* Web Development */}
            <div className="col-lg-6">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-code text-primary" style={{ fontSize: '1.8rem' }}></i>
                    <h5 className="card-title mb-0 ms-3">Développement Web</h5>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <span className="badge bg-primary me-2">HTML5</span>
                      <span className="badge bg-primary me-2">CSS3</span>
                      <span className="badge bg-primary">JavaScript</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span className="badge bg-primary me-2">React</span>
                      <span className="badge bg-primary me-2">Bootstrap</span>
                      <span className="badge bg-primary">Responsive Design</span>
                    </div>
                  </div>
                  <p className="card-text text-muted mb-0">Création de sites et applications web modernes, responsive et performants avec focus sur l'UX/UI.</p>
                </div>
              </div>
            </div>
            {/* Systèmes et Réseaux */}
            <div className="col-lg-6">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-server text-primary" style={{ fontSize: '1.8rem' }}></i>
                    <h5 className="card-title mb-0 ms-3">Systèmes & Réseaux</h5>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <span className="badge bg-success me-2">Windows Server</span>
                      <span className="badge bg-success me-2">Linux</span>
                      <span className="badge bg-success">Active Directory</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span className="badge bg-success me-2">Réseaux TCP/IP</span>
                      <span className="badge bg-success me-2">Virtualisation</span>
                      <span className="badge bg-success">Administration Sys</span>
                    </div>
                  </div>
                  <p className="card-text text-muted mb-0">Administration et configuration de systèmes, gestion des réseaux, sécurité informatique et infrastructure IT.</p>
                </div>
              </div>
            </div>
            {/* Outils et Technologies */}
            <div className="col-lg-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-tools text-primary" style={{ fontSize: '1.8rem' }}></i>
                    <h5 className="card-title mb-0 ms-3">Outils & Technologies</h5>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge bg-secondary">Git / GitHub</span>
                    <span className="badge bg-secondary">VS Code</span>
                    <span className="badge bg-secondary">Vite</span>
                    <span className="badge bg-secondary">MySQL</span>
                    <span className="badge bg-secondary">API REST</span>
                    <span className="badge bg-secondary">Docker</span>
                    <span className="badge bg-secondary">Figma</span>
                    <span className="badge bg-secondary">Agile/Scrum</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours & Expérience */}
      <section className="py-5 px-4 border-top">
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-center">Mon parcours</h2>
          <div className="row g-4">
            <div className="col-lg-8 mx-auto">
              {/* Timeline */}
              <div className="timeline">
                {/* Item 1 */}
                <div className="row g-0 mb-4 pb-4 border-bottom">
                  <div className="col-md-3 text-md-end pe-md-4">
                    <h6 className="fw-bold text-primary mb-1">2025 - 2027</h6>
                    <p className="text-muted small mb-0">En cours</p>
                  </div>
                  <div className="col-md-9 ps-md-4">
                    <h5 className="fw-bold mb-2">BTS SIO - Option SISR</h5>
                    <p className="text-muted mb-2">Formation en alternance combinant développement et infrastructure</p>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-light text-dark border">Systèmes</span>
                      <span className="badge bg-light text-dark border">Réseaux</span>
                      <span className="badge bg-light text-dark border">Développement</span>
                    </div>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="row g-0 mb-4 pb-4 border-bottom">
                  <div className="col-md-3 text-md-end pe-md-4">
                    <h6 className="fw-bold text-primary mb-1">2024</h6>
                    <p className="text-muted small mb-0">4 mois</p>
                  </div>
                  <div className="col-md-9 ps-md-4">
                    <h5 className="fw-bold mb-2">Stage - Administration Systèmes</h5>
                    <p className="text-muted mb-2">Gestion d'infrastructure et maintenance de parc informatique</p>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-light text-dark border">Windows Server</span>
                      <span className="badge bg-light text-dark border">AD/GPO</span>
                      <span className="badge bg-light text-dark border">Support utilisateurs</span>
                    </div>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="row g-0 mb-4 pb-4">
                  <div className="col-md-3 text-md-end pe-md-4">
                    <h6 className="fw-bold text-primary mb-1">2023</h6>
                    <p className="text-muted small mb-0">Autoformation</p>
                  </div>
                  <div className="col-md-9 ps-md-4">
                    <h5 className="fw-bold mb-2">Débuts en développement web</h5>
                    <p className="text-muted mb-2">Apprentissage des fondamentaux web et création de premiers projets</p>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-light text-dark border">HTML/CSS</span>
                      <span className="badge bg-light text-dark border">JavaScript</span>
                      <span className="badge bg-light text-dark border">Bootstrap</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="py-5 px-4 bg-primary text-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">Vous cherchez un développeur ou administrateur système ?</h2>
          <p className="lead mb-4">Je serais ravi d'explorer avec vous comment je peux contribuer à vos projets</p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a href={`mailto:${socialLinks.email}`} className="btn btn-light btn-lg fw-semibold">
              <i className="fa-solid fa-envelope me-2"></i>Envoyer un email
            </a>
            <a href="/pages/projets_stage" className="btn btn-outline-light btn-lg fw-semibold">
              <i className="fa-solid fa-folder me-2"></i>Voir mes projets
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
