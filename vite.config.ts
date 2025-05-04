import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// Cấu hình Vite: https://vitejs.dev/config/
export default defineConfig({
  // Plugins sử dụng - ở đây dùng plugin react với SWC (thay thế Babel, nhanh hơn)
  plugins: [react()],

  // Cấu hình resolver để đơn giản hóa đường dẫn import
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Import từ '@/components' sẽ trỏ đến './src/components'
    },
  },

  // Cấu hình máy chủ phát triển
  server: {
    port: 3000, // Sử dụng cổng 3000
    open: true, // Tự động mở trình duyệt khi khởi động
    cors: true, // Cho phép CORS
  },

  // Cấu hình build cho môi trường production
  build: {
    outDir: 'dist', // Thư mục đầu ra
    sourcemap: true, // Tạo sourcemap để dễ debug
    minify: 'terser', // Sử dụng terser để nén code
    terserOptions: {
      compress: {
        drop_console: true, // Loại bỏ console.log khi build
      },
    },
  },

  // Cấu hình CSS
  css: {
    devSourcemap: true, // Tạo sourcemap cho CSS trong môi trường phát triển
  },
})
