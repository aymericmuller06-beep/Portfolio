import { createPortal } from 'react-dom'

export default function Modal({ isOpen, title, children, onClose }) {
  if (!isOpen) return null

  return createPortal(
    <>
      <div
        className="modal-backdrop transition-smooth"
        onClick={onClose}
      />
      
      <div
        className="modal-box transition-smooth"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button
            onClick={onClose}
            className="btn btn-primary"
          >
            Fermer
          </button>
        </div>
      </div>
    </>,
    document.body
  )
}
