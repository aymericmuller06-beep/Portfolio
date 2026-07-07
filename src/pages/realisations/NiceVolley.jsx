import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { realisations, allReferentiels, referentielCategories } from '../../data/realisations'
import { getDefinitionByAcronym } from '../../data/definitions'
import { getContrastColor } from '../../utils/contrast'
import Carrousel from '../../components/Carrousel'
import GalerieModale from '../../components/GalerieModale'
import Modal from '../../components/Modal'
import { useModal } from '../../hooks/useModal'

const NVBimage = new URL('../../Img/NVB.webp', import.meta.url).href

const crmPdf = new URL('../../Img/CRM Nice volleyball - Gestion de projet IRIS.pdf', import.meta.url).href
const crmPreview = new URL('../../Img/Gestion de proj CRM NICE.png', import.meta.url).href

const RACI = 'https://docs.google.com/spreadsheets/d/18OlagBLWm_W4wWc6CsgUYbAXz637wBlW4IR48dBREc0/edit?usp=sharing'
const RACIPreview = new URL('../../Img/Matrice RACI.png', import.meta.url).href

const login = new URL('../../Img/Screenshot CRM NVB/login.png', import.meta.url).href
const contacts = new URL('../../Img/Screenshot CRM NVB/contacts.png', import.meta.url).href
const dashboard = new URL('../../Img/Screenshot CRM NVB/dashboard.png', import.meta.url).href
const events = new URL('../../Img/Screenshot CRM NVB/events.png', import.meta.url).href
const stats = new URL('../../Img/Screenshot CRM NVB/stats.png', import.meta.url).href



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

  const besoinsClients = [
    {
      titre: "Centraliser les données",
      description: "Le club utilise deux outils : Weezevent et Brevo. Notre CRM devait centraliser et synchroniser les informations de ces deux sources.",
      icon: "fa-database",
      color: "text-primary"
    },
    {
      titre: "Suivi des clients",
      description: "Le principal problème du club était que le suivi client se faisait très difficilement entre les événements à cause d'une utilisation trop manuelle.",
      icon: "fa-users",
      color: "text-warning"
    },
    {
      titre: "Facilité d'utilisation",
      description: "Notre CRM devait rendre les processus de démarche client bien plus simple et rapide pour le club.",
      icon: "fa-hand-holding-heart",
      color: "text-info"
    }
  ]

  const screenshotsGalerie = [
    {
      titre: "Login",
      url: login
    },
    {
      titre: "Dashboard",
      url: dashboard
    },
    {
      titre: "Événements",
      url: events
    },
    {
      titre: "Statistiques",
      url: stats
    },
    {
      titre: "Gestion des contacts",
      url: contacts
    }
  ]

  const preuves = [
    {
      type: 'pdf',
      title: "Documentation de l'équipe Gestion de projet",
      description: "Document complet regroupant tout les outils et travail effectué le long de la semaine par l'équipe.",
      image: crmPreview,
      link: crmPdf
    },
    {
      title: "Matrice RACI",
      description: "Matrice de responsabilités définissant les rôles et responsabilités de chaque pôle dans le projet pour chaque tâche.",
      image: RACIPreview,
      link: RACI,
      linkText: "Voir la RACI"
    },
    {
      title: "Gestion de projet",
      description: "En binôme, responsable de la gestion globale du projet et de la coordination avec le client.",
      image: "https://via.placeholder.com/600x400?text=Gestion+Projet"
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
          <div className="row g-3 d-flex justify-content-center align-items-center mb-4">
            <div className="col-lg-6">
              <p className="lead text-muted text-intro-sm">
                L'équipe administrative du Club de Nice Volley-Ball a approché ma classe, IRIS, lors de ma première année afin de mettre au point un outil de CRM interne. Notre correspondant, Alexandre, est venu lors d'un de nos cours afin de nous expliquer ses besoins.
              </p>
            </div>
            
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-300 flex-center bg-light-subtle overflow-hidden">
                <div className="card-body text-center p-0">
                  <img 
                    src={NVBimage}
                    alt="Club Nice Volley-Ball"
                    className="img-fill"
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
                      <h5 className={`card-title fw-semibold ${besoin.color} mb-2`}>
                        <i className={`fa-solid ${besoin.icon} me-2`}></i>{besoin.titre}
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
          <p className="text-center text-body-justified mb-2">
            Notre travail ne consistait pas à remplacer les outils existants, mais à créer un layer intérmédiaire pour centraliser et faciliter l'accès aux données. De ce fait, l'outil récupère bien plus que ce qu'il n'envoie.
          </p>
          <p className="text-start text-muted text-body-justified mb-4">
            Voici les images du CRM au bout de la semaine intensive :
          </p>
          
          <GalerieModale images={screenshotsGalerie} />

          <div className="row g-4 mt-3">
            <div className="col-lg-6">
              <div className="card-dark border-0 h-100 shadow-sm bg-main p-4">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-chart-line text-warning icon-sm"></i>
                    <h5 className="card-title text-warning mb-0 ms-3">Affichages de statistiques</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Statistiques venue par API depuis Weezevent et Brevo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="card-dark border-0 h-100 shadow-sm bg-main p-4">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-envelope text-info icon-sm"></i>
                    <h5 className="card-title text-info mb-0 ms-3">Création de segments</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Possibilité de récupérer les nouveaux contacts du dernier événement et de les ajouter à un segment Brevo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="card-dark border-0 h-100 shadow-sm bg-main p-4">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-users text-info icon-sm"></i>
                    <h5 className="card-title text-info mb-0 ms-3">Visualisation des contacts</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Possibilité de visualiser tous les contacts récupérés.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="card-dark border-0 h-100 shadow-sm bg-main p-4">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-lock text-warning icon-sm"></i>
                    <h5 className="card-title text-warning mb-0 ms-3">Connexion simple à mot de passe</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Une connexion simple avec un mot de passe pour ne pas laisser l'accès à tous, mais seulement à l'équipe administrative du club.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="card-dark border-0 h-100 shadow-sm bg-main p-4">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-volleyball text-warning icon-sm"></i>
                    <h5 className="card-title text-warning mb-0 ms-3">Identité du club</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Le site garde l'identité forte du club niçois en utilisant le logo et les couleurs du club.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="card-dark border-0 h-100 shadow-sm bg-main p-4">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-sync text-info icon-sm"></i>
                    <h5 className="card-title text-info mb-0 ms-3">Boutons de synchronisation</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Des boutons de synchronisation permettent de mettre à jour les informations en temps réel.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="py-4 px-3 border-bottom">
        <div className="container-max-80 mb-5">
          <h2 className="display-5 fw-bold text-center mb-4">Ce que j'ai fait</h2>
          <p className="text-center text-body-justified">
            En binôme, j'ai été responsable de la gestion globale du projet et de la coordination avec le client. Nous avons coordonné les 5 équipes thématiques par le biais d'outils tels que la matrice RACI, le Kanban, le MVP, etc... pour assurer la cohérence du projet final.
          </p>

           <div className="row g-5 mt-3 px-5 mb-5">
            <div className="col-lg-6 mt-4">
              <div className="card-dark border-0 h-100 shadow-sm bg-main p-2">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-chart-line text-primary icon-sm"></i>
                    <h5 className="card-title text-primary mb-0 ms-3">Pôle RGPD</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Pole en charge de la conformité du projet avec le RGPD.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="card-dark border-0 h-100 shadow-sm bg-main p-2">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-envelope text-danger icon-sm"></i>
                    <h5 className="card-title text-danger mb-0 ms-3">Pôle Merise / conception BDD</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Pôle en charge de la conception et de la gestion de la base de données.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="card-dark border-0 h-100 shadow-sm bg-main p-2">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-users text-info icon-sm"></i>
                    <h5 className="card-title text-info mb-0 ms-3">Pôle Maquettage</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Pôle en charge de la création et de la gestion des maquettes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="card-dark border-0 h-100 shadow-sm bg-main p-2">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-lock text-warning icon-sm"></i>
                    <h5 className="card-title text-warning mb-0 ms-3">Pôle Frontend</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Pôle en charge du développement et de la gestion de l'interface utilisateur.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="card-dark border-0 h-100 shadow-sm bg-main p-2">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-volleyball text-purple icon-sm"></i>
                    <h5 className="card-title text-purple mb-0 ms-3">Pôle Backend</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Pôle en charge du développement et de la gestion du serveur et des bases de données.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="card-dark border-0 h-100 shadow-sm bg-main p-2">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-sync text-pink icon-sm"></i>
                    <h5 className="card-title text-pink mb-0 ms-3">Pole SISR / Déploiement</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Pôle en charge du déploiement et de la gestion des infrastructures réseau et systèmes.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <p className="text-center text-body-justified text-primary fw-bold mb-5">
            A la fin du projet, nous avons pris la responsabilité de présenter l'entierté du rendu au client lors d'une présentation finale.
          </p>
        </div>

        <div className="container">
          <p className="text-start text-muted text-body-justified">
            Voici, ci-dessous, les réalisations de mon binôme.
          </p>
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

      <section className="py-4 px-3 border-bottom bg-body-secondary">
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

      <section className="py-4 px-3 text-center">
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
