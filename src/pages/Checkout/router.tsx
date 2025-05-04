import Routes from '@/types/routesType'
import { PageKey, PageName, PagePath } from '@/enums/pageEnum'
import { LayoutCode } from '@/enums/layoutEnum'
import { lazy } from 'react'

const checkoutRouter: Routes = [
  {
    key: PageKey.Checkout,
    path: PagePath.Checkout,
    name: PageName.Checkout,
    showMenu: true,
    component: lazy(() => import('./CheckoutPage')),
    layout: LayoutCode.Public,
  },
]
export default checkoutRouter
