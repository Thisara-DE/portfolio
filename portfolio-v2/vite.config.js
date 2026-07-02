import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base must match the GitHub Pages repo path: https://thisara-de.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
});
