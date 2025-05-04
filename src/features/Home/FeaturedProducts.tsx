import { Link } from 'react-router-dom'
import { Button, Rate, Badge } from 'antd'
import {
  ShoppingCartOutlined,
  HeartOutlined,
  EyeOutlined,
} from '@ant-design/icons'

// Mock product data
const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max 256GB',
    price: 29990000,
    originalPrice: 34990000,
    image: '/api/placeholder/400/400',
    rating: 4.8,
    reviews: 256,
    badge: 'Mới',
    badgeColor: '#52c41a',
    discount: '-14%',
  },
  {
    id: 2,
    name: 'AirPods Pro 2nd Generation',
    price: 5890000,
    originalPrice: 6990000,
    image: '/api/placeholder/400/400',
    rating: 4.5,
    reviews: 128,
    badge: 'Hot',
    badgeColor: '#f5222d',
    discount: '-16%',
  },
  {
    id: 3,
    name: 'MacBook Air M2 13 inch',
    price: 27490000,
    originalPrice: 32990000,
    image: '/api/placeholder/400/400',
    rating: 4.7,
    reviews: 89,
    badge: 'Best Seller',
    badgeColor: '#722ed1',
    discount: '-17%',
  },
  {
    id: 4,
    name: 'Apple Watch Series 9 GPS',
    price: 9990000,
    originalPrice: 11990000,
    image: '/api/placeholder/400/400',
    rating: 4.6,
    reviews: 156,
    discount: '-17%',
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
    <section className="mb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Sản Phẩm Nổi Bật</h2>
        <Link
          to="/products"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Xem tất cả →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300"
          >
            <div className="relative">
              <Link to={`/products/detail:${product.id}`}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>

              {/* Badges */}
              {product.badge && (
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-semibold"
                  style={{ backgroundColor: product.badgeColor }}
                >
                  {product.badge}
                </div>
              )}

              {product.discount && (
                <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
                  {product.discount}
                </div>
              )}

              {/* Quick actions */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-2">
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<EyeOutlined />}
                    size="large"
                    className="bg-white text-gray-700 border-none hover:bg-blue-500 hover:text-white"
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<HeartOutlined />}
                    size="large"
                    className="bg-white text-gray-700 border-none hover:bg-red-500 hover:text-white"
                  />
                </div>
              </div>
            </div>

            <div className="p-4">
              <Link to={`/products/detail:${product.id}`}>
                <h3 className="text-gray-800 font-medium text-lg mb-2 hover:text-blue-600 line-clamp-2 min-h-[3.5rem]">
                  {product.name}
                </h3>
              </Link>

              <div className="flex items-center mb-3">
                <Rate
                  disabled
                  defaultValue={product.rating}
                  allowHalf
                  className="text-sm"
                />
                <span className="ml-2 text-gray-500 text-sm">
                  ({product.reviews})
                </span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-red-600 font-bold text-xl">
                    {formatPrice(product.price)}
                  </div>
                  <div className="text-gray-400 text-sm line-through">
                    {formatPrice(product.originalPrice)}
                  </div>
                </div>
              </div>

              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                className="w-full h-10"
                size="large"
              >
                Thêm vào giỏ
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts
