import {
  BellOutlined,
  CalendarOutlined,
  CameraOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  EnvironmentOutlined,
  ExclamationCircleOutlined,
  EyeOutlined,
  GiftOutlined,
  HeartFilled,
  HeartOutlined,
  HistoryOutlined,
  HomeOutlined,
  LockOutlined,
  LogoutOutlined,
  MailOutlined,
  MessageOutlined,
  PhoneOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  PrinterOutlined,
  QuestionCircleOutlined,
  SafetyCertificateOutlined,
  SafetyOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  StarOutlined,
  SyncOutlined,
  TruckOutlined,
  UserOutlined,
  WalletOutlined,
} from '@ant-design/icons'
import {
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Col,
  Collapse,
  DatePicker,
  Descriptions,
  Divider,
  Empty,
  Form,
  Grid,
  Input,
  List,
  Menu,
  message,
  Modal,
  Radio,
  Rate,
  Row,
  Select,
  Space,
  Statistic,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  Typography,
  Upload,
} from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'

const { Title, Text, Paragraph } = Typography
const { TabPane } = Tabs
const { Panel } = Collapse
const { Option } = Select
const { Step } = Steps
const { useBreakpoint } = Grid

// Enhanced Profile component
const Profile: React.FC = () => {
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [form] = Form.useForm()

  const userInfo = {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0123456789',
    gender: 'Nam',
    birthday: '01/01/1990',
    address: '123 Nguyễn Huệ, Quận 1, TP.HCM',
    joinDate: '01/01/2020',
    level: 'VIP',
    points: 1250,
    orders: 45,
    spent: 25680000,
  }

  const handleUpload = () => {
    setUploading(true)
    setTimeout(() => {
      setUploading(false)
      message.success('Cập nhật ảnh đại diện thành công!')
    }, 1500)
  }

  const handleEdit = () => {
    form.setFieldsValue(userInfo)
    setEditModalVisible(true)
  }

  const handleSave = (values: any) => {
    console.log('Saving:', values)
    message.success('Cập nhật thông tin thành công!')
    setEditModalVisible(false)
  }

  return (
    <div>
      <Card className="mb-6">
        <Row gutter={24}>
          <Col xs={24} md={8} className="text-center">
            <div className="relative inline-block mb-4">
              <Avatar
                size={120}
                icon={<UserOutlined />}
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                className="border-4 border-white shadow-lg"
              />
              <Upload
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleUpload}
              >
                <Button
                  icon={<CameraOutlined />}
                  shape="circle"
                  size="small"
                  className="absolute bottom-0 right-0 shadow-lg"
                  loading={uploading}
                />
              </Upload>
            </div>
            <Title level={4} className="mb-1">
              {userInfo.name}
            </Title>
            <Tag color="gold" className="mb-2">
              <StarOutlined /> {userInfo.level}
            </Tag>
            <div className="mb-4">
              <Text className="block text-gray-500">{userInfo.email}</Text>
              <Text className="block text-gray-500">{userInfo.phone}</Text>
            </div>
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={handleEdit}
              block
            >
              Chỉnh sửa thông tin
            </Button>
          </Col>
          <Col xs={24} md={16}>
            <Title level={5} className="mb-4">
              Thông tin cá nhân
            </Title>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Card size="small" className="bg-gray-50">
                  <Statistic
                    title="Điểm tích lũy"
                    value={userInfo.points}
                    prefix={<StarOutlined />}
                    suffix="điểm"
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12}>
                <Card size="small" className="bg-gray-50">
                  <Statistic
                    title="Tổng đơn hàng"
                    value={userInfo.orders}
                    prefix={<ShoppingCartOutlined />}
                    suffix="đơn"
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12}>
                <Card size="small" className="bg-gray-50">
                  <Statistic
                    title="Tổng chi tiêu"
                    value={userInfo.spent}
                    prefix={<WalletOutlined />}
                    formatter={value =>
                      new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(value as number)
                    }
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12}>
                <Card size="small" className="bg-gray-50">
                  <Statistic
                    title="Ngày tham gia"
                    value={userInfo.joinDate}
                    prefix={<CalendarOutlined />}
                  />
                </Card>
              </Col>
            </Row>
            <Divider />
            <Descriptions title="Chi tiết thông tin" column={{ xs: 1, sm: 2 }}>
              <Descriptions.Item label="Họ tên">
                {userInfo.name}
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                {userInfo.email}
              </Descriptions.Item>
              <Descriptions.Item label="Số điện thoại">
                {userInfo.phone}
              </Descriptions.Item>
              <Descriptions.Item label="Giới tính">
                {userInfo.gender}
              </Descriptions.Item>
              <Descriptions.Item label="Ngày sinh">
                {userInfo.birthday}
              </Descriptions.Item>
              <Descriptions.Item label="Địa chỉ">
                {userInfo.address}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Card>

      {/* Security Settings */}
      <Card
        title={
          <Space>
            <SafetyCertificateOutlined />
            Bảo mật tài khoản
          </Space>
        }
        className="mb-6"
      >
        <List>
          <List.Item actions={[<Button type="link">Thay đổi</Button>]}>
            <List.Item.Meta
              avatar={<LockOutlined className="text-xl text-blue-500" />}
              title="Mật khẩu"
              description="Lần thay đổi gần nhất: 3 tháng trước"
            />
          </List.Item>
          <List.Item actions={[<Switch defaultChecked />]}>
            <List.Item.Meta
              avatar={<SafetyOutlined className="text-xl text-green-500" />}
              title="Xác thực 2 bước"
              description="Bảo vệ tài khoản với xác thực 2 bước"
            />
          </List.Item>
          <List.Item actions={[<Button type="link">Quản lý</Button>]}>
            <List.Item.Meta
              avatar={<HistoryOutlined className="text-xl text-orange-500" />}
              title="Lịch sử đăng nhập"
              description="Xem các phiên đăng nhập gần đây"
            />
          </List.Item>
        </List>
      </Card>

      {/* Edit Modal */}
      <Modal
        title="Chỉnh sửa thông tin cá nhân"
        open={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        footer={null}
        width={600}
      >
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Họ tên"
                rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
              >
                <Input prefix={<UserOutlined />} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[
                  { required: true, message: 'Vui lòng nhập số điện thoại' },
                ]}
              >
                <Input prefix={<PhoneOutlined />} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Vui lòng nhập email' },
                  { type: 'email', message: 'Email không hợp lệ' },
                ]}
              >
                <Input prefix={<MailOutlined />} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="birthday" label="Ngày sinh">
                <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="gender" label="Giới tính">
                <Radio.Group>
                  <Radio value="Nam">Nam</Radio>
                  <Radio value="Nữ">Nữ</Radio>
                  <Radio value="Khác">Khác</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="address" label="Địa chỉ">
                <Input.TextArea rows={2} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item className="mb-0 text-right">
            <Space>
              <Button onClick={() => setEditModalVisible(false)}>Hủy</Button>
              <Button type="primary" htmlType="submit">
                Lưu thay đổi
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

// Enhanced Orders component
// Enhanced Orders component with proper types
const Orders: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedOrder, setSelectedOrder] = useState<any>(null)
  const [detailVisible, setDetailVisible] = useState(false)

  // Define proper types
  interface Product {
    name: string
    quantity: number
    price: number
  }

  interface Order {
    id: string
    date: string
    status: string
    statusText: string
    total: number
    items: number
    payment: string
    shipping: string
    products: Product[]
  }

  const orders: Order[] = [
    {
      id: 'ORDER-123456',
      date: '01/05/2023',
      status: 'delivered',
      statusText: 'Đã giao',
      total: 4898000,
      items: 2,
      payment: 'VISA ****1234',
      shipping: 'Giao hàng nhanh',
      products: [
        { name: 'iPhone 15 Pro Max', quantity: 1, price: 2999000 },
        { name: 'AirPods Pro 2', quantity: 1, price: 1899000 },
      ],
    },
    {
      id: 'ORDER-123457',
      date: '15/04/2023',
      status: 'shipping',
      statusText: 'Đang giao',
      total: 2999000,
      items: 1,
      payment: 'COD',
      shipping: 'Giao hàng tiêu chuẩn',
      products: [{ name: 'MacBook Air M2', quantity: 1, price: 2999000 }],
    },
    {
      id: 'ORDER-123458',
      date: '30/03/2023',
      status: 'cancelled',
      statusText: 'Đã hủy',
      total: 1899000,
      items: 1,
      payment: 'Momo',
      shipping: 'Giao hàng nhanh',
      products: [{ name: 'iPad Air 5', quantity: 1, price: 1899000 }],
    },
  ]

  const statusFilters = [
    { key: 'all', label: 'Tất cả' },
    { key: 'pending', label: 'Chờ xác nhận' },
    { key: 'confirmed', label: 'Đã xác nhận' },
    { key: 'shipping', label: 'Đang giao' },
    { key: 'delivered', label: 'Đã giao' },
    { key: 'cancelled', label: 'Đã hủy' },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'success'
      case 'shipping':
        return 'processing'
      case 'cancelled':
        return 'error'
      case 'pending':
        return 'warning'
      default:
        return 'default'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircleOutlined />
      case 'shipping':
        return <TruckOutlined />
      case 'cancelled':
        return <CloseCircleOutlined />
      case 'pending':
        return <ClockCircleOutlined />
      default:
        return null
    }
  }

  const handleViewDetail = (order: Order) => {
    setSelectedOrder(order)
    setDetailVisible(true)
  }

  const columns = [
    {
      title: 'Mã đơn hàng',
      dataIndex: 'id',
      key: 'id',
      render: (id: string) => (
        <Button
          type="link"
          onClick={() => handleViewDetail(orders.find(o => o.id === id)!)}
        >
          {id}
        </Button>
      ),
    },
    {
      title: 'Ngày đặt',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Sản phẩm',
      dataIndex: 'items',
      key: 'items',
      render: (items: number) => `${items} sản phẩm`,
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'total',
      key: 'total',
      render: (total: number) => formatPrice(total),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: string, record: Order) => (
        <Tag icon={getStatusIcon(status)} color={getStatusColor(status)}>
          {record.statusText}
        </Tag>
      ),
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (_: any, record: Order) => (
        <Space>
          <Button
            type="link"
            icon={<EyeOutlined />}
            onClick={() => handleViewDetail(record)}
          >
            Chi tiết
          </Button>
          {record.status === 'shipping' && (
            <Button type="link" icon={<TruckOutlined />}>
              Theo dõi
            </Button>
          )}
          {record.status === 'delivered' && (
            <Button type="link" icon={<SyncOutlined />}>
              Mua lại
            </Button>
          )}
        </Space>
      ),
    },
  ]

  const productColumns = [
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Đơn giá',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => formatPrice(price),
    },
    {
      title: 'Thành tiền',
      key: 'total',
      render: (_: any, record: Product) =>
        formatPrice(record.price * record.quantity),
    },
  ]

  return (
    <div>
      <Card>
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          tabBarExtraContent={
            <Button icon={<DownloadOutlined />}>Xuất Excel</Button>
          }
        >
          {statusFilters.map(filter => (
            <TabPane tab={filter.label} key={filter.key}>
              <Table
                columns={columns}
                dataSource={orders.filter(
                  o => filter.key === 'all' || o.status === filter.key
                )}
                rowKey="id"
                pagination={{ pageSize: 10 }}
              />
            </TabPane>
          ))}
        </Tabs>
      </Card>

      {/* Order Detail Modal */}
      <Modal
        title={`Chi tiết đơn hàng ${selectedOrder?.id}`}
        open={detailVisible}
        onCancel={() => setDetailVisible(false)}
        width={800}
        footer={[
          <Button key="print" icon={<PrinterOutlined />}>
            In đơn hàng
          </Button>,
          <Button key="close" onClick={() => setDetailVisible(false)}>
            Đóng
          </Button>,
        ]}
      >
        {selectedOrder && (
          <div>
            <Steps
              current={
                selectedOrder.status === 'delivered'
                  ? 3
                  : selectedOrder.status === 'shipping'
                    ? 2
                    : 1
              }
              className="mb-8"
            >
              <Step title="Đặt hàng" description={selectedOrder.date} />
              <Step title="Xác nhận" description="01/05/2023" />
              <Step title="Đang giao" description="02/05/2023" />
              <Step title="Đã giao" description="03/05/2023" />
            </Steps>

            <Descriptions bordered column={{ xs: 1, sm: 2 }}>
              <Descriptions.Item label="Mã đơn hàng">
                {selectedOrder.id}
              </Descriptions.Item>
              <Descriptions.Item label="Ngày đặt">
                {selectedOrder.date}
              </Descriptions.Item>
              <Descriptions.Item label="Trạng thái">
                <Tag color={getStatusColor(selectedOrder.status)}>
                  {selectedOrder.statusText}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Thanh toán">
                {selectedOrder.payment}
              </Descriptions.Item>
              <Descriptions.Item label="Vận chuyển">
                {selectedOrder.shipping}
              </Descriptions.Item>
              <Descriptions.Item label="Tổng tiền">
                {formatPrice(selectedOrder.total)}
              </Descriptions.Item>
            </Descriptions>

            <Divider>Sản phẩm</Divider>

            <Table
              dataSource={selectedOrder.products}
              columns={productColumns}
              pagination={false}
              rowKey="name"
            />
          </div>
        )}
      </Modal>
    </div>
  )
}

// Enhanced Addresses component
const Addresses: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [editingAddress, setEditingAddress] = useState<any>(null)
  const [form] = Form.useForm()

  const addresses = [
    {
      id: 1,
      name: 'Nhà riêng',
      receiver: 'Nguyễn Văn A',
      phone: '0123456789',
      address: '123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh',
      isDefault: true,
      type: 'home',
    },
    {
      id: 2,
      name: 'Văn phòng',
      receiver: 'Nguyễn Văn A',
      phone: '0987654321',
      address: '456 Đường DEF, Phường UVW, Quận 2, TP. Hồ Chí Minh',
      isDefault: false,
      type: 'office',
    },
  ]

  const handleAdd = () => {
    setEditingAddress(null)
    form.resetFields()
    setModalVisible(true)
  }

  const handleEdit = (address: any) => {
    setEditingAddress(address)
    form.setFieldsValue(address)
    setModalVisible(true)
  }

  const handleSave = (values: any) => {
    console.log('Saving address:', values)
    message.success(
      editingAddress
        ? 'Cập nhật địa chỉ thành công!'
        : 'Thêm địa chỉ thành công!'
    )
    setModalVisible(false)
  }

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: 'Xác nhận xóa địa chỉ',
      content: 'Bạn có chắc chắn muốn xóa địa chỉ này?',
      onOk: () => {
        message.success('Xóa địa chỉ thành công!')
      },
    })
  }

  const getAddressIcon = (type: string) => {
    switch (type) {
      case 'home':
        return <HomeOutlined />
      case 'office':
        return <ShopOutlined />
      default:
        return <EnvironmentOutlined />
    }
  }

  return (
    <div>
      <Card
        title="Sổ địa chỉ"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            Thêm địa chỉ mới
          </Button>
        }
      >
        <Row gutter={[16, 16]}>
          {addresses.map(address => (
            <Col xs={24} sm={12} key={address.id}>
              <Card
                className={`h-full ${address.isDefault ? 'border-blue-500' : ''}`}
                actions={[
                  <Button
                    type="text"
                    icon={<EditOutlined />}
                    onClick={() => handleEdit(address)}
                  >
                    Sửa
                  </Button>,
                  !address.isDefault && (
                    <Button
                      type="text"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handleDelete(address.id)}
                    >
                      Xóa
                    </Button>
                  ),
                  !address.isDefault && (
                    <Button type="text" icon={<CheckCircleOutlined />}>
                      Đặt mặc định
                    </Button>
                  ),
                ].filter(Boolean)}
              >
                <Space direction="vertical" className="w-full">
                  <Space>
                    {getAddressIcon(address.type)}
                    <Text strong>{address.name}</Text>
                    {address.isDefault && <Tag color="blue">Mặc định</Tag>}
                  </Space>
                  <Text>{address.receiver}</Text>
                  <Text type="secondary">{address.phone}</Text>
                  <Paragraph className="mb-0">{address.address}</Paragraph>
                </Space>
              </Card>
            </Col>
          ))}
          <Col xs={24} sm={12}>
            <Card
              className="h-full border-dashed cursor-pointer hover:border-blue-500 transition-colors"
              onClick={handleAdd}
            >
              <div className="flex flex-col items-center justify-center h-full py-8">
                <PlusCircleOutlined className="text-4xl text-gray-400 mb-4" />
                <Text type="secondary">Thêm địa chỉ mới</Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* Address Form Modal */}
      <Modal
        title={editingAddress ? 'Sửa địa chỉ' : 'Thêm địa chỉ mới'}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={600}
      >
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Tên địa chỉ"
                rules={[
                  { required: true, message: 'Vui lòng nhập tên địa chỉ' },
                ]}
              >
                <Input placeholder="VD: Nhà riêng, Văn phòng..." />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Loại địa chỉ"
                rules={[
                  { required: true, message: 'Vui lòng chọn loại địa chỉ' },
                ]}
              >
                <Select placeholder="Chọn loại địa chỉ">
                  <Option value="home">Nhà riêng</Option>
                  <Option value="office">Văn phòng</Option>
                  <Option value="other">Khác</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="receiver"
                label="Người nhận"
                rules={[
                  { required: true, message: 'Vui lòng nhập tên người nhận' },
                ]}
              >
                <Input prefix={<UserOutlined />} />
              </Form.Item>
            </Col>
            <Col span={12}>
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
                <Input prefix={<PhoneOutlined />} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="address"
                label="Địa chỉ chi tiết"
                rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
              >
                <Input.TextArea
                  rows={3}
                  placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="isDefault" valuePropName="checked">
                <Checkbox>Đặt làm địa chỉ mặc định</Checkbox>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item className="mb-0 text-right">
            <Space>
              <Button onClick={() => setModalVisible(false)}>Hủy</Button>
              <Button type="primary" htmlType="submit">
                {editingAddress ? 'Cập nhật' : 'Thêm mới'}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

// Enhanced Wishlist component
const Wishlist: React.FC = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro Max 256GB',
      price: 29990000,
      originalPrice: 34990000,
      image: '/api/placeholder/300/300',
      rating: 4.8,
      reviews: 156,
      stock: 10,
      category: 'Điện thoại',
      brand: 'Apple',
    },
    {
      id: 2,
      name: 'MacBook Air M2 13" 512GB',
      price: 32990000,
      originalPrice: 37990000,
      image: '/api/placeholder/300/300',
      rating: 4.9,
      reviews: 89,
      stock: 5,
      category: 'Laptop',
      brand: 'Apple',
    },
    {
      id: 3,
      name: 'Samsung Galaxy Watch 6 Classic',
      price: 8990000,
      originalPrice: 10990000,
      image: '/api/placeholder/300/300',
      rating: 4.7,
      reviews: 124,
      stock: 3,
      category: 'Đồng hồ',
      brand: 'Samsung',
    },
  ])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const handleRemove = (id: number) => {
    Modal.confirm({
      title: 'Xác nhận xóa',
      content:
        'Bạn có chắc chắn muốn xóa sản phẩm này khỏi danh sách yêu thích?',
      onOk: () => {
        setProducts(products.filter(p => p.id !== id))
        message.success('Đã xóa khỏi danh sách yêu thích')
      },
    })
  }

  const handleAddToCart = (product: any) => {
    message.success(`Đã thêm ${product.name} vào giỏ hàng`)
  }

  if (products.length === 0) {
    return (
      <Card>
        <Empty
          image={<HeartOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />}
          description={
            <Space direction="vertical" align="center">
              <Text>Bạn chưa có sản phẩm yêu thích nào</Text>
              <Link to="/products">
                <Button type="primary" icon={<ShoppingOutlined />}>
                  Khám phá sản phẩm
                </Button>
              </Link>
            </Space>
          }
        />
      </Card>
    )
  }

  return (
    <Card
      title="Sản phẩm yêu thích"
      extra={<Text type="secondary">{products.length} sản phẩm</Text>}
    >
      <Row gutter={[16, 16]}>
        {products.map(product => (
          <Col xs={24} sm={12} md={8} key={product.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={product.name}
                  src={product.image}
                  className="h-48 object-cover"
                />
              }
              actions={[
                <Button
                  type="text"
                  danger
                  icon={<HeartFilled />}
                  onClick={() => handleRemove(product.id)}
                >
                  Bỏ thích
                </Button>,
                <Button
                  type="text"
                  icon={<ShoppingCartOutlined />}
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                >
                  {product.stock === 0 ? 'Hết hàng' : 'Thêm giỏ'}
                </Button>,
              ]}
            >
              <Space direction="vertical" className="w-full">
                <Text strong className="line-clamp-2">
                  {product.name}
                </Text>
                <Space>
                  <Tag>{product.brand}</Tag>
                  <Tag>{product.category}</Tag>
                </Space>
                <div>
                  <Rate disabled value={product.rating} className="text-sm" />
                  <Text type="secondary" className="ml-2">
                    ({product.reviews})
                  </Text>
                </div>
                <Space className="mt-2">
                  <Text strong className="text-red-500 text-lg">
                    {formatPrice(product.price)}
                  </Text>
                  <Text delete type="secondary">
                    {formatPrice(product.originalPrice)}
                  </Text>
                </Space>
                {product.stock <= 5 && product.stock > 0 && (
                  <Tag color="warning" icon={<ExclamationCircleOutlined />}>
                    Chỉ còn {product.stock} sản phẩm
                  </Tag>
                )}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  )
}

// Enhanced ChangePassword component
const ChangePassword: React.FC = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      message.success('Đổi mật khẩu thành công!')
      form.resetFields()
    } catch (error) {
      message.error('Có lỗi xảy ra, vui lòng thử lại!')
    } finally {
      setLoading(false)
    }
  }

  const passwordRules = [
    { required: true, message: 'Vui lòng nhập mật khẩu' },
    { min: 8, message: 'Mật khẩu phải có ít nhất 8 ký tự' },
    {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      message: 'Mật khẩu phải có chữ hoa, chữ thường và số',
    },
  ]

  return (
    <Row gutter={24}>
      <Col xs={24} lg={16}>
        <Card title="Đổi mật khẩu">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="currentPassword"
              label="Mật khẩu hiện tại"
              rules={[
                { required: true, message: 'Vui lòng nhập mật khẩu hiện tại' },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Nhập mật khẩu hiện tại"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="newPassword"
              label="Mật khẩu mới"
              rules={passwordRules}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Nhập mật khẩu mới"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="Xác nhận mật khẩu mới"
              dependencies={['newPassword']}
              rules={[
                { required: true, message: 'Vui lòng xác nhận mật khẩu mới' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(
                      new Error('Mật khẩu xác nhận không khớp!')
                    )
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Xác nhận mật khẩu mới"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                icon={<SafetyCertificateOutlined />}
                size="large"
              >
                Cập nhật mật khẩu
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>

      <Col xs={24} lg={8}>
        <Card title="Lưu ý bảo mật">
          <Alert
            message="Mật khẩu mạnh"
            description={
              <ul className="pl-4 mt-2">
                <li>Ít nhất 8 ký tự</li>
                <li>Bao gồm chữ hoa và chữ thường</li>
                <li>Có ít nhất một số</li>
                <li>Không nên dùng thông tin cá nhân</li>
              </ul>
            }
            type="info"
            showIcon
            className="mb-4"
          />

          <Alert
            message="Bảo vệ tài khoản"
            description="Thay đổi mật khẩu định kỳ để bảo vệ tài khoản của bạn"
            type="warning"
            showIcon
          />
        </Card>
      </Col>
    </Row>
  )
}

// Main Account component
const Account: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedKey, setSelectedKey] = useState('profile')
  const screens = useBreakpoint()

  useEffect(() => {
    document.title = 'Tài khoản | Shop Của Bạn'
    const path = location.pathname.split('/').pop()
    if (path === 'account' || !path) {
      setSelectedKey('profile')
    } else {
      setSelectedKey(path)
    }
  }, [location])

  const menuItems = [
    {
      key: 'profile',
      icon: <UserOutlined style={{ fontSize: '18px' }} />,
      label: 'Thông tin tài khoản',
    },
    {
      key: 'orders',
      icon: <ShoppingOutlined style={{ fontSize: '18px' }} />,
      label: 'Đơn hàng của tôi',
      badge: 2,
    },
    {
      key: 'addresses',
      icon: <EnvironmentOutlined style={{ fontSize: '18px' }} />,
      label: 'Sổ địa chỉ',
    },
    {
      key: 'wishlist',
      icon: <HeartOutlined style={{ fontSize: '18px' }} />,
      label: 'Sản phẩm yêu thích',
      badge: 3,
    },
    {
      key: 'change-password',
      icon: <LockOutlined style={{ fontSize: '18px' }} />,
      label: 'Đổi mật khẩu',
    },
    {
      key: 'notifications',
      icon: <BellOutlined style={{ fontSize: '18px' }} />,
      label: 'Thông báo',
      badge: 5,
    },
    {
      key: 'messages',
      icon: <MessageOutlined style={{ fontSize: '18px' }} />,
      label: 'Tin nhắn',
      badge: 1,
    },
    {
      key: 'rewards',
      icon: <GiftOutlined style={{ fontSize: '18px' }} />,
      label: 'Ưu đãi & Điểm thưởng',
    },
    {
      key: 'settings',
      icon: <SettingOutlined style={{ fontSize: '18px' }} />,
      label: 'Cài đặt',
    },
    {
      key: 'help',
      icon: <QuestionCircleOutlined style={{ fontSize: '18px' }} />,
      label: 'Trợ giúp',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined style={{ fontSize: '18px' }} />,
      label: 'Đăng xuất',
      danger: true,
    },
  ]

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === 'logout') {
      Modal.confirm({
        title: 'Xác nhận đăng xuất',
        content: 'Bạn có chắc chắn muốn đăng xuất?',
        onOk: () => {
          message.success('Đăng xuất thành công!')
          navigate('/login')
        },
      })
    } else {
      setSelectedKey(key)
      navigate(key === 'profile' ? '/account' : `/account/${key}`)
    }
  }

  const renderMenuItem = (item: any) => {
    if (item.type === 'divider') {
      return <Menu.Divider key={item.key} />
    }

    return (
      <Menu.Item key={item.key} icon={item.icon} danger={item.danger}>
        <Badge count={item.badge} offset={[10, 0]}>
          {item.label}
        </Badge>
      </Menu.Item>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
          <span className="ml-2">Trang chủ</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Tài khoản</Breadcrumb.Item>
        <Breadcrumb.Item>
          {menuItems.find(item => item.key === selectedKey)?.label}
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row gutter={24}>
        <Col xs={24} md={8} lg={6}>
          <Card className="mb-6" bodyStyle={{ padding: '24px' }}>
            <div className="text-center mb-6">
              <Avatar
                size={100}
                icon={<UserOutlined />}
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                className="mb-4"
              />
              <Title level={4} className="mb-2">
                Nguyễn Văn A
              </Title>
              <Tag color="gold" className="text-base px-3 py-1">
                <StarOutlined /> VIP Member
              </Tag>
            </div>

            <Menu
              mode="inline"
              selectedKeys={[selectedKey]}
              onClick={handleMenuClick}
              style={{ border: 'none' }}
              items={menuItems.map(item => ({
                ...item,
                label: item.badge ? (
                  <div className="flex items-center justify-between py-2">
                    <span className="text-base">{item.label}</span>
                    <Badge count={item.badge} />
                  </div>
                ) : (
                  <span className="text-base py-2 block">{item.label}</span>
                ),
              }))}
              className="ant-menu-item-selected-custom"
            />
          </Card>
        </Col>

        <Col xs={24} md={16} lg={18}>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route
              path="notifications"
              element={<div>Notifications Component</div>}
            />
            <Route path="messages" element={<div>Messages Component</div>} />
            <Route path="rewards" element={<div>Rewards Component</div>} />
            <Route path="settings" element={<div>Settings Component</div>} />
            <Route path="help" element={<div>Help Component</div>} />
          </Routes>
        </Col>
      </Row>
    </div>
  )
}

export default Account
