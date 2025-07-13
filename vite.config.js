import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Optimisations de build
  build: {
    sourcemap: false, // Désactiver en production pour réduire la taille
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer les console.log en production
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        // Optimisation du chunking
        manualChunks: {
          // Bibliothèques React
          'react-vendor': ['react', 'react-dom'],
          // Bibliothèques d'animation et UI
          'ui-vendor': ['react-simple-typewriter'],
          // EmailJS (chargé dynamiquement)
          'email-vendor': ['@emailjs/browser']
        },
        // Noms de fichiers optimisés
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // Optimisation des assets
    assetsInlineLimit: 4096, // Inline des petits assets
    chunkSizeWarningLimit: 1000
  },
  
  // Optimisations de développement
  server: {
    hmr: {
      overlay: false // Désactiver l'overlay d'erreur
    }
  },
  
  // Résolution des modules
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@services': '/src/services'
    }
  },
  
  // Optimisations CSS
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/variables.scss";`
      }
    }
  },
  
  // Optimisations des dépendances
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-simple-typewriter'
    ],
    exclude: [
      '@emailjs/browser' // Exclu car chargé dynamiquement
    ]
  }
})
