let cleanupCursor = null

export function initCursor() {
  cleanupCursor?.()

  if (!window.matchMedia('(pointer: fine)').matches) {
    cleanupCursor = null
    return
  }

  let cursor = document.getElementById('custom-cursor')
  if (!cursor) {
    cursor = document.createElement('div')
    cursor.id = 'custom-cursor'
    document.body.appendChild(cursor)
  }

  let rafId = null

  const handleMouseMove = (e) => {
    // Throttle with RAF to prevent lag
    if (rafId) cancelAnimationFrame(rafId)
    rafId = requestAnimationFrame(() => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      rafId = null
    })
  }

  const handleMouseLeave = () => {
    cursor.style.transform = 'translate(-80px, -80px)'
    if (rafId) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
  }

  const handleMouseOver = (e) => {
    if (e.target.closest('a, button, [role="button"], input, label, select, textarea')) {
      cursor.classList.add('cursor-hover')
    }
  }

  const handleMouseOut = (e) => {
    if (e.target.closest('a, button, [role="button"], input, label, select, textarea')) {
      cursor.classList.remove('cursor-hover')
    }
  }

  document.addEventListener('mousemove', handleMouseMove, { passive: true })
  document.addEventListener('mouseleave', handleMouseLeave, { passive: true })
  document.addEventListener('mouseover', handleMouseOver, { passive: true })
  document.addEventListener('mouseout', handleMouseOut, { passive: true })

  cleanupCursor = () => {
    if (rafId) cancelAnimationFrame(rafId)
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseleave', handleMouseLeave)
    document.removeEventListener('mouseover', handleMouseOver)
    document.removeEventListener('mouseout', handleMouseOut)
  }
}

