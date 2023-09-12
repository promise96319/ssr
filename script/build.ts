import path from 'node:path'
import vite from 'vite'
import react from '@vitejs/plugin-react'

export function buildClientRuntime() {
  return vite.build({
    plugins: [react()],
    build: {
      rollupOptions: {
        input: path.resolve(__dirname, '../src/client/index.tsx'),
        output: {
          dir: './dist/client',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
        },
        watch: {
          clearScreen: true,
          include: path.resolve(__dirname, '../src'),
        },
      },
    },
  })
}

buildClientRuntime()
