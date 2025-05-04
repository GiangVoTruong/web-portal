import Routes from '@/types/routesType'
import { PageKey, PageName, PagePath } from '@/enums/pageEnum'
import { LayoutCode } from '@/enums/layoutEnum'
import { lazy } from 'react'

const registerRouter: Routes = [
  {
    key: PageKey.Register,
    path: PagePath.Register,
    name: PageName.Register,
    component: lazy(() => import('./RegisterPage')),
    layout: LayoutCode.Public,
    showMenu: true,
    // icon,
    menuChildren: [],
  },
]

export default registerRouter
