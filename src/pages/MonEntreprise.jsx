import { useEffect, useState } from 'react'
import AzurLogo from '../Img/Azurinfo.png'
import AzurLogoLight from '../Img/AzurinfoLight.png'
import AzurinfoImage from '../Img/Azurinfo.webp'
import { definitions, getDefinitionByAcronym } from '../data/definitions'
import { companyLinks } from '../config'
import Modal from '../components/Modal'
import { useModal } from '../hooks/useModal'

export default function MonEntreprise() {
  const [theme, setTheme] = useState('light')
  const hotlineModal = useModal()
  const statsModal = useModal()

  useEffect(() => {
    window.scrollTo(0, 0)
    
    const html = document.documentElement
    setTheme(html.getAttribute('data-bs-theme') || 'light')
    
    const observer = new MutationObserver(() => {
      setTheme(html.getAttribute('data-bs-theme') || 'light')
    })
    
    observer.observe(html, { attributes: true, attributeFilter: ['data-bs-theme'] })
    
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="hero-section hero-section--large">
        <div className="content-max-width">
          <img src={theme === 'light' ? AzurLogo : AzurLogoLight} alt="Azur Logo" className="mb-4" style={{ maxWidth: '180px', height: 'auto' }} />
          <h1 className="responsive-title responsive-title--medium">
            Azurinfo
          </h1>
          <p className="intro-text">
            Mon entreprise d'alternance.
          </p>
        </div>
      </section>

      <section className="py-5 px-4 border-bottom">
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-center">Présentation</h2>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <p className="body-text body-text--muted">
                Azurinfo est une entreprise spécialisée dans les solutions informatiques, les systèmes et réseaux, et le développement web.
              </p>
              <p className="body-text body-text--muted">
                En tant qu'alternant, j'y développe mes compétences dans un environnement professionnel et dynamique.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="image-container image-container--wide">
                <img src={AzurinfoImage} alt="Azurinfo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 px-4 border-bottom bg-body-secondary">
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-center">Mes Missions</h2>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-headset text-primary icon-sm"></i>
                    <h5 className="card-title mb-0 ms-3">Service 
                      {' '}<button className="modal-trigger-btn" onClick={hotlineModal.open}>{getDefinitionByAcronym('HOTLINE')?.acronym}</button>
                    </h5>
                  </div>
                  <p className="text-muted mb-0">
                    Gestion des appels et tickets pour résoudre les problèmes informatiques des clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-tools text-primary icon-sm"></i>
                    <h5 className="card-title mb-0 ms-3">Préparation / réparation du matériel</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Préparation et réparation des équipements informatiques pour nos clients, assurant la disponibilité de leur matériel.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-book text-primary icon-sm"></i>
                    <h5 className="card-title mb-0 ms-3">Documentation</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Création et maintenance de la documentation technique pour l'entreprise, assurant la continuité du service.
                  </p>
                </div>
              </div>
            </div>
             <div className="col-lg-6">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-project-diagram text-primary icon-sm"></i>
                    <h5 className="card-title mb-0 ms-3">Projets parallèles</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Projets en parallèle des missions principales, permettant de développer d'autres compétences ou de les renforcer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 px-4">
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-center">Détails supplémentaires</h2>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card border-0 h-100 shadow-sm disabled-card">
                <div className="card-body text-center">
                  <i className="fa-solid fa-sitemap text-primary mb-3 icon-md"></i>
                  <h5 className="card-title mb-3">Organigramme</h5>
                  <p className="text-muted">Structure et organisation de l'entreprise</p>
                  <small className="text-muted">(Non disponible)</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div 
                className="card border-0 h-100 shadow-sm cursor-pointer transition-smooth card-hover-light" 
                onClick={statsModal.open}
              >
                <div className="card-body text-center">
                  <i className="fa-solid fa-chart-bar text-primary mb-3 icon-md"></i>
                  <h5 className="card-title mb-3">Statistiques</h5>
                  <p className="text-muted">Chiffres clés et informations</p>
                  <small className="text-primary" style={{ fontWeight: '500' }}>En savoir plus</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div 
                className="card border-0 h-100 shadow-sm cursor-pointer transition-smooth card-hover-light"
                onClick={() => window.open(companyLinks.azurinfo, '_blank')}
              >
                <div className="card-body text-center">
                  <i className="fa-solid fa-globe text-primary mb-3 icon-md"></i>
                  <h5 className="card-title mb-3">Site de l'entreprise</h5>
                  <p className="text-muted">Lien vers le site officiel de l'entreprise</p>
                  <small className="text-primary" style={{ fontWeight: '500' }}>Visitez le site</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal 
        isOpen={hotlineModal.isOpen} 
        title={getDefinitionByAcronym('HOTLINE')?.acronym}
        onClose={hotlineModal.close}
      >
        <p>
          <strong>{getDefinitionByAcronym('HOTLINE')?.acronym}</strong> signifie <strong>"{getDefinitionByAcronym('HOTLINE')?.fullName}"</strong>.
        </p>
      </Modal>

      <Modal 
        isOpen={statsModal.isOpen} 
        title="Statistiques Azurinfo"
        onClose={statsModal.close}
      >
        
      </Modal>
    </>
  )
}
