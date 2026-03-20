# Copilot Instructions - Portfolio Aymeric Muller

## Directives Principales

### 1. Maximiser l'utilisation de Bootstrap
- Utiliser **en priorité** les classes Bootstrap pour le layout, l'espacement, la typo et les composants
- Préférer `d-flex`, `gap-3`, `px-3`, `py-5`, `fw-bold`, `text-uppercase` etc. plutôt que du CSS custom
- Les variables CSS Bootstrap (`--bs-*`) sont customisées dans `src/style.css` — les utiliser via les classes Bootstrap
- Ne créer du CSS custom **que pour** les animations, effects visuels spécialisés ou personnalisation d'identité (pas pour layout/espacement)

### 2. Architecture CSS
- **HTML** = structure + classes Bootstrap
- **Custom CSS** = effet visuels (animations, curseur, vignette, card-sweep, topbar), override des variables Bootstrap
- **Jamais** de CSS custom pour remplacer des composants ou utilitaires Bootstrap disponibles

### 3. Icônes et Composants
- Utiliser **Bootstrap Icons** (`bi bi-*`) pour toutes les icônes
- Lien CDN : `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css`
- Structure : `<i class="bi bi-icon-name"></i>`

### 4. Responsive Design
- Toujours utiliser les breakpoints Bootstrap : `sm`, `md`, `lg`, `xl`, `xxl`
- Utiliser les classes comme `d-none d-md-block`, `px-2 px-md-4`, etc.
- Tester sur mobile en priorité (mobile-first)

### 5. Couleurs et Thème
- Toujours respecter le système light/dark via `data-bs-theme`
- Utiliser les variables perso : `--bg-main`, `--text-main`, `--accent`, etc.
- Ne **jamais** coder en dur des couleurs (hex/rgb/rgba) en HTML

### 6. Vérifications avant de proposer du code
- ✅ Ai-je utilisé Bootstrap pour le layout/spacing ?
- ✅ Ai-je évité le CSS custom unnecessaire ?
- ✅ Ai-je utilisé Bootstrap Icons pour les icônes ?
- ✅ Ai-je testé la responsivité ?
- ✅ Le code respecte-t-il le thème light/dark ?

---

**Résumé** : Bootstrap = structure + utilitaires. Custom CSS = créativité visuelle seulement.
