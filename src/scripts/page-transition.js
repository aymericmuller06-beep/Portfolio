import Swup from 'swup'
import { initTopbar } from './topbar.js'
import { initBackToTop } from './back-to-top.js'

export function initPageTransition() {
  const swup = new Swup({
    containers: ['#swup'],
    cache: true,
    preload: true,
    skipValidation: false
  })

  // Marquer que Swup est prêt
  document.body.classList.add('swup-ready')

  // Animation de transition au changement de page
  swup.on('transitionStart', () => {
    document.documentElement.classList.add('is-transitioning')
  })

  swup.on('transitionEnd', () => {
    document.documentElement.classList.remove('is-transitioning')
  })

  // Réinitialiser les scripts après transition
  swup.on('contentReplaced', () => {
    initTopbar()
    initBackToTop()
  })

  return swup
}


