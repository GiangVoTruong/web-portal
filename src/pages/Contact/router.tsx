import Routes from '@/types/routesType'
import { PageKey, PageName, PagePath } from '@/enums/pageEnum'
import { lazy } from 'react'
import { LayoutCode } from '@/enums/layoutEnum'

const contactRouter: Routes = [
  {
    key: PageKey.Contact,
    path: PagePath.Contact,
    name: PageName.Contact,
    showMenu: true,
    component: lazy(() => import('./ContactPage')),
    layout: LayoutCode.Public,
  },
]
export default contactRouter
