import { LayoutCode } from '@/enums/layoutEnum'
import { PageKey, PageName, PagePath } from '@/enums/pageEnum'
import Routes from '@/types/routesType'
import { lazy } from 'react'

const aboutRouter: Routes = [
  {
    key: PageKey.About,
    path: PagePath.About,
    name: PageName.About,
    component: lazy(() => import('./AboutPage')),
    layout: LayoutCode.Public,
    showMenu: true,
    // icon,
    menuChildren: [],
  },
]
export default aboutRouter
