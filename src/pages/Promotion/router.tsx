import Routes from '@/types/routesType'
import { PageKey, PageName, PagePath } from '@/enums/pageEnum'
import { LayoutCode } from '@/enums/layoutEnum'
import { lazy } from 'react'

const promotionRouter: Routes = [
  {
    key: PageKey.Promotion,
    path: PagePath.Promotion,
    name: PageName.Promotion,
    component: lazy(() => import('./PromotionPage')),
    layout: LayoutCode.Public,
    showMenu: true,
    // icon,
    menuChildren: [],
  },
]

export default promotionRouter
