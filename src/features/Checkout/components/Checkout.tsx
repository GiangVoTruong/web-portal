import { HomeOutlined } from '@ant-design/icons'
import {
  Breadcrumb,
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  Radio,
  Result,
  Select,
  Steps,
  Table,
} from 'antd'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const { Step } = Steps
const { Option } = Select

interface CartItem {
  key: string
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

const Checkout: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)

  // Mock cart data (in a real app, this would come from context or state management)
  const [cart, setCart] = useState<CartItem[]>([
    {
      key: '1',
      id: '1',
      name: 'Điện thoại thông minh ProMax',
      price: 2999000,
      quantity: 1,
      image: '/placeholder.jpg',
    },
    {
      key: '2',
      id: '2',
      name: 'Tai nghe không dây Ultra',
      price: 1899000,
      quantity: 1,
      image: '/placeholder.jpg',
    },
  ])

  useEffect(() => {
    document.title = 'Thanh toán | Shop Của Bạn'
  }, [])

  // Format price to VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
  }

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const shipping = cart.length > 0 ? 30000 : 0
  const total = subtotal + shipping

  const columns = [
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      key: 'name',
      render: (_: any, record: CartItem) => (
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-100 rounded mr-3 flex items-center justify-center">
            <span className="text-gray-400 text-xs">Hình</span>
          </div>
          <span>{record.name}</span>
        </div>
      ),
    },
    {
      title: 'Đơn giá',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => formatPrice(price),
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Thành tiền',
      key: 'total',
      render: (_: any, record: CartItem) =>
        formatPrice(record.price * record.quantity),
    },
  ]

  const nextStep = () => {
    form.validateFields().then(() => {
      setCurrentStep(currentStep + 1)
    })
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setCompleted(true)
      setCurrentStep(currentStep + 1)
    }, 1500)
  }

  // Shipping information step
  const renderShippingStep = () => (
    <Form form={form} layout="vertical" initialValues={{ remember: true }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4">Thông tin giao hàng</h2>
          <Form.Item
            name="fullName"
            label="Họ và tên"
            rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
          >
            <Input placeholder="Nhập họ và tên" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Vui lòng nhập email' },
              { type: 'email', message: 'Email không hợp lệ' },
            ]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
          >
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>
          <Form.Item
            name="address"
            label="Địa chỉ"
            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
          >
            <Input placeholder="Nhập địa chỉ" />
          </Form.Item>
          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              name="city"
              label="Tỉnh/Thành phố"
              rules={[
                { required: true, message: 'Vui lòng chọn tỉnh/thành phố' },
              ]}
            >
              <Select placeholder="Chọn tỉnh/thành phố">
                <Option value="hcm">TP. Hồ Chí Minh</Option>
                <Option value="hn">Hà Nội</Option>
                <Option value="dn">Đà Nẵng</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="district"
              label="Quận/Huyện"
              rules={[{ required: true, message: 'Vui lòng chọn quận/huyện' }]}
            >
              <Select placeholder="Chọn quận/huyện">
                <Option value="q1">Quận 1</Option>
                <Option value="q2">Quận 2</Option>
                <Option value="q3">Quận 3</Option>
              </Select>
            </Form.Item>
          </div>
          <Form.Item
            name="ward"
            label="Phường/Xã"
            rules={[{ required: true, message: 'Vui lòng chọn phường/xã' }]}
          >
            <Select placeholder="Chọn phường/xã">
              <Option value="p1">Phường 1</Option>
              <Option value="p2">Phường 2</Option>
              <Option value="p3">Phường 3</Option>
            </Select>
          </Form.Item>
          <Form.Item name="note" label="Ghi chú">
            <Input.TextArea placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn." />
          </Form.Item>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h2 className="text-xl font-bold mb-4">Đơn hàng của bạn</h2>
          <Table
            columns={columns}
            dataSource={cart}
            pagination={false}
            rowKey="key"
            size="small"
          />
          <Divider />
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Tạm tính</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Phí vận chuyển</span>
              <span>{formatPrice(shipping)}</span>
            </div>
            <Divider />
            <div className="flex justify-between font-bold">
              <span>Tổng cộng</span>
              <span className="text-blue-600 text-xl">
                {formatPrice(total)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <Link to="/cart">
          <Button>Quay lại giỏ hàng</Button>
        </Link>
        <Button type="primary" onClick={nextStep}>
          Tiếp tục
        </Button>
      </div>
    </Form>
  )

  // Payment method step
  const renderPaymentStep = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-xl font-bold mb-4">Phương thức thanh toán</h2>
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
            <Radio.Group className="w-full">
              <div className="space-y-4">
                <Radio
                  value="cod"
                  className="w-full border border-gray-200 p-4 rounded-lg flex items-start"
                >
                  <div>
                    <div className="font-medium">
                      Thanh toán khi nhận hàng (COD)
                    </div>
                    <div className="text-gray-500 text-sm">
                      Thanh toán bằng tiền mặt khi nhận hàng
                    </div>
                  </div>
                </Radio>
                <Radio
                  value="bank"
                  className="w-full border border-gray-200 p-4 rounded-lg flex items-start"
                >
                  <div>
                    <div className="font-medium">Chuyển khoản ngân hàng</div>
                    <div className="text-gray-500 text-sm">
                      Thực hiện thanh toán vào tài khoản ngân hàng của chúng tôi
                    </div>
                  </div>
                </Radio>
                <Radio
                  value="momo"
                  className="w-full border border-gray-200 p-4 rounded-lg flex items-start"
                >
                  <div>
                    <div className="font-medium">Ví MoMo</div>
                    <div className="text-gray-500 text-sm">
                      Thanh toán qua ví điện tử MoMo
                    </div>
                  </div>
                </Radio>
                <Radio
                  value="vnpay"
                  className="w-full border border-gray-200 p-4 rounded-lg flex items-start"
                >
                  <div>
                    <div className="font-medium">VN Pay</div>
                    <div className="text-gray-500 text-sm">
                      Thanh toán qua cổng VN Pay QR
                    </div>
                  </div>
                </Radio>
                <Radio
                  value="credit"
                  className="w-full border border-gray-200 p-4 rounded-lg flex items-start"
                >
                  <div>
                    <div className="font-medium">Thẻ tín dụng / Ghi nợ</div>
                    <div className="text-gray-500 text-sm">
                      Thanh toán bằng thẻ Visa, MasterCard, JCB
                    </div>
                  </div>
                </Radio>
              </div>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="saveInfo" valuePropName="checked">
            <Checkbox>Lưu thông tin cho lần mua hàng tiếp theo</Checkbox>
          </Form.Item>
        </Form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
        <h2 className="text-xl font-bold mb-4">Đơn hàng của bạn</h2>
        <Table
          columns={columns}
          dataSource={cart}
          pagination={false}
          rowKey="key"
          size="small"
        />
        <Divider />
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Tạm tính</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Phí vận chuyển</span>
            <span>{formatPrice(shipping)}</span>
          </div>
          <Divider />
          <div className="flex justify-between font-bold">
            <span>Tổng cộng</span>
            <span className="text-blue-600 text-xl">{formatPrice(total)}</span>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 mt-6 flex justify-between">
        <Button onClick={prevStep}>Quay lại</Button>
        <Button type="primary" onClick={handleSubmit} loading={loading}>
          Đặt hàng
        </Button>
      </div>
    </div>
  )

  // Order completed step
  const renderCompletedStep = () => (
    <Result
      status="success"
      title="Đặt hàng thành công!"
      subTitle={`Mã đơn hàng: ORDER-${Date.now().toString().substr(-6)} | Cảm ơn bạn đã mua sắm tại Shop Của Bạn.`}
      extra={[
        <Button type="primary" key="console" onClick={() => navigate('/')}>
          Tiếp tục mua sắm
        </Button>,
        <Button key="buy" onClick={() => navigate('/account/orders')}>
          Xem đơn hàng
        </Button>,
      ]}
    />
  )

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/cart">Giỏ hàng</Breadcrumb.Item>
        <Breadcrumb.Item>Thanh toán</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="text-2xl font-bold mb-6">Thanh toán</h1>

      <div className="mb-8">
        <Steps current={currentStep}>
          <Step title="Thông tin giao hàng" />
          <Step title="Phương thức thanh toán" />
          <Step title="Hoàn tất đơn hàng" />
        </Steps>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        {currentStep === 0 && renderShippingStep()}
        {currentStep === 1 && renderPaymentStep()}
        {currentStep === 2 && renderCompletedStep()}
      </div>
    </div>
  )
}

export default Checkout
