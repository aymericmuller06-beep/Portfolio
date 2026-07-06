import { useEffect } from 'react'
import TableauFile from '../Img/Tableau de synthèse - MULLER Aymeric.pdf'

export default function TableauSynthese() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="py-5 px-4 text-center border-bottom hero-section hero-section--small">
        <div className="container-max-900">
          <h1 className="responsive-title responsive-title--medium">
            Tableau de Synthèse
          </h1>
          <p className="body-text body-text--muted">
            Résumé synthétique de mon parcours et mes compétences
          </p>
        </div>
      </section>

      <section className="py-5 px-4">
        <div className="container-fluid">
          <div style={{
            width: '100%',
            height: '90vh',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid var(--border-color, #ddd)'
          }}>
            <embed
              src={TableauFile}
              type="application/pdf"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </section>
    </>
  )
}
