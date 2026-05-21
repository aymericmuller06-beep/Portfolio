export function initTopbar() {
  const topbar = document.querySelector('.topbar')
  if (!topbar) return

  // Initialize active tab based on current page
  initializeActiveTabs()

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

function initializeActiveTabs() {
  const currentPath = window.location.pathname
  const tabs = document.querySelectorAll('.topbar .nav-link')

  tabs.forEach(tab => {
    const tabHref = tab.getAttribute('href')
    const tabPath = new URL(tabHref, window.location.origin).pathname

    // Remove active class from all tabs
    tab.classList.remove('active')

    // Add active class if this tab matches the current path
    if (currentPath === tabPath || 
        (currentPath === '/' && tabHref === '/') ||
        currentPath.endsWith(tabPath)) {
      tab.classList.add('active')
      // Scroll tab into view
      tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  })
}
