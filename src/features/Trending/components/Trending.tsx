import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Card, Button, Tabs, Rate, Row, Col, Divider } from 'antd'
import {
  HomeOutlined,
  FireOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'

const { TabPane } = Tabs

const Trending: React.FC = () => {
  useEffect(() => {
    document.title = 'Xu hướng | Shop Của Bạn'
  }, [])

  // Mock trending products data
  const trendingProducts = {
    phones: [
      {
        id: 1,
        name: 'Điện thoại thông minh ProMax',
        price: 2999000,
        originalPrice: 3499000,
        rating: 4.8,
        reviewCount: 156,
        image: '/placeholder.jpg',
      },
      {
        id: 2,
        name: 'Điện thoại Ultra X',
        price: 1899000,
        originalPrice: 2199000,
        rating: 4.5,
        reviewCount: 98,
        image: '/placeholder.jpg',
      },
      {
        id: 3,
        name: 'Điện thoại Note 12',
        price: 5499000,
        originalPrice: 6199000,
        rating: 4.7,
        reviewCount: 120,
        image: '/placeholder.jpg',
      },
      {
        id: 4,
        name: 'Điện thoại Mini 5',
        price: 3299000,
        originalPrice: 3799000,
        rating: 4.6,
        reviewCount: 85,
        image: '/placeholder.jpg',
      },
    ],
    laptops: [
      {
        id: 5,
        name: 'Laptop Gaming Pro',
        price: 15999000,
        originalPrice: 17999000,
        rating: 4.9,
        reviewCount: 76,
        image: '/placeholder.jpg',
      },
      {
        id: 6,
        name: 'Laptop Ultrabook Air',
        price: 22999000,
        originalPrice: 24999000,
        rating: 4.7,
        reviewCount: 64,
        image: '/placeholder.jpg',
      },
    ],
    accessories: [
      {
        id: 7,
        name: 'Tai nghe không dây Pro',
        price: 2999000,
        originalPrice: 3499000,
        rating: 4.6,
        reviewCount: 112,
        image: '/placeholder.jpg',
      },
      {
        id: 8,
        name: 'Loa Bluetooth Mini',
        price: 1299000,
        originalPrice: 1499000,
        rating: 4.5,
        reviewCount: 95,
        image: '/placeholder.jpg',
      },
    ],
  }

  // Format price to VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
  }

  const renderProducts = (products: any[]) => (
    <Row gutter={[16, 16]}>
      {products.map(product => (
        <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
          <Card
            hoverable
            cover={
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">Hình sản phẩm</span>
              </div>
            }
            className="product-card"
          >
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
            <div className="flex items-center mb-4">
              <span className="text-blue-600 font-bold text-lg">
                {formatPrice(product.price)}
              </span>
              <span className="ml-2 text-gray-500 text-xs">
                ({product.reviewCount})
              </span>
            </div>
            <Link to={`/products/${product.id}`}>
              <h3 className="text-lg font-medium mb-2 hover:text-blue-500">
                {product.name}
              </h3>
            </Link>
            <div className="flex items-center mb-4">
              <span className="text-blue-600 font-bold text-lg">
                {formatPrice(product.price)}
              </span>
              <span className="ml-2 text-gray-500 text-sm line-through">
                {formatPrice(product.originalPrice)}
              </span>
            </div>
            <Button type="primary" icon={<ShoppingCartOutlined />} block>
              Thêm vào giỏ
            </Button>
          </Card>
        </Col>
      ))}
    </Row>
  )

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Xu hướng</Breadcrumb.Item>
      </Breadcrumb>

      <div className="flex items-center mb-6">
        <FireOutlined className="text-red-500 text-2xl mr-2" />
        <h1 className="text-2xl font-bold">Xu hướng mua sắm</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <Tabs defaultActiveKey="1" size="large">
          <TabPane tab="Điện thoại" key="1">
            {renderProducts(trendingProducts.phones)}
          </TabPane>
          <TabPane tab="Laptop" key="2">
            {renderProducts(trendingProducts.laptops)}
          </TabPane>
          <TabPane tab="Phụ kiện" key="3">
            {renderProducts(trendingProducts.accessories)}
          </TabPane>
        </Tabs>
      </div>

      <Divider />

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-6">Xu hướng tìm kiếm</h2>
        <div className="flex flex-wrap gap-2">
          <Button>iPhone</Button>
          <Button>Samsung</Button>
          <Button>Laptop Gaming</Button>
          <Button>Tai nghe không dây</Button>
          <Button>Sạc dự phòng</Button>
          <Button>Máy tính bảng</Button>
          <Button>Đồng hồ thông minh</Button>
          <Button>Camera</Button>
          <Button>Loa Bluetooth</Button>
          <Button>Bàn phím cơ</Button>
        </div>
      </div>
    </div>
  )
}

export default Trending
