import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true // Fixes hot reload across host to container for vite :https://github.com/vitejs/vite/issues/1153#issuecomment-785467271
    }
  }
})
