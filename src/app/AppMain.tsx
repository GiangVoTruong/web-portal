// src/constants/enums.ts
// Enum định nghĩa tên trang
export enum PageName {
  Home = 'Trang chủ',
  About = 'Giới thiệu',
  Login = 'Đăng nhập',
  Register = 'Đăng ký',
  Dashboard = 'Bảng điều khiển',
  Profile = 'Hồ sơ cá nhân',
  Settings = 'Cài đặt',
  NotFound = 'Không tìm thấy trang',
}

// Enum định nghĩa key cho trang
export enum PageKey {
  Home = 'home',
  About = 'about',
  Login = 'login',
  Register = 'register',
  Dashboard = 'dashboard',
  Profile = 'profile',
  Settings = 'settings',
  NotFound = 'not-found',
}

// Enum định nghĩa đường dẫn URL
export enum PagePath {
  Home = '/',
  About = '/about',
  Login = '/login',
  Register = '/register',
  Dashboard = '/dashboard',
  Profile = '/dashboard/profile',
  Settings = '/dashboard/settings',
  NotFound = '*',
}

// Enum định nghĩa icon sử dụng cho menu
export enum PageIcon {
  Home = 'home',
  About = 'info-circle',
  Dashboard = 'dashboard',
  Profile = 'user',
  Settings = 'setting',
}

// Enum đơn giản để phân loại route
export enum RouteType {
  Public = 'public', // Không yêu cầu đăng nhập
  Private = 'private', // Yêu cầu đăng nhập
}
