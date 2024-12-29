import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // base: "/temsmet.github.io",
  //base: "/temsmet2025-r",   //when pushing on temsmet and also change in router in app.jsx
  // base:"",
  build: {
    outDir: 'dist', // Ensure this is set to 'dist' (the default build output folder)
  },
  plugins: [react()],
})
