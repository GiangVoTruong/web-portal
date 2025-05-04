import { type MenuProps } from 'antd'
import type React from 'react'
import { type Breadcrumb } from './breadcrumbType'
import { type GlobalLayoutProps } from './layoutType'
import { JSX } from 'react'
import { ExtraRoleCodes } from './roleType'
import { LayoutCode } from '../enums/layoutEnum'

type MenuItem = Required<MenuProps>['items'][number]

export type Router = {
  name?: string
  label?: any
  path?: string
  key: string
  component?:
    | React.LazyExoticComponent<() => JSX.Element>
    | (() => JSX.Element)
    | (() => JSX.Element)
    | React.LazyExoticComponent<(props: any) => JSX.Element>
    | (() => JSX.Element)
    | any
  breadcrumbs?: Breadcrumb[]
  layout?: LayoutCode
  layoutProps?: GlobalLayoutProps
  showMenu?: boolean | LayoutCode[]
  icon?: React.ReactNode
  children?: any
  codes?: []
  menuChildren?: Array<MenuItem & { path?: string } & Router>
  /**
   * 1. roles: ['a', 'b', 'c'] -> Bắt buộc user phải có 1 trong các roles 'a', 'b', 'c'
   * 2. roles: ['a', 'b', 'c', { $and: ['d', 'e'] } ] -> Bắt buộc user phải có 1 trong các roles 'a', 'b', 'c' hoặc phải cùng có 'd', 'e'
   * 3. roles: { $and: ['a', 'b', 'c'] } -> Bắt buộc user phải có các roles 'a', 'b', 'c' không được thiếu role nào
   * 4. roles: { $or: ['a', 'b', 'c'] } -> Bắt buộc user phải có 1 trong các roles 'a', 'b', 'c'
   * 5. roles: { $or: [ { $and: ['a', 'b', 'c'] }, 'd' ]} -> Bắt buộc user phải phù hợp 1 trong các điều kiện như bắt buộc phải có 3 roles 'a', 'b', 'c' hoặc chỉ 1 cần role 'd'
   *
   */
  roles?: ExtraRoleCodes
}

export type Routes = Router[]

export default Routes
