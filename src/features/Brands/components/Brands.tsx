import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Card, Row, Col, Input } from 'antd'
import { HomeOutlined, SearchOutlined } from '@ant-design/icons'

const { Search } = Input

const Brands: React.FC = () => {
  useEffect(() => {
    document.title = 'Thương hiệu | Shop Của Bạn'
  }, [])

  // Mock brands data
  const brands = [
    { id: 1, name: 'Apple', logo: '/placeholder.jpg', productCount: 25 },
    { id: 2, name: 'Samsung', logo: '/placeholder.jpg', productCount: 32 },
    { id: 3, name: 'Xiaomi', logo: '/placeholder.jpg', productCount: 28 },
    { id: 4, name: 'OPPO', logo: '/placeholder.jpg', productCount: 20 },
    { id: 5, name: 'Vivo', logo: '/placeholder.jpg', productCount: 15 },
    { id: 6, name: 'Huawei', logo: '/placeholder.jpg', productCount: 18 },
    { id: 7, name: 'Sony', logo: '/placeholder.jpg', productCount: 22 },
    { id: 8, name: 'LG', logo: '/placeholder.jpg', productCount: 12 },
    { id: 9, name: 'Asus', logo: '/placeholder.jpg', productCount: 17 },
    { id: 10, name: 'Acer', logo: '/placeholder.jpg', productCount: 14 },
    { id: 11, name: 'Dell', logo: '/placeholder.jpg', productCount: 19 },
    { id: 12, name: 'HP', logo: '/placeholder.jpg', productCount: 21 },
    { id: 13, name: 'Lenovo', logo: '/placeholder.jpg', productCount: 16 },
    { id: 14, name: 'MSI', logo: '/placeholder.jpg', productCount: 10 },
    { id: 15, name: 'JBL', logo: '/placeholder.jpg', productCount: 11 },
    { id: 16, name: 'Bose', logo: '/placeholder.jpg', productCount: 8 },
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Thương hiệu</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="text-2xl font-bold mb-6">Thương hiệu</h1>

      <div className="mb-8">
        <Search
          placeholder="Tìm kiếm thương hiệu"
          enterButton={<SearchOutlined />}
          size="large"
          className="max-w-lg"
        />
      </div>

      <Row gutter={[16, 16]}>
        {brands.map(brand => (
          <Col xs={12} sm={8} md={6} lg={4} key={brand.id}>
            <Link to={`/products?brand=${brand.id}`}>
              <Card
                hoverable
                className="text-center h-full flex flex-col transition-transform hover:shadow-md hover:-translate-y-1"
              >
                <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-400">Logo</span>
                </div>
                <h3 className="font-medium text-lg mb-1">{brand.name}</h3>
                <p className="text-gray-500 text-sm">
                  {brand.productCount} sản phẩm
                </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Brands
