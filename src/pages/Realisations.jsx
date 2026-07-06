import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { realisations, allReferentiels, referentielCategories } from '../data/realisations'
import { getContrastColor } from '../utils/contrast'

export default function Realisations() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleViewMore = (realization) => {
    navigate(`/pages/realisations/${realization.id}`)
  }

  return (
    <>
      <section className="py-5 px-4 text-center border-bottom hero-section hero-section--small">
        <div className="container-max-900">
          <h1 className="responsive-title responsive-title--medium">
            Mes Réalisations
          </h1>
          <p className="body-text body-text--muted">
            Découvrez mes projets et réalisations.
          </p>
        </div>
      </section>

      <section className="py-5 px-4">
        <div className="container">
          <div className="row g-4">
            {realisations.map((realization) => (
              <div key={realization.id} className="col-12">
                <div className="card border-0 shadow-sm h-100 transition-smooth card-hover-light">
                  <div className="card-body p-4">
                    <div className="row align-items-center mb-3">
                      <div className="col-lg-8">
                        <div className="d-flex align-items-center mb-3">
                          <div className="icon-box-sm" style={{ backgroundColor: referentielCategories[realization.category]?.lightColor || 'rgba(45, 106, 79, 0.1)', marginRight: '1rem' }}>
                            <i className={`fa-solid ${realization.icon} icon-base`} style={{ color: referentielCategories[realization.category]?.color || 'var(--accent)' }}></i>
                          </div>
                          <div>
                            <h5 className="card-title mb-0 fw-bold" style={{ fontSize: '1.25rem' }}>
                              {realization.title}
                            </h5>
                            <small style={{ color: referentielCategories[realization.category]?.color || 'var(--accent)', fontWeight: '600' }} className="mt-1 d-block">
                              {realization.category} • {realization.date}
                            </small>
                          </div>
                        </div>
                        <p className="card-text" style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginTop: '0.75rem' }}>
                          {realization.shortDescription}
                        </p>
                      </div>

                      <div className="col-lg-4 text-lg-end">
                        <button 
                          onClick={() => handleViewMore(realization)}
                          className="btn btn-primary fw-semibold whitespace-nowrap"
                          style={{ padding: '0.75rem 1.5rem', fontSize: '1.1rem' }}
                        >
                          <i className="fa-solid fa-arrow-right me-2"></i>Voir plus
                        </button>
                      </div>
                    </div>

                    <div className="row mt-4 pt-3" style={{ borderTop: '1px solid var(--border-color)' }}>
                      <div className="col-12">
                        <div className="d-flex flex-wrap gap-2">
                          {realization.referentiels.map((refId, idx) => {
                            const referentiel = allReferentiels.find(ref => ref.id === refId)
                            const category = referentiel ? referentielCategories[referentiel.category] : null
                            const bgColor = category?.color || '#2d6a4f'
                            const textColor = getContrastColor(bgColor)
                            return (
                              <button 
                                key={idx} 
                                onClick={() => navigate('/pages/tableau_synthese')}
                                className="badge cursor-pointer whitespace-nowrap transition-smooth" 
                                style={{ 
                                  backgroundColor: bgColor, 
                                  color: textColor, 
                                  borderRadius: '20px', 
                                  paddingLeft: '0.75rem', 
                                  paddingRight: '0.75rem', 
                                  paddingTop: '0.5rem',
                                  paddingBottom: '0.5rem',
                                  fontSize: '0.85rem',
                                  border: 'none'
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
                </div>
              </div>
            ))}
          </div>

          {realisations.length === 0 && (
            <div className="text-center py-5">
              <p className="text-muted">
                Aucune réalisation pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
