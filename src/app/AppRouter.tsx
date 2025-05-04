import rootRoutes from '@/routes'
import _ from 'lodash'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import './app.scss'
import PublicLayout from '@/layouts/public/PublicLayout'
import NotFoundPage from '@/pages/NotFoundPage'
import { LayoutCode } from '@/enums/layoutEnum'

const router = createBrowserRouter(
  createRoutesFromElements(
    _.map(rootRoutes, (route, index) => {
      const {
        layout,
        layoutProps,
        component: Component,
        ...restRouter
      } = route || {}

      return (
        <Route
          key={index}
          element={(() => {
            switch (layout) {
              case LayoutCode.Public: {
                return <PublicLayout {...layoutProps} />
              }
              // case LayoutCode.Private: {
              //   return <PrivateLayout {...layoutProps} /> // Loại bỏ layoutProps để tránh lỗi TypeScript
              // }
              default: {
                return null
              }
            }
          })()}
        >
          <Route
            element={<Component />}
            errorElement={<NotFoundPage />}
            {...restRouter}
          />
        </Route>
      )
    })
  )
)

export default function AppRouter() {
  return <RouterProvider router={router} />
}
