import {
  CheckCircleOutlined,
  GlobalOutlined,
  HeartOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
  ShopOutlined,
  TeamOutlined,
  TrophyOutlined,
} from '@ant-design/icons'
import { Card, Col, Row, Statistic, Timeline, Typography } from 'antd'

const { Title, Paragraph, Text } = Typography

export default function About() {
  const stats = [
    {
      title: 'Năm thành lập',
      value: 2018,
      prefix: <TrophyOutlined style={{ color: '#3b82f6' }} />,
    },
    {
      title: 'Khách hàng',
      value: '100K+',
      prefix: <TeamOutlined style={{ color: '#3b82f6' }} />,
    },
    {
      title: 'Sản phẩm',
      value: '10K+',
      prefix: <ShopOutlined style={{ color: '#3b82f6' }} />,
    },
    {
      title: 'Chi nhánh',
      value: 25,
      prefix: <GlobalOutlined style={{ color: '#3b82f6' }} />,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Container để có khoảng cách 2 bên giống trang chủ */}
      <div className="container mx-auto px-4 py-6">
        {/* Hero Section - giống style với Carousel */}
        <div className="h-96 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center relative overflow-hidden mb-10">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Về Chúng Tôi
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Tiên phong trong lĩnh vực bán lẻ công nghệ, chúng tôi cam kết mang
              đến những sản phẩm chất lượng và dịch vụ tốt nhất cho khách hàng.
            </p>
            <button className="bg-white !text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-block">
              Liên hệ ngay
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <Row gutter={[16, 16]}>
            {stats.map((stat, index) => (
              <Col xs={12} sm={6} key={index}>
                <Card className="text-center">
                  <Statistic
                    title={stat.title}
                    value={stat.value}
                    prefix={stat.prefix}
                    valueStyle={{ color: '#1890ff' }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Content sections với khoảng cách tương tự */}
        <div className="space-y-16">
          {/* Our Story */}
          <section>
            <Title level={2} className="text-center mb-8">
              Câu Chuyện Của Chúng Tôi
            </Title>
            <Row gutter={[48, 24]} align="middle">
              <Col xs={24} md={12}>
                <Paragraph className="text-lg">
                  Được thành lập vào năm 2018, Shop Của Bạn bắt đầu từ một cửa
                  hàng nhỏ với niềm đam mê công nghệ và mong muốn mang đến những
                  sản phẩm chất lượng cho người tiêu dùng Việt Nam.
                </Paragraph>
                <Paragraph className="text-lg">
                  Trải qua hơn 5 năm phát triển, chúng tôi đã vươn lên trở thành
                  một trong những nhà bán lẻ công nghệ hàng đầu với hệ thống 25
                  chi nhánh trên toàn quốc.
                </Paragraph>
              </Col>
              <Col xs={24} md={12}>
                <div
                  className="bg-gray-200 rounded-lg"
                  style={{
                    height: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span className="text-gray-500">Hình ảnh công ty</span>
                </div>
              </Col>
            </Row>
          </section>

          {/* Timeline */}
          <section>
            <Title level={2} className="text-center mb-8">
              Hành Trình Phát Triển
            </Title>
            <Timeline mode="alternate">
              <Timeline.Item color="blue">
                <h4 className="font-semibold">2018 - Khởi đầu</h4>
                <p>Thành lập công ty với 5 nhân viên và một cửa hàng nhỏ</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <h4 className="font-semibold">2019 - Mở rộng</h4>
                <p>Mở thêm 5 chi nhánh và ra mắt website bán hàng online</p>
              </Timeline.Item>
              <Timeline.Item color="orange">
                <h4 className="font-semibold">2020 - Đột phá</h4>
                <p>
                  Đạt 50,000 khách hàng và được vinh danh "Doanh nghiệp tiêu
                  biểu"
                </p>
              </Timeline.Item>
              <Timeline.Item color="purple">
                <h4 className="font-semibold">2021 - Phát triển</h4>
                <p>
                  Mở rộng ra 15 tỉnh thành và hợp tác với các thương hiệu quốc
                  tế
                </p>
              </Timeline.Item>
              <Timeline.Item color="red">
                <h4 className="font-semibold">2022 - Chuyển đổi số</h4>
                <p>Ra mắt ứng dụng di động và hệ thống bán hàng đa kênh</p>
              </Timeline.Item>
              <Timeline.Item color="gold">
                <h4 className="font-semibold">2023 - Vươn tầm</h4>
                <p>
                  Đạt 100,000 khách hàng và trở thành Top 10 nhà bán lẻ công
                  nghệ
                </p>
              </Timeline.Item>
            </Timeline>
          </section>

          {/* Core Values */}
          <section>
            <Title level={2} className="text-center mb-8">
              Giá Trị Cốt Lõi
            </Title>
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={12} md={6}>
                <Card className="text-center h-full">
                  <HeartOutlined className="text-4xl text-red-500 mb-4" />
                  <Title level={4}>Tận tâm</Title>
                  <Paragraph>
                    Luôn đặt khách hàng làm trung tâm trong mọi hoạt động
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card className="text-center h-full">
                  <SafetyCertificateOutlined className="text-4xl text-green-500 mb-4" />
                  <Title level={4}>Uy tín</Title>
                  <Paragraph>
                    Cam kết 100% sản phẩm chính hãng, chất lượng cao
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card className="text-center h-full">
                  <RocketOutlined className="text-4xl text-blue-500 mb-4" />
                  <Title level={4}>Đổi mới</Title>
                  <Paragraph>
                    Không ngừng cải tiến và ứng dụng công nghệ mới
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card className="text-center h-full">
                  <TeamOutlined className="text-4xl text-purple-500 mb-4" />
                  <Title level={4}>Đoàn kết</Title>
                  <Paragraph>
                    Xây dựng môi trường làm việc thân thiện, chuyên nghiệp
                  </Paragraph>
                </Card>
              </Col>
            </Row>
          </section>

          {/* Why Choose Us */}
          <section>
            <Title level={2} className="text-center mb-8">
              Tại Sao Chọn Chúng Tôi
            </Title>
            <Row gutter={[24, 24]}>
              <Col xs={24} md={8}>
                <Card className="h-full">
                  <div className="flex items-center mb-4">
                    <CheckCircleOutlined className="text-2xl text-green-500 mr-3" />
                    <Title level={5} className="mb-0">
                      Sản phẩm chính hãng
                    </Title>
                  </div>
                  <Paragraph>
                    100% sản phẩm chính hãng được nhập khẩu trực tiếp từ các nhà
                    phân phối ủy quyền
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="h-full">
                  <div className="flex items-center mb-4">
                    <CheckCircleOutlined className="text-2xl text-green-500 mr-3" />
                    <Title level={5} className="mb-0">
                      Giá cả cạnh tranh
                    </Title>
                  </div>
                  <Paragraph>
                    Cam kết giá tốt nhất thị trường với nhiều chương trình
                    khuyến mãi hấp dẫn
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="h-full">
                  <div className="flex items-center mb-4">
                    <CheckCircleOutlined className="text-2xl text-green-500 mr-3" />
                    <Title level={5} className="mb-0">
                      Dịch vụ tận tâm
                    </Title>
                  </div>
                  <Paragraph>
                    Đội ngũ nhân viên chuyên nghiệp, hỗ trợ 24/7 và chính sách
                    hậu mãi chu đáo
                  </Paragraph>
                </Card>
              </Col>
            </Row>
          </section>
        </div>
      </div>
    </div>
  )
}
