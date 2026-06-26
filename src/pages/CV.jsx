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
      <section className="py-5 px-4 text-center border-bottom hero-section hero-section--small">
        <div style={{ maxWidth: '900px' }}>
          <h1 className="responsive-title responsive-title--medium">
            Mon CV
          </h1>
          <p className="body-text body-text--muted">
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
