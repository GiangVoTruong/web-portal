import { LayoutCode } from '@/enums/layoutEnum'
import { PageKey, PageName, PagePath } from '@/enums/pageEnum'
import Routes from '@/types/routesType'
import { lazy } from 'react'

const accountRouter: Routes = [
  {
    key: PageKey.Accounts,
    path: PagePath.Accounts,
    name: PageName.Accounts,
    component: lazy(() => import('./AccountPage')),
    layout: LayoutCode.Public,
    showMenu: true,
    // icon,
  },
]
export default accountRouter
