import { useEffect } from 'react'

export default function Veilletech() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="py-5 px-4">
      <div className="container">
        <h1 className="display-5 fw-bold mb-5 text-center">Veille Technologique</h1>
        <div className="alert alert-info">
          <p>Cette page est en cours de migration vers React. Le contenu de la veille technologique sera bientôt disponible.</p>
        </div>
      </div>
    </section>
  )
}
