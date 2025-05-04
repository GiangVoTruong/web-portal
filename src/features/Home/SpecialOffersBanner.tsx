import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { GiftOutlined, PercentageOutlined } from '@ant-design/icons'

const SpecialOffersBanner: React.FC = () => {
  return (
    <section className="mb-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <GiftOutlined className="text-3xl" />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Ưu Đãi Đặc Biệt
                </h2>
              </div>
              <p className="text-lg md:text-xl mb-2 font-medium">
                Giảm thêm 10% cho tất cả sản phẩm
              </p>
              <p className="text-blue-100 text-base md:text-lg">
                Khi thanh toán qua ví điện tử. Áp dụng đến hết 31/12
              </p>
            </div>

            <div className="flex gap-4">
              <Link to="/promotions">
                <Button
                  type="primary"
                  size="large"
                  icon={<PercentageOutlined />}
                  className="bg-white text-blue-600 border-none hover:bg-blue-50 h-12 px-8 font-semibold"
                >
                  Xem Ngay
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffersBanner
