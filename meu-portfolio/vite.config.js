import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/', // 👈 se o repositório fosse "meu-site", seria "/meu-site/"
  plugins: [react(), tailwindcss()],
})
