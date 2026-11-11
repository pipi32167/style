import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 17402,
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    // 页面只有 2.2 MB 资源，按类型分包即可
    rollupOptions: {
      output: {
        manualChunks: {
          data: ['./src/data/styles.js'],
          demos: ['./src/demos.js'],
        },
      },
    },
  },
});
