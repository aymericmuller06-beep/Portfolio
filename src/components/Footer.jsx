import { Link } from 'react-router-dom'
import { socialLinks } from '../config'

export default function Footer() {
  return (
    <footer className="border-top py-4">
      <div className="container">
        <section id="contact" className="py-5 px-4 border-top">
          <h2 className="display-5 fw-bold mb-4 text-center">Connectez-vous avec moi</h2>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a href={`mailto:${socialLinks.email}`} className="btn btn-outline-primary btn-lg" title="Envoyer un email">
              <i className="fa-solid fa-envelope me-2"></i>Email
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-lg" title="Profil LinkedIn">
              <i className="fa-brands fa-linkedin me-2"></i>LinkedIn
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-lg" title="Profil GitHub">
              <i className="fa-brands fa-github me-2"></i>GitHub
            </a>
          </div>
        </section>
        <div className="text-center mt-5">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>© 2026 Aymeric Muller</p>
        </div>
      </div>
    </footer>
  )
}
