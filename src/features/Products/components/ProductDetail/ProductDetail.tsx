import {
  CheckCircleOutlined,
  HeartOutlined,
  HomeOutlined,
  ShareAltOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import {
  Breadcrumb,
  Button,
  Divider,
  InputNumber,
  Radio,
  Rate,
  Table,
  Tabs,
} from 'antd'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const { TabPane } = Tabs

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    document.title = 'Chi tiết sản phẩm | Shop Của Bạn'
    // Here you would fetch product details using the ID
  }, [id])

  // Mock product data
  const product = {
    id: '1',
    name: 'Điện thoại thông minh ProMax',
    price: 2999000,
    originalPrice: 3499000,
    discountPercent: 14,
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    description:
      'Điện thoại thông minh ProMax với màn hình Super AMOLED 6.5 inch, camera 108MP, pin 5000mAh và bộ nhớ 128GB.',
    images: ['/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg'],
    colors: ['Đen', 'Trắng', 'Xanh'],
    specs: [
      { key: '1', parameter: 'Màn hình', value: 'Super AMOLED 6.5 inch' },
      { key: '2', parameter: 'Chip', value: 'Snapdragon 8 Gen 1' },
      { key: '3', parameter: 'RAM', value: '8GB' },
      { key: '4', parameter: 'Bộ nhớ', value: '128GB' },
      { key: '5', parameter: 'Camera sau', value: '108MP + 12MP + 8MP' },
      { key: '6', parameter: 'Camera trước', value: '32MP' },
      { key: '7', parameter: 'Pin', value: '5000mAh' },
      { key: '8', parameter: 'Sạc', value: '25W' },
    ],
  }

  // Format price to VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
  }

  const handleQuantityChange = (value: number | null) => {
    if (value) setQuantity(value)
  }

  const specColumns = [
    {
      title: 'Thông số',
      dataIndex: 'parameter',
      key: 'parameter',
      width: '30%',
    },
    {
      title: 'Chi tiết',
      dataIndex: 'value',
      key: 'value',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Sản Phẩm</Breadcrumb.Item>
        <Breadcrumb.Item>Điện thoại</Breadcrumb.Item>
        <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
      </Breadcrumb>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <div className="bg-gray-100 h-80 rounded-md flex items-center justify-center mb-4">
              <span className="text-gray-400">Hình Sản Phẩm Chính</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-100 h-24 rounded-md flex items-center justify-center cursor-pointer">
                <span className="text-gray-400">Hình 1</span>
              </div>
              <div className="bg-gray-100 h-24 rounded-md flex items-center justify-center cursor-pointer">
                <span className="text-gray-400">Hình 2</span>
              </div>
              <div className="bg-gray-100 h-24 rounded-md flex items-center justify-center cursor-pointer">
                <span className="text-gray-400">Hình 3</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

            <div className="flex items-center mb-4">
              <Rate disabled defaultValue={product.rating} allowHalf />
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviewCount} đánh giá)
              </span>
            </div>

            <div className="flex items-center mb-3">
              <span className="text-2xl font-bold text-blue-600 mr-3">
                {formatPrice(product.price)}
              </span>
              <span className="text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="ml-3 bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
                -{product.discountPercent}%
              </span>
            </div>

            {product.inStock ? (
              <div className="flex items-center text-green-600 mb-6">
                <CheckCircleOutlined className="mr-1" />
                <span>Còn hàng</span>
              </div>
            ) : (
              <div className="text-red-600 mb-6">Hết hàng</div>
            )}

            <div className="mb-6">
              <p className="text-gray-700">{product.description}</p>
            </div>

            <Divider />

            {/* Color selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Màu sắc</h3>
              <Radio.Group defaultValue="Đen">
                {product.colors.map((color, index) => (
                  <Radio.Button key={index} value={color}>
                    {color}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Số lượng</h3>
              <InputNumber
                min={1}
                max={10}
                defaultValue={1}
                onChange={handleQuantityChange}
              />
            </div>

            {/* Add to cart and buy now buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                size="large"
                className="flex-1"
              >
                Thêm vào giỏ
              </Button>
              <Button type="default" icon={<HeartOutlined />} size="large">
                Yêu thích
              </Button>
              <Button type="default" icon={<ShareAltOutlined />} size="large">
                Chia sẻ
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product details, specifications, and reviews */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Chi tiết sản phẩm" key="1">
            <div className="py-4">
              <h3 className="text-xl font-bold mb-4">Đặc điểm nổi bật</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Màn hình Super AMOLED 6.5 inch sắc nét</li>
                <li>Camera chính 108MP cho hình ảnh sắc nét</li>
                <li>Pin 5000mAh sử dụng cả ngày dài</li>
                <li>Bộ nhớ 128GB lưu trữ thoải mái</li>
                <li>Chip Snapdragon 8 Gen 1 mạnh mẽ</li>
              </ul>
            </div>
          </TabPane>
          <TabPane tab="Thông số kỹ thuật" key="2">
            <div className="py-4">
              <Table
                columns={specColumns}
                dataSource={product.specs}
                pagination={false}
                bordered
              />
            </div>
          </TabPane>
          <TabPane tab="Đánh giá" key="3">
            <div className="py-4">
              <div className="text-center py-8">
                <h3 className="text-xl font-bold mb-2">Đánh giá sản phẩm</h3>
                <div className="flex justify-center items-center">
                  <span className="text-3xl font-bold text-yellow-500 mr-2">
                    {product.rating}
                  </span>
                  <Rate disabled defaultValue={product.rating} allowHalf />
                </div>
                <p className="text-gray-600 mt-2">
                  {product.reviewCount} đánh giá
                </p>
                <Button type="primary" className="mt-4">
                  Viết đánh giá
                </Button>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default ProductDetail
//
