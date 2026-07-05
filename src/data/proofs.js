// Structure d'une preuve:
// {
//   title: string - Titre de la preuve
//   description: string - Description courte
//   image: string - URL de l'image (webp)
//   link?: string - URL externe (Excel, Drive, etc.)
//   linkText?: string - Texte du bouton (défaut: "Voir en détail")
// }

export const projectProofs = {
  // Réalisations Nice Volley Ball - ID 1
  niceVolley: {
    pourQui: [
      {
        title: "Club Nice Volley-Ball",
        description: "Club de volley-ball basé à Nice avec une équipe dynamique et des besoins en gestion numérique.",
        image: "https://via.placeholder.com/600x400?text=Club+Nice+Volley",
        link: "https://nice-volleyball.fr",
        linkText: "Visiter le site du club"
      },
      {
        title: "Contexte : Semaine intensive",
        description: "Projet réalisé durant une semaine intensive en collaboration avec l'équipe du club.",
        image: "https://via.placeholder.com/600x400?text=Semaine+Intensive"
      }
    ],
    pourQuoi: [
      {
        title: "Problème : Gestion manuelle",
        description: "Les données des membres, événements et mailing étaient gérées de manière désorganisée et non centralisée.",
        image: "https://via.placeholder.com/600x400?text=Probl%C3%A8me+Gestion"
      },
      {
        title: "Besoin : CRM interne",
        description: "Nécessité d'une solution informatisée pour centraliser les contacts, événements et statistiques du club.",
        image: "https://via.placeholder.com/600x400?text=Besoin+CRM"
      },
      {
        title: "Objectif : Productivité",
        description: "Améliorer l'efficacité de l'équipe en réduisant les tâches manuelles et en facilitant l'accès aux données.",
        image: "https://via.placeholder.com/600x400?text=Productivit%C3%A9"
      }
    ],
    comment: [
      {
        title: "Analyse des besoins",
        description: "Interviews avec les responsables du club pour bien comprendre les workflows et requirements spécifiques.",
        image: "https://via.placeholder.com/600x400?text=Analyse"
      },
      {
        title: "Design de la base de données",
        description: "Modélisation relationnelle pour optimiser le stockage et les requêtes (membres, événements, statistiques).",
        image: "https://via.placeholder.com/600x400?text=Design+BD"
      },
      {
        title: "Centralisation des outils",
        description: "Intégration et consolidation des différents outils existants en une seule interface unifiée.",
        image: "https://via.placeholder.com/600x400?text=Centralisation"
      }
    ],
    ceQueJaiFait: [
      {
        title: "Gestion de projet",
        description: "En binôme, responsable de la gestion globale du projet et de la coordination avec le client.",
        image: "https://via.placeholder.com/600x400?text=Gestion+Projet"
      },
      {
        title: "Interface de gestion",
        description: "Développement d'une interface ergonomique pour gérer les contacts, événements et mailing campaigns.",
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
    pourQui: [
      {
        title: "Azurinfo - Équipe IT",
        description: "L'équipe technique d'Azurinfo, mon entreprise d'alternance, avait besoin de centraliser sa documentation.",
        image: "https://via.placeholder.com/600x400?text=Azurinfo+IT"
      },
      {
        title: "Public interne",
        description: "Toute l'équipe technique a accès à cette base de connaissances pour améliorer sa productivité.",
        image: "https://via.placeholder.com/600x400?text=%C3%89quipe+Interne"
      }
    ],
    pourQuoi: [
      {
        title: "Documentation éparpillée",
        description: "Les procédures et normes étaient stockées sur plusieurs plateformes sans cohérence ni organisation.",
        image: "https://via.placeholder.com/600x400?text=Documents+%C3%89parpill%C3%A9s"
      },
      {
        title: "Besoin de standardisation",
        description: "Unifier les formats, les processus et les standards de documentation pour tous les types de ressources.",
        image: "https://via.placeholder.com/600x400?text=Standardisation"
      },
      {
        title: "Accessibilité et sécurité",
        description: "Rendre la base sécurisée avec des droits d'accès appropriés tout en restant facilement accessible.",
        image: "https://via.placeholder.com/600x400?text=S%C3%A9curit%C3%A9"
      }
    ],
    comment: [
      {
        title: "Audit initial",
        description: "Inventaire complet de toutes les ressources documentaires existantes et évaluation de leur état.",
        image: "https://via.placeholder.com/600x400?text=Audit"
      },
      {
        title: "Architecture logique",
        description: "Création d'une hiérarchie claire et intuitive : catégories, sous-catégories et taxonomie cohérente.",
        image: "https://via.placeholder.com/600x400?text=Architecture"
      },
      {
        title: "Application des normes",
        description: "Mise en conformité avec les standards du secteur (ITIL, ISO 27001) pour la gestion de la documentation.",
        image: "https://via.placeholder.com/600x400?text=Normes+ITIL"
      }
    ],
    ceQueJaiFait: [
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
    pourQui: [
      {
        title: "Développeur en alternance",
        description: "Créer un portfolio professionnel pour showcaser mes projets, compétences et parcours en développement.",
        image: "https://via.placeholder.com/600x400?text=Portfolio+Dev"
      },
      {
        title: "Audience : Recruteurs & Clients",
        description: "Destiné aux potentiels employeurs et clients pour démontrer mes capacités techniques et créatives.",
        image: "https://via.placeholder.com/600x400?text=Audience"
      }
    ],
    pourQuoi: [
      {
        title: "Se démarquer sur le marché",
        description: "Avoir une présence en ligne professionnelle et complète pour se distinguer des autres candidats.",
        image: "https://via.placeholder.com/600x400?text=D%C3%A9marquer"
      },
      {
        title: "Montrer les compétences réelles",
        description: "Démontrer les capacités techniques (React, Vite, SCSS) par des exemples concrets et des réalisations.",
        image: "https://via.placeholder.com/600x400?text=Comp%C3%A9tences"
      },
      {
        title: "Partager l'expérience",
        description: "Raconter les défis relevés, les solutions apportées et les apprentissages acquis sur chaque projet.",
        image: "https://via.placeholder.com/600x400?text=Exp%C3%A9rience"
      }
    ],
    comment: [
      {
        title: "Technologies modernes",
        description: "Utilisation de React 18, Vite pour le build, et SCSS pour un code maintenable et performant.",
        image: "https://via.placeholder.com/600x400?text=Technologies"
      },
      {
        title: "Design responsive",
        description: "Adaptation parfaite sur tous les appareils (mobile, tablet, desktop) avec flexbox et media queries.",
        image: "https://via.placeholder.com/600x400?text=Responsive"
      },
      {
        title: "Thème clair/sombre",
        description: "Implémentation d'un système de thèmes avec CSS variables pour une meilleure expérience utilisateur.",
        image: "https://via.placeholder.com/600x400?text=Dark+Mode"
      }
    ],
    ceQueJaiFait: [
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

export const getProjectProofs = (projectKey, section) => {
  if (!projectProofs[projectKey]) return []
  if (!section) return []
  return projectProofs[projectKey][section] || []
}
