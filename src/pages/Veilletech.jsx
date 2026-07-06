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
        <div className="container-max-900">
          <h1 className="title-lg fw-bold text-accent">
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
          <h2 className="display-6 fw-bold mb-4 title-lg fw-bold text-accent">
            Sujet : L'
            <button className="modal-trigger-btn" onClick={iotModal.open}>{getDefinitionByAcronym('IoT')?.acronym}</button> 
            {' '}dans le football.</h2>
          <h1 className="title-lg fw-bold text-muted-sm">
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
                    <i className="fa-solid fa-magnifying-glass text-primary icon-sm"></i>
                    <h5 className="card-title mb-0 ms-3">Comment va se faire ma recherche</h5>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-key text-primary icon-sm"></i>
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
                <div className="card border-0 h-100 shadow-sm transition-smooth card-hover-lift cursor-pointer flex-column-between">
                  <div className="card-body text-center">
                    <div>
                      <i className="fa-solid fa-circle-exclamation icon-lg text-accent mb-3" style={{ display: 'block' }}></i>
                      <h5 className="card-title fw-bold">Une infrastructure critique en temps réel</h5>
                      <p className="text-muted text-desc-sm">Zéro latence toléré, haute disponibilité requise</p>
                    </div>
                    <button className="fw-semibold mt-3 btn-link text-accent">
                      <i className="fa-solid fa-arrow-right me-2"></i>Savoir plus
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card border-0 h-100 shadow-sm transition-smooth card-hover-lift cursor-pointer flex-column-between">
                  <div className="card-body text-center">
                    <div>
                      <i className="fa-solid fa-tower-cell icon-lg text-accent mb-3" style={{ display: 'block' }}></i>
                      <h5 className="card-title fw-bold">Le défi de la haute densité</h5>
                      <p className="text-muted text-desc-sm">L'environnement hostile d'un stade</p>
                    </div>
                    <button className="fw-semibold mt-3 btn-link text-accent">
                      <i className="fa-solid fa-arrow-right me-2"></i>Savoir plus
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card border-0 h-100 shadow-sm transition-smooth card-hover-lift cursor-pointer flex-column-between">
                  <div className="card-body text-center">
                    <div>
                      <i className="fa-solid fa-microchip icon-lg text-accent mb-3" style={{ display: 'block' }}></i>
                      <h5 className="card-title fw-bold">La convergence des technologies</h5>
                      <p className="text-muted text-desc-sm">
                        <button className="modal-trigger-btn" onClick={hardwareModal.open}>{getDefinitionByAcronym('Hardware')?.acronym}</button>
                        , Réseau, Système</p>
                    </div>
                    <button className="fw-semibold mt-3 btn-link text-accent">
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
                <div className="card border-0 h-100 shadow-sm border-accent-left transition-smooth card-hover-lift flex-column-between">
                  <div className="card-body">
                    <div>
                      <div className="d-flex align-items-center mb-3">
                        <i className="fa-solid fa-network-wired icon-md text-accent me-3"></i>
                        <h5 className="card-title mb-0 fw-bold">Assurer la connectivité</h5>
                      </div>
                      <p className="text-accent fw-semibold text-sm mb-2">Fiabilité</p>
                      <p className="text-muted text-desc-sm">En milieu saturé, garantir la connexion permanente</p>
                    </div>
                    <button className="fw-semibold mt-3 btn-link text-accent">
                      <i className="fa-solid fa-arrow-right me-2"></i>Savoir plus
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card border-0 h-100 shadow-sm border-accent-left transition-smooth card-hover-lift flex-column-between">
                  <div className="card-body">
                    <div>
                      <div className="d-flex align-items-center mb-3">
                        <i className="fa-solid fa-bullseye icon-md text-accent me-3"></i>
                        <h5 className="card-title mb-0 fw-bold">Garantir la précision</h5>
                      </div>
                      <p className="text-accent fw-semibold text-sm mb-2">Qualité</p>
                      <p className="text-muted text-desc-sm">Précision et rapidité dans les données</p>
                    </div>
                    <button className="fw-semibold mt-3 btn-link text-accent">
                      <i className="fa-solid fa-arrow-right me-2"></i>Savoir plus
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card border-0 h-100 shadow-sm border-accent-left transition-smooth card-hover-lift flex-column-between">
                  <div className="card-body">
                    <div>
                      <div className="d-flex align-items-center mb-3">
                        <i className="fa-solid fa-shield icon-md text-accent me-3"></i>
                        <h5 className="card-title mb-0 fw-bold">Protéger l'infrastructure</h5>
                      </div>
                      <p className="text-accent fw-semibold text-sm mb-2">Sécurité</p>
                      <p className="text-muted text-desc-sm">Sécuriser l'infrastructure et les flux</p>
                    </div>
                    <button className="fw-semibold mt-3 btn-link text-accent">
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
