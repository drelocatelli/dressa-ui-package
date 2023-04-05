import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    insertTypesEntry: true
  })],
  build: {
    lib: {
      entry: 'src/lib/index.ts',
      name: 'dressa-ui-package',
      formats: ['es', 'umd'],
      fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components', '@emotion/css'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
          "@emotion/css": "@emotion/css"
        }
      }
    }
  },
})
