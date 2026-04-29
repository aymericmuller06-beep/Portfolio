# Portfolio – Aymeric Muller

## Lancer le projet

npm install        → installe les dépendances
npm run dev        → démarre en local (localhost:5173)
npm run dev -- --host  → démarre et expose sur le réseau local
npm run build      → génère le dossier dist/ pour la production
npm run preview    → prévisualise le build de production

## Structure

index.html                    → page d'accueil
veille_technologique/         → page veille technologique
public/                       → assets statiques (copiés tels quels au build)
src/
  main.js                     → point d'entrée JS (Bootstrap, AOS, Swup, Particles, TypeIt)
  style.css                   → styles globaux et thème
  Img/                        → images du site
  scripts/
    back-to-top.js            → bouton retour en haut
    cards-sweep.js            → animation hover des cards
    topbar.js                 → topbar qui se cache au scroll

## Librairies utilisées

- Vite           → bundler / dev server
- Bootstrap 5    → grille et composants UI
- AOS            → animations au scroll
- TypeIt         → effet machine à écrire sur le titre
- tsParticles    → fond de particules animé
- Swup           → transitions de page fluides
- Sass           → préprocesseur CSS (disponible si besoin)

## Fonctionnalités

- Mode clair / sombre (persisté en localStorage, suit la préférence OS)
- Page loader animé au chargement
- Topbar fixe qui se cache au scroll vers le bas
- Transitions de page avec flou (Swup)
- Bouton home sur les pages secondaires
- Favicon personnalisée
- Multi-pages déclarées dans vite.config.js
