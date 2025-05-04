import { Link } from 'react-router-dom'
import {
  MobileOutlined,
  LaptopOutlined,
  TabletOutlined,
  ThunderboltOutlined,
  PhoneOutlined,
  CameraOutlined,
  WifiOutlined,
  DesktopOutlined,
} from '@ant-design/icons'

const categories = [
  {
    id: 1,
    name: 'Điện Thoại',
    icon: <MobileOutlined style={{ fontSize: '32px' }} />,
    path: '/products?category=phones',
    color: 'from-blue-500 to-blue-600',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    id: 2,
    name: 'Laptop',
    icon: <LaptopOutlined style={{ fontSize: '32px' }} />,
    path: '/products?category=laptops',
    color: 'from-purple-500 to-purple-600',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    id: 3,
    name: 'Tablet',
    icon: <TabletOutlined style={{ fontSize: '32px' }} />,
    path: '/products?category=tablets',
    color: 'from-green-500 to-green-600',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    id: 4,
    name: 'Phụ Kiện',
    icon: <ThunderboltOutlined style={{ fontSize: '32px' }} />,
    path: '/products?category=accessories',
    color: 'from-orange-500 to-orange-600',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    id: 5,
    name: 'Âm thanh',
    icon: <PhoneOutlined style={{ fontSize: '32px' }} />,
    path: '/products?category=audio',
    color: 'from-pink-500 to-pink-600',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    id: 6,
    name: 'Camera',
    icon: <CameraOutlined style={{ fontSize: '32px' }} />,
    path: '/products?category=camera',
    color: 'from-red-500 to-red-600',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    id: 7,
    name: 'Mạng & Wifi',
    icon: <WifiOutlined style={{ fontSize: '32px' }} />,
    path: '/products?category=network',
    color: 'from-cyan-500 to-cyan-600',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
  },
  {
    id: 8,
    name: 'PC & Màn hình',
    icon: <DesktopOutlined style={{ fontSize: '32px' }} />,
    path: '/products?category=pc',
    color: 'from-indigo-500 to-indigo-600',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
]

const CategorySection: React.FC = () => {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Danh Mục Nổi Bật</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map(category => (
          <Link key={category.id} to={category.path} className="group">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 h-full min-h-[160px]">
              <div
                className={`w-16 h-16 ${category.iconBg} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}
              >
                <div className={category.iconColor}>{category.icon}</div>
              </div>
              <h3 className="text-gray-800 font-medium text-center text-sm">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategorySection
