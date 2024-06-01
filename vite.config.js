import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Define globals for external libraries
    rollupOptions: {
      globals: {
        'xenova/transformers': 'XenovaTransformers', // Replace with your desired global name
      },
    },
  }
})
