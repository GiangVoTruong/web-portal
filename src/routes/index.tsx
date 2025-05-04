import { LayoutCode } from '@/enums/layoutEnum'
import aboutRouter from '@/pages/About/router'
import accountRouter from '@/pages/Account/router'
import brandsRouter from '@/pages/Brands/router'
import cartRouter from '@/pages/cart/router'
import checkoutRouter from '@/pages/Checkout/router'
import contactRouter from '@/pages/Contact/router'
import loginRouter from '@/pages/Login/router'
import newArrivalsRouter from '@/pages/NewArrivals/router'
import NotFoundPage from '@/pages/NotFoundPage'
import productRoutes from '@/pages/products/routes'
import promotionRouter from '@/pages/Promotion/router'
import registerRouter from '@/pages/Register/router'
import trendingRouter from '@/pages/Trending/router'
import wishlistRouter from '@/pages/Wishlist/router'
import type Routes from '@/types/routesType'
import _ from 'lodash'
import { lazy } from 'react'

const redirectRoutes: Routes = [
  {
    path: '/',
    key: 'redirect-home',
    component: lazy(() => import('@/features/Home/HomePage')),
    layout: LayoutCode.Public,
  },
  {
    path: '*',
    key: 'redirect-not-found',
    component: () => <NotFoundPage />,
  },
]

export const rootRoutes: Routes = [
  ...redirectRoutes,
  ...productRoutes,
  ...cartRouter,
  ...aboutRouter,
  ...accountRouter,
  ...brandsRouter,
  ...checkoutRouter,
  ...contactRouter,
  ...loginRouter,
  ...newArrivalsRouter,
  ...promotionRouter,
  ...registerRouter,
  ...trendingRouter,
  ...wishlistRouter,
]

export const rootMenus = _.reduce(
  rootRoutes,
  (result: Record<string, any>, value) => {
    const {
      name,
      icon,
      key,
      roles,
      layout,
      showMenu,
      path,
      menuChildren,
      codes,
    } = value
    if (showMenu && layout) {
      const menus = result[layout] || []
      const menu = {
        icon,
        label: name,
        key,
        path,
        roles,
        children: menuChildren,
        codes,
      }
      if (_.isBoolean(showMenu)) {
        result = _.assign(result, { [layout]: _.concat(menus, menu) })
      } else if (_.isArray(showMenu)) {
        _.forEach(showMenu, item => {
          if (_.isEqual(item, layout)) {
            result = _.assign(result, { [layout]: _.concat(menus, menu) })
          } else {
            const moreMenus = result[item] || []
            result = _.assign(result, { [item]: _.concat(moreMenus, menu) })
          }
        })
      }
    }
    return result
  },
  {}
)

export default rootRoutes
