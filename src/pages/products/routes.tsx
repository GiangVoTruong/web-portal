import { LayoutCode } from '@/enums/layoutEnum'
import { PageKey, PageName, PagePath } from '@/enums/pageEnum'
import type Routes from '@/types/routesType'
import { ShoppingOutlined } from '@ant-design/icons'
import { lazy } from 'react'

const productRoutes: Routes = [
  {
    key: PageKey.Products,
    path: PagePath.Products,
    name: PageName.Products,
    component: lazy(() => import('./ProductsPage')),
    layout: LayoutCode.Public,
    showMenu: true,
    // icon,
    menuChildren: [
      {
        key: PageKey.ViewProduct,
        path: PagePath.ViewProduct,
        label: PageName.ViewProduct,
      },
      // {
      //   key: PageKey.ProductBrand,
      //   path: PagePath.ProductBrand,
      //   label: PageName.ProductBrand,
      // },
      // {
      //   key: PageKey.ProductInventory,
      //   path: PagePath.ProductInventory,
      //   label: PageName.ProductInventory,
      // },
    ],
  },
]
export default productRoutes
