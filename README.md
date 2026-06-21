# Portfolio – Aymeric Muller

## Lancer le projet

```bash
npm install                  # Installe les dépendances
npm run dev                  # Démarre en local (http://localhost:5174)
npm run build                # Génère le dossier dist/ pour la production
npm run preview              # Prévisualise le build de production
```

## Structure du projet

```
src/
├── main.jsx              # Point d'entrée React
├── App.jsx               # Composant principal avec routage React Router
├── style.css             # Styles globaux et thèmes (clair/sombre)
├── config.js             # Configuration centralisée (emails, réseaux sociaux)
├── Img/                  # Images du site
├── components/
│   ├── Header.jsx        # Navigation + toggle thème
│   └── Footer.jsx        # Section contact + réseaux sociaux
└── pages/
    ├── Home.jsx          # Page d'accueil
    ├── Projects.jsx      # Projets de stage
    ├── Realisations.jsx  # Réalisations
    ├── TableauSynthese.jsx
    ├── CV.jsx
    └── Veilletech.jsx

index.html               # Fichier HTML d'entrée
package.json             # Dépendances et scripts
vite.config.js           # Configuration Vite
```

## Stack technique

- **Vite 8** → Bundler ultra-rapide et dev server
- **React 18** → Framework UI réactif
- **React Router** → Navigation SPA (Single Page App)
- **Bootstrap 5** → Grille et composants UI
- **CSS personnalisé** → Thème vert avec mode sombre/clair

## Fonctionnalités

- ✅ Navigation fluide entre pages (React Router)
- ✅ Mode clair/sombre avec toggle
- ✅ Palette de couleurs verte personnalisée
- ✅ Composants réutilisables (Header, Footer)
- ✅ Configuration centralisée (`config.js`)
- ✅ Responsive design avec Bootstrap
- ✅ Hot reload en développement (Vite)
- ✅ Build optimisé pour production

## Routes disponibles

| Route | Page |
|-------|------|
| `/` | Accueil |
| `/pages/projets_stage` | Projets de stage |
| `/pages/realisations` | Réalisations |
| `/pages/tableau_synthese` | Tableau de synthèse |
| `/pages/cv` | CV |
| `/pages/veille_technologique` | Veille technologique |

## Thème personnalisé

Les couleurs sont définies dans `src/style.css` avec CSS variables:

**Light Theme (par défaut):**
- Accent: Vert foncé (`#2d6a4f`)
- Texte: Noir (`#1a1a1a`)
- Fond: Blanc cassé (`#f8f8f8`)

**Dark Theme:**
- Accent: Vert clair (`#52b788`)
- Texte: Gris clair (`#e8e8e8`)
- Fond: Noir (`#0f0f0f`)

## Configuration des réseaux sociaux

Modifier `src/config.js` pour mettre à jour:
- Email
- URL LinkedIn
- URL GitHub

```javascript
export const socialLinks = {
  email: 'votre@email.com',
  linkedin: 'https://www.linkedin.com/in/votre-profil',
  github: 'https://github.com/votre-profil'
}
```

## Responsive

Le site est entièrement responsive grâce à Bootstrap et media queries CSS.
