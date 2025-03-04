import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/fc25-fantapoop/',  
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true // Svuota la cartella prima di ogni build
  }
})
