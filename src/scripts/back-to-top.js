let cleanupBackToTop = null

export function initBackToTop() {
  cleanupBackToTop?.()

  const btn = document.getElementById('backToTop')
  if (!btn) {
    cleanupBackToTop = null
    return
  }

  const threshold = 300
  const toggle = () => {
    btn.classList.toggle('btt-visible', window.scrollY > threshold)
  }
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.addEventListener('scroll', toggle, { passive: true })
  btn.addEventListener('click', handleClick)
  toggle()

  cleanupBackToTop = () => {
    window.removeEventListener('scroll', toggle)
    btn.removeEventListener('click', handleClick)
  }
}
