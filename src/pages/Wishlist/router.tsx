import Routes from '@/types/routesType'
import { lazy } from 'react'
import { PageKey, PageName, PagePath } from '@/enums/pageEnum'
import { LayoutCode } from '@/enums/layoutEnum'

const wishlistRouter: Routes = [
  {
    key: PageKey.Wishlist,
    path: PagePath.Wishlist,
    name: PageName.Wishlist,
    component: lazy(() => import('./WishlistPage')),
    layout: LayoutCode.Public,
    showMenu: true,
    // icon,
    menuChildren: [],
  },
]

export default wishlistRouter
