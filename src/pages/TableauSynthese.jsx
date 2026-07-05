import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import TableauFile from '../Img/Tableau de synthèse - MULLER Aymeric.pdf'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

export default function TableauSynthese() {
  const [numPages, setNumPages] = useState(null)
  const [scale, setScale] = useState(2.5)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleDownloadTableau = () => {
    const link = document.createElement('a')
    link.href = TableauFile
    link.download = 'Tableau_Synthese_Aymeric.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.5, 4))
  }

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.5, 1))
  }

  const handleResetZoom = () => {
    setScale(2.5)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-5 px-4 text-center border-bottom hero-section hero-section--small">
        <div style={{ maxWidth: '900px' }}>
          <h1 className="responsive-title responsive-title--medium">
            Tableau de Synthèse
          </h1>
          <p className="body-text body-text--muted">
            Résumé synthétique de mon parcours et mes compétences
          </p>
        </div>
      </section>

      {/* Tableau Content */}
      <section className="py-5 px-4">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div style={{ width: '95%', maxWidth: 'none' }}>
              {/* Download and Zoom Controls */}
              <div className="d-flex justify-content-center align-items-center gap-3 mb-4 flex-wrap">
                <button 
                  onClick={handleDownloadTableau}
                  className="btn btn-primary fw-semibold px-4 py-2"
                  style={{
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <i className="fa-solid fa-download me-2"></i>
                  Télécharger le PDF
                </button>

                <div className="btn-group" role="group">
                  <button 
                    onClick={handleZoomOut}
                    className="btn btn-outline-secondary"
                    title="Zoom out"
                    disabled={scale <= 1}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <button 
                    onClick={handleResetZoom}
                    className="btn btn-outline-secondary"
                    title="Reset zoom"
                  >
                    <span style={{ fontSize: '0.9rem' }}>{Math.round(scale * 100)}%</span>
                  </button>
                  <button 
                    onClick={handleZoomIn}
                    className="btn btn-outline-secondary"
                    title="Zoom in"
                    disabled={scale >= 4}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>

              {/* PDF Viewer with Scrollable Container */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center',
                backgroundColor: 'var(--body-bg)',
                padding: '20px',
                borderRadius: '8px',
                maxHeight: '85vh',
                overflowY: 'auto',
                overflowX: 'auto',
                border: '1px solid var(--border-color, #ddd)'
              }}>
                <Document
                  file={TableauFile}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={<p className="text-center">Chargement du PDF...</p>}
                  error={<p className="text-center text-danger">Erreur lors du chargement du PDF</p>}
                >
                  {Array.from(new Array(numPages), (el, index) => (
                    <div key={`page_${index + 1}`} style={{ marginBottom: '20px' }}>
                      <Page 
                        pageNumber={index + 1}
                        scale={scale}
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
