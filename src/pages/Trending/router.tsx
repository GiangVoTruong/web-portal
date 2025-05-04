import Routes from '@/types/routesType'
import { PageKey, PageName, PagePath } from '@/enums/pageEnum'
import { lazy } from 'react'
import { LayoutCode } from '@/enums/layoutEnum'

const trendingRouter: Routes = [
  {
    key: PageKey.Trending,
    path: PagePath.Trending,
    name: PageName.Trending,
    component: lazy(() => import('./TrendingPage')),
    layout: LayoutCode.Public,
    showMenu: true,
    // icon,
    menuChildren: [],
  },
]

export default trendingRouter
