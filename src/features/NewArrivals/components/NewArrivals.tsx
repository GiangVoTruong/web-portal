import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Breadcrumb,
  Card,
  Button,
  Rate,
  Row,
  Col,
  Pagination,
  Select,
} from 'antd'
import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons'

const { Option } = Select

const NewArrivals: React.FC = () => {
  useEffect(() => {
    document.title = 'Sản Phẩm Mới | Shop Của Bạn'
  }, [])

  // Mock new products data
  const newProducts = [
    {
      id: 1,
      name: 'Điện thoại thông minh ProMax 2025',
      price: 3999000,
      originalPrice: 4499000,
      rating: 4.8,
      reviewCount: 12,
      image: '/placeholder.jpg',
      date: '2025-04-15',
    },
    {
      id: 2,
      name: 'Tai nghe không dây Ultra Pro',
      price: 2899000,
      originalPrice: 3199000,
      rating: 4.5,
      reviewCount: 8,
      image: '/placeholder.jpg',
      date: '2025-04-10',
    },
    {
      id: 3,
      name: 'Laptop Gaming Supreme Pro',
      price: 25499000,
      originalPrice: 26999000,
      rating: 4.9,
      reviewCount: 5,
      image: '/placeholder.jpg',
      date: '2025-04-05',
    },
    {
      id: 4,
      name: 'Đồng hồ thông minh Series 6',
      price: 4299000,
      originalPrice: 4799000,
      rating: 4.6,
      reviewCount: 7,
      image: '/placeholder.jpg',
      date: '2025-04-01',
    },
    {
      id: 5,
      name: 'Máy tính bảng Pro 12',
      price: 12999000,
      originalPrice: 13999000,
      rating: 4.7,
      reviewCount: 9,
      image: '/placeholder.jpg',
      date: '2025-03-25',
    },
    {
      id: 6,
      name: 'Loa thông minh AI 3',
      price: 1899000,
      originalPrice: 2199000,
      rating: 4.4,
      reviewCount: 6,
      image: '/placeholder.jpg',
      date: '2025-03-20',
    },
    {
      id: 7,
      name: 'Camera hành trình Pro X',
      price: 3599000,
      originalPrice: 3999000,
      rating: 4.3,
      reviewCount: 4,
      image: '/placeholder.jpg',
      date: '2025-03-15',
    },
    {
      id: 8,
      name: 'Bàn phím cơ Gaming RGB',
      price: 2299000,
      originalPrice: 2499000,
      rating: 4.5,
      reviewCount: 10,
      image: '/placeholder.jpg',
      date: '2025-03-10',
    },
  ]

  // Format price to VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
  }

  // Format date to display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date)
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Sản phẩm mới</Breadcrumb.Item>
      </Breadcrumb>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">Sản phẩm mới nhất</h1>
        <div className="flex items-center">
          <span className="mr-2">Sắp xếp theo:</span>
          <Select defaultValue="newest" style={{ width: 180 }}>
            <Option value="newest">Mới nhất</Option>
            <Option value="price-asc">Giá: Thấp đến cao</Option>
            <Option value="price-desc">Giá: Cao đến thấp</Option>
            <Option value="rating">Đánh giá</Option>
          </Select>
        </div>
      </div>

      <Row gutter={[16, 16]}>
        {newProducts.map(product => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <Card
              hoverable
              cover={
                <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                  <span className="text-gray-400">Hình sản phẩm</span>
                  <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    Mới
                  </div>
                </div>
              }
              className="product-card h-full flex flex-col"
            >
              <div className="flex-grow">
                <div className="mb-2">
                  <Rate
                    disabled
                    defaultValue={product.rating}
                    allowHalf
                    className="text-sm"
                  />
                  <span className="ml-2 text-gray-500 text-xs">
                    ({product.reviewCount})
                  </span>
                </div>
                <Link to={`/products/${product.id}`}>
                  <h3 className="text-lg font-medium mb-2 hover:text-blue-500">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center mb-1">
                  <span className="text-blue-600 font-bold">
                    {formatPrice(product.price)}
                  </span>
                  <span className="ml-2 text-gray-500 text-sm line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  Ra mắt: {formatDate(product.date)}
                </p>
              </div>
              <Button type="primary" icon={<ShoppingCartOutlined />} block>
                Thêm vào giỏ
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="mt-10 flex justify-center">
        <Pagination defaultCurrent={1} total={50} showSizeChanger />
      </div>
    </div>
  )
}

export default NewArrivals
