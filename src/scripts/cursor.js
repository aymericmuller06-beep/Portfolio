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

  const handleMouseMove = (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  }

  const handleMouseLeave = () => {
    cursor.style.transform = 'translate(-80px, -80px)'
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

  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseleave', handleMouseLeave)
  document.addEventListener('mouseover', handleMouseOver)
  document.addEventListener('mouseout', handleMouseOut)

  cleanupCursor = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseleave', handleMouseLeave)
    document.removeEventListener('mouseover', handleMouseOver)
    document.removeEventListener('mouseout', handleMouseOut)
  }
}
