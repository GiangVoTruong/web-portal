import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  CreditCardOutlined,
  DeleteOutlined,
  GiftOutlined,
  HeartOutlined,
  HomeOutlined,
  MinusOutlined,
  PercentageOutlined,
  PlusOutlined,
  SafetyCertificateOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  TruckOutlined,
} from '@ant-design/icons'
import {
  Alert,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Image,
  Input,
  InputNumber,
  List,
  message,
  Modal,
  Result,
  Row,
  Select,
  Space,
  Steps,
  Table,
  Tag,
  Tooltip,
  Typography,
} from 'antd'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const { Title, Text, Paragraph } = Typography
const { Step } = Steps
const { Option } = Select

interface CartItem {
  key: string
  id: string
  name: string
  price: number
  originalPrice?: number
  quantity: number
  image: string
  stock: number
  selected: boolean
  category: string
  brand: string
  warranty?: string
  gift?: string[]
  shipping?: string
}

interface PromotionCode {
  code: string
  discount: number
  minPurchase?: number
  description: string
}

const Cart: React.FC = () => {
  const navigate = useNavigate()
  const [cart, setCart] = useState<CartItem[]>([
    {
      key: '1',
      id: '1',
      name: 'iPhone 15 Pro Max 256GB - Chính hãng VN/A',
      price: 29990000,
      originalPrice: 34990000,
      quantity: 1,
      image: '/api/placeholder/400/400',
      stock: 10,
      selected: true,
      category: 'Điện thoại',
      brand: 'Apple',
      warranty: '12 tháng',
      gift: ['Ốp lưng chính hãng', 'Cường lực 9H'],
      shipping: 'Miễn phí',
    },
    {
      key: '2',
      id: '2',
      name: 'AirPods Pro 2nd Generation with MagSafe',
      price: 5890000,
      originalPrice: 6990000,
      quantity: 2,
      image: '/api/placeholder/400/400',
      stock: 15,
      selected: true,
      category: 'Phụ kiện',
      brand: 'Apple',
      warranty: '12 tháng',
      shipping: 'Miễn phí',
    },
    {
      key: '3',
      id: '3',
      name: 'Samsung Galaxy Watch 6 Classic 47mm',
      price: 8990000,
      originalPrice: 10990000,
      quantity: 1,
      image: '/api/placeholder/400/400',
      stock: 5,
      selected: false,
      category: 'Đồng hồ',
      brand: 'Samsung',
      warranty: '24 tháng',
      shipping: '30.000₫',
    },
  ])

  const [loading, setLoading] = useState(false)
  const [promotionCode, setPromotionCode] = useState('')
  const [appliedPromotion, setAppliedPromotion] =
    useState<PromotionCode | null>(null)
  const [selectAll, setSelectAll] = useState(true)

  useEffect(() => {
    document.title = 'Giỏ hàng | Shop Của Bạn'
  }, [])

  // Available promotion codes
  const promotionCodes: PromotionCode[] = [
    {
      code: 'WELCOME10',
      discount: 10,
      minPurchase: 1000000,
      description: 'Giảm 10% cho đơn hàng đầu tiên (tối đa 500.000₫)',
    },
    {
      code: 'SUMMER20',
      discount: 20,
      minPurchase: 5000000,
      description: 'Giảm 20% cho đơn hàng từ 5 triệu',
    },
    { code: 'FREESHIP', discount: 0, description: 'Miễn phí vận chuyển' },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const handleQuantityChange = (value: number, item: CartItem) => {
    if (value && value >= 1 && value <= item.stock) {
      const newCart = cart.map(cartItem => {
        if (cartItem.key === item.key) {
          return { ...cartItem, quantity: value }
        }
        return cartItem
      })
      setCart(newCart)
    }
  }

  const handleRemoveItem = (item: CartItem) => {
    Modal.confirm({
      title: 'Xác nhận xóa',
      content: `Bạn có chắc chắn muốn xóa "${item.name}" khỏi giỏ hàng?`,
      okText: 'Xóa',
      cancelText: 'Hủy',
      onOk: () => {
        const newCart = cart.filter(cartItem => cartItem.key !== item.key)
        setCart(newCart)
        message.success('Đã xóa sản phẩm khỏi giỏ hàng')
      },
    })
  }

  const handleSelectItem = (item: CartItem) => {
    const newCart = cart.map(cartItem => {
      if (cartItem.key === item.key) {
        return { ...cartItem, selected: !cartItem.selected }
      }
      return cartItem
    })
    setCart(newCart)
  }

  const handleSelectAll = (checked: boolean) => {
    const newCart = cart.map(item => ({ ...item, selected: checked }))
    setCart(newCart)
    setSelectAll(checked)
  }

  const handleApplyPromotion = () => {
    const promotion = promotionCodes.find(
      p => p.code === promotionCode.toUpperCase()
    )
    if (promotion) {
      const selectedItems = cart.filter(item => item.selected)
      const subtotal = selectedItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      )

      if (promotion.minPurchase && subtotal < promotion.minPurchase) {
        message.error(
          `Mã giảm giá này chỉ áp dụng cho đơn hàng từ ${formatPrice(promotion.minPurchase)}`
        )
        return
      }

      setAppliedPromotion(promotion)
      message.success('Áp dụng mã giảm giá thành công!')
    } else {
      message.error('Mã giảm giá không hợp lệ')
    }
  }

  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      message.warning('Vui lòng chọn sản phẩm để thanh toán')
      return
    }
    navigate('/checkout')
  }

  const selectedItems = cart.filter(item => item.selected)
  const subtotal = selectedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const totalOriginalPrice = selectedItems.reduce(
    (acc, item) => acc + (item.originalPrice || item.price) * item.quantity,
    0
  )
  const totalDiscount = totalOriginalPrice - subtotal
  const shippingFee =
    selectedItems.length > 0 ? (subtotal >= 5000000 ? 0 : 30000) : 0

  let promotionDiscount = 0
  if (appliedPromotion) {
    if (appliedPromotion.discount > 0) {
      promotionDiscount = Math.min(
        (subtotal * appliedPromotion.discount) / 100,
        500000
      )
    }
    if (appliedPromotion.code === 'FREESHIP') {
      promotionDiscount = shippingFee
    }
  }

  const total = subtotal + shippingFee - promotionDiscount

  const columns = [
    {
      title: () => (
        <Checkbox
          checked={selectAll}
          onChange={e => handleSelectAll(e.target.checked)}
        />
      ),
      dataIndex: 'selected',
      key: 'selected',
      width: 40,
      render: (_: any, record: CartItem) => (
        <Checkbox
          checked={record.selected}
          onChange={() => handleSelectItem(record)}
        />
      ),
    },
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      key: 'name',
      render: (_: any, record: CartItem) => (
        <div className="flex gap-3">
          <Image
            width={60}
            height={60}
            src={record.image}
            alt={record.name}
            placeholder
            fallback="/api/placeholder/60/60"
            className="rounded-lg flex-shrink-0"
          />
          <div className="min-w-0">
            <Link to={`/products/${record.id}`}>
              <Text
                strong
                className="text-base hover:text-blue-500 line-clamp-2"
              >
                {record.name}
              </Text>
            </Link>
            <div className="flex flex-wrap gap-1 mt-1">
              <Tag>{record.brand}</Tag>
              <Tag>{record.category}</Tag>
            </div>
            {record.warranty && (
              <div className="flex items-center gap-1 mt-1">
                <SafetyCertificateOutlined className="text-blue-500 text-xs" />
                <Text type="secondary" className="text-xs">
                  Bảo hành {record.warranty}
                </Text>
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      title: 'Đơn giá',
      dataIndex: 'price',
      key: 'price',
      width: 120,
      render: (_: any, record: CartItem) => (
        <div>
          <div className="text-red-500 font-medium">
            {formatPrice(record.price)}
          </div>
          {record.originalPrice && record.originalPrice > record.price && (
            <div className="text-gray-400 line-through text-sm">
              {formatPrice(record.originalPrice)}
            </div>
          )}
        </div>
      ),
    },
    {
      title: 'Số lượng',
      key: 'quantity',
      dataIndex: 'quantity',
      width: 150,
      render: (_: any, record: CartItem) => (
        <div className="flex items-center gap-2">
          <Button
            size="small"
            icon={<MinusOutlined />}
            onClick={() => handleQuantityChange(record.quantity - 1, record)}
            disabled={record.quantity <= 1}
          />
          <InputNumber
            min={1}
            max={record.stock}
            value={record.quantity}
            onChange={value => handleQuantityChange(value || 1, record)}
            style={{ width: 50 }}
            size="small"
          />
          <Button
            size="small"
            icon={<PlusOutlined />}
            onClick={() => handleQuantityChange(record.quantity + 1, record)}
            disabled={record.quantity >= record.stock}
          />
        </div>
      ),
    },
    {
      title: 'Thành tiền',
      key: 'total',
      width: 120,
      render: (_: any, record: CartItem) => (
        <Text strong className="text-red-500">
          {formatPrice(record.price * record.quantity)}
        </Text>
      ),
    },
    {
      title: '',
      key: 'action',
      width: 80,
      render: (_: any, record: CartItem) => (
        <Space>
          <Tooltip title="Yêu thích">
            <Button
              type="text"
              icon={<HeartOutlined />}
              onClick={() => message.success('Đã thêm vào yêu thích')}
              size="small"
            />
          </Tooltip>
          <Tooltip title="Xóa">
            <Button
              type="text"
              danger
              icon={<DeleteOutlined />}
              onClick={() => handleRemoveItem(record)}
              size="small"
            />
          </Tooltip>
        </Space>
      ),
    },
  ]

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <Breadcrumb className="mb-6">
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item>Giỏ hàng</Breadcrumb.Item>
        </Breadcrumb>

        <Result
          icon={<ShoppingCartOutlined style={{ color: '#8c8c8c' }} />}
          title="Giỏ hàng của bạn đang trống"
          subTitle="Hãy khám phá các sản phẩm tuyệt vời và thêm vào giỏ hàng của bạn."
          extra={[
            <Link to="/products" key="shop">
              <Button type="primary" size="large" icon={<ShoppingOutlined />}>
                Tiếp tục mua sắm
              </Button>
            </Link>,
            <Link to="/account/wishlist" key="wishlist">
              <Button size="large" icon={<HeartOutlined />}>
                Xem danh sách yêu thích
              </Button>
            </Link>,
          ]}
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

      <div className="flex items-center justify-between mb-6">
        <Title level={2} className="mb-0">
          <ShoppingCartOutlined className="mr-2" />
          Giỏ hàng của bạn
        </Title>
        <Text type="secondary">{selectedItems.length} sản phẩm đã chọn</Text>
      </div>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Card className="shadow-sm">
            <Table
              columns={columns}
              dataSource={cart}
              pagination={false}
              rowKey="key"
              className="cart-table"
            />
          </Card>

          {/* Recommended Products */}
          <Card
            title="Sản phẩm bạn có thể thích"
            className="mt-6 shadow-sm"
            extra={<Button type="link">Xem tất cả</Button>}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(item => (
                <Card
                  key={item}
                  hoverable
                  cover={
                    <img
                      alt="product"
                      src="/api/placeholder/200/200"
                      className="h-32 object-cover"
                    />
                  }
                  size="small"
                >
                  <Card.Meta
                    title={
                      <Text ellipsis className="text-sm">
                        Sản phẩm gợi ý {item}
                      </Text>
                    }
                    description={<Text type="danger">2.990.000₫</Text>}
                  />
                </Card>
              ))}
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card className="shadow-sm sticky top-4">
            <Title level={4}>Chi tiết đơn hàng</Title>

            {/* Promotion Code */}
            <div className="mb-6">
              <Text strong className="block mb-2">
                Mã giảm giá
              </Text>
              <Space.Compact style={{ width: '100%' }}>
                <Input
                  placeholder="Nhập mã giảm giá"
                  value={promotionCode}
                  onChange={e => setPromotionCode(e.target.value)}
                  suffix={
                    appliedPromotion && (
                      <CheckCircleOutlined className="text-green-500" />
                    )
                  }
                />
                <Button type="primary" onClick={handleApplyPromotion}>
                  Áp dụng
                </Button>
              </Space.Compact>
              {appliedPromotion && (
                <Alert
                  message={appliedPromotion.description}
                  type="success"
                  showIcon
                  className="mt-2"
                  closable
                  onClose={() => {
                    setAppliedPromotion(null)
                    setPromotionCode('')
                  }}
                />
              )}
            </div>

            <Divider />

            {/* Order Summary */}
            <Space direction="vertical" className="w-full" size="middle">
              <div className="flex justify-between">
                <Text>Tạm tính</Text>
                <Text>{formatPrice(subtotal)}</Text>
              </div>

              {totalDiscount > 0 && (
                <div className="flex justify-between">
                  <Text>Giảm giá sản phẩm</Text>
                  <Text type="success">-{formatPrice(totalDiscount)}</Text>
                </div>
              )}

              <div className="flex justify-between">
                <Text>Phí vận chuyển</Text>
                <Text>
                  {shippingFee === 0 ? 'Miễn phí' : formatPrice(shippingFee)}
                </Text>
              </div>

              {promotionDiscount > 0 && (
                <div className="flex justify-between">
                  <Text>Giảm giá khuyến mãi</Text>
                  <Text type="success">-{formatPrice(promotionDiscount)}</Text>
                </div>
              )}

              <Divider />

              <div className="flex justify-between">
                <Title level={4} className="mb-0">
                  Tổng cộng
                </Title>
                <Title level={4} className="mb-0 text-red-500">
                  {formatPrice(total)}
                </Title>
              </div>

              <div className="text-center">
                <Text type="secondary" className="text-sm">
                  (Đã bao gồm VAT)
                </Text>
              </div>
            </Space>

            <Divider />

            <Button
              type="primary"
              size="large"
              block
              icon={<CreditCardOutlined />}
              onClick={handleCheckout}
              disabled={selectedItems.length === 0}
              className="mb-3"
            >
              Tiến hành thanh toán
            </Button>

            <Link to="/products">
              <Button size="large" block icon={<ArrowLeftOutlined />}>
                Tiếp tục mua sắm
              </Button>
            </Link>

            {/* Benefits */}
            <Divider />

            <List
              size="small"
              dataSource={[
                {
                  icon: <TruckOutlined />,
                  text: 'Miễn phí vận chuyển cho đơn từ 5 triệu',
                },
                {
                  icon: <SafetyCertificateOutlined />,
                  text: 'Bảo hành chính hãng',
                },
                {
                  icon: <PercentageOutlined />,
                  text: 'Giảm giá đến 30% cho thành viên',
                },
                { icon: <GiftOutlined />, text: 'Quà tặng hấp dẫn' },
              ]}
              renderItem={item => (
                <List.Item>
                  <Space>
                    <span className="text-blue-500">{item.icon}</span>
                    <Text className="text-sm">{item.text}</Text>
                  </Space>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Cart
