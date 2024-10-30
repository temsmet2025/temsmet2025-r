import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "https://github.com/parvej1999/temsmet.github.io.git",
  plugins: [react()],
})
