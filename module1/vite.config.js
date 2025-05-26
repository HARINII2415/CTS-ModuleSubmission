import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        events: resolve(__dirname, 'events.html'),
        about: resolve(__dirname, 'about.html'),
        register: resolve(__dirname, 'register.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        storage: resolve(__dirname, 'storage.html')
      }
    }
  }
});
