import Routes from '@/types/routesType'
import { PageKey, PageName, PagePath } from '@/enums/pageEnum'
import { lazy } from 'react'
import { LayoutCode } from '@/enums/layoutEnum'

const newArrivalsRouter: Routes = [
  {
    key: PageKey.NewArrivals,
    path: PagePath.NewArrivals,
    name: PageName.NewArrivals,
    component: lazy(() => import('./NewArrivalsPage')),
    layout: LayoutCode.Public,
    showMenu: true,
    // icon,
    menuChildren: [],
  },
]

export default newArrivalsRouter
