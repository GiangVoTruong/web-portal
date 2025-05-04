import { Link } from 'react-router-dom'
import { Input, Button, Space, Divider } from 'antd'
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  CreditCardOutlined,
  WalletOutlined,
  CarOutlined,
  SafetyCertificateOutlined,
  SendOutlined,
} from '@ant-design/icons'
import { PagePath } from '@/enums/pageEnum'

const PublicFooter: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Đăng ký nhận tin khuyến mãi
                </h3>
                <p className="text-blue-100 text-lg">
                  Nhận ngay ưu đãi 10% cho đơn hàng đầu tiên
                </p>
              </div>
              <div>
                <Space.Compact block size="large">
                  <Input placeholder="Nhập email của bạn" className="flex-1" />
                  <Button
                    type="primary"
                    icon={<SendOutlined />}
                    className="!bg-white !text-blue-600 hover:!bg-blue-50 !border-white"
                  >
                    Đăng ký
                  </Button>
                </Space.Compact>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">LOGO</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Chúng tôi cam kết mang đến những sản phẩm công nghệ chính hãng với
              dịch vụ tốt nhất cho khách hàng.
            </p>
            <Space direction="vertical" size="middle">
              <div className="flex items-center text-gray-300">
                <PhoneOutlined className="text-lg mr-3 text-blue-400" />
                <span>Hotline: 1900 1234</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MailOutlined className="text-lg mr-3 text-blue-400" />
                <span>Email: contact@example.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <EnvironmentOutlined className="text-lg mr-3 mt-1 text-blue-400" />
                <span>
                  123 Đường ABC, Quận XYZ,
                  <br />
                  TP. Hồ Chí Minh
                </span>
              </div>
            </Space>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Về Chúng Tôi</h4>
            <Space direction="vertical" size="middle">
              <Link
                to={PagePath.About}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Giới thiệu
              </Link>
              <Link
                to="/careers"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Tuyển dụng
              </Link>
              <Link
                to="/news"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Tin tức
              </Link>
              <Link
                to="/stores"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Hệ thống cửa hàng
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Liên hệ
              </Link>
            </Space>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hỗ Trợ Khách Hàng</h4>
            <Space direction="vertical" size="middle">
              <Link
                to="/faqs"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Câu hỏi thường gặp
              </Link>
              <Link
                to="/warranty"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Chính sách bảo hành
              </Link>
              <Link
                to="/returns"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Đổi trả & hoàn tiền
              </Link>
              <Link
                to="/shipping"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Vận chuyển
              </Link>
              <Link
                to="/payment-methods"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Phương thức thanh toán
              </Link>
            </Space>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              Kết Nối Với Chúng Tôi
            </h4>
            <Space size="middle" className="mb-6">
              <Button
                type="text"
                shape="circle"
                icon={<FacebookOutlined className="text-xl" />}
                href="https://facebook.com"
                target="_blank"
                className="!text-white hover:!bg-blue-600 !bg-white/10"
                size="large"
              />
              <Button
                type="text"
                shape="circle"
                icon={<InstagramOutlined className="text-xl" />}
                href="https://instagram.com"
                target="_blank"
                className="!text-white hover:!bg-pink-600 !bg-white/10"
                size="large"
              />
              <Button
                type="text"
                shape="circle"
                icon={<YoutubeOutlined className="text-xl" />}
                href="https://youtube.com"
                target="_blank"
                className="!text-white hover:!bg-red-600 !bg-white/10"
                size="large"
              />
              <Button
                type="text"
                shape="circle"
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                }
                href="https://tiktok.com"
                target="_blank"
                className="!text-white hover:!bg-black !bg-white/10"
                size="large"
              />
            </Space>
            <div className="text-gray-300">
              <p className="text-gray-400 mb-2">Giờ làm việc:</p>
              <p>8:00 - 22:00 (T2 - CN)</p>
            </div>
          </div>
        </div>

        <Divider className="!bg-gray-700 !my-12" />

        {/* Payment & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Payment Methods */}
          <div>
            <h4 className="text-sm font-semibold mb-6 text-gray-400">
              PHƯƠNG THỨC THANH TOÁN
            </h4>
            <Space size="middle" wrap>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <span className="font-semibold">VISA</span>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <span className="font-semibold">Mastercard</span>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <span className="font-semibold">JCB</span>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center gap-2">
                <WalletOutlined className="text-lg" />
                <span>MoMo</span>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center gap-2">
                <CreditCardOutlined className="text-lg" />
                <span>VNPay</span>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center gap-2">
                <CarOutlined className="text-lg" />
                <span>COD</span>
              </div>
            </Space>
          </div>

          {/* Certificates */}
          <div>
            <h4 className="text-sm font-semibold mb-6 text-gray-400">
              CHỨNG NHẬN
            </h4>
            <Space size="middle" wrap>
              <div className="bg-white/10 rounded-lg px-6 py-3">
                <div className="flex items-center gap-2">
                  <SafetyCertificateOutlined className="text-xl text-green-400" />
                  <div>
                    <p className="text-xs text-gray-400">Đã đăng ký với</p>
                    <p className="font-semibold">Bộ Công Thương</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg px-6 py-3">
                <div className="flex items-center gap-2">
                  <SafetyCertificateOutlined className="text-xl text-blue-400" />
                  <div>
                    <p className="text-xs text-gray-400">Chứng nhận</p>
                    <p className="font-semibold">DMCA Protected</p>
                  </div>
                </div>
              </div>
            </Space>
          </div>
        </div>

        <Divider className="!bg-gray-700 !my-12" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© {currentYear} ShopCuaBan. Tất cả các quyền được bảo lưu.</p>
          <Space split={<Divider type="vertical" className="!bg-gray-600" />}>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Chính sách bảo mật
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Điều khoản sử dụng
            </Link>
            <Link
              to="/sitemap"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </Space>
        </div>
      </div>
    </footer>
  )
}

export default PublicFooter
