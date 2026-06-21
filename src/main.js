import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './style.css'

import { initBackToTop } from './scripts/back-to-top.js'
import { initTopbar } from './scripts/topbar.js'
import { initPageTransition } from './scripts/page-transition.js'
import { initLoader } from './scripts/loader.js'

// Theme management - simple version
const html = document.documentElement

// Set dark mode by default immediately
const theme = localStorage.getItem('theme') || 'dark'
html.setAttribute('data-bs-theme', theme)

// Update button icon based on theme
function updateThemeButton() {
  const btn = document.getElementById('themeToggle')
  if (btn) {
    const isDark = html.getAttribute('data-bs-theme') === 'dark'
    btn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>'
  }
}

// Toggle between light and dark
function initThemeToggle() {
  const btn = document.getElementById('themeToggle')
  if (!btn) return

  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-bs-theme')
    const newTheme = current === 'dark' ? 'light' : 'dark'
    html.setAttribute('data-bs-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    updateThemeButton()
  })
  
  updateThemeButton()
}

// Initialize features on page load
function init() {
  initThemeToggle()
  initBackToTop()
  initTopbar()
  const showLoaderOnTransition = initLoader()
  initPageTransition(showLoaderOnTransition)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
