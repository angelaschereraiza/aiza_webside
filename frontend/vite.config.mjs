import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({
      autoImport: true,
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },

  server: {
    proxy: {
      '/ai-api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/ai-api/, ''),
        proxyTimeout: 0,
        timeout: 0,
      },
    },
  },
})
