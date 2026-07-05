import { initTopbar } from './topbar.js'
import { initBackToTop } from './back-to-top.js'

export function initPageTransition(showLoaderOnTransition) {
  initTopbar()
  initBackToTop()

  return null
}


