import {
  CustomerServiceOutlined,
  FilterOutlined,
  GlobalOutlined,
  HeartFilled,
  HeartOutlined,
  HomeOutlined,
  SafetyCertificateOutlined,
  SearchOutlined,
  ShopOutlined,
  SortAscendingOutlined,
  StarOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
  VerifiedOutlined,
} from '@ant-design/icons'
import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Carousel,
  Col,
  Divider,
  Grid,
  Input,
  message,
  Rate,
  Row,
  Select,
  Space,
  Statistic,
  Tabs,
  Tag,
  Tooltip,
  Typography,
} from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const { Search } = Input
const { Title, Text, Paragraph } = Typography
const { Option } = Select
const { TabPane } = Tabs
const { useBreakpoint } = Grid

const Brands: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('popularity')
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [favorites, setFavorites] = useState<number[]>([])
  const screens = useBreakpoint()

  useEffect(() => {
    document.title = 'Thương hiệu | Shop Của Bạn'
  }, [])

  // Enhanced brands data
  const brands = [
    {
      id: 1,
      name: 'Apple',
      logo: '/api/placeholder/200/200',
      productCount: 156,
      rating: 4.8,
      reviews: 12450,
      verified: true,
      featured: true,
      description:
        'Thương hiệu công nghệ hàng đầu thế giới với các sản phẩm cao cấp',
      country: 'USA',
      established: '1976',
      categories: ['Điện thoại', 'Laptop', 'Tablet', 'Phụ kiện'],
      popularity: 98,
      tagline: 'Think Different',
      officialStore: true,
    },
    {
      id: 2,
      name: 'Samsung',
      logo: '/api/placeholder/200/200',
      productCount: 243,
      rating: 4.7,
      reviews: 15680,
      verified: true,
      featured: true,
      description: 'Tập đoàn công nghệ đa quốc gia từ Hàn Quốc',
      country: 'Korea',
      established: '1938',
      categories: ['Điện thoại', 'TV', 'Laptop', 'Gia dụng'],
      popularity: 95,
      tagline: 'Inspire the World, Create the Future',
      officialStore: true,
    },
    {
      id: 3,
      name: 'Xiaomi',
      logo: '/api/placeholder/200/200',
      productCount: 189,
      rating: 4.6,
      reviews: 9870,
      verified: true,
      featured: true,
      description: 'Thương hiệu công nghệ với giá cả phải chăng từ Trung Quốc',
      country: 'China',
      established: '2010',
      categories: ['Điện thoại', 'Smarthome', 'Wearables'],
      popularity: 88,
      tagline: 'Innovation for Everyone',
      officialStore: true,
    },
    {
      id: 4,
      name: 'Sony',
      logo: '/api/placeholder/200/200',
      productCount: 167,
      rating: 4.7,
      reviews: 8920,
      verified: true,
      featured: false,
      description: 'Thương hiệu điện tử và giải trí đến từ Nhật Bản',
      country: 'Japan',
      established: '1946',
      categories: ['Audio', 'Gaming', 'Camera', 'TV'],
      popularity: 86,
      tagline: 'Be Moved',
      officialStore: true,
    },
    {
      id: 5,
      name: 'ASUS',
      logo: '/api/placeholder/200/200',
      productCount: 142,
      rating: 4.5,
      reviews: 7650,
      verified: true,
      featured: false,
      description: 'Hãng sản xuất linh kiện máy tính và laptop gaming',
      country: 'Taiwan',
      established: '1989',
      categories: ['Laptop', 'Linh kiện PC', 'Gaming'],
      popularity: 82,
      tagline: 'In Search of Incredible',
      officialStore: true,
    },
    {
      id: 6,
      name: 'Dell',
      logo: '/api/placeholder/200/200',
      productCount: 124,
      rating: 4.4,
      reviews: 6540,
      verified: true,
      featured: false,
      description: 'Thương hiệu máy tính và giải pháp công nghệ từ Mỹ',
      country: 'USA',
      established: '1984',
      categories: ['Laptop', 'Desktop', 'Server'],
      popularity: 78,
      tagline: 'Technologies',
      officialStore: true,
    },
    {
      id: 7,
      name: 'LG',
      logo: '/api/placeholder/200/200',
      productCount: 198,
      rating: 4.5,
      reviews: 8790,
      verified: true,
      featured: false,
      description: 'Tập đoàn điện tử tiêu dùng từ Hàn Quốc',
      country: 'Korea',
      established: '1958',
      categories: ['TV', 'Gia dụng', 'Điện thoại'],
      popularity: 80,
      tagline: "Life's Good",
      officialStore: true,
    },
    {
      id: 8,
      name: 'HP',
      logo: '/api/placeholder/200/200',
      productCount: 135,
      rating: 4.3,
      reviews: 7210,
      verified: true,
      featured: false,
      description: 'Nhà sản xuất máy tính và máy in hàng đầu',
      country: 'USA',
      established: '1939',
      categories: ['Laptop', 'Desktop', 'Máy in'],
      popularity: 76,
      tagline: 'Keep Reinventing',
      officialStore: true,
    },
  ]

  // Categories for filtering
  const categories = [
    { value: 'all', label: 'Tất cả thương hiệu' },
    { value: 'phone', label: 'Điện thoại' },
    { value: 'laptop', label: 'Laptop & PC' },
    { value: 'audio', label: 'Âm thanh' },
    { value: 'home', label: 'Gia dụng' },
    { value: 'gaming', label: 'Gaming' },
  ]

  // Filter and sort brands
  const filteredBrands = brands
    .filter(
      brand =>
        brand.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === 'all' ||
          brand.categories.some(cat =>
            cat.toLowerCase().includes(selectedCategory)
          ))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'products':
          return b.productCount - a.productCount
        case 'rating':
          return b.rating - a.rating
        case 'popularity':
          return b.popularity - a.popularity
        default:
          return 0
      }
    })

  // Toggle favorite
  const toggleFavorite = (brandId: number) => {
    if (favorites.includes(brandId)) {
      setFavorites(favorites.filter(id => id !== brandId))
      message.info('Đã xóa khỏi danh sách yêu thích')
    } else {
      setFavorites([...favorites, brandId])
      message.success('Đã thêm vào danh sách yêu thích')
    }
  }

  // Render featured brands carousel
  const renderFeaturedBrands = () => {
    const featuredBrands = brands.filter(brand => brand.featured)

    return (
      <Card
        className="mb-8"
        title={
          <Space>
            <TrophyOutlined className="text-yellow-500" />
            <span>Thương hiệu nổi bật</span>
          </Space>
        }
      >
        <Carousel autoplay arrows>
          {featuredBrands.map(brand => (
            <div key={brand.id}>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                <Row gutter={32} align="middle">
                  <Col xs={24} md={8}>
                    <div className="text-center">
                      <Avatar
                        size={120}
                        src={brand.logo}
                        className="mb-4 shadow-lg"
                      />
                      <Space direction="vertical" size={0}>
                        <Title level={3} className="mb-1">
                          {brand.name}
                        </Title>
                        <Text type="secondary">{brand.tagline}</Text>
                      </Space>
                    </div>
                  </Col>
                  <Col xs={24} md={16}>
                    <Space
                      direction="vertical"
                      size="middle"
                      className="w-full"
                    >
                      <Paragraph className="text-lg">
                        {brand.description}
                      </Paragraph>
                      <Row gutter={16}>
                        <Col span={8}>
                          <Statistic
                            title="Sản phẩm"
                            value={brand.productCount}
                            prefix={<ShopOutlined />}
                          />
                        </Col>
                        <Col span={8}>
                          <Statistic
                            title="Đánh giá"
                            value={brand.rating}
                            prefix={<StarOutlined />}
                            suffix="/5"
                          />
                        </Col>
                        <Col span={8}>
                          <Statistic
                            title="Reviews"
                            value={brand.reviews}
                            prefix={<TeamOutlined />}
                          />
                        </Col>
                      </Row>
                      <Space wrap>
                        {brand.categories.map(category => (
                          <Tag key={category} color="blue">
                            {category}
                          </Tag>
                        ))}
                      </Space>
                      <Link to={`/products?brand=${brand.id}`}>
                        <Button
                          type="primary"
                          size="large"
                          icon={<ShopOutlined />}
                        >
                          Xem sản phẩm
                        </Button>
                      </Link>
                    </Space>
                  </Col>
                </Row>
              </div>
            </div>
          ))}
        </Carousel>
      </Card>
    )
  }

  // Render brand card (Grid view)
  const renderBrandCard = (brand: any) => (
    <Col xs={12} sm={8} md={6} lg={4} key={brand.id}>
      <Badge.Ribbon
        text={
          brand.featured ? 'Nổi bật' : brand.officialStore ? 'Official' : null
        }
        color={brand.featured ? 'red' : 'blue'}
        style={{
          display: brand.featured || brand.officialStore ? 'block' : 'none',
        }}
      >
        <Card
          hoverable
          className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          actions={[
            <Tooltip
              title={
                favorites.includes(brand.id) ? 'Bỏ yêu thích' : 'Yêu thích'
              }
            >
              <Button
                type="text"
                danger={favorites.includes(brand.id)}
                icon={
                  favorites.includes(brand.id) ? (
                    <HeartFilled />
                  ) : (
                    <HeartOutlined />
                  )
                }
                onClick={e => {
                  e.preventDefault()
                  toggleFavorite(brand.id)
                }}
              />
            </Tooltip>,
            <Link to={`/products?brand=${brand.id}`}>
              <Button type="text" icon={<ShopOutlined />}>
                Xem shop
              </Button>
            </Link>,
          ]}
        >
          <div className="text-center">
            <Avatar size={80} src={brand.logo} className="mb-4 shadow-md" />
            <Space direction="vertical" size={4}>
              <Space>
                <Title level={4} className="mb-0">
                  {brand.name}
                </Title>
                {brand.verified && (
                  <Tooltip title="Thương hiệu đã xác thực">
                    <VerifiedOutlined className="text-blue-500" />
                  </Tooltip>
                )}
              </Space>
              <Rate disabled value={brand.rating} allowHalf />
              <Text type="secondary" className="text-xs">
                {brand.reviews.toLocaleString()} đánh giá
              </Text>
              <Tag color="blue">{brand.productCount} sản phẩm</Tag>
              {brand.country && (
                <Space size={4}>
                  <GlobalOutlined className="text-gray-400" />
                  <Text type="secondary" className="text-xs">
                    {brand.country}
                  </Text>
                </Space>
              )}
            </Space>
          </div>
        </Card>
      </Badge.Ribbon>
    </Col>
  )

  // Render brand list (List view)
  const renderBrandList = (brand: any) => (
    <Col span={24} key={brand.id}>
      <Card className="mb-4 hover:shadow-md transition-shadow">
        <Row gutter={24} align="middle">
          <Col xs={24} sm={6} md={4}>
            <div className="text-center">
              <Avatar
                size={screens.md ? 100 : 80}
                src={brand.logo}
                className="shadow-md"
              />
            </div>
          </Col>
          <Col xs={24} sm={18} md={16}>
            <Space direction="vertical" size="small" className="w-full">
              <Space>
                <Title level={4} className="mb-0">
                  {brand.name}
                </Title>
                {brand.verified && (
                  <VerifiedOutlined className="text-blue-500" />
                )}
                {brand.featured && <Tag color="red">Nổi bật</Tag>}
                {brand.officialStore && <Tag color="blue">Official Store</Tag>}
              </Space>
              <Paragraph className="mb-2 text-gray-600">
                {brand.description}
              </Paragraph>
              <Space split={<Divider type="vertical" />}>
                <Space size={4}>
                  <Rate
                    disabled
                    value={brand.rating}
                    allowHalf
                    className="text-sm"
                  />
                  <Text>({brand.reviews.toLocaleString()})</Text>
                </Space>
                <Text>
                  <ShopOutlined /> {brand.productCount} sản phẩm
                </Text>
                <Text>
                  <GlobalOutlined /> {brand.country}
                </Text>
                <Text>
                  <ThunderboltOutlined /> Est. {brand.established}
                </Text>
              </Space>
              <Space wrap className="mt-2">
                {brand.categories.map((category: string) => (
                  <Tag key={category}>{category}</Tag>
                ))}
              </Space>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={4} className="text-right">
            <Space direction="vertical">
              <Link to={`/products?brand=${brand.id}`}>
                <Button type="primary" icon={<ShopOutlined />}>
                  Xem sản phẩm
                </Button>
              </Link>
              <Button
                type={favorites.includes(brand.id) ? 'default' : 'text'}
                danger={favorites.includes(brand.id)}
                icon={
                  favorites.includes(brand.id) ? (
                    <HeartFilled />
                  ) : (
                    <HeartOutlined />
                  )
                }
                onClick={() => toggleFavorite(brand.id)}
              >
                {favorites.includes(brand.id) ? 'Đã thích' : 'Yêu thích'}
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
        <Breadcrumb.Item>Thương hiệu</Breadcrumb.Item>
      </Breadcrumb>

      <div className="text-center mb-8">
        <Title level={1}>
          <ShopOutlined className="mr-2" />
          Thương hiệu chính hãng
        </Title>
        <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto">
          Khám phá các thương hiệu uy tín với hàng ngàn sản phẩm chính hãng,
          được phân phối độc quyền tại Shop Của Bạn
        </Paragraph>
      </div>

      {/* Featured brands carousel */}
      {renderFeaturedBrands()}

      {/* Search and filters */}
      <Card className="mb-6">
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={8}>
            <Search
              placeholder="Tìm kiếm thương hiệu"
              enterButton={<SearchOutlined />}
              size="large"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              allowClear
            />
          </Col>
          <Col xs={12} md={4}>
            <Select
              defaultValue="all"
              size="large"
              className="w-full"
              onChange={setSelectedCategory}
              placeholder="Danh mục"
            >
              {categories.map(cat => (
                <Option key={cat.value} value={cat.value}>
                  {cat.label}
                </Option>
              ))}
            </Select>
          </Col>
          <Col xs={12} md={4}>
            <Select
              defaultValue="popularity"
              size="large"
              className="w-full"
              onChange={setSortBy}
              placeholder="Sắp xếp theo"
            >
              <Option value="popularity">Phổ biến nhất</Option>
              <Option value="name">Tên A-Z</Option>
              <Option value="products">Số lượng sản phẩm</Option>
              <Option value="rating">Đánh giá cao nhất</Option>
            </Select>
          </Col>
          <Col xs={24} md={8} className="text-right">
            <Space>
              <Text>Hiển thị:</Text>
              <Button.Group>
                <Button
                  type={viewType === 'grid' ? 'primary' : 'default'}
                  onClick={() => setViewType('grid')}
                  icon={<FilterOutlined />}
                >
                  Grid
                </Button>
                <Button
                  type={viewType === 'list' ? 'primary' : 'default'}
                  onClick={() => setViewType('list')}
                  icon={<SortAscendingOutlined />}
                >
                  List
                </Button>
              </Button.Group>
            </Space>
          </Col>
        </Row>
      </Card>

      {/* Brand benefits */}
      <Row gutter={16} className="mb-8">
        <Col xs={24} sm={8}>
          <Card className="text-center">
            <SafetyCertificateOutlined className="text-4xl text-blue-500 mb-4" />
            <Title level={4}>Chính hãng 100%</Title>
            <Text type="secondary">
              Cam kết hàng chính hãng, nguồn gốc rõ ràng
            </Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="text-center">
            <CustomerServiceOutlined className="text-4xl text-green-500 mb-4" />
            <Title level={4}>Bảo hành chính hãng</Title>
            <Text type="secondary">Bảo hành theo chính sách của từng hãng</Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="text-center">
            <GlobalOutlined className="text-4xl text-purple-500 mb-4" />
            <Title level={4}>Phân phối độc quyền</Title>
            <Text type="secondary">
              Nhà phân phối chính thức của nhiều thương hiệu
            </Text>
          </Card>
        </Col>
      </Row>

      {/* Brands grid/list */}
      <Row gutter={[16, 16]}>
        {filteredBrands.map(brand =>
          viewType === 'grid' ? renderBrandCard(brand) : renderBrandList(brand)
        )}
      </Row>

      {filteredBrands.length === 0 && (
        <div className="text-center py-12">
          <Text type="secondary" className="text-lg">
            Không tìm thấy thương hiệu phù hợp
          </Text>
        </div>
      )}
    </div>
  )
}

export default Brands
