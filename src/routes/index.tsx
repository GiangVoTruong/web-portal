import { Suspense } from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'
import LoadingPage from '../components/LoadingPage'
import PrivateRoute from '../components/PrivateRoute'
import { getPrivateRoutes, getPublicRoutes } from './routes'

// Tạo route objects cho React Router
const createRouteObjects = (): RouteObject[] => {
  const routeObjects: RouteObject[] = []

  // Thêm routes công khai
  const publicRoutes = getPublicRoutes()
  publicRoutes.forEach(route => {
    routeObjects.push({
      path: route.path,
      element: (
        <Suspense fallback={<LoadingPage />}>
          <route.component />
        </Suspense>
      ),
    })
  })

  // Thêm routes yêu cầu đăng nhập
  const privateRoutes = getPrivateRoutes()
  privateRoutes.forEach(route => {
    routeObjects.push({
      path: route.path,
      element: (
        <Suspense fallback={<LoadingPage />}>
          <PrivateRoute>
            <route.component />
          </PrivateRoute>
        </Suspense>
      ),
    })
  })

  return routeObjects
}

// Tạo router
const router = createBrowserRouter(createRouteObjects())

export default router
