import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      // إذا كانت هناك مكتبة خارجية تسبب خطأ في البناء، أضف اسمها هنا (مثلاً: 'some-pkg')
      external: [],
    },
  },
})
