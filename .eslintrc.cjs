// ESLint là công cụ phân tích mã nguồn tĩnh để phát hiện và sửa các vấn đề trong mã JavaScript/TypeScript
module.exports = {
  root: true, // Đánh dấu đây là file cấu hình ESLint gốc
  env: {
    browser: true, // Cho phép sử dụng các biến môi trường trình duyệt
    es2021: true, // Cho phép cú pháp ES2021
    node: true // Cho phép sử dụng các biến môi trường Node.js
  },
  extends: [
    'eslint:recommended', // Sử dụng các quy tắc được khuyến nghị của ESLint
    'plugin:@typescript-eslint/recommended', // Thêm quy tắc TypeScript
    'plugin:react-hooks/recommended', // Thêm quy tắc cho React Hooks
    'plugin:react/recommended', // Thêm quy tắc React được khuyến nghị
    'plugin:react/jsx-runtime', // Hỗ trợ JSX transform mới của React
    'prettier' // Tương thích với Prettier
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'], // Bỏ qua các thư mục và file này khi kiểm tra
  parser: '@typescript-eslint/parser', // Sử dụng parser TypeScript
  parserOptions: {
    ecmaVersion: 'latest', // Sử dụng phiên bản ECMAScript mới nhất
    sourceType: 'module', // Mã nguồn sử dụng cú pháp module ES
    ecmaFeatures: {
      jsx: true // Cho phép cú pháp JSX
    }
  },
  plugins: ['react', '@typescript-eslint', 'react-refresh'], // Các plugin được sử dụng
  settings: {
    react: {
      version: 'detect' // Tự động phát hiện phiên bản React
    }
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn', // Cảnh báo nếu không tuân thủ
      { allowConstantExport: true } // Cho phép export hằng số
    ],
    'react/prop-types': 'off', // Tắt kiểm tra prop-types vì sử dụng TypeScript
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_', // Bỏ qua tham số bắt đầu bằng _
        varsIgnorePattern: '^_' // Bỏ qua biến bắt đầu bằng _
      }
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }] // Cảnh báo khi sử dụng console, trừ console.warn và console.error
  }
}
