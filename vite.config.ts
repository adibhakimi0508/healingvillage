// vite.config.ts
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|tiff|webp|svg|avif)$/i,
      includePublic: true,
      logStats: true,

      // 👇 GENTLER SETTINGS
      png: { quality: 90 },
      jpeg: { quality: 85 }, // Was 75 -> Now 85
      jpg: { quality: 85 },
      webp: { lossless: true }, // Lossless looks perfect but is slightly larger
      avif: { lossless: true },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})