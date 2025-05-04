import { LayoutCode } from '@/enums/layoutEnum'
import { PageKey, PageName, PagePath } from '@/enums/pageEnum'
import Routes from '@/types/routesType'
import { lazy } from 'react'

const cartRouter: Routes = [
  {
    key: PageKey.Cart,
    path: PagePath.Cart,
    name: PageName.Cart,
    component: lazy(() => import('./CartPage')),
    layout: LayoutCode.Public,
    showMenu: true,
    // icon,
    menuChildren: [],
  },
]
export default cartRouter
