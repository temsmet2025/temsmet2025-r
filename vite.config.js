import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  // base: "/temsmet2025-r",
  build: {
   outDir: 'dist',
    // outDir: '../temsmet builds/frontend',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Adjust the chunk size limit as needed
  },
  plugins: [react()],
})
