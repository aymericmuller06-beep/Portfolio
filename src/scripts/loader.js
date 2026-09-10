export function initLoader() {
  const loader = document.getElementById('pageLoader')
  const backToTopBtn = document.getElementById('backToTop')
  
  if (!loader) return

  loader.style.display = 'flex'
  loader.style.opacity = '1'
  loader.style.visibility = 'visible'
  
  if (backToTopBtn) {
    backToTopBtn.style.display = 'none'
  }

  function hideLoader() {
    loader.style.opacity = '0'
    loader.style.visibility = 'hidden'
    loader.style.pointerEvents = 'none'
    loader.classList.add('hidden')
  }

  const root = document.getElementById('root')
  if (!root) return

  // Simple timeout approach - React should be ready by then
  setTimeout(() => {
    hideLoader()
  }, 800)

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




