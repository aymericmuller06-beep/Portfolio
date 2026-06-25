import { initTopbar } from './topbar.js'
import { initBackToTop } from './back-to-top.js'

export function initPageTransition(showLoaderOnTransition) {
  // React Router gère déjà les transitions entre pages
  // On réinitialise juste les scripts après chaque changement de page
  
  // Réinitialiser les scripts après les changements de route
  initTopbar()
  initBackToTop()

  return null
}


