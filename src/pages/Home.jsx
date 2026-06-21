import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { socialLinks } from '../config'
import { definitions, getDefinitionByAcronym } from '../data/definitions'
import Modal from '../components/Modal'
import { useModal } from '../hooks/useModal'
import '../style/modal.css'

export default function Home() {
  const sti2dModal = useModal()
  const sinModal = useModal()
  const btsModal = useModal()
  const sioModal = useModal()
  const sisrModal = useModal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="py-5 px-4 text-center" style={{ minHeight: 'calc(100vh - 56px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(45, 106, 79, 0.05) 0%, rgba(82, 183, 136, 0.05) 100%)' }}>
        <div style={{ maxWidth: '700px' }}>
          <div className="mb-3">
            <span className="badge bg-opacity-10 fw-normal mb-3">
              <i className="fa-solid fa-star me-1"></i>Bienvenue sur mon portfolio
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 800, color: 'var(--accent)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Muller Aymeric
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.35rem)', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
            Alternant en Réseaux et Services Informatiques
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
            Étudiant en 
            {' '}<button className="modal-trigger-btn" onClick={btsModal.open}>BTS</button>
            {' '}<button className="modal-trigger-btn" onClick={sioModal.open}>SIO</button>
            {' '}option
            {' '}<button className="modal-trigger-btn" onClick={sisrModal.open}>SISR</button>
            , mon objectif est d'obtenir le plus de compétences possible pour me rendre disponible auprès d'entreprises et de clients.
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
              <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                Je suis actuellement étudiant en 
                {' '}<button className="modal-trigger-btn" onClick={btsModal.open}>BTS</button>
                {' '}<button className="modal-trigger-btn" onClick={sioModal.open}>SIO</button>
                {' '}<button className="modal-trigger-btn" onClick={sisrModal.open}>SISR</button>
                {' '}(cliquez sur les mots sous-lignées pour en savoir plus) en alternance chez 
                {' '}<Link to="/pages/mon_entreprise" className="modal-trigger-btn">Azurinfo</Link>
                . Mon objectif est de devenir assez compétent pour pouvoir me rendre indispensable auprès d'entreprises et de clients.
              </p>
              <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                J'apprends à développer une culture informatique solide, à maîtriser les systèmes et réseaux, et à comprendre les besoins des entreprises pour leur proposer des solutions adaptées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences principales */}
      <section className="py-5 px-4 border-top bg-body-secondary">
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-center">Mes compétences principales</h2>
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
                      <span className="badge bg-success text-black me-2">HTML</span>
                      <span className="badge bg-success text-black me-2">CSS</span>
                      <span className="badge bg-success text-black me-2">SCSS</span>
                      <span className="badge bg-success text-black">JavaScript</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span className="badge bg-success text-black me-2">React</span>
                      <span className="badge bg-success text-black me-2">Bootstrap</span>
                      <span className="badge bg-success text-black">Responsive Design</span>
                    </div>
                  </div>
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
                      <span className="badge bg-success text-black me-2">Windows Server</span>
                      <span className="badge bg-success text-black me-2">Linux</span>
                      <span className="badge bg-success text-black">Active Directory</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span className="badge bg-success text-black me-2">Réseaux TCP/IP</span>
                      <span className="badge bg-success text-black me-2">Virtualisation</span>
                    </div>
                  </div>
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
                    <span className="badge bg-success text-black">Git / GitHub</span>
                    <span className="badge bg-success text-black">VS Code</span>
                    <span className="badge bg-success text-black">Vite</span>
                    <span className="badge bg-success text-black">Docker</span>
                    <span className="badge bg-success text-black">Figma</span>
                    <span className="badge bg-success text-black">Agile/Scrum</span>
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
                    <p className="text-muted small mb-0">Campus Mediaschool,</p>
                    <p className="text-muted small mb-0">Nice</p>
                  </div>
                  <div className="col-md-9 ps-md-4">
                    <h5 className="fw-bold mb-2">
                      {' '}<button className="modal-trigger-btn" onClick={btsModal.open}>BTS</button>
                      {' '}<button className="modal-trigger-btn" onClick={sioModal.open}>SIO</button>
                      {' '}<button className="modal-trigger-btn" onClick={sisrModal.open}>SISR</button>
                      {' '}en Alternance
                    </h5>
                    <p className="text-muted mb-2">Formation en alternance chez Azurinfo</p>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-success text-black">Systèmes</span>
                      <span className="badge bg-success text-black">Réseaux</span>
                      <span className="badge bg-success text-black">Développement</span>
                    </div>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="row g-0 mb-4 pb-4 border-bottom">
                  <div className="col-md-3 text-md-end pe-md-4">
                    <h6 className="fw-bold text-primary mb-1">2025</h6>
                    <p className="text-muted small mb-0">Lycée Renée-Goscinny,</p>
                    <p className="text-muted small mb-0">Drap</p>
                  </div>
                  <div className="col-md-9 ps-md-4">
                    <h5 className="fw-bold mb-2">Baccalauréat technologique
                      {' '}<button className="modal-trigger-btn" onClick={sti2dModal.open}>STI2D</button> 
                      {' '}option 
                      {' '}<button className="modal-trigger-btn" onClick={sinModal.open}>SIN</button>
                    </h5>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-success text-black">Mention très bien</span>
                    </div>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="row g-0 mb-4 pb-4">
                  <div className="col-md-3 text-md-end pe-md-4">
                    <h6 className="fw-bold text-primary mb-1">2022</h6>
                    <p className="text-muted small mb-0">Collège François-Rabelais,</p>
                    <p className="text-muted small mb-0">L'Escarene</p>
                  </div>
                  <div className="col-md-9 ps-md-4">
                    <h5 className="fw-bold mb-2">Brevet</h5>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-success text-black">Mention très bien</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal STI2D */}
      <Modal 
        isOpen={sti2dModal.isOpen} 
        title={getDefinitionByAcronym('STI2D')?.acronym}
        onClose={sti2dModal.close}
      >
        <p>
          <strong>{getDefinitionByAcronym('STI2D')?.acronym}</strong> signifie <strong>"{getDefinitionByAcronym('STI2D')?.fullName}"</strong>.
        </p>
      </Modal>

      {/* Modal SIN */}
      <Modal 
        isOpen={sinModal.isOpen} 
        title={getDefinitionByAcronym('SIN')?.acronym}
        onClose={sinModal.close}
      >
        <p>
          <strong>{getDefinitionByAcronym('SIN')?.acronym}</strong> signifie <strong>"{getDefinitionByAcronym('SIN')?.fullName}"</strong>.
        </p>
      </Modal>

      {/* Modal BTS */}
      <Modal 
        isOpen={btsModal.isOpen} 
        title={getDefinitionByAcronym('BTS')?.acronym}
        onClose={btsModal.close}
      >
        <p>
          <strong>{getDefinitionByAcronym('BTS')?.acronym}</strong> signifie <strong>"{getDefinitionByAcronym('BTS')?.fullName}"</strong>.
        </p>
      </Modal>

      {/* Modal SIO */}
      <Modal 
        isOpen={sioModal.isOpen} 
        title={getDefinitionByAcronym('SIO')?.acronym}
        onClose={sioModal.close}
      >
        <p>
          <strong>{getDefinitionByAcronym('SIO')?.acronym}</strong> signifie <strong>"{getDefinitionByAcronym('SIO')?.fullName}"</strong>.
        </p>
      </Modal>

      {/* Modal SISR */}
      <Modal 
        isOpen={sisrModal.isOpen} 
        title={getDefinitionByAcronym('SISR')?.acronym}
        onClose={sisrModal.close}
      >
        <p>
          <strong>{getDefinitionByAcronym('SISR')?.acronym}</strong> signifie <strong>"{getDefinitionByAcronym('SISR')?.fullName}"</strong>.
        </p>
      </Modal>

    </>
  )
}
