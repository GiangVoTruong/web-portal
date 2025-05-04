import { Outlet } from 'react-router-dom'
import PublicHeader from './PublicHeader'
import PublicFooter from './PublicFooter'
import { Layout } from 'antd'

export default function PublicLayout() {
  return (
    <Layout className="min-h-screen flex flex-col">
      <PublicHeader />
      <Outlet />
      <PublicFooter />
    </Layout>
  )
}
