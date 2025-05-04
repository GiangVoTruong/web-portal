import { Link } from 'react-router-dom'
import { Button, Rate } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

// Mock product data
const products = [
  {
    id: 1,
    name: 'Điện thoại thông minh ProMax',
    price: 2999000,
    originalPrice: 3499000,
    image: 'phone.jpg',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Tai nghe không dây Ultra',
    price: 1899000,
    originalPrice: 2199000,
    image: 'headphones.jpg',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Laptop Gaming Supreme',
    price: 5499000,
    originalPrice: 6199000,
    image: 'laptop.jpg',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Đồng hồ thông minh Series 5',
    price: 3299000,
    originalPrice: 3799000,
    image: 'watch.jpg',
    rating: 4.6,
  },
]

const FeaturedProducts: React.FC = () => {
  // Format price to VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
  }

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-6">Sản Phẩm Nổi Bật</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex flex-col"
          >
            <Link to={`/products/detail:${product.id}`} className="block mb-4">
              <div className="bg-gray-100 h-48 rounded-md flex items-center justify-center mb-3">
                <span className="text-gray-400">Hình Sản Phẩm</span>
              </div>
            </Link>
            <div className="flex-grow">
              <Link to={`/products/detail:${product.id}`} className="block">
                <h3 className="text-gray-800 font-medium text-lg mb-1 hover:text-blue-500">
                  {product.name}
                </h3>
              </Link>
              <div className="mb-2">
                <Rate
                  disabled
                  defaultValue={product.rating}
                  allowHalf
                  className="text-sm"
                />
              </div>
              <div className="flex items-center mb-1">
                <span className="text-blue-600 font-bold text-lg">
                  {formatPrice(product.price)}
                </span>
                <span className="ml-2 text-gray-500 text-sm line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              </div>
              <div className="text-green-600 text-xs mb-4">
                Tiết kiệm: {formatPrice(product.originalPrice - product.price)}
              </div>
            </div>
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              className="w-full"
              shape="round"
              size="middle"
            >
              Thêm vào giỏ
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link to="/products">
          <Button type="default" size="large">
            Xem tất cả sản phẩm
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default FeaturedProducts
