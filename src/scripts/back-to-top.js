export function initBackToTop() {
  const btn = document.getElementById('backToTop')
  if (!btn) return

  const threshold = 300

  const updateVisibility = () => {
    const isVisible = window.scrollY > threshold
    btn.classList.toggle('btt-visible', isVisible)
  }

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', updateVisibility, { passive: true })
  btn.addEventListener('click', scrollToTop)

  updateVisibility()

  return () => {
    window.removeEventListener('scroll', updateVisibility)
    btn.removeEventListener('click', scrollToTop)
  }
}
