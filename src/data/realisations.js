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

export const realizations = [
  {
    id: 1,
    title: 'Mon Portfolio',
    shortDescription: 'Ce présent portfolio qui présente les différents aspects de ma formation et de mes compétences.',
    category: 'Développement Web',
    icon: 'fa-laptop',
    technologies: ['React', 'Vite', 'Bootstrap', 'JavaScript'],
    date: '2026-2027',
    status: 'Actif'
  },
  {
    id: 2,
    title: 'CRM pour Nice Volley Ball Club',
    shortDescription: 'Un système de gestion interne pour le club de volley-ball de Nice.',
    category: 'Projet en équipe',
    icon: 'fa-volleyball',
    technologies: ['Gestion de projet'],
    date: '2026',
    status: 'Actif'
  }
]
