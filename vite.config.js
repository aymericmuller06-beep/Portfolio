import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    // Optimisations de minification avec esbuild (plus rapide)
    minify: 'esbuild',
    
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        definitions: resolve(__dirname, './Pages/definitions/index.html'),
        parcours: resolve(__dirname, './Pages/parcours/index.html'),
        realisationsProfessionnelles: resolve(__dirname, './Pages/realisations_professionnelles/index.html'),
        veilleTechnologique: resolve(__dirname, './Pages/veille_technologique/index.html'),
      },
      output: {
        // Code splitting intelligente — vendor séparé pour meilleur caching
        manualChunks: {
          'vendor-bootstrap': ['bootstrap'],
          'vendor-animations': ['aos', 'typeit', 'swup'],
          'vendor-particles': ['@tsparticles/engine', '@tsparticles/slim'],
        },
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },

    // Taille limite pour avertir les gros chunks
    chunkSizeWarningLimit: 600,

    // SourceMaps seulement en débuggage
    sourcemap: process.env.DEBUG === 'true',
  },
})