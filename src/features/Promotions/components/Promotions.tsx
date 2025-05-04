import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Card, Button, Tag, Row, Col } from 'antd'
import { HomeOutlined, ClockCircleOutlined } from '@ant-design/icons'

const Promotions: React.FC = () => {
  useEffect(() => {
    document.title = 'Khuyến mãi | Shop Của Bạn'
  }, [])

  // Mock promotions data
  const promotions = [
    {
      id: 1,
      title: 'Giảm đến 50% cho Điện Thoại',
      description:
        'Giảm giá lớn cho tất cả điện thoại thông minh từ các thương hiệu hàng đầu.',
      image: '/placeholder.jpg',
      endDate: '2025-06-30',
      tag: 'Điện thoại',
    },
    {
      id: 2,
      title: 'Mua 1 Tặng 1 Phụ Kiện',
      description:
        'Khi mua bất kỳ phụ kiện nào với giá trên 500.000đ, bạn sẽ được tặng thêm một phụ kiện tương tự.',
      image: '/placeholder.jpg',
      endDate: '2025-05-15',
      tag: 'Phụ kiện',
    },
    {
      id: 3,
      title: 'Giảm 30% cho Laptop Gaming',
      description:
        'Khuyến mãi đặc biệt cho các dòng laptop gaming cao cấp, áp dụng cho đơn hàng trực tuyến.',
      image: '/placeholder.jpg',
      endDate: '2025-05-31',
      tag: 'Laptop',
    },
    {
      id: 4,
      title: 'Flash Sale Mỗi Ngày',
      description:
        'Giảm giá sốc cho một số sản phẩm được chọn mỗi ngày. Số lượng có hạn!',
      image: '/placeholder.jpg',
      endDate: '2025-05-10',
      tag: 'Flash Sale',
    },
  ]

  // Function to format remaining days
  const getRemainingDays = (endDate: string) => {
    const today = new Date()
    const end = new Date(endDate)
    const diffTime = end.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 0
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Khuyến mãi</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="text-2xl font-bold mb-6">Khuyến mãi hiện có</h1>

      <Row gutter={[16, 16]}>
        {promotions.map(promo => (
          <Col xs={24} sm={12} lg={8} key={promo.id}>
            <Card
              cover={
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">Hình ảnh khuyến mãi</span>
                </div>
              }
              className="h-full flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <Tag color="blue">{promo.tag}</Tag>
                  <div className="flex items-center text-orange-500">
                    <ClockCircleOutlined className="mr-1" />
                    <span>Còn {getRemainingDays(promo.endDate)} ngày</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{promo.title}</h3>
                <p className="text-gray-600 mb-4">{promo.description}</p>
              </div>
              <Link to={`/promotions/${promo.id}`}>
                <Button type="primary" block>
                  Xem chi tiết
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Special offer banner */}
      <div className="mt-10 bg-blue-50 border border-blue-100 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">
            Ưu Đãi Đặc Biệt
          </h2>
          <p className="text-gray-700 mb-4 md:mb-0">
            Đăng ký nhận thông báo để không bỏ lỡ các chương trình khuyến mãi
            hấp dẫn
          </p>
        </div>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Nhập email của bạn"
            className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button type="primary" className="rounded-r-lg border-0">
            Đăng ký
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Promotions
