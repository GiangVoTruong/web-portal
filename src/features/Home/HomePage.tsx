import { useEffect } from 'react'
import { Carousel, Button } from 'antd'
import CategorySection from './CategorySection'
import FeaturedProducts from './FeaturedProducts'
import SpecialOffersBanner from './SpecialOffersBanner'
import { RightOutlined } from '@ant-design/icons'

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Trang Chủ | Shop Của Bạn'
  }, [])

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        {/* Main Slider/Banner */}
        <Carousel autoplay autoplaySpeed={5000} className="mb-10">
          <div>
            <div className="h-96 md:h-[500px] rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  iPhone 15 Pro Max
                </h2>
                <p className="text-lg md:text-xl mb-6">Giảm đến 5 triệu đồng</p>
                <Button
                  type="primary"
                  size="large"
                  className="!bg-white !text-blue-600 !border-0 hover:!bg-blue-50 !rounded-full !px-8 !font-semibold"
                >
                  Mua ngay
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="h-96 md:h-[500px] rounded-2xl bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  MacBook Air M2
                </h2>
                <p className="text-lg md:text-xl mb-6">
                  Hiệu năng vượt trội, giá ưu đãi
                </p>
                <Button
                  type="primary"
                  size="large"
                  className="!bg-white !text-green-600 !border-0 hover:!bg-green-50 !rounded-full !px-8 !font-semibold"
                >
                  Khám phá ngay
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="h-96 md:h-[500px] rounded-2xl bg-gradient-to-r from-purple-600 to-purple-400 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Galaxy Watch 6
                </h2>
                <p className="text-lg md:text-xl mb-6">
                  Đồng hành cùng phong cách của bạn
                </p>
                <Button
                  type="primary"
                  size="large"
                  className="!bg-white !text-purple-600 !border-0 hover:!bg-purple-50 !rounded-full !px-8 !font-semibold"
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </div>
          </div>
        </Carousel>

        {/* Featured Categories */}
        <CategorySection />

        {/* Featured Products */}
        <FeaturedProducts />

        {/* Special Offers Banner */}
        <SpecialOffersBanner />

        {/* New Additional Section - Promotional Cards */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Miễn phí vận chuyển</h3>
              <p className="mb-4">Cho đơn hàng từ 500.000đ</p>
              <a
                href="#"
                className="inline-flex items-center text-white hover:text-orange-100"
              >
                Tìm hiểu thêm <RightOutlined className="ml-2" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Bảo hành chính hãng</h3>
              <p className="mb-4">12 tháng cho tất cả sản phẩm</p>
              <a
                href="#"
                className="inline-flex items-center text-white hover:text-blue-100"
              >
                Tìm hiểu thêm <RightOutlined className="ml-2" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Hỗ trợ 24/7</h3>
              <p className="mb-4">Luôn sẵn sàng tư vấn cho bạn</p>
              <a
                href="#"
                className="inline-flex items-center text-white hover:text-green-100"
              >
                Liên hệ ngay <RightOutlined className="ml-2" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage
