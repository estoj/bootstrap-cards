import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export default ({
  root: resolve(__dirname, 'src'),
  base: '/bootstrap-cards/',
  build: {
    rollupOptions: {
      input: {
        main: 'src/index.html',
        variantb: 'src/variant-b/index.html',
        variantc: 'src/variant-c/index.html',
      }
    },
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
})