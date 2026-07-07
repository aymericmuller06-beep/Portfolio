import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { realisations, allReferentiels, referentielCategories } from '../../data/realisations'
import { getDefinitionByAcronym } from '../../data/definitions'
import { getContrastColor } from '../../utils/contrast'
import Carrousel from '../../components/Carrousel'
import Modal from '../../components/Modal'
import { useModal } from '../../hooks/useModal'

export default function BaseConnaissances() {
  const navigate = useNavigate()
  
  // Modales pour les outils
  const itilModal = useModal()
  const isoModal = useModal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const realisation = realisations.find(r => r.id === 2)
  
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

  const besoinsClients = [
    {
      titre: "Centraliser la documentation",
      description: "Réunir toutes les procédures, normes et ressources techniques dispersées en un seul endroit accessible."
    },
    {
      titre: "Harmoniser les formats",
      description: "Standardiser les documents existants pour une meilleure cohérence et lisibilité."
    },
    {
      titre: "Respecter les standards",
      description: "Mettre en conformité avec ITIL et ISO 27001 pour garantir la qualité et la sécurité."
    },
    {
      titre: "Sécuriser l'accès",
      description: "Mettre en place une gestion des droits appropriée pour contrôler l'accès aux informations sensibles."
    }
  ]

  const preuves = [
    {
      title: "Classement et organisation",
      description: "Restructuration complète et tri de toutes les ressources selon la nouvelle hiérarchie définie.",
      image: "https://via.placeholder.com/600x400?text=Organisation"
    },
    {
      title: "Normalisation des formats",
      description: "Harmonisation des formats de documents et création de templates standardisés pour les nouvelles ressources.",
      image: "https://via.placeholder.com/600x400?text=Formats"
    },
    {
      title: "Tests d'accessibilité",
      description: "Vérification que tous les utilisateurs trouvent facilement les informations dont ils ont besoin.",
      image: "https://via.placeholder.com/600x400?text=Tests"
    },
    {
      title: "Documentation de la base",
      description: "Création d'un guide utilisateur et d'une documentation de maintenance pour la pérennité du projet.",
      image: "https://via.placeholder.com/600x400?text=Guide"
    }
  ]

  return (
    <>
      <section className="py-4 px-3 text-center border-bottom hero-section hero-section--small">
        <div className="container-max-80">
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
        <div className="container container-max-80">
          <h2 className="display-5 fw-bold text-center mb-4">Introduction</h2>
          <p className="lead text-center text-muted text-intro">
            L'équipe IT d'Azurinfo, mon entreprise d'alternance, avait un besoin critique de centraliser sa documentation technique. Les procédures et normes étaient éparpillées sur plusieurs plateformes, créant un manque de cohérence et rendant difficile l'accès aux informations.
          </p>
          
          {besoinsClients && besoinsClients.length > 0 && (
            <div className="row g-4 mt-5">
              {besoinsClients.map((besoin, idx) => (
                <div key={idx} className="col-md-6 col-lg-6">
                  <div className="card h-100 border-0 shadow-sm transition-smooth card-hover-lift">
                    <div className="card-body">
                      <h5 className="card-title fw-semibold text-primary mb-3">
                        <i className="fa-solid fa-check-circle me-2"></i>{besoin.titre}
                      </h5>
                      <p className="card-text text-muted text-desc-sm">
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
        <div className="container container-max-80">
          <h2 className="display-5 fw-bold text-center mb-4">Ce qu'on a fait</h2>
          <p className="text-start text-body-justified">
            Le projet a commencé par un audit complet de toutes les ressources documentaires existantes pour évaluer leur état et pertinence. Nous avons ensuite créé une architecture logique claire avec une hiérarchie intuitive de catégories et sous-catégories. L'objectif était d'unifier les formats, standardiser les processus et les mettre en conformité avec les standards du secteur (ITIL, ISO 27001), tout en assurant une base sécurisée avec des droits d'accès appropriés.
          </p>
        </div>
      </section>

      <section className="py-4 px-3 border-bottom">
        <div className="container container-max-80">
          <h2 className="display-5 fw-bold text-center mb-4">Ce que j'ai fait</h2>
          <p className="text-start text-body-justified">
            J'ai mené la restructuration complète et le tri de toutes les ressources selon la nouvelle hiérarchie définie. J'ai harmonisé les formats de documents et créé des templates standardisés pour les nouvelles ressources. J'ai ensuite effectué les tests d'accessibilité pour vérifier que tous les utilisateurs trouvent facilement les informations dont ils ont besoin, et j'ai créé la documentation complète de la base avec un guide utilisateur et une documentation de maintenance.
          </p>
        </div>
      </section>

      <section className="py-4 px-3 border-bottom bg-body-secondary">
        <div className="container">
          <h2 className="display-5 fw-bold text-center mb-5">Preuves & détails</h2>
          {preuves && preuves.length > 0 ? (
            <Carrousel items={preuves} />
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
                      className="badge cursor-pointer whitespace-nowrap transition-smooth" 
                      style={{ 
                        backgroundColor: bgColor, 
                        color: textColor, 
                        borderRadius: '20px', 
                        paddingLeft: '0.75rem', 
                        paddingRight: '0.75rem', 
                        paddingTop: '0.5rem',
                        paddingBottom: '0.5rem',
                        fontSize: '0.85rem',
                        border: 'none'
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
      <Modal isOpen={itilModal.isOpen} onClose={itilModal.close} title={getDefinitionByAcronym('ITIL')?.fullName}>
        {getDefinitionByAcronym('ITIL')?.description}
      </Modal>

      <Modal isOpen={isoModal.isOpen} onClose={isoModal.close} title={getDefinitionByAcronym('ISO')?.fullName}>
        {getDefinitionByAcronym('ISO')?.description}
      </Modal>
    </>
  )
}
