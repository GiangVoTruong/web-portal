import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { PagePath } from '../app/AppMain'

interface PrivateRouteProps {
  children: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const location = useLocation()
  const isAuthenticated = localStorage.getItem('token') !== null

  if (!isAuthenticated) {
    // Chuyển hướng đến trang đăng nhập và lưu đường dẫn hiện tại
    return <Navigate to={PagePath.Login} state={{ from: location.pathname }} replace />
  }

  return <>{children}</>
}

export default PrivateRoute
