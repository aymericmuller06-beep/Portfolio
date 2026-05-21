import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    minify: 'esbuild',
    
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, './Pages/projets_stage/index.html'),
        realisations: resolve(__dirname, './Pages/realisations/index.html'),
        tableau: resolve(__dirname, './Pages/tableau_synthese/index.html'),
        cv: resolve(__dirname, './Pages/cv/index.html'),
        veille: resolve(__dirname, './Pages/veille_technologique/index.html'),
      },
      output: {
        manualChunks: {
          'vendor-bootstrap': ['bootstrap'],
        },
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },

    chunkSizeWarningLimit: 500,
    sourcemap: process.env.DEBUG === 'true',
  },
})