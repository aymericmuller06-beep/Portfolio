import { useEffect } from 'react'

export default function CV() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="py-5 px-4">
      <div className="container">
        <h1 className="display-5 fw-bold mb-5 text-center">Mon CV</h1>
        <div className="alert alert-info">
          <p>Cette page est en cours de migration vers React. Votre CV sera bientôt disponible.</p>
        </div>
      </div>
    </section>
  )
}
