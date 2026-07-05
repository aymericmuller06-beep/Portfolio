import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { realisations, allReferentiels, referentielCategories } from '../../data/realisations'
import { getDefinitionByAcronym } from '../../data/definitions'
import { getContrastColor } from '../../utils/contrast'
import ProofsCarousel from '../../components/ProofsCarousel'
import Modal from '../../components/Modal'
import { useModal } from '../../hooks/useModal'

export default function Portfolio() {
  const navigate = useNavigate()
  
  // Modales pour les outils
  const reactModal = useModal()
  const viteModal = useModal()
  const scssModal = useModal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const realisation = realisations.find(r => r.id === 3)
  
  if (!realisation) {
    return (
      <section className="py-4 px-3 text-center border-bottom hero-section hero-section--small">
        <div className="container">
          <h1 className="responsive-title responsive-title--medium">Réalisation non trouvée</h1>
          <button 
            onClick={() => navigate('/pages/realisations')}
            className="btn btn-primary mt-4"
          >
            Retour aux réalisations
          </button>
        </div>
      </section>
    )
  }

  const introduction = "Créer un portfolio professionnel pour showcaser mes projets, compétences et parcours en développement. Ce portfolio est destiné aux potentiels employeurs et clients pour démontrer mes capacités techniques et créatives."
  
  const besoinsClients = [
    {
      titre: "Se distinguer des candidats",
      description: "Avoir une présence en ligne professionnelle et unique pour attirer l'attention des recruteurs."
    },
    {
      titre: "Démontrer les compétences",
      description: "Montrer concrètement les technologies et frameworks maîtrisés (React, Vite, SCSS)."
    },
    {
      titre: "Adapter à tous les appareils",
      description: "Créer une expérience responsive qui fonctionne parfaitement sur mobile, tablette et desktop."
    },
    {
      titre: "Améliorer l'expérience utilisateur",
      description: "Mettre en place des fonctionnalités modernes comme thèmes clair/sombre et navigation fluide."
    }
  ]

  const ceQuOnAfait = "L'objectif était d'avoir une présence en ligne professionnelle et complète pour se distinguer des autres candidats, tout en démontrant les capacités techniques réelles (React, Vite, SCSS) par des exemples concrets. Nous avons choisi d'utiliser des technologies modernes pour montrer mon expertise, implémenté un design responsive pour tous les appareils, et créé un système de thèmes clair/sombre avec CSS variables pour une meilleure expérience utilisateur."

  const ceQueJaiFailText = "J'ai conçu et développé une page d'accueil professionnelle avec une hero section captivante, mon CV et des appels à l'action. J'ai créé une galerie interactive des réalisations avec descriptions complètes et liens vers les sources. J'ai développé les pages de détail pour chaque projet avec contexte, approche, et carrousels de preuves visuelles, et enfin j'ai créé des pages d'information complémentaires (glossaire, technologies, présentation de l'entreprise)."

  const preuves = [
    {
      title: "Page d'accueil professionnelle",
      description: "Hero section captivante avec présentation personnelle, CV et appel à l'action pour les visiteurs.",
      image: "https://via.placeholder.com/600x400?text=Home+Page"
    },
    {
      title: "Galerie des réalisations",
      description: "Showcase interactif de mes projets avec descriptions, technologies utilisées et liens vers les sources.",
      image: "https://via.placeholder.com/600x400?text=R%C3%A9alisations"
    },
    {
      title: "Pages de détail",
      description: "Sections détaillées pour chaque projet avec contexte, approche, et carrousels de preuves visuelles.",
      image: "https://via.placeholder.com/600x400?text=D%C3%A9tail"
    },
    {
      title: "Annuaire et ressources",
      description: "Pages d'information (glossaire, technologies, entreprise) pour compléter le portfolio avec du contexte.",
      image: "https://via.placeholder.com/600x400?text=Ressources"
    }
  ]

  return (
    <>
      <section className="py-4 px-3 text-center border-bottom hero-section hero-section--small">
        <div style={{ maxWidth: '80%' }}>
          <button 
            onClick={() => navigate('/pages/realisations')}
            className="btn btn-link text-decoration-none mb-3"
          >
            <i className="fa-solid fa-arrow-left me-2"></i>Retour aux réalisations
          </button>
          <h1 className="responsive-title responsive-title--medium">
            {realisation.title}
          </h1>
        </div>
      </section>

      <section className="py-4 px-3 border-bottom">
        <div className="container" style={{ maxWidth: '80%' }}>
          <h2 className="display-5 fw-bold text-center mb-4">Introduction</h2>
          <p className="lead text-center text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            {introduction}
          </p>
          
          {besoinsClients && besoinsClients.length > 0 && (
            <div className="row g-4 mt-5">
              {besoinsClients.map((besoin, idx) => (
                <div key={idx} className="col-md-6 col-lg-6">
                  <div className="card h-100 border-0 shadow-sm" style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)'
                      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)'
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title fw-semibold text-primary mb-3">
                        <i className="fa-solid fa-check-circle me-2"></i>{besoin.titre}
                      </h5>
                      <p className="card-text text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        {besoin.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-4 px-3 border-bottom bg-body-secondary">
        <div className="container" style={{ maxWidth: '80%' }}>
          <h2 className="display-5 fw-bold text-center mb-4">Ce qu'on a fait</h2>
          <p className="text-start" style={{ fontSize: '1rem', lineHeight: '1.8', textAlign: 'justify' }}>
            {ceQuOnAfait}
          </p>
        </div>
      </section>

      <section className="py-4 px-3 border-bottom">
        <div className="container" style={{ maxWidth: '80%' }}>
          <h2 className="display-5 fw-bold text-center mb-4">Ce que j'ai fait</h2>
          <p className="text-start" style={{ fontSize: '1rem', lineHeight: '1.8', textAlign: 'justify' }}>
            {ceQueJaiFailText}
          </p>
        </div>
      </section>

      <section className="py-4 px-3 border-bottom bg-body-secondary">
        <div className="container" style={{ maxWidth: '80%' }}>
          <h2 className="display-5 fw-bold text-center mb-5">Preuves & détails</h2>
          {preuves && preuves.length > 0 ? (
            <ProofsCarousel proofs={preuves} />
          ) : (
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <p className="text-muted">Aucune preuve ajoutée pour cette section.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-4 px-3 border-bottom">
        <div className="container">
          <h2 className="display-5 fw-bold text-center mb-5">Compétences acquises</h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {realisation.referentiels.map((refId, idx) => {
                  const referentiel = allReferentiels.find(ref => ref.id === refId)
                  const category = referentiel ? referentielCategories[referentiel.category] : null
                  const bgColor = category?.color || '#2d6a4f'
                  const textColor = getContrastColor(bgColor)
                  return (
                    <button 
                      key={idx} 
                      className="badge" 
                      style={{ 
                        backgroundColor: bgColor, 
                        color: textColor, 
                        borderRadius: '20px', 
                        paddingLeft: '0.75rem', 
                        paddingRight: '0.75rem', 
                        paddingTop: '0.5rem',
                        paddingBottom: '0.5rem',
                        fontSize: '0.85rem',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        whiteSpace: 'normal',
                        textAlign: 'left'
                      }} 
                      title={referentiel?.text}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'brightness(0.85)'
                        e.currentTarget.style.transform = 'scale(1.02)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'brightness(1)'
                        e.currentTarget.style.transform = 'scale(1)'
                      }}
                    >
                      ▸ {referentiel?.text}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 px-3 text-center bg-body-secondary">
        <div className="container">
          <button 
            onClick={() => navigate('/pages/realisations')}
            className="btn btn-primary fw-semibold"
            style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
          >
            <i className="fa-solid fa-arrow-left me-2"></i>Retour aux réalisations
          </button>
        </div>
      </section>

      {/* Modales pour les outils */}
      <Modal isOpen={reactModal.isOpen} onClose={reactModal.close} title={getDefinitionByAcronym('React')?.fullName}>
        {getDefinitionByAcronym('React')?.description}
      </Modal>

      <Modal isOpen={viteModal.isOpen} onClose={viteModal.close} title={getDefinitionByAcronym('Vite')?.fullName}>
        {getDefinitionByAcronym('Vite')?.description}
      </Modal>

      <Modal isOpen={scssModal.isOpen} onClose={scssModal.close} title={getDefinitionByAcronym('SCSS')?.fullName}>
        {getDefinitionByAcronym('SCSS')?.description}
      </Modal>
    </>
  )
}
