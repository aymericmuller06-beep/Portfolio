export function initLoader() {
  const loader = document.getElementById('pageLoader')
  const backToTopBtn = document.getElementById('backToTop')
  
  if (!loader) return

  // Ensure loader is visible and button is hidden initially
  loader.style.display = 'flex'
  loader.style.opacity = '1'
  loader.style.visibility = 'visible'
  
  if (backToTopBtn) {
    backToTopBtn.style.display = 'none'
  }

  // Make loader disappear
  function hideLoader() {
    loader.style.opacity = '0'
    loader.style.visibility = 'hidden'
    loader.style.pointerEvents = 'none'
    loader.classList.add('hidden')
  }

  // Check if React has rendered
  const root = document.getElementById('root')
  if (!root) return

  // Simple timeout approach - React should be ready by then
  setTimeout(() => {
    hideLoader()
  }, 800)

  // Return function to show loader again (for page transitions)
  return () => {
    loader.style.opacity = '1'
    loader.style.visibility = 'visible'
    loader.style.pointerEvents = 'auto'
    loader.classList.remove('hidden')
    
    setTimeout(() => {
      hideLoader()
    }, 300)
  }
}




