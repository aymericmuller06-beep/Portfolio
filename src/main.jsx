import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './style.css'

// Theme management - set default immediately
const html = document.documentElement
const theme = localStorage.getItem('theme') || 'dark'
html.setAttribute('data-bs-theme', theme)

// Toggle between light and dark
function initThemeToggle() {
  const btn = document.getElementById('themeToggle')
  if (!btn) return

  function updateThemeButton() {
    const isDark = html.getAttribute('data-bs-theme') === 'dark'
    btn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>'
  }

  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-bs-theme')
    const newTheme = current === 'dark' ? 'light' : 'dark'
    html.setAttribute('data-bs-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    updateThemeButton()
  })
  
  updateThemeButton()
}

// Initialize theme toggle when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThemeToggle)
} else {
  initThemeToggle()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
