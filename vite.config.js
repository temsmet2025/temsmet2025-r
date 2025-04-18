// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vite.dev/config/
// export default defineConfig({
//   // base: "/temsmet.github.io",
//   base: "/temsmet2025-r",   //when pushing on temsmet and also change in router in app.jsx
//   // base:"",
//   build: {
//     // outDir: '../temsmet builds/liveBuild-v3.1', // Ensure this is set to 'dist' (the default build output folder)
//      outDir: 'dist', // Ensure this is set to 'dist' (the default build output folder)
//   },
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  // base: "/temsmet2025-r",
  build: {
    outDir: 'dist',
    // outDir: '../temsmet builds/liveBuild-v4.6',
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