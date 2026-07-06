import { useState } from 'react'

export default function GalerieModale({ images = [], titre = 'Galerie' }) {
  const [imageActuelle, setImageActuelle] = useState(null)
  const [indexImage, setIndexImage] = useState(0)

  if (!images || images.length === 0) {
    return null
  }

  const ouvrirImage = (index) => {
    setIndexImage(index)
    setImageActuelle(images[index])
  }

  const fermerImage = () => {
    setImageActuelle(null)
  }

  const imagesuivante = () => {
    const nouvelIndex = (indexImage + 1) % images.length
    setIndexImage(nouvelIndex)
    setImageActuelle(images[nouvelIndex])
  }

  const imagePrecedente = () => {
    const nouvelIndex = (indexImage - 1 + images.length) % images.length
    setIndexImage(nouvelIndex)
    setImageActuelle(images[nouvelIndex])
  }

  return (
    <>
      {/* Première image avec bouton diaporama */}
      <div 
        className="card border-0 shadow-sm overflow-hidden cursor-pointer gallery-card-large"
        onClick={() => ouvrirImage(0)}
      >
        <img 
          src={images[0].url}
          alt={images[0].titre}
          className="w-100 h-100"
        />
        <div className="card-img-overlay d-flex align-items-center justify-content-center">
          <button className="btn btn-primary fw-bold">
            <i className="fa-solid fa-play me-2"></i>Voir le diaporama
          </button>
        </div>
      </div>

      {/* Modal galerie d'images */}
      {imageActuelle && (
        <>
          <div className="modal-backdrop" onClick={fermerImage}></div>
          <div className="modal-box gallery-modal">
            <div className="gallery-modal-header">
              <h5 className="gallery-modal-title">
                {imageActuelle.titre}
              </h5>
              <button 
                onClick={fermerImage}
                className="gallery-modal-close"
              >
                ✕
              </button>
            </div>
            
            <div className="gallery-modal-content object-fit-contain">
              <img 
                src={imageActuelle.url}
                alt={imageActuelle.titre}
              />
            </div>
            
            <div className="gallery-modal-footer">
              <button 
                onClick={imagePrecedente}
                className="btn btn-sm btn-primary"
              >
                <i className="fa-solid fa-chevron-left me-2"></i>Précédent
              </button>
              <span className="gallery-modal-counter">
                {indexImage + 1} / {images.length}
              </span>
              <button 
                onClick={imagesuivante}
                className="btn btn-sm btn-primary"
              >
                Suivant<i className="fa-solid fa-chevron-right ms-2"></i>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}
