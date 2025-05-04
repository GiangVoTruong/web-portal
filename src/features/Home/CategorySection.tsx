import { Link } from 'react-router-dom'
import {
  MobileOutlined,
  LaptopOutlined,
  TabletOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'

const categories = [
  {
    id: 1,
    name: 'Điện Thoại',
    icon: <MobileOutlined style={{ fontSize: '24px' }} />,
    path: '/products?category=phones',
  },
  {
    id: 2,
    name: 'Laptop',
    icon: <LaptopOutlined style={{ fontSize: '24px' }} />,
    path: '/products?category=laptops',
  },
  {
    id: 3,
    name: 'Tablet',
    icon: <TabletOutlined style={{ fontSize: '24px' }} />,
    path: '/products?category=tablets',
  },
  {
    id: 4,
    name: 'Phụ Kiện',
    icon: <ThunderboltOutlined style={{ fontSize: '24px' }} />,
    path: '/products?category=accessories',
  },
]

const CategorySection: React.FC = () => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-6">Danh Mục Nổi Bật</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map(category => (
          <Link
            key={category.id}
            to={category.path}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center transition-transform hover:transform hover:scale-105"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-3 text-blue-500">
              {category.icon}
            </div>
            <h3 className="text-gray-800 font-medium">{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategorySection
