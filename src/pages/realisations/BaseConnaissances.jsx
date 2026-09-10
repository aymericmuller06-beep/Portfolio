import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { realisations, allReferentiels, referentielCategories } from '../../data/realisations'
import { getDefinitionByAcronym } from '../../data/definitions'
import { getContrastColor } from '../../utils/contrast'
import Carrousel from '../../components/Carrousel'
import Modal from '../../components/Modal'
import { useModal } from '../../hooks/useModal'
import { Link } from 'react-router-dom'

const Sharepointimage = new URL('../../Img/sharepoint.jpeg', import.meta.url).href



const cadragepreuve = "https://drive.google.com/file/d/1q6YluYEUDYaUQWhMmWP4u07c-i2xFgXk/view?usp=sharing"
const cadragepreuveimg = new URL('../../Img/Cadragewiki.png', import.meta.url).href

const procedurepreuve = "https://drive.google.com/file/d/13bbmP7Pfrs5tBZ9eD46xvcIHN_aDF37Q/view?usp=sharing"
const procedurepreuveimg = new URL('../../Img/plandactionwiki.png', import.meta.url).href

const wikisuivi = "https://docs.google.com/spreadsheets/d/1cvwP20C04irCfPr0ek8RUM24zCa1ckqfvB-9j_fFfak/edit?usp=drive_link"
const wikisuiviimg = new URL('../../Img/suiviwiki.png', import.meta.url).href

const synthese = "https://docs.google.com/document/d/1Hd5oQqlcYd3-LMCrMVBjls1me6XW_sReIxA2rtdl_mk/edit?usp=sharing"
const syntheseimg = new URL('../../Img/synthesepremierannee.png', import.meta.url).href



export default function BaseConnaissances() {
  const navigate = useNavigate()
  
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

  const preuves = [
    {
      type: 'pdf',
      title: "Document de cadrage du projet",
      description: "Document d'initialisation du projet, que j'ai présenté à mes superviseurs afin de valider la faisabilité de celui-ci.",
      image: cadragepreuveimg,
      link: cadragepreuve
    },
    {
      type: 'pdf',
      title: "Plan d'action du projet",
      description: "Procédure de migration pour harmoniser l'action sur tout le groupe en charge de celle-ci.",
      image: procedurepreuveimg,
      link: procedurepreuve
    },
    {
      title: "Suivi excel de l'avancée du projet",
      description: "Suivi de l'avancement nécessaire pour que tout les colaborateurs puissent avancer ensemble et de manière efficace.",
      image: wikisuiviimg,
      link: wikisuivi,
      linkText: "Voir le suivi"
    },
    {
      title: "Note de synthèse de la première année",
      description: "Cette note de synthèse est un document qui résume ma première année. De ce fait, ce projet y est aussi détaillé.",
      image: syntheseimg,
      link: synthese,
      linkText: "Voir la synthèse"
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

          <span className="badge bg-warning fw-normal mb-3 me-3" style={{color: getContrastColor('#ffc107')}}>
                <i className="fa-solid fa-exclamation me-2"></i>
                Projet en rapport avec la synthèse de première année dans 
                {' '}<Link to="/pages/mon_entreprise" className="modal-trigger-btn">"Mon entreprise"</Link>
          </span>
        </div>
      </section>

      <section className="py-4 px-3 border-bottom">
        <div className="container container-max-80">
          <h2 className="display-5 fw-bold text-center mb-4">Introduction</h2>

          <div className="row g-5 d-flex justify-content-center align-items-center mb-4">
            <div className="col-lg-3">
              <div className="card border-0 shadow-sm flex-center bg-light-subtle overflow-hidden">
                <div className="card-body text-center p-0">
                  <img 
                    src={Sharepointimage}
                    alt="Wiki SharePoint"
                    className="img-cover h-200"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="lead text-muted text-intro-sm"> En tant que membre du service HotLine, une de mes missions est de maintenir une base de connaissances sur nos clients. Cette base existe depuis le début de l'entreprise et n'a jamais été adaptée a une nouvelle utilisation par de nouveaux employés et même récemment par de l'IA. Je me suis donc proposé pour mener un projet de restructuration et d'amélioration de cette base afin de la rendre plus efficace et accessible.</p>
            </div> 
          </div>
        
          <div className="row g-4 mt-5 px-5 mb-5">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-semibold text-warning mb-3">
                    <i className="fa-solid fa-database me-2"></i>Centraliser les données
                  </h5>
                  <p className="card-text text-muted text-desc-sm">
                    Unifier les données venant de diverses sources (CRM de l'entreprise, ancien partage, documents internes, ...) et de différents formats (PDF, word, excel, .txt, ...) pour créer une base de connaissances unique et cohérente.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-semibold text-info mb-3">
                    <i className="fa-solid fa-align-left me-2"></i>Harmoniser les formats
                  </h5>
                  <p className="card-text text-muted text-desc-sm">
                    Faire en sorte que la procédure de recherche soit la plus fluide et la plus simple pour n'importe quelle informations recherchée.
                  </p>
                </div>
              </div>
            </div>
        
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-semibold text-purple mb-3">
                    <i className="fa-solid fa-gavel me-2"></i>Respecter l'exactitude des données
                  </h5>
                  <p className="card-text text-muted text-desc-sm">
                    Veiller à ce que les informations soient strictement correctes et à jour. Il fallait marcher à pas de fourmis pour être sûr de ne pas supprimer des informations importantes.
                  </p>
                </div>
              </div>
            </div>
        
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-semibold text-danger mb-3">
                    <i className="fa-solid fa-lock me-2"></i>Sécuriser les données
                  </h5>
                  <p className="card-text text-muted text-desc-sm">
                    L'ancienne base contenait des mots de passe en clair. Il fallait protéger ces données là, ainsi qu'archiver dans un endroit sécurisé les données non-migrées.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 px-3 border-bottom bg-body-secondary">
        <div className="container container-max-80">
          <div className="d-flex justify-content-center align-items-center mb-4 gap-3">
            <h2 className="display-5 fw-bold text-center mb-4">Ce que j'ai fait</h2>
            <span className="badge bg-info fw-normal mb-3 me-3" style={{color: getContrastColor('#0dcaf0')}}>
                <i className="fa-solid fa-info me-2"></i>Preuves en fin de la page
            </span>
          </div>

          <p className="text-center text-body-justified">
            Le projet étant de mon initiative, j'ai été en charge de l'organisation de toutes les étapes du projet. Mon superviseur validait les étapes et décisions que je prenais avant qu'on ne les mettent en place.
          </p>

          <div className="row g-5 mt-3 px-5 mb-5">
            <div className="col-lg-6 mt-4">
              <div className="card-dark border-0 h-100 shadow-sm bg-main p-3">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-chart-line text-primary icon-sm"></i>
                    <h5 className="card-title text-primary mb-0 ms-3">Analyse de l'existant</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Analyse de ce qu'il y avait en place, les différents formats, les différentes sources, etc... .
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="card-dark border-0 h-100 shadow-sm bg-main p-3">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-clipboard-list text-purple icon-sm"></i>
                    <h5 className="card-title text-purple mb-0 ms-3">Plan d'action</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Grâce à mon analyse et sous la supervision de mon tuteur de stage et du du responsable informatique, j'ai pu proposer un plan d'action pour la migration de la base de connaissances.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 mt-4">
              <div className="card-dark border-0 h-100 shadow-sm bg-main p-3">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-book text-info icon-sm"></i>
                    <h5 className="card-title text-info mb-0 ms-3">Documentation</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Création de documentation de procédés pour la migration et la maintenance durable de la base de connaissances.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="py-4 px-3 border-bottom">
        <div className="container container-max-80">
          <h2 className="display-5 fw-bold text-center mb-4">Bilan</h2>
          <p className="text-start text-body-justified">
            Le projet est quasiment arrivé à son objectif final. Aujourd'hui, le wiki est utilisé régulièrement par le service, il est bien plus efficace. Maintenant, le plus dur sera de maintenir cette base de connaissances à jour et de continuer à l'améliorer.
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
    </>
  )
}
