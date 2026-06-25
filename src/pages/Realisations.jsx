import { useEffect } from 'react'
import { realizations, categories } from '../data/realizations'

export default function Realisations() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleViewMore = (realization) => {
    // Modal will be implemented later
    console.log('View more:', realization.title)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-5 px-4 text-center border-bottom" style={{ minHeight: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(45, 106, 79, 0.05) 0%, rgba(82, 183, 136, 0.05) 100%)' }}>
        <div style={{ maxWidth: '900px' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', fontWeight: 800, color: 'var(--accent)', marginBottom: '1.5rem' }}>
            Mes Réalisations
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Découvrez les projets et réalisations que j&apos;ai développés
          </p>
        </div>
      </section>

      {/* Realizations Grid */}
      <section className="py-5 px-4">
        <div className="container">
          <div className="row g-4">
            {realizations.map((realization) => (
              <div key={realization.id} className="col-12">
                <div className="card border-0 shadow-sm h-100" style={{ transition: 'box-shadow 0.2s ease, transform 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      {/* Icon and Title Section */}
                      <div className="col-lg-7">
                        <div className="d-flex align-items-center mb-3">
                          <div style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: categories[realization.category]?.lightColor || 'rgba(45, 106, 79, 0.1)', borderRadius: '8px', marginRight: '1rem' }}>
                            <i className={`fa-solid ${realization.icon}`} style={{ fontSize: '1.5rem', color: categories[realization.category]?.color || 'var(--accent)' }}></i>
                          </div>
                          <div>
                            <h5 className="card-title mb-0 fw-bold" style={{ fontSize: '1.25rem' }}>
                              {realization.title}
                            </h5>
                            <small style={{ color: categories[realization.category]?.color || 'var(--accent)', fontWeight: '600' }} className="mt-1 d-block">
                              {realization.category} • {realization.date}
                            </small>
                          </div>
                        </div>
                        <p className="card-text" style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginTop: '0.75rem' }}>
                          {realization.shortDescription}
                        </p>
                      </div>

                      {/* Technologies Section */}
                      <div className="col-lg-3 mb-3 mb-lg-0">
                        <div className="d-flex flex-wrap gap-2">
                          {realization.technologies.map((tech, idx) => (
                            <span key={idx} className="badge" style={{ backgroundColor: categories[realization.category]?.lightColor || 'rgba(45, 106, 79, 0.1)', color: categories[realization.category]?.color || 'var(--accent)', borderRadius: '20px', paddingLeft: '0.75rem', paddingRight: '0.75rem' }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Section */}
                      <div className="col-lg-2 text-lg-end">
                        <button 
                          onClick={() => handleViewMore(realization)}
                          className="btn btn-primary btn-sm fw-semibold"
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          <i className="fa-solid fa-arrow-right me-2"></i>Voir plus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {realizations.length === 0 && (
            <div className="text-center py-5">
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                Aucune réalisation pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
