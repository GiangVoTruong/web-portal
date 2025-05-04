import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  Button,
  Rate,
  Tag,
  Typography,
  Badge,
  Row,
  Col,
  Divider,
} from 'antd'
import {
  ShoppingCartOutlined,
  HeartOutlined,
  EyeOutlined,
} from '@ant-design/icons'

const { Meta } = Card
const { Title, Text } = Typography

// Mock product data
const products = [
  {
    id: 1,
    name: 'Điện thoại thông minh ProMax',
    price: 2999000,
    originalPrice: 3499000,
    image: 'phone.jpg',
    rating: 4.8,
    discount: 14,
    stock: 25,
  },
  {
    id: 2,
    name: 'Tai nghe không dây Ultra',
    price: 1899000,
    originalPrice: 2199000,
    image: 'headphones.jpg',
    rating: 4.5,
    discount: 14,
    stock: 10,
  },
  {
    id: 3,
    name: 'Laptop Gaming Supreme',
    price: 5499000,
    originalPrice: 6199000,
    image: 'laptop.jpg',
    rating: 4.7,
    discount: 11,
    stock: 5,
  },
  {
    id: 4,
    name: 'Đồng hồ thông minh Series 5',
    price: 3299000,
    originalPrice: 3799000,
    image: 'watch.jpg',
    rating: 4.6,
    discount: 13,
    stock: 15,
  },
]

const Products: React.FC = () => {
  // Format price to VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
  }

  return (
    <section className="products-section">
      <Row justify="space-between" align="middle" className="mb-6">
        <Col>
          <Title level={3} style={{ margin: 0 }}>
            Sản Phẩm Nổi Bật
          </Title>
        </Col>
        <Col>
          <Link to="/products">
            <Button type="link">
              Xem tất cả <EyeOutlined />
            </Button>
          </Link>
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        {products.map(product => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <Badge.Ribbon
              text={`-${product.discount}%`}
              color="red"
              style={{ display: product.discount > 0 ? 'block' : 'none' }}
            >
              <Card
                hoverable
                cover={
                  <div
                    style={{
                      height: 200,
                      background: '#f5f5f5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ color: '#999' }}>Hình Sản Phẩm</span>
                  </div>
                }
                actions={[
                  <HeartOutlined key="favorite" />,
                  <ShoppingCartOutlined key="add-to-cart" />,
                  <Link to={`/products/detail:${product.id}`} key="view">
                    <EyeOutlined />
                  </Link>,
                ]}
                bodyStyle={{ padding: '16px' }}
              >
                <Meta
                  title={
                    <Link to={`/products/detail:${product.id}`}>
                      <Text strong ellipsis style={{ fontSize: 16 }}>
                        {product.name}
                      </Text>
                    </Link>
                  }
                  description={
                    <>
                      <Rate
                        allowHalf
                        defaultValue={product.rating}
                        disabled
                        style={{ fontSize: 12 }}
                      />
                      <div style={{ margin: '8px 0' }}>
                        <Text strong type="danger" style={{ fontSize: 16 }}>
                          {formatPrice(product.price)}
                        </Text>
                        <Text
                          delete
                          type="secondary"
                          style={{ marginLeft: 8, fontSize: 12 }}
                        >
                          {formatPrice(product.originalPrice)}
                        </Text>
                      </div>
                      <div style={{ marginTop: 4 }}>
                        <Text type="success" style={{ fontSize: 12 }}>
                          Tiết kiệm:{' '}
                          {formatPrice(product.originalPrice - product.price)}
                        </Text>
                      </div>
                      <div style={{ marginTop: 8 }}>
                        {product.stock <= 10 ? (
                          <Tag color={product.stock <= 5 ? 'error' : 'warning'}>
                            Còn {product.stock} sản phẩm
                          </Tag>
                        ) : (
                          <Tag color="success">Còn hàng</Tag>
                        )}
                      </div>
                    </>
                  }
                />
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>

      <Divider />

      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <Link to="/products">
          <Button type="primary" size="large" icon={<EyeOutlined />}>
            Xem tất cả sản phẩm
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default Products
