import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve("./src")
      },
      {
        find: '@image',
        replacement: path.resolve('./src/assets/images')
      },
      {
        find: '@store',
        replacement: path.resolve('./src/store')
      },
      {
        find: '@router',
        replacement: path.resolve('./src/router')
      },
      {
        find: '@api',
        replacement: path.resolve('./src/api')
      }
    ]
  },
  server: {
    port: 8090,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})
