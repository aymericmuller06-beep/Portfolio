import { useEffect, useState } from 'react'
import { definitions, getDefinitionByAcronym } from '../data/definitions'
import Modal from '../components/Modal'
import { useModal } from '../hooks/useModal'

export default function Veilletech() {
  const hardwareModal = useModal()
  const iotModal = useModal()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="py-5 px-4 text-center border-bottom hero-section hero-section--small">
        <div style={{ maxWidth: '900px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '1.5rem' }}>
            Veille Technologique
          </h1>
          <p className="body-text body-text--muted">
            Mes recherches et analyses sur un sujet de veille technologique.
          </p>
        </div>
      </section>

      <section className="py-5 px-4 border-bottom">
        <div className="container">
          <h2 className="display-6 fw-bold mb-4">Introduction</h2>
        </div>
      </section>

      <section className="py-5 px-4 border-bottom bg-body-secondary">
        <div className="container">
          <h2 className="display-6 fw-bold mb-4" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '1.5rem' }}>Sujet : L'{' '}<button className="modal-trigger-btn" onClick={iotModal.open}>{getDefinitionByAcronym('IoT')?.acronym}</button> dans le football.</h2>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--bs-text-light)', marginBottom: '1rem', lineHeight: 1.3 }}>
            Comment faire pour fiabiliser une infrastructure dédiée à de la précision et rapidité dans un milieu tel qu'un stade ?
          </h1>
        </div>
      </section>

      <section className="py-5 px-4 border-bottom">
        <div className="container">
          <h2 className="display-6 fw-bold mb-5">Mise en place de la Veille</h2>
          
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-magnifying-glass text-primary" style={{ fontSize: '1.8rem' }}></i>
                    <h5 className="card-title mb-0 ms-3">Comment va se faire ma recherche</h5>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-key text-primary" style={{ fontSize: '1.8rem' }}></i>
                    <h5 className="card-title mb-0 ms-3">Les outils et mots-clés de ma recherche</h5>
                  </div>
                  <p className="text-muted mb-3">Je vais utiliser Excel pour faire un suivi des articles</p>
                  
                  <a href="https://1drv.ms/x/c/4425321540cb89f5/IQBjXY2MZMSGQpbWvVcZ1BpGAfs182K8eGpomouy8GU84v8?e=X8QG09" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                    <i className="fa-solid fa-file-excel me-2"></i>Accéder au suivi Excel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 px-4 border-bottom bg-body-secondary">
        <div className="container">
          <h2 className="display-6 fw-bold mb-5">Recherche et Analyse</h2>
          
          <div className="mb-5">
            <h3 className="fw-bold mb-4">Pourquoi c'est "complexe" ?</h3>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="card border-0 h-100 shadow-sm" style={{ transition: 'all 0.3s ease', cursor: 'pointer', display: 'flex', flexDirection: 'column' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <div className="card-body text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <div>
                      <i className="fa-solid fa-circle-exclamation" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1rem', display: 'block' }}></i>
                      <h5 className="card-title fw-bold">Une infrastructure critique en temps réel</h5>
                      <p className="text-muted" style={{ fontSize: '0.95rem', marginTop: '0.75rem' }}>Zéro latence toléré, haute disponibilité requise</p>
                    </div>
                    <button className="fw-semibold mt-3" style={{ background: 'none', border: 'none', padding: '0', color: 'var(--accent)', cursor: 'pointer', fontSize: '1rem', alignSelf: 'flex-start', textDecoration: 'none' }}>
                      <i className="fa-solid fa-arrow-right me-2"></i>Savoir plus
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card border-0 h-100 shadow-sm" style={{ transition: 'all 0.3s ease', cursor: 'pointer', display: 'flex', flexDirection: 'column' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <div className="card-body text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <div>
                      <i className="fa-solid fa-tower-cell" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1rem', display: 'block' }}></i>
                      <h5 className="card-title fw-bold">Le défi de la haute densité</h5>
                      <p className="text-muted" style={{ fontSize: '0.95rem', marginTop: '0.75rem' }}>L'environnement hostile d'un stade</p>
                    </div>
                    <button className="fw-semibold mt-3" style={{ background: 'none', border: 'none', padding: '0', color: 'var(--accent)', cursor: 'pointer', fontSize: '1rem', alignSelf: 'flex-start', textDecoration: 'none' }}>
                      <i className="fa-solid fa-arrow-right me-2"></i>Savoir plus
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card border-0 h-100 shadow-sm" style={{ transition: 'all 0.3s ease', cursor: 'pointer', display: 'flex', flexDirection: 'column' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <div className="card-body text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <div>
                      <i className="fa-solid fa-microchip" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1rem', display: 'block' }}></i>
                      <h5 className="card-title fw-bold">La convergence des technologies</h5>
                      <p className="text-muted" style={{ fontSize: '0.95rem', marginTop: '0.75rem' }}><button className="modal-trigger-btn" onClick={hardwareModal.open}>{getDefinitionByAcronym('Hardware')?.acronym}</button>, Réseau, Système</p>
                    </div>
                    <button className="fw-semibold mt-3" style={{ background: 'none', border: 'none', padding: '0', color: 'var(--accent)', cursor: 'pointer', fontSize: '1rem', alignSelf: 'flex-start', textDecoration: 'none' }}>
                      <i className="fa-solid fa-arrow-right me-2"></i>Savoir plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="fw-bold mb-4">Comment faire ?</h3>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="card border-0 h-100 shadow-sm" style={{ borderLeft: '4px solid var(--accent)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <i className="fa-solid fa-network-wired" style={{ fontSize: '2rem', color: 'var(--accent)', marginRight: '0.75rem' }}></i>
                        <h5 className="card-title mb-0 fw-bold">Assurer la connectivité</h5>
                      </div>
                      <p style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Fiabilité</p>
                      <p className="text-muted" style={{ fontSize: '0.95rem' }}>En milieu saturé, garantir la connexion permanente</p>
                    </div>
                    <button className="fw-semibold mt-3" style={{ background: 'none', border: 'none', padding: '0', color: 'var(--accent)', cursor: 'pointer', fontSize: '1rem', alignSelf: 'flex-start', textDecoration: 'none' }}>
                      <i className="fa-solid fa-arrow-right me-2"></i>Savoir plus
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card border-0 h-100 shadow-sm" style={{ borderLeft: '4px solid var(--accent)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <i className="fa-solid fa-bullseye" style={{ fontSize: '2rem', color: 'var(--accent)', marginRight: '0.75rem' }}></i>
                        <h5 className="card-title mb-0 fw-bold">Garantir la précision</h5>
                      </div>
                      <p style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Qualité</p>
                      <p className="text-muted" style={{ fontSize: '0.95rem' }}>Précision et rapidité dans les données</p>
                    </div>
                    <button className="fw-semibold mt-3" style={{ background: 'none', border: 'none', padding: '0', color: 'var(--accent)', cursor: 'pointer', fontSize: '1rem', alignSelf: 'flex-start', textDecoration: 'none' }}>
                      <i className="fa-solid fa-arrow-right me-2"></i>Savoir plus
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card border-0 h-100 shadow-sm" style={{ borderLeft: '4px solid var(--accent)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <i className="fa-solid fa-shield" style={{ fontSize: '2rem', color: 'var(--accent)', marginRight: '0.75rem' }}></i>
                        <h5 className="card-title mb-0 fw-bold">Protéger l'infrastructure</h5>
                      </div>
                      <p style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Sécurité</p>
                      <p className="text-muted" style={{ fontSize: '0.95rem' }}>Sécuriser l'infrastructure et les flux</p>
                    </div>
                    <button className="fw-semibold mt-3" style={{ background: 'none', border: 'none', padding: '0', color: 'var(--accent)', cursor: 'pointer', fontSize: '1rem', alignSelf: 'flex-start', textDecoration: 'none' }}>
                      <i className="fa-solid fa-arrow-right me-2"></i>Savoir plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 px-4 border-bottom">
        <div className="container">
          <h2 className="display-6 fw-bold mb-4">Conclusion</h2>
          <div className="row">
            <div className="col-lg-8">
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 px-4 bg-body-secondary">
        <div className="container">
          <h2 className="display-6 fw-bold mb-4">Bibliographie</h2>
          
          <div className="row">
            <div className="col-lg-8">
              <h4 className="fw-bold mb-3">Sitographie</h4>
            </div>
          </div>
        </div>
      </section>

      <Modal 
        isOpen={hardwareModal.isOpen} 
        title={getDefinitionByAcronym('Hardware')?.acronym}
        onClose={hardwareModal.close}
      >
        <p>
          <strong>{getDefinitionByAcronym('Hardware')?.acronym}</strong> signifie <strong>"{getDefinitionByAcronym('Hardware')?.fullName}"</strong>.
        </p>
      </Modal>

      <Modal 
        isOpen={iotModal.isOpen} 
        title={getDefinitionByAcronym('IoT')?.acronym}
        onClose={iotModal.close}
      >
        <p>
          <strong>{getDefinitionByAcronym('IoT')?.acronym}</strong> signifie <strong>"{getDefinitionByAcronym('IoT')?.fullName}"</strong>.
        </p>
      </Modal>
    </>
  )
}
