export function initLoader() {
  const loader = document.getElementById('pageLoader')
  const body = document.body
  
  if (!loader) return

  // Make body visible and hide loader
  function hideLoader() {
    body.style.opacity = '1'
    body.style.visibility = 'visible'
    loader.classList.add('hidden')
  }

  // Observer pour détecter quand le contenu React est rendu
  const observer = new MutationObserver(() => {
    const mainContent = document.querySelector('main')
    if (mainContent && mainContent.children.length > 0) {
      hideLoader()
      observer.disconnect()
    }
  })

  // Vérifier d'abord si le contenu est déjà rendu
  const mainContent = document.querySelector('main')
  if (mainContent && mainContent.children.length > 0) {
    hideLoader()
  } else {
    // Sinon observer les changements du DOM
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
    
    // Timeout de sécurité : forcer le masquage du loader après 5s
    setTimeout(() => {
      hideLoader()
      observer.disconnect()
    }, 5000)
  }

  // Return function to show loader again (for page transitions)
  return () => {
    loader.classList.remove('hidden')
    body.style.opacity = '0'
    body.style.visibility = 'hidden'
    // Small delay to show the loader during transition
    setTimeout(() => {
      hideLoader()
    }, 500)
  }
}


