import { useEffect, useState } from 'react'
import AzurLogo from '../Img/Azurinfo.png'
import AzurLogoLight from '../Img/AzurinfoLight.png'

export default function MonEntreprise() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    window.scrollTo(0, 0)
    
    const html = document.documentElement
    setTheme(html.getAttribute('data-bs-theme') || 'light')
    
    const observer = new MutationObserver(() => {
      setTheme(html.getAttribute('data-bs-theme') || 'light')
    })
    
    observer.observe(html, { attributes: true, attributeFilter: ['data-bs-theme'] })
    
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-5 px-4">
      <div className="container">
        <img src={theme === 'light' ? AzurLogo : AzurLogoLight} alt="Azur Logo" className="d-block mx-auto" style={{ maxWidth: '25vw', height: 'auto' }} />
        
      </div>
    </section>
  )
}
