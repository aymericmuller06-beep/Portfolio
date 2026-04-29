import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Swup from 'swup'
import AOS from 'aos'
import TypeIt from 'typeit'
import { tsParticles } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import { initCardsSweep } from './scripts/cards-sweep.js'
import { initBackToTop } from './scripts/back-to-top.js'
import { initTopbar } from './scripts/topbar.js'
import './style.css'
import 'aos/dist/aos.css'

// ── Page loader : masquer une fois tout chargé ──
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader')
  if (loader) loader.classList.add('loader-hidden')
})

// ── Theme toggle ──
const html = document.documentElement
let particlesContainer = null
let swupInstance = null
let particlesLoaderPromise = null

const applyTheme = (theme) => {
  html.setAttribute('data-bs-theme', theme)
  const btn = document.getElementById('themeToggle')
  if (btn) btn.textContent = theme === 'dark' ? '☀' : '☾'
  localStorage.setItem('theme', theme)
  if (document.getElementById('particles-js')) initParticles()
}

// Restore saved theme, or fallback to OS preference
const osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
const saved = localStorage.getItem('theme') || osTheme
applyTheme(saved)

function initThemeToggle() {
  const btn = document.getElementById('themeToggle')
  if (!btn || btn.dataset.bound === 'true') return

  btn.dataset.bound = 'true'
  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-bs-theme')
    applyTheme(current === 'dark' ? 'light' : 'dark')
  })
  btn.textContent = html.getAttribute('data-bs-theme') === 'dark' ? '☀' : '☾'
}

function syncTopbarState() {
  const homeButton = document.querySelector('.btn-home')
  if (!homeButton) return

  const path = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\/+/g, '/')
  const isHome = path === '/' || path === ''

  homeButton.classList.toggle('is-hidden', isHome)
  homeButton.setAttribute('aria-hidden', String(isHome))
  homeButton.tabIndex = isHome ? -1 : 0
}

const particlesConfig = (isDark) => {
  const isMobile = window.matchMedia('(max-width: 575px)').matches

  return {
  fullScreen: { enable: false },
  particles: {
    number: { value: isMobile ? 40 : 80, density: { enable: true, area: 800 } },
    color: { value:'#ce283b' },
    shape: { type: 'square' },
    opacity: { value: { min: isMobile ? 0.6 : 0.2, max: isMobile ? 1 : (isDark ? 0.8 : 0.4) } },
    size: { value: { min: isMobile ? 1 : 2, max: isMobile ? 3 : 5 } },
    links: {
      enable: true,
      distance: isMobile ? 100 : 150,
      color: isDark ? '#ae1625' : '#a82030',
      opacity: isMobile ? 1 : (isDark ? 0.7 : 0.4),
      width: 1
    },
    move: {
      enable: true, speed: 1.2, direction: 'none', random: true,
      outModes: { default: 'out' }
    }
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover: { enable: !isMobile, mode: 'grab' },
      resize: { enable: true }
    },
    modes: { grab: { distance: 140, links: { opacity: 0.45 } } }
  },
  detectRetina: true
  }
}

async function ensureParticlesEngine() {
  if (!particlesLoaderPromise) {
    particlesLoaderPromise = loadSlim(tsParticles)
  }

  await particlesLoaderPromise
}

async function initParticles() {
  const container = document.getElementById('particles-js')
  if (particlesContainer) {
    particlesContainer.destroy()
    particlesContainer = null
  }

  if (!container) return

  await ensureParticlesEngine()

  const isDark = html.getAttribute('data-bs-theme') === 'dark'
  particlesContainer = await tsParticles.load({
    id: 'particles-js',
    options: particlesConfig(isDark)
  })
}

function destroyParticles() {
  if (!particlesContainer) return
  particlesContainer.destroy()
  particlesContainer = null
}

function initTypeIt() {
  const banner = document.getElementById('banner-typeit')
  if (!banner || banner.dataset.bound === 'true') return

  banner.dataset.bound = 'true'

  new TypeIt(banner, {
    speed: 100,
    waitUntilVisible: true,
    cursor: true,
    cursorChar: '_',
  })
    .type('Portfolio')
    .go()
}

function initAOS() {
  if (document.documentElement.dataset.aosInitialized === 'true') {
    AOS.refreshHard()
    return
  }

  AOS.init({
    duration: 800,
  })
  document.documentElement.dataset.aosInitialized = 'true'
}

function initPage() {
  syncTopbarState()
  initThemeToggle()
  initAOS()
  initCardsSweep()
  initBackToTop()
  initTopbar()
  initTypeIt()
  initParticles()
}

function initSwup() {
  if (swupInstance || !document.querySelector('#swup')) return

  swupInstance = new Swup({
    containers: ['#swup'],
  })

  swupInstance.hooks.on('visit:start', () => {
    destroyParticles()
  })

  swupInstance.hooks.on('page:view', () => {
    initPage()
    window.scrollTo(0, 0)
  })
}

initPage()
initSwup()

