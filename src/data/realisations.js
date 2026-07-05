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

export const realisations = [
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
    title: 'Refonte d\'une base de connaissances technique',
    shortDescription: 'Restructuration complète de la base de connaissances interne de mon entreprise.',
    category: 'Gérer le patrimoine informatique',
    icon: 'fa-database',
    referentiels: [1, 2, 6],
    date: '2026',
    status: 'Actif'
  },
  {
    id: 3,
    title: 'Mon Portfolio',
    shortDescription: 'Ce présent portfolio qui présente les différents aspects de ma formation et de mes compétences.',
    category: 'Organiser son développement professionnel',
    icon: 'fa-laptop',
    referentiels: [19, 20, 21],
    date: '2026-2027',
    status: 'Actif'
  }
]

// Détails des réalisations avec preuves
export const detailsRealisations = {
  // Réalisations Nice Volley Ball - ID 1
  niceVolley: {
    introduction: "L'équipe administrative du Club de Nice Volley-Ball a approché ma classe, IRIS, lors de ma première année afin de mettre au point un outil de CRM interne. Notre correspondant, Alexandre, est venu lors d'un de nos cours afin de nous expliquer ses besoins.",
    
    besoinsClients: [
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
      },
      {
        titre: "Faciliter la communication",
        description: "Intégrer les outils de mailing et de communication pour atteindre facilement les membres."
      }
    ],
    
    ceQuOnAfait: "L'équipe du club gérait de manière désorganisée les données des membres, événements et campagnes mailing sur plusieurs plateformes différentes. L'objectif était de créer une solution informatisée pour centraliser l'ensemble des informations, statistiques et contacts du club, améliorant ainsi l'efficacité globale. Pour cela, nous avons commencé par des interviews approfondies avec les responsables pour comprendre les workflows existants, puis nous avons modélisé une base de données relationnelle optimisée, et finalement intégré les différents outils existants en une interface unifiée.",
    
    ceQueJaiFailText: "En binôme, j'ai été responsable de la gestion globale du projet et de la coordination avec le client. J'ai développé l'interface ergonomique pour gérer les contacts, événements et campagnes mailing, créé un tableau de bord statistiques pour visualiser les indicateurs clés (nombre de membres, événements, taux de participation), et j'ai coordonné les 5 équipes thématiques pour assurer la cohérence du projet final.",
    
    preuves: [
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
  },

  // Refonte Base de Connaissances - ID 2
  baseConnaissances: {
    introduction: "L'équipe IT d'Azurinfo, mon entreprise d'alternance, avait un besoin critique de centraliser sa documentation technique. Les procédures et normes étaient éparpillées sur plusieurs plateformes, créant un manque de cohérence et rendant difficile l'accès aux informations.",
    
    ceQuOnAfait: "Le projet a commencé par un audit complet de toutes les ressources documentaires existantes pour évaluer leur état et pertinence. Nous avons ensuite créé une architecture logique claire avec une hiérarchie intuitive de catégories et sous-catégories. L'objectif était d'unifier les formats, standardiser les processus et les mettre en conformité avec les standards du secteur (ITIL, ISO 27001), tout en assurant une base sécurisée avec des droits d'accès appropriés.",
    
    ceQueJaiFailText: "J'ai mené la restructuration complète et le tri de toutes les ressources selon la nouvelle hiérarchie définie. J'ai harmonisé les formats de documents et créé des templates standardisés pour les nouvelles ressources. J'ai ensuite effectué les tests d'accessibilité pour vérifier que tous les utilisateurs trouvent facilement les informations dont ils ont besoin, et j'ai créé la documentation complète de la base avec un guide utilisateur et une documentation de maintenance.",
    
    preuves: [
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
  },

  // Portfolio - ID 3
  portfolio: {
    introduction: "Créer un portfolio professionnel pour showcaser mes projets, compétences et parcours en développement. Ce portfolio est destiné aux potentiels employeurs et clients pour démontrer mes capacités techniques et créatives.",
    
    ceQuOnAfait: "L'objectif était d'avoir une présence en ligne professionnelle et complète pour se distinguer des autres candidats, tout en démontrant les capacités techniques réelles (React, Vite, SCSS) par des exemples concrets. Nous avons choisi d'utiliser des technologies modernes pour montrer mon expertise, implémenté un design responsive pour tous les appareils, et créé un système de thèmes clair/sombre avec CSS variables pour une meilleure expérience utilisateur.",
    
    ceQueJaiFailText: "J'ai conçu et développé une page d'accueil professionnelle avec une hero section captivante, mon CV et des appels à l'action. J'ai créé une galerie interactive des réalisations avec descriptions complètes et liens vers les sources. J'ai développé les pages de détail pour chaque projet avec contexte, approche, et carrousels de preuves visuelles, et enfin j'ai créé des pages d'information complémentaires (glossaire, technologies, présentation de l'entreprise).",
    
    preuves: [
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
  }
}
