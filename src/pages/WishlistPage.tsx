import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Button, Empty, Card, Rate } from 'antd'
import {
  HomeOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  DeleteOutlined,
} from '@ant-design/icons'

const WishlistPage: React.FC = () => {
  // Mock wishlist data
  const wishlistItems = [
    {
      id: 1,
      name: 'Điện thoại thông minh ProMax',
      price: 2999000,
      originalPrice: 3499000,
      image: '/placeholder.jpg',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Laptop Gaming Supreme',
      price: 5499000,
      originalPrice: 6199000,
      image: '/placeholder.jpg',
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Đồng hồ thông minh Series 5',
      price: 3299000,
      originalPrice: 3799000,
      image: '/placeholder.jpg',
      rating: 4.6,
    },
  ]

  useEffect(() => {
    document.title = 'Sản phẩm yêu thích | Shop Của Bạn'
  }, [])

  // Format price to VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb className="mb-6">
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item>Sản phẩm yêu thích</Breadcrumb.Item>
        </Breadcrumb>

        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Bạn chưa có sản phẩm yêu thích nào"
        >
          <Link to="/products">
            <Button type="primary">Mua sắm ngay</Button>
          </Link>
        </Empty>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Sản phẩm yêu thích</Breadcrumb.Item>
      </Breadcrumb>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Sản phẩm yêu thích ({wishlistItems.length})</h1>
        <Button danger>Xóa tất cả</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistItems.map(item => (
          <Card
            key={item.id}
            cover={
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">Hình sản phẩm</span>
              </div>
            }
            actions={[
              <Button key="delete" type="text" danger icon={<DeleteOutlined />} />,
              <Button key="add" type="primary" icon={<ShoppingCartOutlined />}>
                Thêm vào giỏ
              </Button>,
            ]}
            className="product-card"
          >
            <Card.Meta
              title={
                <Link to={`/products/${item.id}`} className="text-lg hover:text-blue-500">
                  {item.name}
                </Link>
              }
              description={
                <div>
                  <Rate disabled defaultValue={item.rating} allowHalf className="text-sm mb-2" />
                  <div className="flex items-center">
                    <span className="text-blue-600 font-bold text-lg">
                      {formatPrice(item.price)}
                    </span>
                    <span className="ml-2 text-gray-500 text-sm line-through">
                      {formatPrice(item.originalPrice)}
                    </span>
                  </div>
                </div>
              }
            />
          </Card>
        ))}
      </div>
    </div>
  )
}

export default WishlistPage
