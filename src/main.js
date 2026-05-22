import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './style.css'

import { initBackToTop } from './scripts/back-to-top.js'
import { initTopbar } from './scripts/topbar.js'
import { initPageTransition } from './scripts/page-transition.js'
import { initLoader } from './scripts/loader.js'

// Theme management
const html = document.documentElement

function applyTheme(theme) {
  html.setAttribute('data-bs-theme', theme)
  const btn = document.getElementById('themeToggle')
  if (btn) {
    btn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>'
  }
  localStorage.setItem('theme', theme)
}

// Restore theme from storage or OS preference
const osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
const savedTheme = localStorage.getItem('theme') || osTheme
applyTheme(savedTheme)

// Theme toggle button
function initThemeToggle() {
  const btn = document.getElementById('themeToggle')
  if (!btn) return

  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-bs-theme')
    applyTheme(current === 'dark' ? 'light' : 'dark')
  })
}

// Listen for OS theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    applyTheme(e.matches ? 'dark' : 'light')
  }
})

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
