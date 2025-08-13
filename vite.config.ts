import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  server: {
    proxy: {
      '/php': {
        target: "http://localhost/softwave-access/php",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/php/, '') 
      }
    }
  }
})
