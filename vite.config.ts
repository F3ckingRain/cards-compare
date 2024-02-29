import { defineConfig } from 'vite'
import {resolve, dirname } from 'path'
import {fileURLToPath} from 'url'
import react from '@vitejs/plugin-react-swc'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],

  build: {
    emptyOutDir: true,
    cssCodeSplit: true
  },

  server: {
    port: 8080,
    strictPort: true
  },

  resolve: {
    alias: {
      "@": resolve(__dirname, 'src')
    }
  },

  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  }
})
