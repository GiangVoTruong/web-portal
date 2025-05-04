import { Button } from 'antd'
import { Link } from 'react-router-dom'

const SpecialOffersBanner: React.FC = () => {
  return (
    <section className="mb-10">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">Ưu Đãi Đặc Biệt</h2>
          <p className="text-gray-700 mb-4 md:mb-0">
            Giảm thêm 10% cho tất cả sản phẩm khi thanh toán qua ví điện tử
          </p>
        </div>
        <Link to="/promotions">
          <Button type="primary" size="large">
            Xem Ngay
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default SpecialOffersBanner
