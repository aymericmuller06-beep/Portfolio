import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { allReferentiels, referentielCategories } from '../../data/realisations'
import { getContrastColor } from '../../utils/contrast'
import ProofsCarousel from '../../components/ProofsCarousel'
import { projectProofs } from '../../data/preuve'

export default function Portfolio() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const referentiels = [19, 20, 21]
  const project = projectProofs.portfolio

  return (
    <>
      <section className="py-5 px-4 text-center border-bottom hero-section hero-section--small">
        <div style={{ maxWidth: '900px' }}>
          <button 
            onClick={() => navigate('/pages/realisations')}
            className="btn btn-link text-decoration-none mb-3"
          >
            <i className="fa-solid fa-arrow-left me-2"></i>Retour aux réalisations
          </button>
          <h1 className="responsive-title responsive-title--medium">
            Mon Portfolio
          </h1>
        </div>
      </section>


      <section className="py-5 px-4 border-bottom">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="display-5 fw-bold text-center mb-4">Introduction</h2>
          <p className="lead text-center text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            {project.introduction}
          </p>
        </div>
      </section>

      <section className="py-5 px-4 border-bottom bg-body-secondary">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="display-5 fw-bold text-center mb-4">Ce qu'on a fait</h2>
          <p className="text-start" style={{ fontSize: '1rem', lineHeight: '1.8', textAlign: 'justify' }}>
            {project.ceQuOnAfait}
          </p>
        </div>
      </section>

      <section className="py-5 px-4 border-bottom">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="display-5 fw-bold text-center mb-4">Ce que j'ai fait</h2>
          <p className="text-start" style={{ fontSize: '1rem', lineHeight: '1.8', textAlign: 'justify' }}>
            {project.ceQueJaiFailText}
          </p>
        </div>
      </section>

      <section className="py-5 px-4 border-bottom bg-body-secondary">
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

      <section className="py-5 px-4 border-bottom">
        <div className="container">
          <h2 className="display-5 fw-bold text-center mb-5">Compétences acquises</h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {referentiels.map((refId, idx) => {
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

      <section className="py-5 px-4 text-center bg-body-secondary">
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
