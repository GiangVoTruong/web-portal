import {
  BankOutlined,
  CheckCircleOutlined,
  CreditCardOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  GiftOutlined,
  HomeOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  QrcodeOutlined,
  SafetyCertificateOutlined,
  ShoppingCartOutlined,
  TruckOutlined,
  UserOutlined,
  WalletOutlined,
} from '@ant-design/icons'
import {
  Alert,
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Form,
  Image,
  Input,
  List,
  message,
  notification,
  Radio,
  Result,
  Row,
  Select,
  Space,
  Steps,
  Timeline,
  Typography,
} from 'antd'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const { Title, Text } = Typography
const { Option } = Select

interface CartItem {
  key: string
  id: string
  name: string
  price: number
  quantity: number
  image: string
  originalPrice?: number
  warranty?: string
  gift?: string[]
  brand?: string
  category?: string
}

interface ShippingInfo {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  district: string
  ward: string
  note?: string
}

const Checkout: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo | null>(null)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [promoCode, setPromoCode] = useState('')
  const [discount, setDiscount] = useState(0)

  // Enhanced cart data
  const [cart] = useState<CartItem[]>([
    {
      key: '1',
      id: '1',
      name: 'iPhone 15 Pro Max 256GB - Chính hãng VN/A',
      price: 29990000,
      originalPrice: 34990000,
      quantity: 1,
      image: '/api/placeholder/400/400',
      warranty: '12 tháng',
      gift: ['Ốp lưng chính hãng', 'Cường lực 9H'],
      brand: 'Apple',
      category: 'Điện thoại',
    },
    {
      key: '2',
      id: '2',
      name: 'AirPods Pro 2nd Generation with MagSafe',
      price: 5890000,
      originalPrice: 6990000,
      quantity: 2,
      image: '/api/placeholder/400/400',
      warranty: '12 tháng',
      brand: 'Apple',
      category: 'Phụ kiện',
    },
  ])

  useEffect(() => {
    document.title = 'Thanh toán | Shop Của Bạn'
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const shipping = subtotal > 5000000 ? 0 : 30000
  const totalDiscount =
    discount +
    cart.reduce((acc, item) => {
      const itemDiscount = item.originalPrice
        ? (item.originalPrice - item.price) * item.quantity
        : 0
      return acc + itemDiscount
    }, 0)
  const total = subtotal + shipping - discount

  const applyPromoCode = () => {
    if (promoCode === 'WELCOME10') {
      const discountAmount = subtotal * 0.1
      setDiscount(discountAmount)
      message.success('Áp dụng mã giảm giá thành công!')
    } else {
      message.error('Mã giảm giá không hợp lệ')
    }
  }

  const nextStep = () => {
    form
      .validateFields()
      .then(values => {
        if (currentStep === 0) {
          setShippingInfo(values)
        }
        setCurrentStep(currentStep + 1)
      })
      .catch(() => {
        message.error('Vui lòng điền đầy đủ thông tin bắt buộc')
      })
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleSubmit = async () => {
    try {
      setLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      notification.success({
        message: 'Đặt hàng thành công!',
        description: 'Cảm ơn bạn đã mua sắm tại Shop Của Bạn.',
      })

      setCurrentStep(currentStep + 1)
    } catch (error) {
      notification.error({
        message: 'Đặt hàng thất bại',
        description: 'Đã có lỗi xảy ra, vui lòng thử lại.',
      })
    } finally {
      setLoading(false)
    }
  }

  // Order Summary Component
  const OrderSummary = () => (
    <Card className="sticky top-4">
      <Title level={4} className="mb-4">
        <ShoppingCartOutlined className="mr-2" />
        Chi tiết đơn hàng
      </Title>

      <List
        itemLayout="horizontal"
        dataSource={cart}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Image
                  width={60}
                  height={60}
                  src={item.image}
                  alt={item.name}
                  className="rounded-lg"
                />
              }
              title={
                <Text strong className="line-clamp-2">
                  {item.name}
                </Text>
              }
              description={
                <Space direction="vertical" size={0}>
                  <Text type="secondary">Số lượng: {item.quantity}</Text>
                  {item.warranty && (
                    <Text type="secondary" className="text-xs">
                      <SafetyCertificateOutlined /> {item.warranty}
                    </Text>
                  )}
                  {item.gift && (
                    <Text type="success" className="text-xs">
                      <GiftOutlined /> {item.gift.join(', ')}
                    </Text>
                  )}
                </Space>
              }
            />
            <div className="text-right">
              <Text className="block text-red-500 font-medium">
                {formatPrice(item.price)}
              </Text>
              {item.originalPrice && (
                <Text delete type="secondary" className="text-sm">
                  {formatPrice(item.originalPrice)}
                </Text>
              )}
            </div>
          </List.Item>
        )}
      />

      <Divider />

      <Form.Item className="mb-4">
        <Space.Compact style={{ width: '100%' }}>
          <Input
            placeholder="Mã giảm giá"
            value={promoCode}
            onChange={e => setPromoCode(e.target.value)}
          />
          <Button type="primary" onClick={applyPromoCode}>
            Áp dụng
          </Button>
        </Space.Compact>
      </Form.Item>

      <Space direction="vertical" className="w-full" size="small">
        <div className="flex justify-between">
          <Text>Tạm tính</Text>
          <Text>{formatPrice(subtotal)}</Text>
        </div>
        {totalDiscount > 0 && (
          <div className="flex justify-between">
            <Text>Giảm giá</Text>
            <Text type="success">-{formatPrice(totalDiscount)}</Text>
          </div>
        )}
        <div className="flex justify-between">
          <Text>Phí vận chuyển</Text>
          <Text>{shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}</Text>
        </div>

        <Divider className="my-3" />

        <div className="flex justify-between items-center">
          <Title level={4} className="mb-0">
            Tổng cộng
          </Title>
          <Title level={4} className="mb-0 text-red-500">
            {formatPrice(total)}
          </Title>
        </div>
        <Text type="secondary" className="text-center text-sm">
          (Đã bao gồm VAT)
        </Text>
      </Space>
    </Card>
  )

  // Shipping Information Step
  const renderShippingStep = () => (
    <Row gutter={24}>
      <Col xs={24} lg={16}>
        <Card>
          <Title level={4} className="mb-4">
            <TruckOutlined className="mr-2" />
            Thông tin giao hàng
          </Title>

          <Form form={form} layout="vertical">
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="fullName"
                  label="Họ và tên"
                  rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
                >
                  <Input
                    prefix={<UserOutlined className="text-gray-400" />}
                    placeholder="Nhập họ và tên"
                    size="large"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="phone"
                  label="Số điện thoại"
                  rules={[
                    { required: true, message: 'Vui lòng nhập số điện thoại' },
                    {
                      pattern: /^[0-9]{10}$/,
                      message: 'Số điện thoại không hợp lệ',
                    },
                  ]}
                >
                  <Input
                    prefix={<PhoneOutlined className="text-gray-400" />}
                    placeholder="Nhập số điện thoại"
                    size="large"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Vui lòng nhập email' },
                { type: 'email', message: 'Email không hợp lệ' },
              ]}
            >
              <Input
                prefix={<MailOutlined className="text-gray-400" />}
                placeholder="Nhập email"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="address"
              label="Địa chỉ"
              rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
            >
              <Input
                prefix={<EnvironmentOutlined className="text-gray-400" />}
                placeholder="Số nhà, tên đường"
                size="large"
              />
            </Form.Item>

            <Row gutter={16}>
              <Col xs={24} sm={8}>
                <Form.Item
                  name="city"
                  label="Tỉnh/Thành phố"
                  rules={[
                    { required: true, message: 'Vui lòng chọn tỉnh/thành phố' },
                  ]}
                >
                  <Select placeholder="Chọn tỉnh/thành phố" size="large">
                    <Option value="hcm">TP. Hồ Chí Minh</Option>
                    <Option value="hn">Hà Nội</Option>
                    <Option value="dn">Đà Nẵng</Option>
                    <Option value="hp">Hải Phòng</Option>
                    <Option value="ct">Cần Thơ</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item
                  name="district"
                  label="Quận/Huyện"
                  rules={[
                    { required: true, message: 'Vui lòng chọn quận/huyện' },
                  ]}
                >
                  <Select placeholder="Chọn quận/huyện" size="large">
                    <Option value="q1">Quận 1</Option>
                    <Option value="q2">Quận 2</Option>
                    <Option value="q3">Quận 3</Option>
                    <Option value="q4">Quận 4</Option>
                    <Option value="q5">Quận 5</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item
                  name="ward"
                  label="Phường/Xã"
                  rules={[
                    { required: true, message: 'Vui lòng chọn phường/xã' },
                  ]}
                >
                  <Select placeholder="Chọn phường/xã" size="large">
                    <Option value="p1">Phường 1</Option>
                    <Option value="p2">Phường 2</Option>
                    <Option value="p3">Phường 3</Option>
                    <Option value="p4">Phường 4</Option>
                    <Option value="p5">Phường 5</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item name="note" label="Ghi chú">
              <Input.TextArea
                rows={3}
                placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
              />
            </Form.Item>

            <Form.Item name="saveAddress" valuePropName="checked">
              <Checkbox>Lưu địa chỉ này cho lần mua sau</Checkbox>
            </Form.Item>
          </Form>
        </Card>
      </Col>

      <Col xs={24} lg={8}>
        <OrderSummary />
      </Col>
    </Row>
  )

  // Payment Method Step
  // Payment Method Step with enhanced colors
  const renderPaymentStep = () => (
    <Row gutter={24}>
      <Col xs={24} lg={16}>
        <Card>
          <Title level={4} className="mb-4">
            <WalletOutlined className="mr-2 text-blue-600" />
            Phương thức thanh toán
          </Title>

          <Form form={form} layout="vertical">
            <Form.Item
              name="paymentMethod"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn phương thức thanh toán',
                },
              ]}
            >
              <Radio.Group
                className="w-full"
                onChange={e => setPaymentMethod(e.target.value)}
              >
                <Space direction="vertical" className="w-full" size="middle">
                  <Card
                    className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                      paymentMethod === 'cod'
                        ? 'border-amber-500 border-2 shadow-md bg-amber-50'
                        : 'border-gray-200 hover:border-amber-400'
                    }`}
                    onClick={() => {
                      form.setFieldsValue({ paymentMethod: 'cod' })
                      setPaymentMethod('cod')
                    }}
                  >
                    <Radio value="cod" className="w-full">
                      <Space align="center">
                        <Avatar
                          icon={<DollarOutlined />}
                          className="bg-amber-500"
                          size={48}
                        />
                        <div>
                          <Text strong className="text-lg text-gray-800">
                            Thanh toán khi nhận hàng (COD)
                          </Text>
                          <div>
                            <Text type="secondary" className="text-sm">
                              Thanh toán bằng tiền mặt khi nhận hàng
                            </Text>
                          </div>
                        </div>
                      </Space>
                    </Radio>
                  </Card>

                  <Card
                    className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                      paymentMethod === 'bank'
                        ? 'border-green-500 border-2 shadow-md bg-green-50'
                        : 'border-gray-200 hover:border-green-400'
                    }`}
                    onClick={() => {
                      form.setFieldsValue({ paymentMethod: 'bank' })
                      setPaymentMethod('bank')
                    }}
                  >
                    <Radio value="bank" className="w-full">
                      <Space align="center">
                        <Avatar
                          icon={<BankOutlined />}
                          className="bg-green-500"
                          size={48}
                        />
                        <div>
                          <Text strong className="text-lg text-gray-800">
                            Chuyển khoản ngân hàng
                          </Text>
                          <div>
                            <Text type="secondary" className="text-sm">
                              Thanh toán qua tài khoản ngân hàng
                            </Text>
                          </div>
                        </div>
                      </Space>
                    </Radio>
                  </Card>

                  <Card
                    className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                      paymentMethod === 'momo'
                        ? 'border-pink-500 border-2 shadow-md bg-pink-50'
                        : 'border-gray-200 hover:border-pink-400'
                    }`}
                    onClick={() => {
                      form.setFieldsValue({ paymentMethod: 'momo' })
                      setPaymentMethod('momo')
                    }}
                  >
                    <Radio value="momo" className="w-full">
                      <Space align="center">
                        <Avatar
                          icon={<WalletOutlined />}
                          className="bg-pink-500"
                          size={48}
                        />
                        <div>
                          <Text strong className="text-lg text-gray-800">
                            Ví MoMo
                          </Text>
                          <div>
                            <Text type="secondary" className="text-sm">
                              Thanh toán qua ví điện tử MoMo
                            </Text>
                          </div>
                        </div>
                      </Space>
                    </Radio>
                  </Card>

                  <Card
                    className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                      paymentMethod === 'vnpay'
                        ? 'border-blue-500 border-2 shadow-md bg-blue-50'
                        : 'border-gray-200 hover:border-blue-400'
                    }`}
                    onClick={() => {
                      form.setFieldsValue({ paymentMethod: 'vnpay' })
                      setPaymentMethod('vnpay')
                    }}
                  >
                    <Radio value="vnpay" className="w-full">
                      <Space align="center">
                        <Avatar
                          icon={<QrcodeOutlined />}
                          className="bg-blue-500"
                          size={48}
                        />
                        <div>
                          <Text strong className="text-lg text-gray-800">
                            VNPay QR
                          </Text>
                          <div>
                            <Text type="secondary" className="text-sm">
                              Quét mã QR để thanh toán
                            </Text>
                          </div>
                        </div>
                      </Space>
                    </Radio>
                  </Card>

                  <Card
                    className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                      paymentMethod === 'credit'
                        ? 'border-purple-500 border-2 shadow-md bg-purple-50'
                        : 'border-gray-200 hover:border-purple-400'
                    }`}
                    onClick={() => {
                      form.setFieldsValue({ paymentMethod: 'credit' })
                      setPaymentMethod('credit')
                    }}
                  >
                    <Radio value="credit" className="w-full">
                      <Space align="center">
                        <Avatar
                          icon={<CreditCardOutlined />}
                          className="bg-purple-500"
                          size={48}
                        />
                        <div>
                          <Text strong className="text-lg text-gray-800">
                            Thẻ tín dụng/ghi nợ
                          </Text>
                          <div>
                            <Text type="secondary" className="text-sm">
                              Visa, MasterCard, JCB
                            </Text>
                          </div>
                        </div>
                      </Space>
                    </Radio>
                  </Card>
                </Space>
              </Radio.Group>
            </Form.Item>
          </Form>

          {paymentMethod === 'bank' && (
            <Alert
              message="Thông tin chuyển khoản"
              description={
                <Space direction="vertical">
                  <Text>
                    <strong>Ngân hàng:</strong> Vietcombank
                  </Text>
                  <Text>
                    <strong>Số tài khoản:</strong> 1234567890
                  </Text>
                  <Text>
                    <strong>Chủ tài khoản:</strong> CÔNG TY TNHH SHOP CỦA BẠN
                  </Text>
                  <Text>
                    <strong>Nội dung:</strong> ORD
                    {Date.now().toString().substr(-6)}
                  </Text>
                </Space>
              }
              type="info"
              showIcon
              className="mt-4"
              style={{ backgroundColor: '#f0fdf4', borderColor: '#86efac' }}
            />
          )}

          {paymentMethod === 'credit' && (
            <Card className="mt-4 border-purple-200 bg-purple-50">
              <Form layout="vertical">
                <Form.Item label="Số thẻ" required>
                  <Input
                    placeholder="1234 5678 9012 3456"
                    size="large"
                    className="border-purple-300 focus:border-purple-500"
                  />
                </Form.Item>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label="Ngày hết hạn" required>
                      <Input
                        placeholder="MM/YY"
                        size="large"
                        className="border-purple-300 focus:border-purple-500"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="CVV" required>
                      <Input
                        placeholder="123"
                        size="large"
                        className="border-purple-300 focus:border-purple-500"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="Tên chủ thẻ" required>
                  <Input
                    placeholder="NGUYEN VAN A"
                    size="large"
                    className="border-purple-300 focus:border-purple-500"
                  />
                </Form.Item>
              </Form>
            </Card>
          )}
        </Card>

        <Card className="mt-4 bg-green-50 border-green-200">
          <Space>
            <LockOutlined className="text-green-600 text-xl" />
            <Text className="text-green-800">
              Thông tin thanh toán của bạn được bảo mật tuyệt đối
            </Text>
          </Space>
        </Card>
      </Col>

      <Col xs={24} lg={8}>
        <OrderSummary />
      </Col>
    </Row>
  )

  // Order Summary Step
  const renderSummaryStep = () => (
    <Result
      icon={<CheckCircleOutlined className="text-green-500" />}
      title="Đặt hàng thành công!"
      subTitle={`Mã đơn hàng: ORD${Date.now().toString().substr(-6)}`}
      extra={[
        <Button type="primary" key="console" onClick={() => navigate('/')}>
          Tiếp tục mua sắm
        </Button>,
        <Button key="buy" onClick={() => navigate('/account/orders')}>
          Xem đơn hàng
        </Button>,
      ]}
    >
      <Card className="max-w-2xl mx-auto">
        <Timeline
          items={[
            {
              color: 'green',
              children: 'Đơn hàng đã được tiếp nhận',
            },
            {
              color: 'blue',
              children: 'Chúng tôi sẽ liên hệ xác nhận trong vòng 30 phút',
            },
            {
              children: 'Đơn hàng sẽ được giao trong 2-3 ngày làm việc',
            },
          ]}
        />

        <Divider />

        <div className="text-center">
          <Text>Nếu có bất kỳ thắc mắc nào, vui lòng liên hệ</Text>
          <div className="mt-2">
            <Space size="large">
              <Text>
                <PhoneOutlined /> 1900 1234
              </Text>
              <Text>
                <MailOutlined /> support@shopcuaban.com
              </Text>
            </Space>
          </div>
        </div>
      </Card>
    </Result>
  )

  const steps = [
    {
      title: 'Thông tin',
      icon: <TruckOutlined />,
    },
    {
      title: 'Thanh toán',
      icon: <WalletOutlined />,
    },
    {
      title: 'Xác nhận',
      icon: <CheckCircleOutlined />,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/cart">Giỏ hàng</Breadcrumb.Item>
        <Breadcrumb.Item>Thanh toán</Breadcrumb.Item>
      </Breadcrumb>

      <Card className="mb-6">
        <Steps current={currentStep} items={steps} />
      </Card>

      <div className="mb-8">
        {currentStep === 0 && renderShippingStep()}
        {currentStep === 1 && renderPaymentStep()}
        {currentStep === 2 && renderSummaryStep()}
      </div>

      {currentStep < 2 && (
        <Row justify="space-between" className="mt-6">
          <Col>
            {currentStep > 0 ? (
              <Button size="large" onClick={prevStep}>
                Quay lại
              </Button>
            ) : (
              <Link to="/cart">
                <Button size="large">Quay lại giỏ hàng</Button>
              </Link>
            )}
          </Col>
          <Col>
            <Button
              type="primary"
              size="large"
              onClick={currentStep === 1 ? handleSubmit : nextStep}
              loading={loading}
            >
              {currentStep === 1 ? 'Đặt hàng' : 'Tiếp tục'}
            </Button>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default Checkout
