export const categories = {
  'Développement Web': {
    color: '#2d6a4f',
    lightColor: 'rgba(45, 106, 79, 0.1)',
    label: 'Développement Web'
  },
  'Projet en équipe': {
    color: '#1abc9c',
    lightColor: 'rgba(26, 188, 156, 0.1)',
    label: 'Projet en équipe'
  },
  'Infrastructure IT': {
    color: '#9b59b6',
    lightColor: 'rgba(155, 89, 182, 0.1)',
    label: 'Infrastructure IT'
  },
  'Système et Réseaux': {
    color: '#3498db',
    lightColor: 'rgba(52, 152, 219, 0.1)',
    label: 'Système et Réseaux'
  }
}

// Catégories de referentiels avec couleurs standards Excel
export const referentielCategories = {
  'Gérer le patrimoine informatique': {
    color: '#7030A0',
    lightColor: 'rgba(112, 48, 160, 0.1)',
    label: 'Gérer le patrimoine informatique'
  },
  'Répondre aux incidents et aux demandes': {
    color: '#C00000',
    lightColor: 'rgba(192, 0, 0, 0.1)',
    label: 'Répondre aux incidents et aux demandes'
  },
  'Développer la présence en ligne': {
    color: '#0070C0',
    lightColor: 'rgba(0, 112, 192, 0.1)',
    label: 'Développer la présence en ligne'
  },
  'Travailler en mode projet': {
    color: '#FFC000',
    lightColor: 'rgba(255, 192, 0, 0.1)',
    label: 'Travailler en mode projet'
  },
  'Mettre à disposition des utilisateurs': {
    color: '#70AD47',
    lightColor: 'rgba(112, 173, 71, 0.1)',
    label: 'Mettre à disposition des utilisateurs'
  },
  'Organiser son développement professionnel': {
    color: '#FFFF00',
    lightColor: 'rgba(255, 255, 0, 0.1)',
    label: 'Organiser son développement professionnel'
  }
}

// Tous les referentiels disponibles
export const allReferentiels = [
  { id: 1, text: 'Recenser et identifier les ressources numériques', category: 'Gérer le patrimoine informatique' },
  { id: 2, text: 'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique', category: 'Gérer le patrimoine informatique' },
  { id: 3, text: 'Mettre en place et vérifier les niveaux d\'habilitation associés à un service', category: 'Gérer le patrimoine informatique' },
  { id: 4, text: 'Vérifier les conditions de la continuité d\'un service informatique', category: 'Gérer le patrimoine informatique' },
  { id: 5, text: 'Gérer des sauvegardes', category: 'Gérer le patrimoine informatique' },
  { id: 6, text: 'Vérifier le respect des règles d\'utilisation des ressources numériques', category: 'Gérer le patrimoine informatique' },
  { id: 7, text: 'Collecter, suivre et orienter des demandes', category: 'Répondre aux incidents et aux demandes' },
  { id: 8, text: 'Traiter des demandes concernant les services réseau et système, applicatifs', category: 'Répondre aux incidents et aux demandes' },
  { id: 9, text: 'Traiter des demandes concernant les applications', category: 'Répondre aux incidents et aux demandes' },
  { id: 10, text: 'Participer à la valorisation de l\'image de l\'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques', category: 'Développer la présence en ligne' },
  { id: 11, text: 'Référencer les services en ligne de l\'organisation et mesurer leur visibilité', category: 'Développer la présence en ligne' },
  { id: 12, text: 'Participer à l\'évolution d\'un site Web exploitant les données de l\'organisation', category: 'Développer la présence en ligne' },
  { id: 13, text: 'Analyser les objectifs et les modalités d\'organisation d\'un projet', category: 'Travailler en mode projet' },
  { id: 14, text: 'Planifier les activités', category: 'Travailler en mode projet' },
  { id: 15, text: 'Évaluer les indicateurs de suivi d\'un projet et analyser les écarts', category: 'Travailler en mode projet' },
  { id: 16, text: 'Réaliser les tests d\'intégration et d\'acceptation d\'un service', category: 'Travailler en mode projet' },
  { id: 17, text: 'Déployer un service', category: 'Travailler en mode projet' },
  { id: 18, text: 'Accompagner les utilisateurs dans la mise en place d\'un service', category: 'Mettre à disposition des utilisateurs' },
  { id: 19, text: 'Mettre en place son environnement d\'apprentissage personnel', category: 'Organiser son développement professionnel' },
  { id: 20, text: 'Mettre en œuvre des outils et stratégies de veille informationnelle', category: 'Organiser son développement professionnel' },
  { id: 21, text: 'Gérer son identité professionnelle', category: 'Organiser son développement professionnel' },
  { id: 22, text: 'Développer son projet professionnel', category: 'Organiser son développement professionnel' }
]

export const realizations = [
  {
    id: 1,
    title: 'CRM pour Nice Volley Ball Club',
    shortDescription: 'Un système de gestion interne pour le club de volley-ball de Nice.',
    category: 'Travailler en mode projet',
    icon: 'fa-volleyball',
    referentiels: [13, 14],
    date: '2026',
    status: 'Actif'
  },
  {
    id: 2,
    title: 'Mon Portfolio',
    shortDescription: 'Ce présent portfolio qui présente les différents aspects de ma formation et de mes compétences.',
    category: 'Organiser son développement professionnel',
    icon: 'fa-laptop',
    referentiels: [19, 20, 21],
    date: '2026-2027',
    status: 'Actif'
  },
  {
    id: 3,
    title: 'Refonte, structuration et sécurisation de la base de connaissances technique',
    shortDescription: 'Restructuration complète de la base de connaissances interne de l\'entreprise, incluant l\'identification des ressources, l\'application des normes et standards, et la vérification des règles d\'utilisation.',
    category: 'Gérer le patrimoine informatique',
    icon: 'fa-database',
    referentiels: [1, 2, 6],
    date: '2026',
    status: 'Actif'
  }
]
