import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import CVFile from '../Img/CV.pdf'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

export default function CV() {
  const [numPages, setNumPages] = useState(null)

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

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
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
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center',
                backgroundColor: 'var(--body-bg)',
                padding: '20px',
                borderRadius: '8px'
              }}>
                <Document
                  file={CVFile}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={<p className="text-center">Chargement du PDF...</p>}
                  error={<p className="text-center text-danger">Erreur lors du chargement du PDF</p>}
                >
                  {Array.from(new Array(numPages), (el, index) => (
                    <div key={`page_${index + 1}`} style={{ marginBottom: '20px' }}>
                      <Page 
                        pageNumber={index + 1}
                        scale={1.5}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                      />
                    </div>
                  ))}
                </Document>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
