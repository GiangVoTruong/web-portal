// src/hooks/usePage.ts
import { useNavigate, useLocation } from 'react-router-dom'
import { PageKey, PagePath, RouteType } from '../app/AppMain'
import { getRouteByPath, RouteConfig, routes } from '../routes/routes'

interface UsePageResult {
  // Các enums
  pageKeys: typeof PageKey
  pagePaths: typeof PagePath
  routeTypes: typeof RouteType
  routes: RouteConfig[]

  // Thông tin về trang hiện tại
  currentPath: string
  currentRoute: RouteConfig | undefined

  // Hàm điều hướng
  navigateTo: (path: PagePath, options?: { replace?: boolean; state?: any }) => void
  navigateByKey: (key: PageKey, options?: { replace?: boolean; state?: any }) => void

  // Các helpers khác
  isCurrentPath: (path: PagePath) => boolean
  isCurrentPathStartsWith: (prefix: string) => boolean
  goBack: () => void

  // Auth helpers
  isAuthenticated: () => boolean
  login: (token: string, userData?: any) => void
  logout: () => void
}

export const usePage = (): UsePageResult => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname as PagePath

  // Lấy thông tin về route hiện tại
  const currentRoute = getRouteByPath(currentPath)

  // Điều hướng đến một trang bằng đường dẫn
  const navigateTo = (path: PagePath, options?: { replace?: boolean; state?: any }) => {
    navigate(path, {
      replace: options?.replace,
      state: options?.state,
    })
  }

  // Điều hướng đến một trang bằng key
  const navigateByKey = (key: PageKey, options?: { replace?: boolean; state?: any }) => {
    const route = routes.find(route => route.key === key)
    if (route) {
      navigate(route.path, {
        replace: options?.replace,
        state: options?.state,
      })
    } else {
      console.error(`Không tìm thấy route với key: ${key}`)
    }
  }

  // Kiểm tra xem đường dẫn hiện tại có phải là một đường dẫn cụ thể không
  const isCurrentPath = (path: PagePath): boolean => {
    return currentPath === path
  }

  // Kiểm tra xem đường dẫn hiện tại có bắt đầu bằng một tiền tố cụ thể không
  const isCurrentPathStartsWith = (prefix: string): boolean => {
    return currentPath.startsWith(prefix)
  }

  // Quay lại trang trước đó
  const goBack = () => {
    navigate(-1)
  }

  // Kiểm tra xem người dùng đã đăng nhập hay chưa
  const isAuthenticated = (): boolean => {
    return !!localStorage.getItem('token')
  }

  // Đăng nhập
  const login = (token: string, userData?: any) => {
    localStorage.setItem('token', token)
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData))
    }

    // Chuyển hướng đến trang dashboard hoặc trang được yêu cầu trước đó
    const fromPath = location.state?.from || PagePath.Dashboard
    navigateTo(fromPath as PagePath, { replace: true })
  }

  // Đăng xuất
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigateTo(PagePath.Login)
  }

  return {
    pageKeys: PageKey,
    pagePaths: PagePath,
    routeTypes: RouteType,
    routes,
    currentPath,
    currentRoute,
    navigateTo,
    navigateByKey,
    isCurrentPath,
    isCurrentPathStartsWith,
    goBack,
    isAuthenticated,
    login,
    logout,
  }
}
