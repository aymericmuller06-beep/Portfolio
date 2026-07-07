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
      
      <div className={`card border-0 shadow-sm ${current.bgClass || ''}`}>
        <div className="card-body p-4">
          <div className="row g-4 align-items-center">
            <div className={hasMultiple ? 'col-lg-5' : 'col-lg-6'}>
              <div className="position-relative">
                <img 
                  src={current.image} 
                  alt={current.title}
                  className="img-fluid rounded img-responsive"
                  style={{ 
                    maxHeight: '400px', 
                    objectFit: 'cover',
                    width: '100%'
                  }}
                />
                
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

            <div className={hasMultiple ? 'col-lg-7' : 'col-lg-6'}>
              <h5 className="fw-bold mb-3">{current.title}</h5>
              <p className="text-muted mb-4" style={{ lineHeight: '1.6' }}>
                {current.description}
              </p>

              {current.link && (
                <a 
                  href={current.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <i className="fa-solid fa-external-link me-2"></i>
                  {current.linkText || 'Voir en détail'}
                </a>
              )}

              {hasMultiple && (
                <div className="d-flex gap-2 mt-4">
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
                </div>
              )}
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
                backgroundColor: idx === currentIndex ? '#0d6efd' : '#e9ecef',
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
