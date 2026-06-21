import { useEffect } from 'react'

export default function MonEntreprise() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="py-5 px-4">
      <div className="container">
        <h1 className="display-5 fw-bold mb-5 text-center">Mon Entreprise</h1>
        <div className="alert alert-info">
          <p>Cette page est en cours de développement. Les informations sur mon entreprise seront bientôt disponibles.</p>
        </div>
      </div>
    </section>
  )
}
