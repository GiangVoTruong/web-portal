// src/components/LoadingPage.tsx
import React from 'react'
import { Spin } from 'antd'

const LoadingPage: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <Spin size="large" />
      <p style={{ marginTop: 16 }}>Đang tải...</p>
    </div>
  )
}

export default LoadingPage
