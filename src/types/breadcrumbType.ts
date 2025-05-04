export type Breadcrumb = {
  path: string
  label: string | any
  icon?: React.ReactNode
  useIconInsteadOfLabel?: boolean
}

export type Breadcrumbs = Breadcrumb[]
