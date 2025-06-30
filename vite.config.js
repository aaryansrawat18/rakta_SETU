import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  //added it

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      tailwindcss(),   //added it
      react()
  ],
})