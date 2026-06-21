import { createPortal } from 'react-dom'

export default function Modal({ isOpen, title, children, onClose }) {
  if (!isOpen) return null

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(2px)',
          zIndex: 999
        }}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,
          width: '90%',
          maxWidth: '500px',
          backgroundColor: 'var(--bs-body-bg)',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          padding: '20px',
          maxHeight: '80vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h5 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--bs-info)' }}>{title}</h5>
        </div>
        <div style={{ marginBottom: '20px', lineHeight: '1.6', color: 'var(--bs-text-light)' }}>
          {children}
        </div>
        <div style={{ textAlign: 'right' }}>
          <button
            onClick={onClose}
            style={{
              padding: '8px 16px',
              backgroundColor: 'var(--bs-primary)',
              color: 'var(--bs-body-bg)',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Fermer
          </button>
        </div>
      </div>
    </>,
    document.body
  )
}
