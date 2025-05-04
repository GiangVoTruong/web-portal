import {
  AppstoreOutlined,
  BellOutlined,
  CopyOutlined,
  DeleteOutlined,
  EyeOutlined,
  FilterOutlined,
  FireOutlined,
  HeartFilled,
  HeartOutlined,
  HomeOutlined,
  ShareAltOutlined,
  ShoppingCartOutlined,
  SortAscendingOutlined,
  TagOutlined,
  UnorderedListOutlined,
  WalletOutlined,
} from '@ant-design/icons'
import {
  Badge,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Col,
  Drawer,
  Empty,
  Form,
  Grid,
  Image,
  message,
  Modal,
  Rate,
  Row,
  Segmented,
  Select,
  Slider,
  Space,
  Statistic,
  Switch,
  Tag,
  Tooltip,
  Typography,
} from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const { Title, Text, Paragraph } = Typography
const { Option } = Select
const { useBreakpoint } = Grid

interface WishlistItem {
  id: number
  name: string
  price: number
  originalPrice: number
  image: string
  rating: number
  reviews: number
  category: string
  brand: string
  stock: number
  addedDate: string
  priceDropAlert?: boolean
  discount?: number
}

const Wishlist: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [sortBy, setSortBy] = useState('addedDate')
  const [filterVisible, setFilterVisible] = useState(false)
  const [compareDrawerVisible, setCompareDrawerVisible] = useState(false)
  const screens = useBreakpoint()

  // Enhanced wishlist data
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      name: 'iPhone 15 Pro Max 256GB',
      price: 28990000,
      originalPrice: 34990000,
      image: '/api/placeholder/400/400',
      rating: 4.8,
      reviews: 156,
      category: 'Điện thoại',
      brand: 'Apple',
      stock: 10,
      addedDate: '2025-01-15',
      priceDropAlert: true,
      discount: 17,
    },
    {
      id: 2,
      name: 'MacBook Air M2 13" 512GB',
      price: 32990000,
      originalPrice: 37990000,
      image: '/api/placeholder/400/400',
      rating: 4.9,
      reviews: 89,
      category: 'Laptop',
      brand: 'Apple',
      stock: 5,
      addedDate: '2025-01-10',
      priceDropAlert: false,
      discount: 13,
    },
    {
      id: 3,
      name: 'Samsung Galaxy Watch 6 Classic',
      price: 8990000,
      originalPrice: 10990000,
      image: '/api/placeholder/400/400',
      rating: 4.7,
      reviews: 124,
      category: 'Đồng hồ',
      brand: 'Samsung',
      stock: 3,
      addedDate: '2025-01-05',
      priceDropAlert: true,
      discount: 18,
    },
    {
      id: 4,
      name: 'AirPods Pro 2nd Generation',
      price: 5890000,
      originalPrice: 6990000,
      image: '/api/placeholder/400/400',
      rating: 4.6,
      reviews: 245,
      category: 'Phụ kiện',
      brand: 'Apple',
      stock: 15,
      addedDate: '2025-01-01',
      priceDropAlert: false,
      discount: 16,
    },
  ])

  useEffect(() => {
    document.title = 'Sản phẩm yêu thích | Shop Của Bạn'
  }, [])

  // Format price to VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(price)
  }

  // Handle select item
  const handleSelectItem = (id: number) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  // Handle remove single item
  const handleRemoveItem = (item: WishlistItem) => {
    Modal.confirm({
      title: 'Xác nhận xóa',
      content: `Bạn có chắc chắn muốn xóa "${item.name}" khỏi danh sách yêu thích?`,
      okText: 'Xóa',
      cancelText: 'Hủy',
      okButtonProps: { danger: true },
      onOk: () => {
        setWishlistItems(prev => prev.filter(i => i.id !== item.id))
        message.success('Đã xóa khỏi danh sách yêu thích')
      },
    })
  }

  // Handle remove multiple items
  const handleRemoveSelected = () => {
    Modal.confirm({
      title: 'Xác nhận xóa',
      content: `Bạn có chắc chắn muốn xóa ${selectedItems.length} sản phẩm đã chọn?`,
      okText: 'Xóa',
      cancelText: 'Hủy',
      okButtonProps: { danger: true },
      onOk: () => {
        setWishlistItems(prev =>
          prev.filter(i => !selectedItems.includes(i.id))
        )
        setSelectedItems([])
        message.success('Đã xóa các sản phẩm đã chọn')
      },
    })
  }

  // Handle clear all
  const handleClearAll = () => {
    Modal.confirm({
      title: 'Xác nhận xóa tất cả',
      content:
        'Bạn có chắc chắn muốn xóa tất cả sản phẩm khỏi danh sách yêu thích?',
      okText: 'Xóa tất cả',
      cancelText: 'Hủy',
      okButtonProps: { danger: true },
      onOk: () => {
        setWishlistItems([])
        message.success('Đã xóa tất cả sản phẩm yêu thích')
      },
    })
  }

  // Handle add to cart
  const handleAddToCart = (item: WishlistItem) => {
    if (item.stock === 0) {
      message.error('Sản phẩm đã hết hàng')
      return
    }
    message.success(`Đã thêm "${item.name}" vào giỏ hàng`)
  }

  // Handle add all to cart
  const handleAddAllToCart = () => {
    const inStockItems = wishlistItems.filter(item => item.stock > 0)
    if (inStockItems.length === 0) {
      message.warning('Không có sản phẩm nào còn hàng')
      return
    }
    message.success(`Đã thêm ${inStockItems.length} sản phẩm vào giỏ hàng`)
  }

  // Handle sort
  const handleSort = (value: string) => {
    setSortBy(value)
    const sorted = [...wishlistItems].sort((a, b) => {
      switch (value) {
        case 'priceAsc':
          return a.price - b.price
        case 'priceDesc':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'addedDate':
          return (
            new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()
          )
        default:
          return 0
      }
    })
    setWishlistItems(sorted)
  }

  // Compare products
  const handleCompare = () => {
    if (selectedItems.length < 2) {
      message.warning('Vui lòng chọn ít nhất 2 sản phẩm để so sánh')
      return
    }
    setCompareDrawerVisible(true)
  }

  // Price alert toggle
  const togglePriceAlert = (item: WishlistItem) => {
    setWishlistItems(prev =>
      prev.map(i =>
        i.id === item.id ? { ...i, priceDropAlert: !i.priceDropAlert } : i
      )
    )
    message.success(
      item.priceDropAlert
        ? 'Đã tắt thông báo giảm giá'
        : 'Đã bật thông báo giảm giá'
    )
  }

  // Empty state
  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb className="mb-6">
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item>Sản phẩm yêu thích</Breadcrumb.Item>
        </Breadcrumb>

        <div className="flex justify-center items-center py-20">
          <Empty
            image={<HeartOutlined style={{ fontSize: 64, color: '#d9d9d9' }} />}
            imageStyle={{ height: 100 }}
            description={
              <Space direction="vertical" size="large" align="center">
                <Title level={4}>Danh sách yêu thích trống</Title>
                <Text type="secondary">
                  Hãy thêm những sản phẩm bạn yêu thích để theo dõi giá và mua
                  sắm dễ dàng hơn
                </Text>
                <Link to="/products">
                  <Button
                    type="primary"
                    size="large"
                    icon={<ShoppingCartOutlined />}
                  >
                    Khám phá sản phẩm
                  </Button>
                </Link>
              </Space>
            }
          />
        </div>
      </div>
    )
  }

  // Render product card (Grid view)
  const renderProductCard = (item: WishlistItem) => (
    <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
      <Badge.Ribbon
        text={`-${item.discount}%`}
        color="red"
        style={{ display: item.discount ? 'block' : 'none' }}
      >
        <Card
          hoverable
          cover={
            <div className="relative group">
              <Image
                alt={item.name}
                src={item.image}
                className="h-64 w-full object-cover"
                fallback="/api/placeholder/400/400"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Space>
                  <Tooltip title="Xem chi tiết">
                    <Link to={`/products/${item.id}`}>
                      <Button
                        type="primary"
                        shape="circle"
                        icon={<EyeOutlined />}
                      />
                    </Link>
                  </Tooltip>
                  <Tooltip title="Chia sẻ">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<ShareAltOutlined />}
                    />
                  </Tooltip>
                </Space>
              </div>
              {item.stock <= 5 && item.stock > 0 && (
                <div className="absolute top-2 left-2">
                  <Tag color="warning" icon={<FireOutlined />}>
                    Chỉ còn {item.stock} sản phẩm
                  </Tag>
                </div>
              )}
              {item.stock === 0 && (
                <div className="absolute top-2 left-2">
                  <Tag color="error">Hết hàng</Tag>
                </div>
              )}
            </div>
          }
          actions={[
            <Tooltip title="Xóa khỏi yêu thích">
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleRemoveItem(item)}
              />
            </Tooltip>,
            <Tooltip title={item.stock === 0 ? 'Hết hàng' : 'Thêm vào giỏ'}>
              <Button
                type="text"
                icon={<ShoppingCartOutlined />}
                onClick={() => handleAddToCart(item)}
                disabled={item.stock === 0}
              >
                Thêm giỏ
              </Button>
            </Tooltip>,
            <Tooltip
              title={
                item.priceDropAlert ? 'Đang theo dõi giá' : 'Thông báo giảm giá'
              }
            >
              <Button
                type="text"
                icon={<BellOutlined />}
                onClick={() => togglePriceAlert(item)}
                className={item.priceDropAlert ? 'text-blue-500' : ''}
              />
            </Tooltip>,
          ]}
          className="h-full"
        >
          <Checkbox
            checked={selectedItems.includes(item.id)}
            onChange={() => handleSelectItem(item.id)}
            className="absolute top-4 left-4 z-10"
          />
          <Card.Meta
            title={
              <Link to={`/products/${item.id}`} className="hover:text-blue-500">
                <Text strong ellipsis={{ rows: 2 }} className="text-base">
                  {item.name}
                </Text>
              </Link>
            }
            description={
              <Space direction="vertical" className="w-full">
                <Space>
                  <Tag>{item.brand}</Tag>
                  <Tag>{item.category}</Tag>
                </Space>

                <div className="flex items-center justify-between">
                  <Rate disabled value={item.rating} className="text-sm" />
                  <Text type="secondary" className="text-xs">
                    ({item.reviews})
                  </Text>
                </div>

                <div>
                  <Text strong className="text-red-500 text-xl">
                    {formatPrice(item.price)}
                  </Text>
                  <Text delete type="secondary" className="ml-2">
                    {formatPrice(item.originalPrice)}
                  </Text>
                </div>

                <Text type="secondary" className="text-xs">
                  Đã thêm:{' '}
                  {new Date(item.addedDate).toLocaleDateString('vi-VN')}
                </Text>
              </Space>
            }
          />
        </Card>
      </Badge.Ribbon>
    </Col>
  )

  // Render product list (List view)
  const renderProductList = (item: WishlistItem) => (
    <Col span={24} key={item.id}>
      <Card className="mb-4 hover:shadow-lg transition-shadow">
        <Row gutter={24} align="middle">
          <Col xs={24} sm={6} md={4}>
            <Image
              alt={item.name}
              src={item.image}
              className="w-full h-40 object-cover rounded"
              fallback="/api/placeholder/400/400"
            />
          </Col>
          <Col xs={24} sm={18} md={16}>
            <Space direction="vertical" className="w-full">
              <div className="flex items-center gap-4">
                <Checkbox
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                />
                <Link to={`/products/${item.id}`}>
                  <Title level={4} className="mb-0 hover:text-blue-500">
                    {item.name}
                  </Title>
                </Link>
              </div>

              <Space>
                <Tag>{item.brand}</Tag>
                <Tag>{item.category}</Tag>
                <Rate disabled value={item.rating} className="text-sm" />
                <Text type="secondary">({item.reviews})</Text>
              </Space>

              <div>
                <Text strong className="text-red-500 text-2xl">
                  {formatPrice(item.price)}
                </Text>
                <Text delete type="secondary" className="ml-2 text-lg">
                  {formatPrice(item.originalPrice)}
                </Text>
                {item.discount && (
                  <Tag color="red" className="ml-2">
                    -{item.discount}%
                  </Tag>
                )}
              </div>

              <Space>
                <Text type="secondary">
                  Đã thêm:{' '}
                  {new Date(item.addedDate).toLocaleDateString('vi-VN')}
                </Text>
                {item.stock <= 5 && item.stock > 0 && (
                  <Tag color="warning" icon={<FireOutlined />}>
                    Chỉ còn {item.stock} sản phẩm
                  </Tag>
                )}
                {item.stock === 0 && <Tag color="error">Hết hàng</Tag>}
              </Space>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={4} className="text-right">
            <Space direction="vertical">
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                onClick={() => handleAddToCart(item)}
                disabled={item.stock === 0}
                block
              >
                Thêm vào giỏ
              </Button>
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleRemoveItem(item)}
                block
              >
                Xóa
              </Button>
              <Switch
                checkedChildren="Thông báo"
                unCheckedChildren="Thông báo"
                checked={item.priceDropAlert}
                onChange={() => togglePriceAlert(item)}
              />
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
        <Breadcrumb.Item>Sản phẩm yêu thích</Breadcrumb.Item>
      </Breadcrumb>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <Title level={2} className="mb-1">
            <HeartFilled className="text-red-500 mr-2" />
            Sản phẩm yêu thích
          </Title>
          <Text type="secondary">
            {wishlistItems.length} sản phẩm • {selectedItems.length} đã chọn
          </Text>
        </div>
        <Space wrap>
          <Select
            value={sortBy}
            onChange={handleSort}
            style={{ width: 180 }}
            suffixIcon={<SortAscendingOutlined />}
          >
            <Option value="addedDate">Mới thêm nhất</Option>
            <Option value="priceAsc">Giá: Thấp → Cao</Option>
            <Option value="priceDesc">Giá: Cao → Thấp</Option>
            <Option value="rating">Đánh giá cao nhất</Option>
          </Select>
          <Segmented
            value={viewMode}
            onChange={value => setViewMode(value as 'grid' | 'list')}
            options={[
              { value: 'grid', icon: <AppstoreOutlined /> },
              { value: 'list', icon: <UnorderedListOutlined /> },
            ]}
          />
          <Button
            icon={<FilterOutlined />}
            onClick={() => setFilterVisible(true)}
          >
            Bộ lọc
          </Button>
        </Space>
      </div>

      {/* Action buttons */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <Row gutter={[16, 16]} align="middle">
          <Col flex="auto">
            {selectedItems.length > 0 && (
              <Space wrap>
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  onClick={handleAddAllToCart}
                >
                  Thêm {selectedItems.length} sản phẩm vào giỏ
                </Button>
                <Button
                  danger
                  icon={<DeleteOutlined />}
                  onClick={handleRemoveSelected}
                >
                  Xóa {selectedItems.length} đã chọn
                </Button>
                <Button
                  icon={<CopyOutlined />}
                  onClick={handleCompare}
                  disabled={selectedItems.length < 2}
                >
                  So sánh
                </Button>
              </Space>
            )}
          </Col>
          <Col>
            <Button
              danger
              onClick={handleClearAll}
              disabled={wishlistItems.length === 0}
            >
              Xóa tất cả
            </Button>
          </Col>
        </Row>
      </div>

      {/* Statistics */}
      <Row gutter={16} className="mb-6">
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Tổng giá trị"
              value={wishlistItems.reduce((sum, item) => sum + item.price, 0)}
              formatter={value => formatPrice(value as number)}
              prefix={<WalletOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Tiết kiệm được"
              value={wishlistItems.reduce(
                (sum, item) => sum + (item.originalPrice - item.price),
                0
              )}
              formatter={value => formatPrice(value as number)}
              valueStyle={{ color: '#52c41a' }}
              prefix={<TagOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Đang theo dõi giá"
              value={wishlistItems.filter(item => item.priceDropAlert).length}
              suffix={`/ ${wishlistItems.length}`}
              prefix={<BellOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {/* Products grid/list */}
      <Row gutter={[16, 16]}>
        {wishlistItems.map(item =>
          viewMode === 'grid'
            ? renderProductCard(item)
            : renderProductList(item)
        )}
      </Row>

      {/* Filter Drawer */}
      <Drawer
        title="Bộ lọc sản phẩm"
        placement="right"
        onClose={() => setFilterVisible(false)}
        open={filterVisible}
        width={screens.md ? 400 : '90%'}
      >
        <Form layout="vertical">
          <Form.Item label="Khoảng giá">
            <Slider
              range
              min={0}
              max={50000000}
              step={1000000}
              marks={{
                0: '0đ',
                50000000: '50tr',
              }}
            />
          </Form.Item>
          <Form.Item label="Thương hiệu">
            <Checkbox.Group>
              <Space direction="vertical">
                <Checkbox value="Apple">Apple</Checkbox>
                <Checkbox value="Samsung">Samsung</Checkbox>
                <Checkbox value="Xiaomi">Xiaomi</Checkbox>
              </Space>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item label="Danh mục">
            <Checkbox.Group>
              <Space direction="vertical">
                <Checkbox value="phone">Điện thoại</Checkbox>
                <Checkbox value="laptop">Laptop</Checkbox>
                <Checkbox value="watch">Đồng hồ</Checkbox>
                <Checkbox value="accessory">Phụ kiện</Checkbox>
              </Space>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" block>
              Áp dụng bộ lọc
            </Button>
          </Form.Item>
        </Form>
      </Drawer>

      {/* Compare Drawer */}
      <Drawer
        title="So sánh sản phẩm"
        placement="bottom"
        onClose={() => setCompareDrawerVisible(false)}
        open={compareDrawerVisible}
        height="80%"
      >
        <div className="text-center py-10">
          <Text>Tính năng so sánh sản phẩm đang được phát triển</Text>
        </div>
      </Drawer>
    </div>
  )
}

export default Wishlist
