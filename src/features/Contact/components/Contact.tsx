import {
  ClockCircleOutlined,
  CommentOutlined,
  CustomerServiceOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  GlobalOutlined,
  HomeOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  SendOutlined,
  StarOutlined,
  UploadOutlined,
  UserOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons'
import {
  Alert,
  Breadcrumb,
  Button,
  Card,
  Col,
  Form,
  Input,
  message,
  Row,
  Select,
  Space,
  Statistic,
  Tabs,
  Timeline,
  Typography,
  Upload,
} from 'antd'
import { useEffect, useState } from 'react'

const { TextArea } = Input
const { Title, Text, Paragraph } = Typography
const { Option } = Select
const { TabPane } = Tabs

const Contact: React.FC = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [showMap, setShowMap] = useState(true)

  useEffect(() => {
    document.title = 'Liên hệ | Shop Của Bạn'
  }, [])

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      message.success(
        'Gửi thông tin thành công! Chúng tôi sẽ phản hồi sớm nhất.'
      )
      form.resetFields()
    } catch (error) {
      message.error('Có lỗi xảy ra, vui lòng thử lại!')
    } finally {
      setLoading(false)
    }
  }

  // Contact methods data
  const contactMethods = [
    {
      icon: <PhoneOutlined className="text-2xl" />,
      title: 'Hotline',
      content: '1900 1234',
      description: 'Hỗ trợ 24/7',
      color: '#1890ff',
      action: 'tel:19001234',
    },
    {
      icon: <WhatsAppOutlined className="text-2xl" />,
      title: 'WhatsApp',
      content: '+84 123 456 789',
      description: 'Chat trực tiếp',
      color: '#25D366',
      action: 'https://wa.me/84123456789',
    },
    {
      icon: <MailOutlined className="text-2xl" />,
      title: 'Email',
      content: 'support@shopcuaban.com',
      description: 'Phản hồi trong 24h',
      color: '#FF6B6B',
      action: 'mailto:support@shopcuaban.com',
    },
    {
      icon: <CommentOutlined className="text-2xl" />,
      title: 'Live Chat',
      content: 'Chat với chúng tôi',
      description: 'Trực tuyến 8:00 - 22:00',
      color: '#722ED1',
      action: '#livechat',
    },
  ]

  // FAQ data
  const faqData = [
    {
      question: 'Làm thế nào để theo dõi đơn hàng?',
      answer:
        'Bạn có thể theo dõi đơn hàng bằng cách đăng nhập vào tài khoản và vào mục "Đơn hàng của tôi" hoặc sử dụng mã đơn hàng để tra cứu.',
    },
    {
      question: 'Chính sách đổi trả như thế nào?',
      answer:
        'Chúng tôi hỗ trợ đổi trả trong vòng 7 ngày kể từ khi nhận hàng với điều kiện sản phẩm còn nguyên tem mác và chưa qua sử dụng.',
    },
    {
      question: 'Thời gian giao hàng là bao lâu?',
      answer:
        'Thời gian giao hàng từ 2-5 ngày tùy thuộc vào khu vực. Với đơn hàng nội thành, chúng tôi hỗ trợ giao hàng trong ngày.',
    },
    {
      question: 'Có hỗ trợ trả góp không?',
      answer:
        'Có, chúng tôi hỗ trợ trả góp 0% lãi suất qua thẻ tín dụng của nhiều ngân hàng với đơn hàng từ 3 triệu đồng.',
    },
  ]

  // Office locations
  const offices = [
    {
      name: 'Trụ sở chính',
      address: '123 Nguyễn Huệ, Quận 1, TP.HCM',
      phone: '(028) 1234 5678',
      hours: 'Thứ 2-6: 8:00 - 18:00, Thứ 7: 8:00 - 12:00',
      type: 'main',
    },
    {
      name: 'Chi nhánh Hà Nội',
      address: '456 Kim Mã, Ba Đình, Hà Nội',
      phone: '(024) 8765 4321',
      hours: 'Thứ 2-6: 8:00 - 18:00, Thứ 7: 8:00 - 12:00',
      type: 'branch',
    },
    {
      name: 'Chi nhánh Đà Nẵng',
      address: '789 Nguyễn Văn Linh, Hải Châu, Đà Nẵng',
      phone: '(0236) 1122 3344',
      hours: 'Thứ 2-6: 8:00 - 18:00, Thứ 7: 8:00 - 12:00',
      type: 'branch',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Liên hệ</Breadcrumb.Item>
      </Breadcrumb>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <Title level={1}>
          <Space>
            <CustomerServiceOutlined className="text-blue-500" />
            Liên hệ với chúng tôi
          </Space>
        </Title>
        <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto">
          Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy chọn phương thức liên hệ phù
          hợp nhất với bạn!
        </Paragraph>
      </div>

      {/* Quick Contact Methods */}
      <Row gutter={[16, 16]} className="mb-12">
        {contactMethods.map((method, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card
              hoverable
              className="h-full text-center"
              bodyStyle={{ padding: '24px' }}
              onClick={() => window.open(method.action, '_blank')}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${method.color}20` }}
              >
                <div style={{ color: method.color }}>{method.icon}</div>
              </div>
              <Title level={4} className="mb-1">
                {method.title}
              </Title>
              <Text strong className="text-lg block">
                {method.content}
              </Text>
              <Text type="secondary" className="text-sm">
                {method.description}
              </Text>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Main Contact Section */}
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Card className="shadow-sm">
            <Tabs defaultActiveKey="contact">
              <TabPane
                tab={
                  <span>
                    <SendOutlined />
                    Gửi tin nhắn
                  </span>
                }
                key="contact"
              >
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  requiredMark="optional"
                >
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="name"
                        label="Họ và tên"
                        rules={[
                          { required: true, message: 'Vui lòng nhập họ tên' },
                        ]}
                      >
                        <Input
                          prefix={<UserOutlined />}
                          placeholder="Nhập họ và tên"
                          size="large"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                          { required: true, message: 'Vui lòng nhập email' },
                          { type: 'email', message: 'Email không hợp lệ' },
                        ]}
                      >
                        <Input
                          prefix={<MailOutlined />}
                          placeholder="Nhập email"
                          size="large"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="phone"
                        label="Số điện thoại"
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng nhập số điện thoại',
                          },
                        ]}
                      >
                        <Input
                          prefix={<PhoneOutlined />}
                          placeholder="Nhập số điện thoại"
                          size="large"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="topic"
                        label="Chủ đề"
                        rules={[
                          { required: true, message: 'Vui lòng chọn chủ đề' },
                        ]}
                      >
                        <Select placeholder="Chọn chủ đề" size="large">
                          <Option value="order">Đơn hàng</Option>
                          <Option value="product">Sản phẩm</Option>
                          <Option value="payment">Thanh toán</Option>
                          <Option value="shipping">Vận chuyển</Option>
                          <Option value="return">Đổi trả</Option>
                          <Option value="other">Khác</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="subject"
                    label="Tiêu đề"
                    rules={[
                      { required: true, message: 'Vui lòng nhập tiêu đề' },
                    ]}
                  >
                    <Input placeholder="Nhập tiêu đề" size="large" />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label="Nội dung"
                    rules={[
                      { required: true, message: 'Vui lòng nhập nội dung' },
                    ]}
                  >
                    <TextArea
                      rows={6}
                      placeholder="Nhập nội dung chi tiết"
                      showCount
                      maxLength={1000}
                    />
                  </Form.Item>

                  <Form.Item name="attachment" label="Tệp đính kèm">
                    <Upload>
                      <Button icon={<UploadOutlined />}>Chọn tệp</Button>
                    </Upload>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      loading={loading}
                      icon={<SendOutlined />}
                    >
                      Gửi tin nhắn
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>

              <TabPane
                tab={
                  <span>
                    <QuestionCircleOutlined />
                    Câu hỏi thường gặp
                  </span>
                }
                key="faq"
              >
                <Timeline>
                  {faqData.map((item, index) => (
                    <Timeline.Item
                      key={index}
                      dot={<QuestionCircleOutlined className="text-blue-500" />}
                    >
                      <div className="mb-6">
                        <Title level={5}>{item.question}</Title>
                        <Text>{item.answer}</Text>
                      </div>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </TabPane>
            </Tabs>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          {/* Office Information */}
          <Card
            title={
              <Space>
                <EnvironmentOutlined />
                Địa điểm văn phòng
              </Space>
            }
            className="mb-6"
          >
            <Timeline>
              {offices.map((office, index) => (
                <Timeline.Item
                  key={index}
                  color={office.type === 'main' ? 'red' : 'blue'}
                  dot={
                    office.type === 'main' ? (
                      <StarOutlined />
                    ) : (
                      <EnvironmentOutlined />
                    )
                  }
                >
                  <div className="mb-4">
                    <Text strong className="text-base block mb-1">
                      {office.name}
                    </Text>
                    <Space direction="vertical" size={0}>
                      <Text>{office.address}</Text>
                      <Text type="secondary">
                        <PhoneOutlined /> {office.phone}
                      </Text>
                      <Text type="secondary">
                        <ClockCircleOutlined /> {office.hours}
                      </Text>
                    </Space>
                  </div>
                </Timeline.Item>
              ))}
            </Timeline>
          </Card>

          {/* Social Media */}
          <Card
            title={
              <Space>
                <GlobalOutlined />
                Kết nối với chúng tôi
              </Space>
            }
            className="mb-6"
          >
            <Space direction="vertical" className="w-full" size="middle">
              <Button
                type="default"
                icon={<FacebookOutlined />}
                block
                size="large"
                onClick={() => window.open('https://facebook.com', '_blank')}
              >
                Facebook
              </Button>
              <Button
                type="default"
                icon={<InstagramOutlined />}
                block
                size="large"
                style={{
                  background: '#E1306C',
                  color: 'white',
                  border: 'none',
                }}
                onClick={() => window.open('https://instagram.com', '_blank')}
              >
                Instagram
              </Button>
              <Button
                type="default"
                icon={<GlobalOutlined />}
                block
                size="large"
                onClick={() => window.open('#', '_blank')}
              >
                Website
              </Button>
            </Space>
          </Card>

          {/* Support Stats */}
          <Card>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Statistic
                  title="Thời gian phản hồi"
                  value="< 2h"
                  prefix={<ClockCircleOutlined />}
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="Tỷ lệ hài lòng"
                  value={98}
                  suffix="%"
                  prefix={<StarOutlined />}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Map Section */}
      <Card
        className="mt-8"
        title={
          <Space>
            <EnvironmentOutlined />
            Bản đồ
          </Space>
        }
      >
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4294062621487!2d106.69925661411659!3d10.778374992320228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5703768989!2zTmd1eeG7hW4gSHXhu4csIELhur9uIE5naMOpLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1635959040993!5m2!1svi!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 p-4 rounded-lg">
            <Space>
              <EnvironmentOutlined className="text-red-500" />
              <Text strong>123 Nguyễn Huệ, Quận 1, TP.HCM</Text>
            </Space>
          </div>
        </div>
      </Card>

      {/* Bottom CTA */}
      <div className="mt-12 text-center flex justify-center">
        <Alert
          message="Cần hỗ trợ ngay?"
          description={
            <Space direction="vertical" className="mt-2">
              <Text>
                Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng hỗ trợ
                bạn 24/7
              </Text>
              <Button type="primary" size="large" icon={<PhoneOutlined />}>
                Gọi Hotline: 1900 1234
              </Button>
            </Space>
          }
          type="info"
          showIcon
          icon={<CustomerServiceOutlined />}
          className="max-w-2xl mx-auto"
        />
      </div>
    </div>
  )
}

export default Contact
