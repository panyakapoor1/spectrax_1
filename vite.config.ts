import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    exclude: [
      '@mediapipe/pose',
      '@mediapipe/camera_utils',
      '@mediapipe/drawing_utils',
      '@xenova/transformers',
    ],
  },

  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'mediapipe': [
            '@mediapipe/pose',
            '@mediapipe/camera_utils',
            '@mediapipe/drawing_utils',
          ],
          'transformers': ['@xenova/transformers'],
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
})
