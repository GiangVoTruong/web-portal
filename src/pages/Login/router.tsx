import Routes from '@/types/routesType'
import { PageKey, PageName, PagePath } from '@/enums/pageEnum'
import { lazy } from 'react'
import { LayoutCode } from '@/enums/layoutEnum'

const loginRouter: Routes = [
  {
    key: PageKey.Login,
    path: PagePath.Login,
    name: PageName.Login,
    showMenu: true,
    component: lazy(() => import('./LoginPage')),
    layout: LayoutCode.Public,
  },
]
export default loginRouter
