import { useState } from 'react'

export default function ProofsCarousel({ proofs = [], showTitle = false }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Ne rien afficher si pas de preuves
  if (!proofs || proofs.length === 0) {
    return null
  }

  const current = proofs[currentIndex]
  const hasMultiple = proofs.length > 1

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % proofs.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + proofs.length) % proofs.length)
  }

  return (
    <div>
      {showTitle && <h5 className="fw-bold mb-4">Preuves et réalisations</h5>}
      
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <div className="row g-4 align-items-center">
            {/* Image à gauche */}
            <div className={hasMultiple ? 'col-lg-5' : 'col-lg-6'}>
              <div className="position-relative">
                <img 
                  src={current.image} 
                  alt={current.title}
                  className="img-fluid rounded"
                  style={{ 
                    maxHeight: '400px', 
                    objectFit: 'cover',
                    width: '100%'
                  }}
                />
                
                {/* Compteur si plusieurs preuves */}
                {hasMultiple && (
                  <div 
                    className="position-absolute bottom-0 end-0 m-3"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold'
                    }}
                  >
                    {currentIndex + 1} / {proofs.length}
                  </div>
                )}
              </div>
            </div>

            {/* Contenu à droite */}
            <div className={hasMultiple ? 'col-lg-7' : 'col-lg-6'}>
              <h5 className="fw-bold mb-3">{current.title}</h5>
              <p className="text-muted mb-4" style={{ lineHeight: '1.6' }}>
                {current.description}
              </p>

              {/* Bouton lien externe si present */}
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

              {/* Navigation carousel si plusieurs preuves */}
              {hasMultiple && (
                <div className="d-flex gap-2 mt-4">
                  <button
                    onClick={goToPrev}
                    className="btn btn-outline-secondary btn-sm"
                    aria-label="Preuve précédente"
                  >
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                  <button
                    onClick={goToNext}
                    className="btn btn-outline-secondary btn-sm"
                    aria-label="Preuve suivante"
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Indicateurs visuels (dots) si plusieurs preuves */}
      {hasMultiple && (
        <div className="d-flex justify-content-center gap-2 mt-4">
          {proofs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="rounded-circle"
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: idx === currentIndex ? '#0d6efd' : '#e9ecef',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              aria-label={`Aller à la preuve ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
