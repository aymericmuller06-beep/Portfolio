export function initTopbar() {
  const topbar = document.querySelector('.topbar')
  if (!topbar) return

  let lastY = window.scrollY
  const THRESHOLD = 8
  let ticking = false

  const updateTopbar = () => {
    const currentY = window.scrollY

    if (currentY <= 0) {
      topbar.classList.remove('topbar--hidden')
    } else if (currentY > lastY + THRESHOLD) {
      // Scrolling down - hide
      topbar.classList.add('topbar--hidden')
    } else if (currentY < lastY - THRESHOLD) {
      // Scrolling up - show
      topbar.classList.remove('topbar--hidden')
    }

    lastY = currentY
    ticking = false
  }

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateTopbar)
      ticking = true
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })

  // Cleanup function (if needed for page transitions)
  return () => {
    window.removeEventListener('scroll', onScroll)
  }
}
