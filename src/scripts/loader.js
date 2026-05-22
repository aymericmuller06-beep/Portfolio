export function initLoader() {
  const loader = document.getElementById('pageLoader')
  const body = document.body
  
  if (!loader) return

  // Make body visible and hide loader when page is fully loaded
  function hideLoader() {
    body.style.opacity = '1'
    body.style.visibility = 'visible'
    loader.classList.add('hidden')
  }

  // If page is already loaded
  if (document.readyState === 'complete') {
    hideLoader()
  } else {
    // Wait for page to load
    window.addEventListener('load', hideLoader)
  }

  // Return function to show loader again (for page transitions)
  return () => {
    loader.classList.remove('hidden')
    // Small delay to show the loader during transition
    setTimeout(() => {
      hideLoader()
    }, 500)
  }
}
