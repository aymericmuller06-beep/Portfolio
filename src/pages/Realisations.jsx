import { useEffect } from 'react'

export default function Realisations() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="py-5 px-4">
      <div className="container">
        <h1 className="display-5 fw-bold mb-5 text-center">Réalisations</h1>
        <div className="alert alert-info">
          <p>Cette page est en cours de migration vers React. Le contenu des réalisations sera bientôt disponible.</p>
        </div>
      </div>
    </section>
  )
}
