import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Header() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const html = document.documentElement
    setTheme(html.getAttribute('data-bs-theme') || 'light')
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const newTheme = theme === 'light' ? 'dark' : 'light'
    html.setAttribute('data-bs-theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <header className="topbar">
      <span className="topbar-name fw-bold text-uppercase">Aymeric Muller</span>
      <nav className="nav nav-tabs flex-grow-1 ms-2 ms-md-3" role="navigation" aria-label="Navigation des sections">
        <Link to="/" className="nav-link px-2 px-md-3 small" data-tab="home">
          <i className="fa-solid fa-house"></i>
          <span className="d-none d-md-inline ms-1">Accueil</span>
        </Link>
        <Link to="/pages/realisations" className="nav-link px-2 px-md-3 small" data-tab="realisations">
          <i className="fa-solid fa-folder"></i>
          <span className="d-none d-md-inline ms-1">Réalisations</span>
        </Link>
        <Link to="/pages/veille_technologique" className="nav-link px-2 px-md-3 small" data-tab="veille">
          <i className="fa-solid fa-rss"></i>
          <span className="d-none d-md-inline ms-1">Veille</span>
        </Link>
        <Link to="/pages/mon_entreprise" className="nav-link px-2 px-md-3 small" data-tab="entreprise">
          <i className="fa-solid fa-building"></i>
          <span className="d-none d-md-inline ms-1">Entreprise</span>
        </Link>
        <Link to="/pages/tableau_synthese" className="nav-link px-2 px-md-3 small" data-tab="synthese">
          <i className="fa-solid fa-chart-bar"></i>
          <span className="d-none d-md-inline ms-1">Synthèse</span>
        </Link>
        <Link to="/pages/cv" className="nav-link px-2 px-md-3 small" data-tab="cv">
          <i className="fa-solid fa-file"></i>
          <span className="d-none d-md-inline ms-1">CV</span>
        </Link>
        <Link to="/pages/annuaire" className="nav-link px-2 px-md-3 small" data-tab="annuaire">
          <i className="fa-solid fa-address-book"></i>
          <span className="d-none d-md-inline ms-1">Annuaire</span>
        </Link>
      </nav>
      <div className="ms-auto">
        <button className="theme-toggle btn-link p-0 border-0" id="themeToggle" onClick={toggleTheme} aria-label="Changer le thème">
          <i className={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
        </button>
      </div>
    </header>
  )
}
