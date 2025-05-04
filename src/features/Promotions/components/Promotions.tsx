import {
  ClockCircleOutlined,
  FireOutlined,
  GiftOutlined,
  HomeOutlined,
  PercentageOutlined,
  SendOutlined,
  TagsOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import {
  Badge,
  Breadcrumb,
  Button,
  Card,
  Carousel,
  Col,
  Divider,
  Form,
  Input,
  message,
  Row,
  Space,
  Statistic,
  Tag,
  Typography,
} from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const { Title, Text, Paragraph } = Typography
const { Countdown } = Statistic

const Promotions: React.FC = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    document.title = 'Khuyến mãi | Shop Của Bạn'
  }, [])

  // Enhanced banner data for carousel
  const banners = [
    {
      id: 1,
      title: 'FLASH SALE MỖI NGÀY',
      subtitle: 'Giảm đến 70% - Số lượng có hạn',
      color: '#ff4d4f',
      icon: <ThunderboltOutlined style={{ fontSize: 48 }} />,
    },
    {
      id: 2,
      title: 'MEGA SALE LAPTOP',
      subtitle: 'Gaming Laptop giảm sốc 40%',
      color: '#722ed1',
      icon: <PercentageOutlined style={{ fontSize: 48 }} />,
    },
    {
      id: 3,
      title: 'MUA 1 TẶNG 1',
      subtitle: 'Áp dụng cho tất cả phụ kiện',
      color: '#13c2c2',
      icon: <GiftOutlined style={{ fontSize: 48 }} />,
    },
  ]

  // Enhanced promotions data
  const promotions = [
    {
      id: 1,
      title: 'Giảm đến 50% cho Điện Thoại',
      description:
        'Giảm giá lớn cho tất cả điện thoại thông minh từ các thương hiệu hàng đầu.',
      image: '/placeholder.jpg',
      endDate: '2025-06-30',
      tag: 'Điện thoại',
      discount: '50%',
      hotDeal: true,
      color: '#f5222d',
    },
    {
      id: 2,
      title: 'Mua 1 Tặng 1 Phụ Kiện',
      description:
        'Khi mua bất kỳ phụ kiện nào với giá trên 500.000đ, bạn sẽ được tặng thêm một phụ kiện tương tự.',
      image: '/placeholder.jpg',
      endDate: '2025-05-15',
      tag: 'Phụ kiện',
      discount: '2X1',
      hotDeal: false,
      color: '#52c41a',
    },
    {
      id: 3,
      title: 'Giảm 30% cho Laptop Gaming',
      description:
        'Khuyến mãi đặc biệt cho các dòng laptop gaming cao cấp, áp dụng cho đơn hàng trực tuyến.',
      image: '/placeholder.jpg',
      endDate: '2025-05-31',
      tag: 'Laptop',
      discount: '30%',
      hotDeal: true,
      color: '#722ed1',
    },
    {
      id: 4,
      title: 'Flash Sale Mỗi Ngày',
      description:
        'Giảm giá sốc cho một số sản phẩm được chọn mỗi ngày. Số lượng có hạn!',
      image: '/placeholder.jpg',
      endDate: '2025-05-10',
      tag: 'Flash Sale',
      discount: 'SHOCK',
      hotDeal: true,
      color: '#eb2f96',
    },
  ]

  // Function to get deadline for countdown
  const getDeadline = (endDate: string) => {
    return new Date(endDate).getTime()
  }

  // Function to format remaining days
  const getRemainingDays = (endDate: string) => {
    const today = new Date()
    const end = new Date(endDate)
    const diffTime = end.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 0
  }

  const handleSubscribe = async (values: any) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      message.success(
        'Đăng ký thành công! Bạn sẽ nhận được thông báo khuyến mãi.'
      )
      form.resetFields()
    } catch (error) {
      message.error('Có lỗi xảy ra, vui lòng thử lại!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Khuyến mãi</Breadcrumb.Item>
      </Breadcrumb>

      {/* Banner Carousel */}
      <Carousel autoplay className="mb-10">
        {banners.map(banner => (
          <div key={banner.id}>
            <div
              className="h-60 rounded-lg flex items-center justify-center text-white relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${banner.color}, ${banner.color}dd)`,
              }}
            >
              <div className="text-center z-10">
                <div className="mb-4">{banner.icon}</div>
                <Title level={2} className="text-white mb-2">
                  {banner.title}
                </Title>
                <Text className="text-xl text-white opacity-90">
                  {banner.subtitle}
                </Text>
              </div>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute transform rotate-45 bg-white w-96 h-96 -right-48 -top-48"></div>
                <div className="absolute transform rotate-45 bg-white w-96 h-96 -left-48 -bottom-48"></div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <Title level={2} className="mb-8 text-center">
        <Space>
          <TagsOutlined />
          Khuyến mãi đang diễn ra
        </Space>
      </Title>

      <Row gutter={[24, 24]}>
        {promotions.map(promo => (
          <Col xs={24} sm={12} lg={6} key={promo.id}>
            <Badge.Ribbon
              text={promo.hotDeal ? 'HOT' : promo.discount}
              color={promo.hotDeal ? '#f5222d' : promo.color}
            >
              <Card
                hoverable
                cover={
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                    <Text className="text-gray-400 text-lg">SALE</Text>
                    <div className="absolute top-4 right-4">
                      <Tag color={promo.color} icon={<ThunderboltOutlined />}>
                        {promo.tag}
                      </Tag>
                    </div>
                  </div>
                }
                className="h-full flex flex-col"
                actions={[
                  <Link to={`/promotions/${promo.id}`}>
                    <Button type="primary" className="w-48">
                      Xem chi tiết
                    </Button>
                  </Link>,
                ]}
              >
                <Card.Meta
                  title={
                    <Space direction="vertical" size={0}>
                      <Text strong className="text-lg">
                        {promo.title}
                      </Text>
                      <div className="flex items-center text-orange-500">
                        <ClockCircleOutlined className="mr-2" />
                        <Countdown
                          value={getDeadline(promo.endDate)}
                          format="D ngày H giờ m phút s giây"
                          valueStyle={{ fontSize: '14px', color: '#fa8c16' }}
                        />
                      </div>
                    </Space>
                  }
                  description={
                    <Paragraph
                      ellipsis={{ rows: 2, expandable: false }}
                      className="text-gray-600"
                    >
                      {promo.description}
                    </Paragraph>
                  }
                />
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>

      <Divider />

      {/* Flash Sale Section */}
      <div className="my-12">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-8 text-white">
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={12}>
              <Space direction="vertical" size="large">
                <Title level={2} className="text-white m-0">
                  <ThunderboltOutlined /> FLASH SALE HẰNG NGÀY
                </Title>
                <Paragraph className="text-white text-lg m-0">
                  Giảm giá sốc đến 80% mỗi ngày vào lúc 12:00 và 20:00
                </Paragraph>
                <Button
                  size="large"
                  type="primary"
                  className="bg-white text-red-500 border-0 hover:bg-gray-100"
                >
                  Xem ngay
                </Button>
              </Space>
            </Col>
            <Col xs={24} md={12} className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <Title level={3} className="text-white">
                  Đếm ngược
                </Title>
                <Countdown
                  value={Date.now() + 1000 * 60 * 60 * 2}
                  format="HH:mm:ss"
                  valueStyle={{
                    fontSize: '36px',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-100">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={14}>
            <Space direction="vertical" size="small">
              <Title level={3} className="m-0">
                <SendOutlined /> Đăng ký nhận thông báo khuyến mãi
              </Title>
              <Text className="text-gray-600 text-lg">
                Nhận ngay thông tin về các chương trình khuyến mãi hấp dẫn và ưu
                đãi độc quyền
              </Text>
            </Space>
          </Col>
          <Col xs={24} md={10}>
            <Form
              form={form}
              onFinish={handleSubscribe}
              layout="inline"
              className="w-full"
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Vui lòng nhập email!' },
                  { type: 'email', message: 'Email không hợp lệ!' },
                ]}
                className="flex-1"
              >
                <Input
                  size="large"
                  placeholder="Nhập email của bạn"
                  prefix={<SendOutlined className="text-gray-400" />}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  loading={loading}
                  icon={<SendOutlined />}
                >
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>

      {/* Quick Links */}
      <div className="mt-12 text-center">
        <Space size="large">
          <Link to="/products?category=sale">
            <Button type="link" icon={<FireOutlined />} size="large">
              Sản phẩm giảm giá
            </Button>
          </Link>
          <Link to="/products?category=new">
            <Button type="link" icon={<TagsOutlined />} size="large">
              Sản phẩm mới
            </Button>
          </Link>
          <Link to="/products?category=bestseller">
            <Button type="link" icon={<GiftOutlined />} size="large">
              Bán chạy nhất
            </Button>
          </Link>
        </Space>
      </div>
    </div>
  )
}

export default Promotions
