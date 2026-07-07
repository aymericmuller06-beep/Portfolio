import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { realisations, allReferentiels, referentielCategories } from '../../data/realisations'
import { getDefinitionByAcronym } from '../../data/definitions'
import { getContrastColor } from '../../utils/contrast'
import Carrousel from '../../components/Carrousel'
import Modal from '../../components/Modal'
import { useModal } from '../../hooks/useModal'

export default function Portfolio() {
  const navigate = useNavigate()
  
  // Modales pour les outils
  const reactModal = useModal()
  const viteModal = useModal()
  const scssModal = useModal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const realisation = realisations.find(r => r.id === 3)
  
  if (!realisation) {
    return (
      <section className="py-4 px-3 text-center border-bottom hero-section hero-section--small">
        <div className="container">
          <h1 className="responsive-title responsive-title--medium">Réalisation non trouvée</h1>
          <button 
            onClick={() => navigate('/pages/realisations')}
            className="btn btn-primary mt-4"
          >
            Retour aux réalisations
          </button>
        </div>
      </section>
    )
  }

  const besoinsClients = []

  const preuves = []

  return (
    <>
      <section className="py-4 px-3 text-center border-bottom hero-section hero-section--small">
        <div className="container-max-80">
          <button 
            onClick={() => navigate('/pages/realisations')}
            className="btn btn-link text-decoration-none mb-3"
          >
            <i className="fa-solid fa-arrow-left me-2"></i>Retour aux réalisations
          </button>
          <h1 className="responsive-title responsive-title--medium">
            {realisation.title}
          </h1>
        </div>
      </section>

      <section className="py-4 px-3 border-bottom">
        <div className="container container-max-80">
          <h2 className="display-5 fw-bold text-center mb-4">Introduction</h2>
          <p className="lead text-center text-muted text-intro">
            
          </p>
          
          {besoinsClients && besoinsClients.length > 0 && (
            <div className="row g-4 mt-5">
              {besoinsClients.map((besoin, idx) => (
                <div key={idx} className="col-md-6 col-lg-6">
                  <div className="card h-100 border-0 shadow-sm transition-smooth card-hover-lift">
                    <div className="card-body">
                      <h5 className="card-title fw-semibold text-primary mb-3">
                        <i className="fa-solid fa-check-circle me-2"></i>{besoin.titre}
                      </h5>
                      <p className="card-text text-muted text-desc-sm">
                        {besoin.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-4 px-3 border-bottom bg-body-secondary">
        <div className="container" style={{ maxWidth: '80%' }}>
          <h2 className="display-5 fw-bold text-center mb-4">Ce qu'on a fait</h2>
          <p className="text-start" style={{ fontSize: '1rem', lineHeight: '1.8', textAlign: 'justify' }}>
          
          </p>
        </div>
      </section>

      <section className="py-4 px-3 border-bottom">
        <div className="container container-max-80">
          <h2 className="display-5 fw-bold text-center mb-4">Ce que j'ai fait</h2>
          <p className="text-start text-body-justified">
          
          </p>
        </div>
      </section>

      <section className="py-4 px-3 border-bottom">
        <div className="container container-max-80 bg-body-secondary">
          <h2 className="display-5 fw-bold text-center mb-5">Preuves & détails</h2>
          {preuves && preuves.length > 0 ? (
            <Carrousel items={preuves} />
          ) : (
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <p className="text-muted">Aucune preuve ajoutée pour cette section.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-4 px-3 border-bottom">
        <div className="container">
          <h2 className="display-5 fw-bold text-center mb-5">Compétences acquises</h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {realisation.referentiels.map((refId, idx) => {
                  const referentiel = allReferentiels.find(ref => ref.id === refId)
                  const category = referentiel ? referentielCategories[referentiel.category] : null
                  const bgColor = category?.color || '#2d6a4f'
                  const textColor = getContrastColor(bgColor)
                  return (
                    <button 
                      key={idx} 
                      className="badge" 
                      style={{ 
                        backgroundColor: bgColor, 
                        color: textColor, 
                        borderRadius: '20px', 
                        paddingLeft: '0.75rem', 
                        paddingRight: '0.75rem', 
                        paddingTop: '0.5rem',
                        paddingBottom: '0.5rem',
                        fontSize: '0.85rem',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        whiteSpace: 'normal',
                        textAlign: 'left'
                      }} 
                      title={referentiel?.text}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'brightness(0.85)'
                        e.currentTarget.style.transform = 'scale(1.02)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'brightness(1)'
                        e.currentTarget.style.transform = 'scale(1)'
                      }}
                    >
                      ▸ {referentiel?.text}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 px-3 text-center bg-body-secondary">
        <div className="container">
          <button 
            onClick={() => navigate('/pages/realisations')}
            className="btn btn-primary fw-semibold"
            style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
          >
            <i className="fa-solid fa-arrow-left me-2"></i>Retour aux réalisations
          </button>
        </div>
      </section>

      {/* Modales pour les outils */}
      <Modal isOpen={reactModal.isOpen} onClose={reactModal.close} title={getDefinitionByAcronym('React')?.fullName}>
        {getDefinitionByAcronym('React')?.description}
      </Modal>

      <Modal isOpen={viteModal.isOpen} onClose={viteModal.close} title={getDefinitionByAcronym('Vite')?.fullName}>
        {getDefinitionByAcronym('Vite')?.description}
      </Modal>

      <Modal isOpen={scssModal.isOpen} onClose={scssModal.close} title={getDefinitionByAcronym('SCSS')?.fullName}>
        {getDefinitionByAcronym('SCSS')?.description}
      </Modal>
    </>
  )
}
