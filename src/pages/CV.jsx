import { useEffect } from 'react'
import CVFile from '../Img/CV.pdf'

export default function CV() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = CVFile
    link.download = 'CV_Aymeric.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-5 px-4 text-center border-bottom" style={{ minHeight: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(45, 106, 79, 0.05) 0%, rgba(82, 183, 136, 0.05) 100%)' }}>
        <div style={{ maxWidth: '900px' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', fontWeight: 800, color: 'var(--accent)', marginBottom: '1.5rem' }}>
            Mon CV
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Retrouvez mon parcours professionnel et mes compétences
          </p>
        </div>
      </section>

      {/* CV Content */}
      <section className="py-5 px-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Download Button */}
              <div className="text-center mb-4">
                <button 
                  onClick={handleDownloadCV}
                  className="btn btn-primary fw-semibold px-4 py-2"
                  style={{
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <i className="fa-solid fa-download me-2"></i>
                  Télécharger le PDF
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="card border-0 shadow-sm" style={{ overflow: 'hidden' }}>
                <iframe
                  src={`${CVFile}#zoom=page-fit`}
                  style={{
                    width: '100%',
                    height: '800px',
                    border: 'none'
                  }}
                  title="Mon CV"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
