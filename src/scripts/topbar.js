export function initTopbar() {
  const topbar = document.querySelector('.topbar')
  if (!topbar) return

  updateActiveTabs()

  let lastY = window.scrollY
  const THRESHOLD = 8
  let ticking = false

  const updateTopbar = () => {
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
      requestAnimationFrame(updateTopbar)
      ticking = true
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })

  // Add click handlers to nav links to update active state
  const navLinks = topbar.querySelectorAll('.nav-link')
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(l => l.classList.remove('active'))
      link.classList.add('active')
    })
  })

  return () => {
    window.removeEventListener('scroll', onScroll)
  }
}

function updateActiveTabs() {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/'
  const tabs = document.querySelectorAll('.topbar .nav-link')

  tabs.forEach(tab => {
    const tabHref = tab.getAttribute('href').replace(/\/$/, '') || '/'
    
    // Remove active class from all tabs
    tab.classList.remove('active')

    // Add active class if this tab matches the current path
    if (currentPath === tabHref) {
      tab.classList.add('active')
    }
  })
}
