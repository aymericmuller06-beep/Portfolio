import { useEffect } from 'react'

export default function Veilletech() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="py-5 px-4 text-center border-bottom hero-section hero-section--small">
        <div style={{ maxWidth: '900px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '1.5rem' }}>
            L'IoT dans le Football
          </h1>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--bs-text-light)', marginBottom: '1rem', lineHeight: 1.3 }}>
            Comment faire pour fiabiliser une infrastructure dédiée à de la précision et rapidité dans un milieu tel qu'un stade ?
          </h1>
        </div>
      </section>

      {/* Problématique et Introduction */}
      <section className="py-5 px-4 border-bottom">
        <div className="container">
          <h2 className="display-6 fw-bold mb-4">Introduction</h2>
        </div>
      </section>

      {/* Mise en place de la veille */}
      <section className="py-5 px-4 border-bottom bg-body-secondary">
        <div className="container">
          <h2 className="display-6 fw-bold mb-5">Mise en place de la Veille</h2>
          
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-magnifying-glass text-primary" style={{ fontSize: '1.8rem' }}></i>
                    <h5 className="card-title mb-0 ms-3">Comment va se faire ma recherche</h5>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-key text-primary" style={{ fontSize: '1.8rem' }}></i>
                    <h5 className="card-title mb-0 ms-3">Les outils et mots-clés de ma recherche</h5>
                  </div>
                  <p className="text-muted mb-3">Je vais utiliser Excel pour faire un suivi des articles</p>
                  
                  <a href="https://1drv.ms/x/c/4425321540cb89f5/IQBjXY2MZMSGQpbWvVcZ1BpGAfs182K8eGpomouy8GU84v8?e=X8QG09" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                    <i className="fa-solid fa-file-excel me-2"></i>Accéder au suivi Excel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recherche et Analyse */}
      <section className="py-5 px-4 border-bottom">
        <div className="container">
          <h2 className="display-6 fw-bold mb-5">Recherche et Analyse</h2>
          
          <div className="row">
            <div className="col-lg-8">
              <h3 className="fw-bold mb-4">Pourquoi c'est "complexe" ?</h3>
              
              <ol style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                <li className="mb-3">
                  <strong>Une infrastructure critique en temps réel</strong>
                </li>
                <li className="mb-3">
                  <strong>Le défi de la haute densité</strong> (L'environnement hostile)
                </li>
                <li className="mb-3">
                  <strong>La convergence des technologies</strong>
                  <ul style={{ marginTop: '0.5rem' }}>
                    <li>Le Hardware / IoT</li>
                    <li>Le Réseau</li>
                    <li>Le Système</li>
                  </ul>
                </li>
              </ol>

              <h3 className="fw-bold mt-5 mb-4">Comment faire ?</h3>
              
              <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', listStyleType: 'none', paddingLeft: 0 }}>
                <li className="mb-3">
                  <strong style={{ color: 'var(--accent)' }}>→ Assurer la connectivité en milieu saturé</strong> (Fiabilité)
                </li>
                <li className="mb-3">
                  <strong style={{ color: 'var(--accent)' }}>→ Garantir la précision et la rapidité</strong> (Qualité)
                </li>
                <li className="mb-3">
                  <strong style={{ color: 'var(--accent)' }}>→ Protéger l'infrastructure et les flux</strong> (Sécurité)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-5 px-4 border-bottom bg-body-secondary">
        <div className="container">
          <h2 className="display-6 fw-bold mb-4">Conclusion</h2>
          <div className="row">
            <div className="col-lg-8">
              {/* À remplir */}
            </div>
          </div>
        </div>
      </section>

      {/* Bibliographie */}
      <section className="py-5 px-4">
        <div className="container">
          <h2 className="display-6 fw-bold mb-4">Bibliographie</h2>
          
          <div className="row">
            <div className="col-lg-8">
              <h4 className="fw-bold mb-3">Sitographie</h4>
              {/* À remplir */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
