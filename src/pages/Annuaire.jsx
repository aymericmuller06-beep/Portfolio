import { useEffect, useState } from 'react'
import { definitions, searchDefinitions } from '../data/definitions'
import { getContrastColor } from '../utils/contrast'

export default function Annuaire() {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getCategoryColor = (category) => {
    const colors = {
      'Formation': {
        gradient: '#0dcaf0',
        badge: 'bg-info',
        badgeColor: '#0dcaf0'
      },
      'Développement Web': {
        gradient: '#dc3545',
        badge: 'bg-danger',
        badgeColor: '#dc3545'
      },
      'Systèmes & Réseaux': {
        gradient: '#ffc107',
        badge: 'bg-warning',
        badgeColor: '#ffc107'
      },
      'Outils & Technologies': {
        gradient: '#52b788',
        badge: 'bg-success',
        badgeColor: '#52b788'
      },
      'Gestion de Projet': {
        gradient: '#b75299',
        badge: 'bg-purple',
        badgeColor: '#b75299'
      }
    }
    return colors[category] || { gradient: '#0d6efd', badge: 'bg-primary', badgeColor: '#0d6efd' }
  }

  const filteredDefinitions = searchTerm ? searchDefinitions(searchTerm) : definitions

  return (
  <>
    <section className="py-5 px-4 text-center border-bottom hero-section hero-section--small">
        <div className="container-max-900">
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
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className="input-group input-group-lg">
              <span className="input-group-text bg-body border-0">
                <i className="fa-solid fa-search text-primary"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 py-3 border-accent-bottom"
                placeholder="Rechercher un acronyme ou une définition..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                            background: getCategoryColor(def.category).badgeColor,
                            color: '#ffffff'
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
                          <span className={`badge ${getCategoryColor(def.category).badge}`} style={{ color: getContrastColor(getCategoryColor(def.category).badgeColor) }}>
                            {def.category}
                          </span>
                        </div>
                        <p className="text-muted mb-2 text-desc-sm">
                          <strong>{def.fullName}</strong>
                        </p>
                        <p className="card-text mb-0 line-height-1-6">
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
            <i className="fa-solid fa-search text-muted icon-lg" style={{ display: 'block', marginBottom: '1rem' }}></i>
            <p className="text-muted">
              Aucune définition trouvée pour "<strong>{searchTerm}</strong>"
            </p>
          </div>
        )}


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
