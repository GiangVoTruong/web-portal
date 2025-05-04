import { Spin } from 'antd'

const LoadingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spin size="large" tip="Đang tải..." />
    </div>
  )
}

export default LoadingPage
