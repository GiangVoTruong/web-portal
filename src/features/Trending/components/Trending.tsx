import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Breadcrumb,
  Card,
  Button,
  Tabs,
  Rate,
  Row,
  Col,
  Divider,
  Space,
  Typography,
  Tag,
  Statistic,
  Progress,
  Badge,
  Tooltip,
  Carousel,
  List,
  Avatar,
  message,
} from 'antd'
import {
  HomeOutlined,
  FireOutlined,
  ShoppingCartOutlined,
  RiseOutlined,
  EyeOutlined,
  HeartOutlined,
  MobileOutlined,
  LaptopOutlined,
  ToolOutlined,
  SearchOutlined,
  TrophyOutlined,
  StarFilled,
  ArrowUpOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'

const { TabPane } = Tabs
const { Title, Text, Paragraph } = Typography
const { Countdown } = Statistic

const Trending: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    document.title = 'Xu hướng | Shop Của Bạn'
  }, [])

  // Mock trending products data with more details
  const trendingProducts = {
    phones: [
      {
        id: 1,
        name: 'iPhone 15 Pro Max 256GB',
        price: 29990000,
        originalPrice: 34990000,
        rating: 4.8,
        reviewCount: 156,
        image: '/api/placeholder/400/400',
        growth: 25,
        views: 12500,
        sold: 320,
        tag: 'Hot',
        discount: 15,
      },
      {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        originalPrice: 32990000,
        rating: 4.7,
        reviewCount: 98,
        image: '/api/placeholder/400/400',
        growth: 18,
        views: 8900,
        sold: 210,
        tag: 'New',
        discount: 12,
      },
      {
        id: 3,
        name: 'Xiaomi 14 Pro',
        price: 18990000,
        originalPrice: 22990000,
        rating: 4.6,
        reviewCount: 120,
        image: '/api/placeholder/400/400',
        growth: 32,
        views: 15600,
        sold: 450,
        tag: 'Best Value',
        discount: 17,
      },
      {
        id: 4,
        name: 'OPPO Find N3 Flip',
        price: 19990000,
        originalPrice: 23990000,
        rating: 4.5,
        reviewCount: 85,
        image: '/api/placeholder/400/400',
        growth: 15,
        views: 6700,
        sold: 180,
        tag: 'Trending',
        discount: 17,
      },
    ],
    laptops: [
      {
        id: 5,
        name: 'MacBook Pro M3 14"',
        price: 49990000,
        originalPrice: 52990000,
        rating: 4.9,
        reviewCount: 76,
        image: '/api/placeholder/400/400',
        growth: 28,
        views: 9800,
        sold: 145,
        tag: 'Premium',
        discount: 6,
      },
      {
        id: 6,
        name: 'ASUS ROG Zephyrus G14',
        price: 35990000,
        originalPrice: 39990000,
        rating: 4.7,
        reviewCount: 64,
        image: '/api/placeholder/400/400',
        growth: 22,
        views: 7600,
        sold: 98,
        tag: 'Gaming',
        discount: 10,
      },
    ],
    accessories: [
      {
        id: 7,
        name: 'AirPods Pro 2',
        price: 5990000,
        originalPrice: 6990000,
        rating: 4.6,
        reviewCount: 112,
        image: '/api/placeholder/400/400',
        growth: 35,
        views: 18900,
        sold: 520,
        tag: 'Best Seller',
        discount: 14,
      },
      {
        id: 8,
        name: 'Apple Watch Series 9',
        price: 10990000,
        originalPrice: 12990000,
        rating: 4.5,
        reviewCount: 95,
        image: '/api/placeholder/400/400',
        growth: 20,
        views: 8200,
        sold: 240,
        tag: 'Smart',
        discount: 15,
      },
    ],
  }

  // Top brands data
  const topBrands = [
    {
      name: 'Apple',
      growth: 32,
      logo: '/api/placeholder/80/80',
      color: '#000000',
    },
    {
      name: 'Samsung',
      growth: 28,
      logo: '/api/placeholder/80/80',
      color: '#1428A0',
    },
    {
      name: 'Xiaomi',
      growth: 45,
      logo: '/api/placeholder/80/80',
      color: '#FF6900',
    },
    {
      name: 'ASUS',
      growth: 25,
      logo: '/api/placeholder/80/80',
      color: '#00539C',
    },
    {
      name: 'Sony',
      growth: 18,
      logo: '/api/placeholder/80/80',
      color: '#000000',
    },
    {
      name: 'Dell',
      growth: 22,
      logo: '/api/placeholder/80/80',
      color: '#007DB8',
    },
  ]

  // Trending searches data
  const trendingSearches = [
    { keyword: 'iPhone 15', growth: 45, count: '25.6K' },
    { keyword: 'Samsung S24', growth: 38, count: '18.2K' },
    { keyword: 'Laptop Gaming', growth: 32, count: '15.8K' },
    { keyword: 'Tai nghe không dây', growth: 28, count: '12.4K' },
    { keyword: 'Sạc dự phòng', growth: 25, count: '10.9K' },
    { keyword: 'Máy tính bảng', growth: 22, count: '9.5K' },
    { keyword: 'Đồng hồ thông minh', growth: 20, count: '8.7K' },
    { keyword: 'Camera', growth: 18, count: '7.3K' },
    { keyword: 'Loa Bluetooth', growth: 15, count: '6.8K' },
    { keyword: 'Bàn phím cơ', growth: 12, count: '5.4K' },
  ]

  // Format price to VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(price)
  }

  // Handle add to cart
  const handleAddToCart = (product: any) => {
    message.success(`Đã thêm ${product.name} vào giỏ hàng`)
  }

  // Toggle favorite
  const toggleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId))
      message.info('Đã xóa khỏi danh sách yêu thích')
    } else {
      setFavorites([...favorites, productId])
      message.success('Đã thêm vào danh sách yêu thích')
    }
  }

  // Render product card
  const renderProductCard = (product: any) => (
    <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
      <Badge.Ribbon
        text={product.tag}
        color={product.tag === 'Hot' ? 'red' : 'blue'}
      >
        <Card
          hoverable
          cover={
            <div className="relative group">
              <img
                alt={product.name}
                src={product.image}
                className="h-56 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <Tooltip title="Xem chi tiết">
                  <Link to={`/products/${product.id}`}>
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<EyeOutlined />}
                    />
                  </Link>
                </Tooltip>
                <Tooltip
                  title={
                    favorites.includes(product.id)
                      ? 'Bỏ yêu thích'
                      : 'Yêu thích'
                  }
                >
                  <Button
                    type="primary"
                    shape="circle"
                    danger={favorites.includes(product.id)}
                    icon={<HeartOutlined />}
                    onClick={() => toggleFavorite(product.id)}
                  />
                </Tooltip>
              </div>
              <div className="absolute top-2 right-2">
                <Tag color="red">-{product.discount}%</Tag>
              </div>
            </div>
          }
          className="h-full"
        >
          <div className="flex flex-col h-full">
            <div className="mb-2">
              <Rate
                disabled
                value={product.rating}
                allowHalf
                className="text-sm"
              />
              <span className="ml-2 text-gray-500 text-xs">
                ({product.reviewCount})
              </span>
            </div>
            <Link to={`/products/${product.id}`}>
              <Text
                strong
                className="text-base hover:text-blue-500 line-clamp-2 mb-2"
              >
                {product.name}
              </Text>
            </Link>
            <div className="flex items-center mb-3">
              <Text strong className="text-blue-600 text-lg">
                {formatPrice(product.price)}
              </Text>
              <Text delete className="ml-2 text-sm text-gray-500">
                {formatPrice(product.originalPrice)}
              </Text>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Đã bán: {product.sold}</span>
                <span>Lượt xem: {product.views.toLocaleString()}</span>
              </div>
              <Progress
                percent={Math.min(100, (product.sold / 500) * 100)}
                size="small"
                showInfo={false}
                strokeColor="#52c41a"
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <Space>
                <RiseOutlined className="text-green-500" />
                <Text type="success">+{product.growth}%</Text>
              </Space>
              <Tag color="orange">Top {Math.floor(Math.random() * 10) + 1}</Tag>
            </div>

            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              block
              onClick={() => handleAddToCart(product)}
            >
              Thêm vào giỏ
            </Button>
          </div>
        </Card>
      </Badge.Ribbon>
    </Col>
  )

  // Tab icons
  const tabIcons = {
    phones: <MobileOutlined />,
    laptops: <LaptopOutlined />,
    accessories: <ToolOutlined />,
  }

  // Render carousel for top products
  const renderTopProductsCarousel = () => (
    <Carousel autoplay className="mb-8">
      {[
        ...trendingProducts.phones,
        ...trendingProducts.laptops,
        ...trendingProducts.accessories,
      ]
        .sort((a, b) => b.growth - a.growth)
        .slice(0, 5)
        .map(product => (
          <div key={product.id}>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <Row gutter={24} align="middle">
                <Col xs={24} md={12}>
                  <Space direction="vertical" size="large">
                    <Tag
                      color="red"
                      icon={<FireOutlined />}
                      className="text-base"
                    >
                      HOT TREND #{Math.floor(Math.random() * 5) + 1}
                    </Tag>
                    <Title level={2} className="text-white m-0">
                      {product.name}
                    </Title>
                    <div>
                      <Text className="text-3xl font-bold text-white">
                        {formatPrice(product.price)}
                      </Text>
                      <Text delete className="ml-3 text-xl text-gray-200">
                        {formatPrice(product.originalPrice)}
                      </Text>
                    </div>
                    <Space>
                      <Statistic
                        value={product.growth}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                        valueStyle={{ color: '#fff' }}
                        title={
                          <span className="text-gray-200">Tăng trưởng</span>
                        }
                      />
                      <Divider
                        type="vertical"
                        className="bg-white opacity-50"
                      />
                      <Statistic
                        value={product.sold}
                        suffix="đã bán"
                        valueStyle={{ color: '#fff' }}
                        title={<span className="text-gray-200">Tháng này</span>}
                      />
                    </Space>
                    <Link to={`/products/${product.id}`}>
                      <Button
                        size="large"
                        type="primary"
                        icon={<ThunderboltOutlined />}
                      >
                        Mua ngay
                      </Button>
                    </Link>
                  </Space>
                </Col>
                <Col xs={24} md={12} className="text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-64 object-contain"
                  />
                </Col>
              </Row>
            </div>
          </div>
        ))}
    </Carousel>
  )

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Xu hướng</Breadcrumb.Item>
      </Breadcrumb>

      <div className="text-center mb-8">
        <Space direction="vertical" size="small">
          <Title level={1} className="mb-0">
            <FireOutlined className="text-red-500 mr-2" />
            Xu hướng mua sắm
          </Title>
          <Text type="secondary" className="text-lg">
            Khám phá những sản phẩm và thương hiệu được yêu thích nhất
          </Text>
        </Space>
      </div>

      {/* Top products carousel */}
      {renderTopProductsCarousel()}

      {/* Top brands */}
      <Card
        className="mb-8"
        title={
          <Space>
            <TrophyOutlined className="text-yellow-500" />
            <span>Thương hiệu trending</span>
          </Space>
        }
      >
        <Row gutter={[16, 16]}>
          {topBrands.map((brand, index) => (
            <Col xs={12} sm={8} md={4} key={brand.name}>
              <Card
                hoverable
                className="text-center"
                bodyStyle={{ padding: '16px' }}
              >
                <Avatar
                  size={64}
                  src={brand.logo}
                  style={{ backgroundColor: brand.color }}
                />
                <div className="mt-3">
                  <Text strong>{brand.name}</Text>
                  <div className="text-green-500">
                    <ArrowUpOutlined /> {brand.growth}%
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      {/* Products tabs */}
      <Card className="shadow-sm">
        <Tabs
          defaultActiveKey="phones"
          size="large"
          tabBarStyle={{ marginBottom: 24 }}
        >
          <TabPane
            tab={
              <span>
                {tabIcons.phones}
                <span className="ml-2">Điện thoại</span>
              </span>
            }
            key="phones"
          >
            <Row gutter={[16, 16]}>
              {trendingProducts.phones.map(renderProductCard)}
            </Row>
          </TabPane>
          <TabPane
            tab={
              <span>
                {tabIcons.laptops}
                <span className="ml-2">Laptop</span>
              </span>
            }
            key="laptops"
          >
            <Row gutter={[16, 16]}>
              {trendingProducts.laptops.map(renderProductCard)}
            </Row>
          </TabPane>
          <TabPane
            tab={
              <span>
                {tabIcons.accessories}
                <span className="ml-2">Phụ kiện</span>
              </span>
            }
            key="accessories"
          >
            <Row gutter={[16, 16]}>
              {trendingProducts.accessories.map(renderProductCard)}
            </Row>
          </TabPane>
        </Tabs>
      </Card>

      {/* Trending searches */}
      <Card
        className="mt-8"
        title={
          <Space>
            <SearchOutlined className="text-blue-500" />
            <span>Xu hướng tìm kiếm</span>
          </Space>
        }
      >
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <List
              dataSource={trendingSearches.slice(0, 5)}
              renderItem={(item, index) => (
                <List.Item>
                  <div className="flex items-center justify-between w-full">
                    <Space>
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Text strong className="text-blue-600">
                          {index + 1}
                        </Text>
                      </div>
                      <Text strong>{item.keyword}</Text>
                    </Space>
                    <Space>
                      <Tag color="blue">{item.count} tìm kiếm</Tag>
                      <Text type="success">
                        <ArrowUpOutlined /> {item.growth}%
                      </Text>
                    </Space>
                  </div>
                </List.Item>
              )}
            />
          </Col>
          <Col xs={24} md={12}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
              <Title level={4}>Top từ khóa hot nhất</Title>
              <Space size={[8, 16]} wrap>
                {trendingSearches.map(search => (
                  <Tag
                    key={search.keyword}
                    className="text-base px-4 py-1 cursor-pointer hover:scale-105 transition-transform"
                    color={
                      search.growth > 30
                        ? 'red'
                        : search.growth > 20
                          ? 'orange'
                          : 'blue'
                    }
                    icon={search.growth > 30 ? <FireOutlined /> : null}
                  >
                    {search.keyword}
                  </Tag>
                ))}
              </Space>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Stats section */}
      <Row gutter={16} className="mt-8">
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Tổng sản phẩm trending"
              value={Object.values(trendingProducts).flat().length}
              prefix={<ShoppingCartOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Tăng trưởng trung bình"
              value={24.5}
              prefix={<RiseOutlined />}
              suffix="%"
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Lượt xem hôm nay"
              value={98423}
              prefix={<EyeOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Trending
