export const projectProofs = {
  // Réalisations Nice Volley Ball - ID 1
  niceVolley: {
    introduction: "Nous avons travaillé avec le Club Nice Volley-Ball, un club dynamique basé à Nice qui avait des besoins importants en gestion numérique. Ce projet s'est déroulé durant une semaine intensive en collaboration étroite avec l'équipe du club.",
    
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

export const getProjectProofs = (projectKey, section) => {
  if (!projectProofs[projectKey]) return []
  if (!section) return []
  return projectProofs[projectKey][section] || []
}
