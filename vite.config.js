import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        veilleTechnologique: resolve(__dirname, './Pages/veille_technologique/index.html'),
      },
    },
  },
})