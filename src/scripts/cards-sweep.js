// ── Category cards – sweep animation ──
// progress 0 = caché à gauche (-100%), 0.5 = couvre la carte (0%), 1 = caché à droite (+100%)
const DURATION = 500
const ease = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2

let cleanupCardsSweep = null

export function initCardsSweep() {
  cleanupCardsSweep?.()

  const cleanups = []

  document.querySelectorAll('#categories .card').forEach(card => {
    const sweep = card.querySelector('.card-sweep')
    if (!sweep) return

    let progress = 0
    let startProgress = 0
    let targetProgress = 0
    let startTime = null
    let rafId = null

    sweep.style.transform = 'translateX(-100%)'

    function step(timestamp) {
      if (!startTime) startTime = timestamp
      const t = Math.min((timestamp - startTime) / DURATION, 1)
      progress = startProgress + (targetProgress - startProgress) * ease(t)

      sweep.style.transform = `translateX(${(progress * 2 - 1) * 100}%)`

      if (t < 1) {
        rafId = requestAnimationFrame(step)
      } else {
        progress = targetProgress
        rafId = null
        startTime = null
      }
    }

    function animateTo(target) {
      if (rafId) cancelAnimationFrame(rafId)
      startProgress = progress
      targetProgress = target
      startTime = null
      rafId = requestAnimationFrame(step)
    }

    function handleMouseEnter() {
      animateTo(1)
    }

    function handleMouseLeave() {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = null
      startTime = null
      progress = 0
      sweep.style.transform = 'translateX(-100%)'
    }

    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    cleanups.push(() => {
      if (rafId) cancelAnimationFrame(rafId)
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    })
  })

  cleanupCardsSweep = () => {
    cleanups.forEach(cleanup => cleanup())
  }
}
