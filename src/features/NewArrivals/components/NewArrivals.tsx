import { useEffect, useState } from 'react'
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
  Typography,
  Space,
  Tag,
  Badge,
  Tooltip,
  Timeline,
  Carousel,
  Statistic,
  Divider,
  message,
  Segmented,
  Grid,
} from 'antd'
import {
  HomeOutlined,
  ShoppingCartOutlined,
  StarFilled,
  CalendarOutlined,
  FireOutlined,
  EyeOutlined,
  HeartOutlined,
  HeartFilled,
  FilterOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  ThunderboltOutlined,
  ClockCircleOutlined,
  FieldTimeOutlined,
  ShareAltOutlined,
  TrophyOutlined,
} from '@ant-design/icons'

const { Option } = Select
const { Title, Text, Paragraph } = Typography
const { Countdown } = Statistic
const { useBreakpoint } = Grid

const NewArrivals: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('newest')
  const [favorites, setFavorites] = useState<number[]>([])
  const [timeFilter, setTimeFilter] = useState('all')
  const screens = useBreakpoint()

  useEffect(() => {
    document.title = 'Sản Phẩm Mới | Shop Của Bạn'
  }, [])

  // Enhanced new products data
  const newProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max 1TB - Titan Tự Nhiên',
      price: 49990000,
      originalPrice: 54990000,
      rating: 4.9,
      reviewCount: 12,
      image: '/api/placeholder/400/400',
      date: '2025-05-02',
      category: 'Điện thoại',
      brand: 'Apple',
      preOrder: true,
      exclusive: true,
      stock: 5,
      views: 1250,
      tag: 'New Release',
      discount: 10,
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra 512GB',
      price: 38990000,
      originalPrice: 41990000,
      rating: 4.8,
      reviewCount: 8,
      image: '/api/placeholder/400/400',
      date: '2025-05-01',
      category: 'Điện thoại',
      brand: 'Samsung',
      preOrder: false,
      exclusive: false,
      stock: 15,
      views: 980,
      tag: 'Hot',
      discount: 7,
    },
    {
      id: 3,
      name: 'MacBook Pro M3 Max 16" 64GB/2TB',
      price: 105990000,
      originalPrice: 112990000,
      rating: 5.0,
      reviewCount: 3,
      image: '/api/placeholder/400/400',
      date: '2025-04-30',
      category: 'Laptop',
      brand: 'Apple',
      preOrder: true,
      exclusive: true,
      stock: 3,
      views: 542,
      tag: 'Premium',
      discount: 6,
    },
    {
      id: 4,
      name: 'Sony WH-1000XM6 - Limited Edition',
      price: 9990000,
      originalPrice: 10990000,
      rating: 4.7,
      reviewCount: 7,
      image: '/api/placeholder/400/400',
      date: '2025-04-28',
      category: 'Phụ kiện',
      brand: 'Sony',
      preOrder: false,
      exclusive: true,
      stock: 8,
      views: 720,
      tag: 'Limited',
      discount: 9,
    },
    {
      id: 5,
      name: 'iPad Pro M3 13" 2TB WiFi + 5G',
      price: 62990000,
      originalPrice: 67990000,
      rating: 4.8,
      reviewCount: 5,
      image: '/api/placeholder/400/400',
      date: '2025-04-25',
      category: 'Tablet',
      brand: 'Apple',
      preOrder: false,
      exclusive: false,
      stock: 10,
      views: 856,
      tag: 'Pro',
      discount: 7,
    },
    {
      id: 6,
      name: 'ASUS ROG Strix SCAR 18 2025',
      price: 84990000,
      originalPrice: 89990000,
      rating: 4.6,
      reviewCount: 4,
      image: '/api/placeholder/400/400',
      date: '2025-04-20',
      category: 'Laptop',
      brand: 'ASUS',
      preOrder: true,
      exclusive: false,
      stock: 4,
      views: 432,
      tag: 'Gaming',
      discount: 6,
    },
    {
      id: 7,
      name: 'Apple Watch Ultra 2 Titanium',
      price: 23990000,
      originalPrice: 24990000,
      rating: 4.9,
      reviewCount: 9,
      image: '/api/placeholder/400/400',
      date: '2025-04-15',
      category: 'Đồng hồ',
      brand: 'Apple',
      preOrder: false,
      exclusive: false,
      stock: 12,
      views: 1102,
      tag: 'Sport',
      discount: 4,
    },
    {
      id: 8,
      name: 'Marshall Emberton III - Cream Edition',
      price: 4490000,
      originalPrice: 4990000,
      rating: 4.5,
      reviewCount: 11,
      image: '/api/placeholder/400/400',
      date: '2025-04-10',
      category: 'Phụ kiện',
      brand: 'Marshall',
      preOrder: false,
      exclusive: true,
      stock: 20,
      views: 678,
      tag: 'Limited',
      discount: 10,
    },
  ]

  // Format price to VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
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

  // Calculate days ago
  const getDaysAgo = (dateString: string) => {
    const date = new Date(dateString)
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return 'Hôm nay'
    if (diffDays === 1) return 'Hôm qua'
    return `${diffDays} ngày trước`
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

  // Handle add to cart
  const handleAddToCart = (product: any) => {
    if (product.preOrder) {
      message.info(`Sản phẩm "${product.name}" đang mở đặt trước`)
    } else if (product.stock === 0) {
      message.error('Sản phẩm đã hết hàng')
    } else {
      message.success(`Đã thêm "${product.name}" vào giỏ hàng`)
    }
  }

  // Filter products by time
  const filteredProducts = newProducts
    .filter(product => {
      const date = new Date(product.date)
      const today = new Date()
      const diffDays = Math.ceil(
        (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
      )

      switch (timeFilter) {
        case 'today':
          return diffDays === 0
        case 'week':
          return diffDays <= 7
        case 'month':
          return diffDays <= 30
        default:
          return true
      }
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'views':
          return b.views - a.views
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
    })

  // Render featured carousel
  const renderFeaturedCarousel = () => {
    const featuredProducts = newProducts
      .filter(p => p.exclusive || p.preOrder)
      .slice(0, 3)

    return (
      <Carousel autoplay className="mb-8">
        {featuredProducts.map(product => (
          <div key={product.id}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <Row gutter={32} align="middle">
                <Col xs={24} md={12}>
                  <Space direction="vertical" size="large">
                    {product.exclusive && (
                      <Tag
                        color="gold"
                        icon={<TrophyOutlined />}
                        className="text-base"
                      >
                        Độc quyền
                      </Tag>
                    )}
                    <Title level={2} className="text-white m-0">
                      {product.name}
                    </Title>
                    <Space>
                      <Rate
                        disabled
                        value={product.rating}
                        className="text-yellow-400"
                      />
                      <Text className="text-white">
                        ({product.reviewCount} đánh giá)
                      </Text>
                    </Space>
                    <div>
                      <Text className="text-3xl font-bold text-white">
                        {formatPrice(product.price)}
                      </Text>
                      <Text delete className="ml-3 text-xl text-gray-200">
                        {formatPrice(product.originalPrice)}
                      </Text>
                      <Tag color="red" className="ml-3">
                        -{product.discount}%
                      </Tag>
                    </div>
                    <Space>
                      <Button
                        size="large"
                        type="primary"
                        icon={
                          product.preOrder ? (
                            <ClockCircleOutlined />
                          ) : (
                            <ShoppingCartOutlined />
                          )
                        }
                        onClick={() => handleAddToCart(product)}
                      >
                        {product.preOrder ? 'Đặt trước ngay' : 'Mua ngay'}
                      </Button>
                      <Link to={`/products/${product.id}`}>
                        <Button size="large" ghost>
                          Xem chi tiết
                        </Button>
                      </Link>
                    </Space>
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
  }

  // Render timeline for new arrivals
  const renderTimeline = () => (
    <Card
      className="mb-8"
      title={
        <Space>
          <FieldTimeOutlined className="text-blue-500" />
          <span>Timeline Sản Phẩm Mới</span>
        </Space>
      }
    >
      <Timeline mode={screens.md ? 'alternate' : 'left'}>
        {newProducts.slice(0, 5).map((product, index) => (
          <Timeline.Item
            key={product.id}
            color={index === 0 ? 'red' : 'blue'}
            label={getDaysAgo(product.date)}
          >
            <Card
              size="small"
              hoverable
              onClick={() => (window.location.href = `/products/${product.id}`)}
              className="max-w-sm"
            >
              <Space>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-16 w-16 object-cover rounded"
                />
                <div>
                  <Text strong className="line-clamp-1">
                    {product.name}
                  </Text>
                  <div>
                    <Rate disabled value={product.rating} className="text-xs" />
                  </div>
                  <Text type="danger">{formatPrice(product.price)}</Text>
                </div>
              </Space>
            </Card>
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  )

  // Render product card (Grid view)
  const renderProductCard = (product: any) => (
    <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
      <Badge.Ribbon
        text={product.tag}
        color={
          product.exclusive ? 'gold' : product.preOrder ? 'purple' : 'blue'
        }
      >
        <Card
          hoverable
          cover={
            <div className="relative">
              <img
                alt={product.name}
                src={product.image}
                className="h-48 w-full object-cover"
              />
              <div className="absolute top-2 left-2">
                <Tag color="green" className="m-0">
                  Mới
                </Tag>
              </div>
              {product.discount > 0 && (
                <div className="absolute top-2 right-2">
                  <Tag color="red">-{product.discount}%</Tag>
                </div>
              )}
            </div>
          }
          className="h-full flex flex-col"
          bodyStyle={{
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <div className="flex flex-col flex-grow">
            {/* Rating */}
            <div className="flex items-center mb-2">
              <Rate
                disabled
                value={product.rating}
                allowHalf
                className="text-sm"
              />
              <Text type="secondary" className="text-xs ml-2">
                ({product.reviewCount})
              </Text>
            </div>

            {/* Product name - fixed height */}
            <div className="h-12 mb-2">
              <Text strong className="text-base line-clamp-2 block">
                {product.name}
              </Text>
            </div>

            {/* Brand and category */}
            <div className="flex items-center gap-2 mb-2">
              <Text type="secondary" className="text-sm">
                {product.brand}
              </Text>
              <Divider type="vertical" className="m-0" />
              <Text type="secondary" className="text-sm">
                {product.category}
              </Text>
            </div>

            {/* Price */}
            <div className="mb-2">
              <Text strong className="text-blue-600 text-lg">
                {formatPrice(product.price)}
              </Text>
              <Text delete className="text-sm text-gray-500 ml-2">
                {formatPrice(product.originalPrice)}
              </Text>
            </div>

            {/* Date and views */}
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
              <div className="flex items-center gap-1">
                <CalendarOutlined />
                <span>{getDaysAgo(product.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <EyeOutlined />
                <span>{product.views} lượt xem</span>
              </div>
            </div>

            {/* Stock warning - fixed height container */}
            <div className="h-8 mb-3">
              {product.stock <= 5 && product.stock > 0 && (
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 text-center py-1 px-2 rounded text-sm">
                  🔥 Chỉ còn {product.stock} sản phẩm
                </div>
              )}
            </div>
          </div>

          {/* Button - always at bottom */}
          <div className="mt-auto">
            <Button
              type={product.preOrder ? 'default' : 'primary'}
              icon={
                product.preOrder ? (
                  <ClockCircleOutlined />
                ) : (
                  <ShoppingCartOutlined />
                )
              }
              block
              onClick={() => handleAddToCart(product)}
              disabled={product.stock === 0}
              className={`${
                product.preOrder
                  ? 'bg-white border-blue-500 text-blue-500 hover:bg-blue-50 hover:border-blue-600'
                  : ''
              }`}
            >
              {product.preOrder
                ? 'Đặt trước'
                : product.stock === 0
                  ? 'Hết hàng'
                  : 'Thêm vào giỏ'}
            </Button>
          </div>
        </Card>
      </Badge.Ribbon>
    </Col>
  )

  // Render product list (List view)
  const renderProductList = (product: any) => (
    <Col span={24} key={product.id}>
      <Card className="mb-4 hover:shadow-lg transition-shadow">
        <Row gutter={24} align="middle">
          <Col xs={24} sm={6} md={4}>
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              {product.exclusive && (
                <Tag color="gold" className="absolute top-1 left-1">
                  Độc quyền
                </Tag>
              )}
            </div>
          </Col>
          <Col xs={24} sm={18} md={16}>
            <Space direction="vertical" className="w-full">
              <div className="flex items-center gap-2">
                <Link to={`/products/${product.id}`}>
                  <Title level={4} className="mb-0 hover:text-blue-500">
                    {product.name}
                  </Title>
                </Link>
                {product.preOrder && <Tag color="purple">Pre-Order</Tag>}
              </div>

              <Space split={<Divider type="vertical" />}>
                <Text>{product.brand}</Text>
                <Text>{product.category}</Text>
                <Space>
                  <CalendarOutlined />
                  <Text>{getDaysAgo(product.date)}</Text>
                </Space>
              </Space>

              <Space>
                <Rate disabled value={product.rating} />
                <Text>({product.reviewCount} đánh giá)</Text>
                <Divider type="vertical" />
                <Text>
                  <EyeOutlined /> {product.views} lượt xem
                </Text>
              </Space>

              <div>
                <Text strong className="text-blue-600 text-2xl">
                  {formatPrice(product.price)}
                </Text>
                <Text delete className="ml-2 text-gray-500">
                  {formatPrice(product.originalPrice)}
                </Text>
                <Tag color="red" className="ml-2">
                  -{product.discount}%
                </Tag>
              </div>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={4} className="text-right">
            <Space direction="vertical">
              <Button
                type="primary"
                icon={
                  product.preOrder ? (
                    <ClockCircleOutlined />
                  ) : (
                    <ShoppingCartOutlined />
                  )
                }
                onClick={() => handleAddToCart(product)}
                disabled={product.stock === 0}
                block
              >
                {product.preOrder ? 'Đặt trước' : 'Thêm vào giỏ'}
              </Button>
              <Button
                type={favorites.includes(product.id) ? 'default' : 'text'}
                danger={favorites.includes(product.id)}
                icon={
                  favorites.includes(product.id) ? (
                    <HeartFilled />
                  ) : (
                    <HeartOutlined />
                  )
                }
                onClick={() => toggleFavorite(product.id)}
                block
              >
                {favorites.includes(product.id) ? 'Đã thích' : 'Yêu thích'}
              </Button>
            </Space>
          </Col>
        </Row>
      </Card>
    </Col>
  )

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Sản phẩm mới</Breadcrumb.Item>
      </Breadcrumb>

      <div className="text-center mb-8">
        <Title level={1}>
          <ThunderboltOutlined className="text-yellow-500 mr-2" />
          Sản Phẩm Mới Nhất
        </Title>
        <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto">
          Khám phá những sản phẩm công nghệ mới nhất, độc quyền tại Shop Của Bạn
          với nhiều ưu đãi hấp dẫn
        </Paragraph>
      </div>

      {/* Featured carousel */}
      {renderFeaturedCarousel()}

      {/* Quick stats */}
      <Row gutter={16} className="mb-8">
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Sản phẩm mới hôm nay"
              value={
                filteredProducts.filter(p => getDaysAgo(p.date) === 'Hôm nay')
                  .length
              }
              prefix={<FireOutlined />}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Sản phẩm Pre-Order"
              value={filteredProducts.filter(p => p.preOrder).length}
              prefix={<ClockCircleOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Sản phẩm độc quyền"
              value={filteredProducts.filter(p => p.exclusive).length}
              prefix={<TrophyOutlined />}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
      </Row>

      {/* Timeline */}
      {renderTimeline()}

      {/* Filters */}
      <Card className="mb-6">
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={8}>
            <Segmented
              value={timeFilter}
              onChange={setTimeFilter}
              options={[
                { label: 'Tất cả', value: 'all' },
                { label: 'Hôm nay', value: 'today' },
                { label: 'Tuần này', value: 'week' },
                { label: 'Tháng này', value: 'month' },
              ]}
              block
            />
          </Col>
          <Col xs={24} md={8}>
            <Select
              value={sortBy}
              onChange={setSortBy}
              className="w-full"
              size="large"
            >
              <Option value="newest">Mới nhất</Option>
              <Option value="price-asc">Giá: Thấp đến cao</Option>
              <Option value="price-desc">Giá: Cao đến thấp</Option>
              <Option value="rating">Đánh giá cao nhất</Option>
              <Option value="views">Xem nhiều nhất</Option>
            </Select>
          </Col>
          <Col xs={24} md={8} className="text-right">
            <Space>
              <Text>Hiển thị:</Text>
              <Button.Group>
                <Button
                  type={viewMode === 'grid' ? 'primary' : 'default'}
                  icon={<AppstoreOutlined />}
                  onClick={() => setViewMode('grid')}
                />
                <Button
                  type={viewMode === 'list' ? 'primary' : 'default'}
                  icon={<UnorderedListOutlined />}
                  onClick={() => setViewMode('list')}
                />
              </Button.Group>
            </Space>
          </Col>
        </Row>
      </Card>

      {/* Products */}
      <Row gutter={[16, 16]} align="stretch">
        {filteredProducts.map(product =>
          viewMode === 'grid'
            ? renderProductCard(product)
            : renderProductList(product)
        )}
      </Row>

      {/* Pagination */}
      <div className="mt-10 flex justify-center">
        <Pagination
          defaultCurrent={1}
          total={50}
          showSizeChanger
          showQuickJumper
          showTotal={total => `Tổng ${total} sản phẩm`}
        />
      </div>
    </div>
  )
}

export default NewArrivals
