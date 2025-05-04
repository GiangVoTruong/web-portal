import {
  DeleteOutlined,
  HomeOutlined,
  ShoppingOutlined,
} from '@ant-design/icons'
import { Breadcrumb, Button, Divider, InputNumber, Result, Table } from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Cart: React.FC = () => {
  const [cart, setCart] = useState<any[]>([
    {
      key: '1',
      id: '1',
      name: 'Điện thoại thông minh ProMax',
      price: 2999000,
      quantity: 1,
      image: '/placeholder.jpg',
    },
    {
      key: '2',
      id: '2',
      name: 'Tai nghe không dây Ultra',
      price: 1899000,
      quantity: 1,
      image: '/placeholder.jpg',
    },
  ])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = 'Giỏ hàng | Shop Của Bạn'
  }, [])

  // Format price to VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
  }

  const handleQuantityChange = (value: number | null, record: any) => {
    if (value) {
      const newCart = cart.map(item => {
        if (item.key === record.key) {
          return { ...item, quantity: value }
        }
        return item
      })
      setCart(newCart)
    }
  }

  const handleRemoveItem = (record: any) => {
    const newCart = cart.filter(item => item.key !== record.key)
    setCart(newCart)
  }

  const columns = [
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      key: 'name',
      render: (_: any, record: any) => (
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-100 rounded mr-4 flex items-center justify-center">
            <span className="text-gray-400 text-xs">Hình</span>
          </div>
          <Link
            to={`/products/${record.id}`}
            className="text-blue-600 hover:underline"
          >
            {record.name}
          </Link>
        </div>
      ),
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => formatPrice(price),
    },
    {
      title: 'Số lượng',
      key: 'quantity',
      dataIndex: 'quantity',
      render: (_: any, record: any) => (
        <InputNumber
          min={1}
          max={10}
          value={record.quantity}
          onChange={value => handleQuantityChange(value, record)}
        />
      ),
    },
    {
      title: 'Tổng',
      key: 'total',
      render: (_: any, record: any) =>
        formatPrice(record.price * record.quantity),
    },
    {
      title: '',
      key: 'action',
      render: (_: any, record: any) => (
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => handleRemoveItem(record)}
        />
      ),
    },
  ]

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const shipping = cart.length > 0 ? 30000 : 0
  const total = subtotal + shipping

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb className="mb-6">
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item>Giỏ hàng</Breadcrumb.Item>
        </Breadcrumb>

        <Result
          icon={<ShoppingOutlined />}
          title="Giỏ hàng của bạn đang trống"
          subTitle="Hãy thêm sản phẩm vào giỏ hàng để tiếp tục"
          extra={
            <Link to="/products">
              <Button type="primary" size="large">
                Mua sắm ngay
              </Button>
            </Link>
          }
        />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Giỏ hàng</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="text-2xl font-bold mb-6">Giỏ hàng của bạn</h1>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <Table
          columns={columns}
          dataSource={cart}
          pagination={false}
          rowKey="key"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Tóm tắt đơn hàng</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Tạm tính</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Phí vận chuyển</span>
              <span>{formatPrice(shipping)}</span>
            </div>
            <Divider />
            <div className="flex justify-between font-bold">
              <span>Tổng cộng</span>
              <span className="text-blue-600 text-xl">
                {formatPrice(total)}
              </span>
            </div>
          </div>
          <div className="mt-6">
            <Link to="/checkout">
              <Button type="primary" size="large" block loading={loading}>
                Tiến hành thanh toán
              </Button>
            </Link>
            <Link to="/products">
              <Button type="link" block className="mt-2">
                Tiếp tục mua sắm
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
