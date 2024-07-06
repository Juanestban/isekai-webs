import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import postcssNesting from 'postcss-nesting';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      'packages/meli': '/src/packages/mercado-libre',
      'packages/amazon': '/src/packages/amazon',
    },
  },
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
  plugins: [react()],
});
