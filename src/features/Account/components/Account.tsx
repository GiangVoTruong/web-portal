import {
  EnvironmentOutlined,
  HeartOutlined,
  HomeOutlined,
  LockOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons'
import {
  Avatar,
  Breadcrumb,
  Button,
  Descriptions,
  Divider,
  Form,
  Input,
  Menu,
  Table,
  Tag,
} from 'antd'
import { useEffect, useState } from 'react'
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'

// Profile component
const Profile: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Thông tin tài khoản</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
          <Avatar
            size={80}
            icon={<UserOutlined />}
            className="mb-4 sm:mb-0 sm:mr-6"
          />
          <div>
            <h3 className="text-lg font-medium">Nguyễn Văn A</h3>
            <p className="text-gray-500">nguyenvana@example.com</p>
            <p className="text-gray-500">0123456789</p>
          </div>
        </div>
        <Divider />
        <Descriptions title="Chi tiết tài khoản" layout="vertical" bordered>
          <Descriptions.Item label="Họ tên" span={3}>
            Nguyễn Văn A
          </Descriptions.Item>
          <Descriptions.Item label="Email" span={3}>
            nguyenvana@example.com
          </Descriptions.Item>
          <Descriptions.Item label="Số điện thoại" span={3}>
            0123456789
          </Descriptions.Item>
          <Descriptions.Item label="Giới tính" span={3}>
            Nam
          </Descriptions.Item>
          <Descriptions.Item label="Ngày sinh" span={3}>
            01/01/1990
          </Descriptions.Item>
        </Descriptions>
        <div className="mt-6">
          <Button type="primary">Cập nhật thông tin</Button>
        </div>
      </div>
    </div>
  )
}

// Orders component
const Orders: React.FC = () => {
  const orders = [
    {
      id: 'ORDER-123456',
      date: '01/05/2023',
      status: 'Đã giao',
      total: 4898000,
      items: 2,
    },
    {
      id: 'ORDER-123457',
      date: '15/04/2023',
      status: 'Đang giao',
      total: 2999000,
      items: 1,
    },
    {
      id: 'ORDER-123458',
      date: '30/03/2023',
      status: 'Đã hủy',
      total: 1899000,
      items: 1,
    },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
  }

  const columns = [
    {
      title: 'Mã đơn hàng',
      dataIndex: 'id',
      key: 'id',
      render: (id: string) => <Link to={`/account/orders/${id}`}>{id}</Link>,
    },
    {
      title: 'Ngày đặt',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Số lượng',
      dataIndex: 'items',
      key: 'items',
      render: (items: number) => `${items} sản phẩm`,
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'total',
      key: 'total',
      render: (total: number) => formatPrice(total),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = 'green'
        if (status === 'Đang giao') {
          color = 'blue'
        } else if (status === 'Đã hủy') {
          color = 'red'
        }
        return <Tag color={color}>{status}</Tag>
      },
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (_: any, record: any) => (
        <Link to={`/account/orders/${record.id}`}>Xem chi tiết</Link>
      ),
    },
  ]

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Đơn hàng của tôi</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <Table columns={columns} dataSource={orders} rowKey="id" />
      </div>
    </div>
  )
}

// Addresses component
const Addresses: React.FC = () => {
  const addresses = [
    {
      id: 1,
      name: 'Nhà riêng',
      address: '123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh',
      phone: '0123456789',
      isDefault: true,
    },
    {
      id: 2,
      name: 'Văn phòng',
      address: '456 Đường DEF, Phường UVW, Quận 2, TP. Hồ Chí Minh',
      phone: '0987654321',
      isDefault: false,
    },
  ]

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Sổ địa chỉ</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addresses.map(address => (
            <div
              key={address.id}
              className={`border ${
                address.isDefault ? 'border-blue-500' : 'border-gray-200'
              } p-4 rounded-lg`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{address.name}</h3>
                {address.isDefault && <Tag color="blue">Mặc định</Tag>}
              </div>
              <p className="text-gray-700">{address.address}</p>
              <p className="text-gray-700">{address.phone}</p>
              <div className="mt-4 flex space-x-2">
                <Button type="default" size="small">
                  Sửa
                </Button>
                {!address.isDefault && (
                  <>
                    <Button type="default" size="small">
                      Đặt làm mặc định
                    </Button>
                    <Button type="default" danger size="small">
                      Xóa
                    </Button>
                  </>
                )}
              </div>
            </div>
          ))}
          <div className="border border-dashed border-gray-300 p-4 rounded-lg flex items-center justify-center">
            <Button type="dashed" icon={<EnvironmentOutlined />}>
              Thêm địa chỉ mới
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Wishlist component
const Wishlist: React.FC = () => {
  // Using the same data structure as the FeaturedProducts component
  const products = [
    {
      id: 1,
      name: 'Điện thoại thông minh ProMax',
      price: 2999000,
      originalPrice: 3499000,
      image: 'phone.jpg',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Laptop Gaming Supreme',
      price: 5499000,
      originalPrice: 6199000,
      image: 'laptop.jpg',
      rating: 4.7,
    },
  ]

  // Format price to VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Sản phẩm yêu thích</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {products.length === 0 ? (
          <div className="text-center py-8">
            <HeartOutlined
              style={{ fontSize: 48 }}
              className="text-gray-300 mb-4"
            />
            <p className="text-gray-500">Bạn chưa có sản phẩm yêu thích nào</p>
            <Link to="/products">
              <Button type="primary" className="mt-4">
                Khám phá sản phẩm
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-lg border border-gray-100 p-4 flex flex-col relative"
              >
                <Button
                  type="text"
                  danger
                  icon={<HeartOutlined />}
                  className="absolute top-2 right-2"
                />
                <Link to={`/products/${product.id}`} className="block mb-4">
                  <div className="bg-gray-100 h-40 rounded-md flex items-center justify-center mb-3">
                    <span className="text-gray-400">Hình Sản Phẩm</span>
                  </div>
                </Link>
                <div className="flex-grow">
                  <Link to={`/products/${product.id}`} className="block">
                    <h3 className="text-gray-800 font-medium mb-1 hover:text-blue-500">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center mb-3">
                    <span className="text-blue-600 font-bold">
                      {formatPrice(product.price)}
                    </span>
                    <span className="ml-2 text-gray-500 text-sm line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                </div>
                <Button type="primary" block>
                  Thêm vào giỏ
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ChangePassword component
const ChangePassword: React.FC = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Password changed:', values)
    // Here would be the API call to change password
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Đổi mật khẩu</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
          className="max-w-md"
        >
          <Form.Item
            name="currentPassword"
            label="Mật khẩu hiện tại"
            rules={[
              { required: true, message: 'Vui lòng nhập mật khẩu hiện tại' },
            ]}
          >
            <Input.Password placeholder="Nhập mật khẩu hiện tại" />
          </Form.Item>
          <Form.Item
            name="newPassword"
            label="Mật khẩu mới"
            rules={[
              { required: true, message: 'Vui lòng nhập mật khẩu mới' },
              { min: 8, message: 'Mật khẩu phải có ít nhất 8 ký tự' },
            ]}
          >
            <Input.Password placeholder="Nhập mật khẩu mới" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Xác nhận mật khẩu mới"
            dependencies={['newPassword']}
            rules={[
              { required: true, message: 'Vui lòng xác nhận mật khẩu mới' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    new Error('Mật khẩu xác nhận không khớp!')
                  )
                },
              }),
            ]}
          >
            <Input.Password placeholder="Xác nhận mật khẩu mới" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Cập nhật mật khẩu
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

const Account: React.FC = () => {
  const location = useLocation()
  const [selectedKey, setSelectedKey] = useState('profile')

  useEffect(() => {
    document.title = 'Tài khoản | Shop Của Bạn'
    const path = location.pathname.split('/').pop() || 'profile'
    setSelectedKey(path)
  }, [location])

  const menuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Thông tin tài khoản',
    },
    {
      key: 'orders',
      icon: <ShoppingOutlined />,
      label: 'Đơn hàng của tôi',
    },
    {
      key: 'addresses',
      icon: <EnvironmentOutlined />,
      label: 'Sổ địa chỉ',
    },
    {
      key: 'wishlist',
      icon: <HeartOutlined />,
      label: 'Sản phẩm yêu thích',
    },
    {
      key: 'change-password',
      icon: <LockOutlined />,
      label: 'Đổi mật khẩu',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Đăng xuất',
      danger: true,
    },
  ]

  const handleMenuClick = (e: any) => {
    if (e.key === 'logout') {
      // Handle logout logic
      console.log('Logging out...')
    } else {
      setSelectedKey(e.key)
    }
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Tài khoản</Breadcrumb.Item>
        <Breadcrumb.Item>
          {menuItems.find(item => item.key === selectedKey)?.label}
        </Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="text-2xl font-bold mb-6">Tài khoản của tôi</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Menu
              mode="vertical"
              selectedKeys={[selectedKey]}
              onClick={handleMenuClick}
              style={{ width: '100%' }}
              items={menuItems}
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/account/profile" replace />}
            />
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Account
