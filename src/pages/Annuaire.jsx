import { useEffect, useState } from 'react'
import { definitions, searchDefinitions } from '../data/definitions'

export default function Annuaire() {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getCategoryColor = (category) => {
    const colors = {
      'Formation': {
        gradient: 'linear-gradient(135deg, #3498db, #2980b9)',
        badge: 'bg-info'
      },
      'Développement Web': {
        gradient: 'linear-gradient(135deg, #e74c3c, #c0392b)',
        badge: 'bg-danger'
      },
      'Systèmes & Réseaux': {
        gradient: 'linear-gradient(135deg, #9b59b6, #8e44ad)',
        badge: 'bg-warning'
      },
      'Outils & Technologies': {
        gradient: 'linear-gradient(135deg, #1abc9c, #16a085)',
        badge: 'bg-success'
      }
    }
    return colors[category] || { gradient: 'linear-gradient(135deg, var(--c-light-turquoise), var(--accent))', badge: 'bg-primary' }
  }

  const filteredDefinitions = searchTerm ? searchDefinitions(searchTerm) : definitions

  return (
  <>
    {/* Hero Section */}
      <section className="py-5 px-4 text-center border-bottom hero-section hero-section--small">
        <div style={{ maxWidth: '900px' }}>
          <h1 className="responsive-title responsive-title--medium">
            Annuaire
          </h1>
          <p className="body-text body-text--muted">
            Découvrez toutes les définitions et acronymes utilisés sur mon portfolio.
          </p>
        </div>
      </section>

    <section className="py-5 px-4">
      <div className="container">
        {/* Zone de recherche */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className="input-group input-group-lg">
              <span className="input-group-text bg-body border-0">
                <i className="fa-solid fa-search text-primary"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 py-3"
                placeholder="Rechercher un acronyme ou une définition..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ borderBottom: '2px solid var(--accent)' }}
              />
            </div>
          </div>
        </div>
        {filteredDefinitions.length > 0 ? (
          <div className="row g-4">
            {filteredDefinitions.map(def => (
              <div key={def.id} className="col-lg-12">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <div className="row align-items-start">
                      <div className="col-auto">
                        <div
                          className="icon-box"
                          style={{
                            background: getCategoryColor(def.category).gradient
                          }}
                        >
                          {def.acronym.substring(0, 3)}
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <h5 className="card-title mb-0">
                            <strong>{def.acronym}</strong>
                          </h5>
                          <span className={`badge ${getCategoryColor(def.category).badge} bg-opacity-10 text-dark small`}>
                            {def.category}
                          </span>
                        </div>
                        <p className="text-muted mb-2" style={{ fontSize: '0.95rem' }}>
                          <strong>{def.fullName}</strong>
                        </p>
                        <p className="card-text mb-0" style={{ lineHeight: '1.6' }}>
                          {def.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <i className="fa-solid fa-search text-muted" style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}></i>
            <p className="text-muted">
              Aucune définition trouvée pour "<strong>{searchTerm}</strong>"
            </p>
          </div>
        )}

        {/* Résumé */}
        <div className="row mt-5 pt-5 border-top">
          <div className="col-md-6 mx-auto text-center">
            <p className="text-muted mb-0">
              <i className="fa-solid fa-info-circle text-primary me-2"></i>
              <strong>{filteredDefinitions.length}</strong> définition{filteredDefinitions.length > 1 ? 's' : ''} trouvée{filteredDefinitions.length > 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
