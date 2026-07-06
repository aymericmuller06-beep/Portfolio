# Portfolio – Aymeric Muller

Portfolio minimaliste et performant. Alternant en BTS SIO option SISR.

## 🚀 Lancer le projet

```bash
npm install                  # Installe les dépendances
npm run dev                  # Démarre en local (http://localhost:5174)
npm run build                # Génère le dossier dist/ pour la production
npm run preview              # Prévisualise le build de production
```

## 📁 Structure du projet

```
src/
├── main.jsx                 # Point d'entrée React
├── App.jsx                  # Routage React Router
├── config.js                # Configuration (email, réseaux sociaux, entreprise)
├── components/
│   ├── Header.jsx           # Navigation + toggle thème
│   ├── Footer.jsx           # Pied de page
│   ├── Modal.jsx            # Modale réutilisable
│   ├── Carrousel.jsx        # Carrousel de preuves
│   └── GalerieModale.jsx    # Galerie avec diaporama
├── pages/
│   ├── Home.jsx             # Accueil + À propos
│   ├── Realisations.jsx     # Liste des réalisations
│   ├── RealisationDetail.jsx # Détail d'une réalisation
│   ├── CV.jsx               # Page CV
│   ├── Annuaire.jsx         # Glossaire des acronymes
│   ├── MonEntreprise.jsx    # Info entreprise
│   ├── TableauSynthese.jsx  # Tableau de synthèse
│   ├── Veilletech.jsx       # Veille technologique
│   └── realisations/        # Détails des réalisations
│       ├── BaseConnaissances.jsx
│       ├── NiceVolley.jsx
│       └── Portfolio.jsx
├── data/
│   ├── definitions.js       # Acronymes et définitions
│   ├── realisations.js      # Données des réalisations
│   └── proofs.js            # Preuves et screenshots
├── hooks/
│   └── useModal.js          # Hook custom pour les modales
├── scripts/
│   ├── back-to-top.js       # Bouton retour haut
│   ├── topbar.js            # Navigation collapse au scroll
│   ├── loader.js            # Loader initial
│   └── page-transition.js   # Transitions de page
├── styles/
│   ├── main.scss            # Agrégation des styles
│   ├── _variables.scss      # Couleurs et espacements
│   ├── _reset.scss          # Styles de base
│   ├── _topbar.scss         # Barre de navigation
│   ├── _pages.scss          # Classes réutilisables
│   ├── _cards.scss          # Composant card
│   ├── _buttons.scss        # Composant button
│   ├── _loader.scss         # Loader animé
│   ├── _modal.scss          # Modale
│   ├── _responsive.scss     # Media queries
│   └── _timeline.scss       # Timeline
├── utils/
│   └── contrast.js          # Contraste couleur pour l'accessibilité
└── Img/                     # Images et assets

index.html                   # Fichier HTML
package.json                 # Dépendances
vite.config.js               # Configuration Vite
```

## 🛠 Stack technique

- **Vite 8** – Bundler ultra-rapide
- **React 19** – Framework UI
- **React Router 7** – Navigation SPA
- **React PDF** – Affichage PDF
- **Bootstrap 5** – Grille et composants
- **SCSS** – Styles modulaires
- **Font Awesome** – Icônes

## ✨ Fonctionnalités

- Navigation fluide React Router
- Mode clair/sombre avec localStorage
- Design minimaliste et responsive
- Thème vert personnalisé
- Modales pour les définitions
- Glossaire des acronymes
- Carousel de preuves
- Retour haut avec scroll intelligent
- Topbar qui se cache au scroll
- Code épuré et commentaires minimaux
- Build optimisé Vite

## 📍 Routes disponibles

| Route | Page |
|-------|------|
| `/` | Accueil |
| `/pages/realisations` | Réalisations |
| `/pages/realisations/:id` | Détail d'une réalisation |
| `/pages/cv` | CV |
| `/pages/mon_entreprise` | Entreprise Azurinfo |
| `/pages/veille_technologique` | Veille technologique |
| `/pages/tableau_synthese` | Tableau de synthèse |
| `/pages/annuaire` | Glossaire acronymes |

## 🎨 Thème personnalisé

Définies dans `src/styles/_variables.scss`:

**Light Theme:**
- Accent: `#2d6a4f` (vert)
- Texte: `#1a1a1a`
- Fond: `#f8f8f8`

**Dark Theme:**
- Accent: `#52b788` (vert clair)
- Texte: `#e8e8e8`
- Fond: `#0f0f0f`

## ⚙️ Configuration

Modifier `src/config.js`:

```javascript
export const socialLinks = {
  email: 'aymericmuller06@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aymeric-muller-73a130278',
  github: 'https://github.com/aymericmuller06-beep'
}

export const companyLinks = {
  azurinfo: 'https://www.azurinfo.fr'
}
```

## 📊 Performance

- Build production: ~1.19s
- Chunks optimisés Vite
- Code minifié
- SCSS modularisé
