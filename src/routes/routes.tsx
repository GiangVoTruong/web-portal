// src/router/routes.tsx
import { lazy } from 'react'
import {
  HomeOutlined,
  InfoCircleOutlined,
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { PageIcon, PageKey, PageName, PagePath, RouteType } from '../app/AppMain'

// Hàm helper để lấy icon component dựa trên enum PageIcon
const getIconComponent = (icon?: PageIcon) => {
  if (!icon) return null

  switch (icon) {
    case PageIcon.Home:
      return <HomeOutlined />
    case PageIcon.About:
      return <InfoCircleOutlined />
    case PageIcon.Dashboard:
      return <DashboardOutlined />
    case PageIcon.Profile:
      return <UserOutlined />
    case PageIcon.Settings:
      return <SettingOutlined />
    default:
      return null
  }
}

// Interface định nghĩa cấu trúc của một route
export interface RouteConfig {
  name: PageName
  key: PageKey
  path: PagePath
  showMenu?: boolean
  icon?: PageIcon
  component: React.LazyExoticComponent<React.ComponentType<any>> | React.ComponentType<any>
  type: RouteType
  children?: RouteConfig[]
}

// Danh sách các routes
export const routes: RouteConfig[] = [
  {
    name: PageName.Home,
    key: PageKey.Home,
    path: PagePath.Home,
    showMenu: true,
    icon: PageIcon.Home,
    component: lazy(() => import('../pages/HomePage')),
    type: RouteType.Public,
  },
  {
    name: PageName.About,
    key: PageKey.About,
    path: PagePath.About,
    showMenu: true,
    icon: PageIcon.About,
    component: lazy(() => import('../pages/AboutPage')),
    type: RouteType.Public,
  },
  {
    name: PageName.Login,
    key: PageKey.Login,
    path: PagePath.Login,
    showMenu: false,
    component: lazy(() => import('../pages/LoginPage')),
    type: RouteType.Public,
  },
  {
    name: PageName.Register,
    key: PageKey.Register,
    path: PagePath.Register,
    showMenu: false,
    component: lazy(() => import('../pages/RegisterPage')),
    type: RouteType.Public,
  },
  {
    name: PageName.Dashboard,
    key: PageKey.Dashboard,
    path: PagePath.Dashboard,
    showMenu: true,
    icon: PageIcon.Dashboard,
    component: lazy(() => import('../pages/dashboard/DashboardPage')),
    type: RouteType.Private,
  },
  {
    name: PageName.Profile,
    key: PageKey.Profile,
    path: PagePath.Profile,
    showMenu: true,
    icon: PageIcon.Profile,
    component: lazy(() => import('../pages/dashboard/ProfilePage')),
    type: RouteType.Private,
  },
  {
    name: PageName.Settings,
    key: PageKey.Settings,
    path: PagePath.Settings,
    showMenu: true,
    icon: PageIcon.Settings,
    component: lazy(() => import('../pages/dashboard/SettingsPage')),
    type: RouteType.Private,
  },
  {
    name: PageName.NotFound,
    key: PageKey.NotFound,
    path: PagePath.NotFound,
    showMenu: false,
    component: lazy(() => import('../pages/NotFoundPage')),
    type: RouteType.Public,
  },
]

// Helper để lấy icon component cho một route
export const getRouteIcon = (route: RouteConfig) => {
  return getIconComponent(route.icon)
}

// Các helpers khác để làm việc với routes
export const getRouteByPath = (path: string): RouteConfig | undefined => {
  return routes.find(route => route.path === path)
}

export const getRouteByKey = (key: PageKey): RouteConfig | undefined => {
  return routes.find(route => route.key === key)
}

// Lọc routes theo type
export const getPublicRoutes = (): RouteConfig[] => {
  return routes.filter(route => route.type === RouteType.Public)
}

export const getPrivateRoutes = (): RouteConfig[] => {
  return routes.filter(route => route.type === RouteType.Private)
}

// Lọc routes hiển thị trong menu
export const getMenuRoutes = (): RouteConfig[] => {
  return routes.filter(route => route.showMenu)
}

// Lọc routes hiển thị trong menu theo type
export const getPublicMenuRoutes = (): RouteConfig[] => {
  return routes.filter(route => route.showMenu && route.type === RouteType.Public)
}

export const getPrivateMenuRoutes = (): RouteConfig[] => {
  return routes.filter(route => route.showMenu && route.type === RouteType.Private)
}
