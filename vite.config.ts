import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/crochet-webapp/",
// })

// export default defineConfig({
//   plugins: [react()],
//   base: "/crochet-webapp/",
//   build: {
//     ssr: 'src/entry-server.jsx',
//     rollupOptions: {
//       input: 'src/entry-server.jsx',
//       output: {
//         entryFileNames: 'entry-server.js',
//       },
//     },
//   },
// });

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: true,
    outDir: 'dist/server',
    rollupOptions: {
      input: 'src/entry-server.tsx',
    },
  },
})