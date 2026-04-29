let cleanupTopbar = null

export function initTopbar() {
  cleanupTopbar?.()

  const topbar = document.querySelector('.topbar')
  if (!topbar) {
    cleanupTopbar = null
    return
  }

  let lastY = window.scrollY
  const THRESHOLD = 8
  let ticking = false

  const handleScroll = () => {
    const currentY = window.scrollY

    if (currentY <= 0) {
      topbar.classList.remove('topbar--hidden')
    } else if (currentY > lastY + THRESHOLD) {
      topbar.classList.add('topbar--hidden')
    } else if (currentY < lastY - THRESHOLD) {
      topbar.classList.remove('topbar--hidden')
    }

    lastY = currentY
    ticking = false
  }

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(handleScroll)
      ticking = true
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })

  cleanupTopbar = () => {
    window.removeEventListener('scroll', onScroll)
  }
}
