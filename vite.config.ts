import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './src/examples',
  plugins: [react()],
  build: {
    rollupOptions: {
      // input: {
      //   // index: './src/examples/index.html',
      //   main: './src/examples/index.tsx',
      // },
      input: {
        index: path.resolve(__dirname, './src/examples/index.html'),
        // main: path.resolve(__dirname, './src/examples/index.tsx'),
      },
    },
  },
})
