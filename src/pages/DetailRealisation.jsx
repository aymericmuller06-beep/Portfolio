import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { realisations, allReferentiels, referentielCategories, detailsRealisations } from '../data/realisations'
import { getContrastColor } from '../utils/contrast'
import ProofsCarousel from '../components/ProofsCarousel'

export default function DetailRealisation() {
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Trouver la réalisation
  const realisationId = parseInt(id)
  const realisation = realisations.find(r => r.id === realisationId)

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

  // Récupérer les détails selon l'ID
  let project = null
  switch(realisationId) {
    case 1:
      project = detailsRealisations.niceVolley
      break
    case 2:
      project = detailsRealisations.baseConnaissances
      break
    case 3:
      project = detailsRealisations.portfolio
      break
    default:
      project = detailsRealisations.niceVolley
  }

  return (
    <>
      <section className="py-4 px-3 text-center border-bottom hero-section hero-section--small">
        <div style={{ maxWidth: '900px' }}>
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
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="display-5 fw-bold text-center mb-4">Introduction</h2>
          <p className="lead text-center text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            {project.introduction}
          </p>
          
          {project.besoinsClients && project.besoinsClients.length > 0 && (
            <div className="row g-4 mt-5">
              {project.besoinsClients.map((besoin, idx) => (
                <div key={idx} className="col-md-6 col-lg-6">
                  <div className="card h-100 border-0 shadow-sm" style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)'
                      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)'
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title fw-semibold text-primary mb-3">
                        <i className="fa-solid fa-check-circle me-2"></i>{besoin.titre}
                      </h5>
                      <p className="card-text text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
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
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="display-5 fw-bold text-center mb-4">Ce qu'on a fait</h2>
          <p className="text-start" style={{ fontSize: '1rem', lineHeight: '1.8', textAlign: 'justify' }}>
            {project.ceQuOnAfait}
          </p>
        </div>
      </section>

      <section className="py-4 px-3 border-bottom">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="display-5 fw-bold text-center mb-4">Ce que j'ai fait</h2>
          <p className="text-start" style={{ fontSize: '1rem', lineHeight: '1.8', textAlign: 'justify' }}>
            {project.ceQueJaiFailText}
          </p>
        </div>
      </section>

      <section className="py-4 px-3 border-bottom bg-body-secondary">
        <div className="container">
          <h2 className="display-5 fw-bold text-center mb-5">Preuves & détails</h2>
          {project.preuves && project.preuves.length > 0 ? (
            <ProofsCarousel proofs={project.preuves} />
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
    </>
  )
}
