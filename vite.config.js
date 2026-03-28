import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Serve index.html for all routes during dev (SPA fallback)
    historyApiFallback: true,
  },
  preview: {
    // Same for `vite preview` (production preview)
    historyApiFallback: true,
  },
})