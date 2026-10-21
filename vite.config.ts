import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/skate-landing/', // GitHub Pages: o site fica em gabrielolvv.github.io/skate-landing/
})
