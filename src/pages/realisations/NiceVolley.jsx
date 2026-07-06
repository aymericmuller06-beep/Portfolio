import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { realisations, allReferentiels, referentielCategories } from '../../data/realisations'
import { getDefinitionByAcronym } from '../../data/definitions'
import { getContrastColor } from '../../utils/contrast'
import ProofsCarousel from '../../components/ProofsCarousel'
import Modal from '../../components/Modal'
import { useModal } from '../../hooks/useModal'

const NVBimage = new URL('../../Img/NVB.webp', import.meta.url).href

export default function NiceVolley() {
  const navigate = useNavigate()
  
  // Modales pour les outils
  const crmModal = useModal()
  const weezeventModal = useModal()
  const brevoModal = useModal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const realisation = realisations.find(r => r.id === 1)
  
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

  const introduction = "L'équipe administrative du Club de Nice Volley-Ball a approché ma classe, IRIS, lors de ma première année afin de mettre au point un outil de CRM interne. Notre correspondant, Alexandre, est venu lors d'un de nos cours afin de nous expliquer ses besoins."
  
  const besoinsClients = [
    {
      titre: "Centraliser les données",
      description: "Le club utilise deux outils : Weezevent et Brevo. Notre CRM devait centraliser et synchroniser les informations de ces deux sources."
    },
    {
      titre: "Suivi des clients",
      description: "Le principal problème du club était que le suivi client se faisait très difficilement entre les événements à cause d'une utilisation trop manuelle."
    },
    {
      titre: "Facilité d'utilisation",
      description: "Notre CRM devait rendre les processus de démarche client bien plus simple et rapide pour le club."
    }
  ]

  const ceQuOnAfait = "L'équipe du club gérait de manière désorganisée les données des membres, événements et campagnes mailing sur plusieurs plateformes différentes. L'objectif était de créer une solution informatisée pour centraliser l'ensemble des informations, statistiques et contacts du club, améliorant ainsi l'efficacité globale. Pour cela, nous avons commencé par des interviews approfondies avec les responsables pour comprendre les workflows existants, puis nous avons modélisé une base de données relationnelle optimisée, et finalement intégré les différents outils existants en une interface unifiée."

  const ceQueJaiFailText = "En binôme, j'ai été responsable de la gestion globale du projet et de la coordination avec le client. J'ai développé l'interface ergonomique pour gérer les contacts, événements et campagnes mailing, créé un tableau de bord statistiques pour visualiser les indicateurs clés (nombre de membres, événements, taux de participation), et j'ai coordonné les 5 équipes thématiques pour assurer la cohérence du projet final."

  const preuves = [
    {
      title: "Gestion de projet",
      description: "En binôme, responsable de la gestion globale du projet et de la coordination avec le client.",
      image: "https://via.placeholder.com/600x400?text=Gestion+Projet"
    },
    {
      title: "Interface de gestion",
      description: "Développement d'une interface ergonomique pour gérer les contacts, événements et campagnes mailing.",
      image: "https://via.placeholder.com/600x400?text=Interface"
    },
    {
      title: "Tableau de bord statistiques",
      description: "Dashboard pour visualiser les indicateurs clés : nombre de membres, événements, taux de participation, etc.",
      image: "https://via.placeholder.com/600x400?text=Dashboard"
    },
    {
      title: "Gestion de 5 pôles",
      description: "Coordination de 5 équipes thématiques pour assurer la cohérence et la qualité du projet final.",
      image: "https://via.placeholder.com/600x400?text=P%C3%B4les"
    }
  ]

  return (
    <>
      <section className="py-4 px-3 text-center border-bottom hero-section hero-section--small">
        <div className="container-max-900">
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
        <div className="container-max-80">
          <h2 className="display-5 fw-bold text-center mb-3">Introduction</h2>
          
          {/* Texte + Image */}
          <div className="row g-3 align-items-start mb-3">
            <div className="col-lg-6">
              <p className="lead text-muted text-intro-sm">
                {introduction}
              </p>
            </div>
            
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm min-h-250 flex-center bg-light-subtle">
                <div className="card-body text-center p-3">
                  <img 
                    src={NVBimage}
                    alt="Club Nice Volley-Ball"
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Cartes en horizontal */}
          {besoinsClients && besoinsClients.length > 0 && (
            <div className="row g-3">
              {besoinsClients.map((besoin, idx) => (
                <div key={idx} className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm card-hover-lift">
                    <div className="card-body p-3">
                      <h5 className="card-title fw-semibold text-primary mb-2">
                        <i className="fa-solid fa-check-circle me-2"></i>{besoin.titre}
                      </h5>
                      <p className="card-text text-muted text-desc-sm-no-margin">
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
        <div className="container-max-80">
          <h2 className="display-5 fw-bold text-center mb-4">Ce qu'on a fait</h2>
          <p className="text-start text-body-justified">
            {ceQuOnAfait}
          </p>
        </div>
      </section>

      <section className="py-4 px-3 border-bottom">
        <div className="container-max-80">
          <h2 className="display-5 fw-bold text-center mb-4">Ce que j'ai fait</h2>
          <p className="text-start text-body-justified">
            {ceQueJaiFailText}
          </p>
        </div>
      </section>

      <section className="py-4 px-3 border-bottom bg-body-secondary">
        <div className="container">
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
          >
            <i className="fa-solid fa-arrow-left me-2"></i>Retour aux réalisations
          </button>
        </div>
      </section>

      {/* Modales pour les outils */}
      <Modal isOpen={crmModal.isOpen} onClose={crmModal.close} title={getDefinitionByAcronym('CRM')?.fullName}>
        {getDefinitionByAcronym('CRM')?.description}
      </Modal>

      <Modal isOpen={weezeventModal.isOpen} onClose={weezeventModal.close} title={getDefinitionByAcronym('Weezevent')?.fullName}>
        {getDefinitionByAcronym('Weezevent')?.description}
      </Modal>

      <Modal isOpen={brevoModal.isOpen} onClose={brevoModal.close} title={getDefinitionByAcronym('Brevo')?.fullName}>
        {getDefinitionByAcronym('Brevo')?.description}
      </Modal>
    </>
  )
}
