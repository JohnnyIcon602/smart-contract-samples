import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const devPort = Number(process.env.VITE_PORT ?? 5173);

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: devPort,
    allowedHosts: true
  },
  preview: {
    host: '0.0.0.0',
    port: devPort
  },
  build: {
    lib: {
      entry: 'src/main.tsx',
      name: 'TomsAutoDiagnoser',
      formats: ['es'],
      fileName: 'diagnoser'
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  }
});
