import { useState } from 'react'

export default function Carrousel({ items = [], showTitle = false }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Ne rien afficher si pas d'items
  if (!items || items.length === 0) {
    return null
  }

  const current = items[currentIndex]
  const hasMultiple = items.length > 1

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <div>
      {showTitle && <h5 className="fw-bold mb-4">Preuves et réalisations</h5>}
      
      <div className={`card border-0 shadow-sm ${current.bgClass || ''}`} style={{ height: '500px' }}>
        <div className="card-body p-4 h-100">
          <div className="row g-4 h-100">
            {/* Image à gauche - taille fixe */}
            <div className="col-lg-5" style={{ height: '100%', overflow: 'hidden' }}>
              <div className="position-relative w-100 h-100" style={{ overflow: 'hidden', borderRadius: '8px' }}>
                {current.type === 'pdf' ? (
                  <img 
                    src={current.image} 
                    alt={current.title}
                    style={{ 
                      height: '100%', 
                      objectFit: 'cover',
                      width: '100%',
                      display: 'block'
                    }}
                  />
                ) : (
                  <img 
                    src={current.image} 
                    alt={current.title}
                    style={{ 
                      height: '100%', 
                      objectFit: 'cover',
                      width: '100%',
                      display: 'block'
                    }}
                  />
                )}
                
                {current.type === 'pdf' && (
                  <div 
                    className="position-absolute top-0 end-0 m-2"
                    style={{
                      backgroundColor: '#dc3545',
                      color: 'white',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '8px',
                      fontSize: '1.2rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <i className="fa-solid fa-file-pdf"></i>
                  </div>
                )}
                
                {hasMultiple && (
                  <div 
                    className="position-absolute bottom-0 end-0 m-3 bg-overlay-dark"
                    style={{
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold'
                    }}
                  >
                    {currentIndex + 1} / {items.length}
                  </div>
                )}
              </div>
            </div>

            {/* Contenu à droite - hauteur fixe avec flex */}
            <div className="col-lg-7 d-flex flex-column" style={{ height: '100%' }}>
              {/* Titre */}
              <div className="mb-3">
                <h5 className="fw-bold mb-0">{current.title}</h5>
              </div>

              {/* Description - grandit selon l'espace disponible */}
              <div style={{ flex: '1', overflow: 'auto', marginBottom: '1rem' }}>
                <p className="text-muted mb-0" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                  {current.description}
                </p>
              </div>

              {/* Boutons et flèches - toujours en bas */}
              <div className="d-flex gap-2 align-items-center" style={{ marginTop: 'auto' }}>
                {hasMultiple && (
                  <>
                    <button
                      onClick={goToPrev}
                      className="btn btn-outline-secondary btn-sm"
                      aria-label="Item précédent"
                    >
                      <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button
                      onClick={goToNext}
                      className="btn btn-outline-secondary btn-sm"
                      aria-label="Item suivant"
                    >
                      <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </>
                )}

                {current.link && (
                  <a 
                    href={current.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <i className={`fa-solid ${current.type === 'pdf' ? 'fa-file-pdf me-2' : 'fa-external-link me-2'}`}></i>
                    {current.linkText || (current.type === 'pdf' ? 'Voir le PDF' : 'Voir en détail')}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {hasMultiple && (
        <div className="d-flex justify-content-center gap-2 mt-4">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="rounded-circle pagination-dot"
              style={{
                backgroundColor: idx === currentIndex ? 'var(--bs-primary)' : 'var(--bg-surface)',
                border: 'none'
              }}
              aria-label={`Aller à l'item ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
