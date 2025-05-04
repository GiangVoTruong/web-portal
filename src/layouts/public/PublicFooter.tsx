import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons'
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { PagePath } from '@/enums/pageEnum'

const PublicFooter: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Về Chúng Tôi</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={PagePath.About}
                  className="text-gray-300 hover:text-white"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link to="/stores" className="text-gray-300 hover:text-white">
                  Hệ thống cửa hàng
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hỗ Trợ</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-300 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-300 hover:text-white">
                  Chính sách bảo hành
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white">
                  Chính sách đổi trả
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-bold mb-4">Chính Sách</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">
                  Bảo mật
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white">
                  Vận chuyển
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link
                  to="/payment-methods"
                  className="text-gray-300 hover:text-white"
                >
                  Phương thức thanh toán
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kết Nối</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-100"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-100"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-red-600 hover:bg-red-100"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-2 text-gray-400"
                />
                <span>1900 1234</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-gray-400"
                />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mr-2 mt-1 text-gray-400"
                />
                <span>123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="border-t border-gray-700 pt-6 pb-4">
          <h3 className="text-lg font-bold mb-4 text-center">
            Phương Thức Thanh Toán
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white w-12 h-8 rounded flex items-center justify-center">
              <span className="text-xs text-gray-800">VISA</span>
            </div>
            <div className="bg-white w-12 h-8 rounded flex items-center justify-center">
              <span className="text-xs text-gray-800">MC</span>
            </div>
            <div className="bg-white w-12 h-8 rounded flex items-center justify-center">
              <span className="text-xs text-gray-800">JCB</span>
            </div>
            <div className="bg-white w-12 h-8 rounded flex items-center justify-center">
              <span className="text-xs text-gray-800">MOMO</span>
            </div>
            <div className="bg-white w-12 h-8 rounded flex items-center justify-center">
              <span className="text-xs text-gray-800">VNPAY</span>
            </div>
            <div className="bg-white w-12 h-8 rounded flex items-center justify-center">
              <span className="text-xs text-gray-800">COD</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} Shop của bạn. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}

export default PublicFooter
