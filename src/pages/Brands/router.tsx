import { LayoutCode } from '@/enums/layoutEnum'
import { PageKey, PageName, PagePath } from '@/enums/pageEnum'
import Routes from '@/types/routesType'
import { lazy } from 'react'

const brandsRouter: Routes = [
  {
    key: PageKey.Brand,
    path: PagePath.Brand,
    name: PageName.Brand,
    showMenu: true,
    //icon
    component: lazy(() => import('./BrandsPage')),
    layout: LayoutCode.Public,
  },
]
export default brandsRouter
