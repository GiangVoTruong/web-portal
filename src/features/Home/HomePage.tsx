import { useEffect } from 'react'
import { Carousel } from 'antd'
import CategorySection from './CategorySection'
import FeaturedProducts from './FeaturedProducts'
import SpecialOffersBanner from './SpecialOffersBanner'

// Components for HomePage

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Trang Chủ | Shop Của Bạn'
  }, [])

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Main Slider/Banner */}
      <Carousel autoplay className="mb-10">
        <div className="h-80 bg-blue-50 rounded-lg flex items-center justify-center">
          <h3 className="text-2xl text-gray-600">Banner Slider 1</h3>
        </div>
        <div className="h-80 bg-green-50 rounded-lg flex items-center justify-center">
          <h3 className="text-2xl text-gray-600">Banner Slider 2</h3>
        </div>
        <div className="h-80 bg-purple-50 rounded-lg flex items-center justify-center">
          <h3 className="text-2xl text-gray-600">Banner Slider 3</h3>
        </div>
      </Carousel>

      {/* Featured Categories */}
      <CategorySection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Special Offers Banner */}
      <SpecialOffersBanner />
    </div>
  )
}

export default HomePage
