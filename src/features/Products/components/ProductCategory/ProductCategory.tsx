import { PagePath } from '@/enums/pageEnum'
import {
  ArrowUpOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  FilterOutlined,
  MoreOutlined,
  PlusOutlined,
  SearchOutlined,
  ShoppingOutlined,
  SortAscendingOutlined,
} from '@ant-design/icons'
import {
  Badge,
  Button,
  Card,
  Dropdown,
  Image,
  Input,
  Select,
  Space,
  Statistic,
  Table,
  Tag,
  Tooltip,
  Typography,
} from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography
const { Option } = Select

interface ProductType {
  key: string
  id: string
  sku: string
  name: string
  image: string
  category: string
  brand: string
  price: number
  salePrice: number | null
  stock: number
  status: 'active' | 'inactive' | 'out-of-stock'
  createdAt: string
  isHot: boolean
  isNew: boolean
}

const ProductCategory: React.FC = () => {
  const [searchText, setSearchText] = useState('')
  const [data, setData] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedBrand, setSelectedBrand] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const navigate = useNavigate()

  // Mock categories và brands
  const categories = ['Điện thoại', 'Laptop', 'Tablet', 'Máy ảnh', 'Phụ kiện']
  const brands = ['Apple', 'Samsung', 'Xiaomi', 'Sony', 'HP', 'Dell', 'Asus']

  useEffect(() => {
    // Giả lập tải dữ liệu
    setLoading(true)
    setTimeout(() => {
      const mockData: ProductType[] = [
        {
          key: '1',
          id: 'SP001',
          sku: 'IP13PM-128',
          name: 'iPhone 13 Pro Max 128GB',
          image: 'https://via.placeholder.com/80',
          category: 'Điện thoại',
          brand: 'Apple',
          price: 28990000,
          salePrice: 27490000,
          stock: 45,
          status: 'active',
          createdAt: '2023-05-01',
          isHot: true,
          isNew: true,
        },
        {
          key: '2',
          id: 'SP002',
          sku: 'SS-S21-256',
          name: 'Samsung Galaxy S21 Ultra 256GB',
          image: 'https://via.placeholder.com/80',
          category: 'Điện thoại',
          brand: 'Samsung',
          price: 25990000,
          salePrice: 23990000,
          stock: 32,
          status: 'active',
          createdAt: '2023-05-10',
          isHot: true,
          isNew: false,
        },
        {
          key: '3',
          id: 'SP003',
          sku: 'MBA-M1-256',
          name: 'MacBook Air M1 256GB',
          image: 'https://via.placeholder.com/80',
          category: 'Laptop',
          brand: 'Apple',
          price: 22990000,
          salePrice: null,
          stock: 18,
          status: 'active',
          createdAt: '2023-06-15',
          isHot: false,
          isNew: true,
        },
        {
          key: '4',
          id: 'SP004',
          sku: 'ASU-ROG-512',
          name: 'Asus ROG Strix G15 512GB',
          image: 'https://via.placeholder.com/80',
          category: 'Laptop',
          brand: 'Asus',
          price: 32990000,
          salePrice: 31490000,
          stock: 0,
          status: 'out-of-stock',
          createdAt: '2023-04-20',
          isHot: false,
          isNew: false,
        },
        {
          key: '5',
          id: 'SP005',
          sku: 'XIAO-PAD5-128',
          name: 'Xiaomi Pad 5 128GB',
          image: 'https://via.placeholder.com/80',
          category: 'Tablet',
          brand: 'Xiaomi',
          price: 7990000,
          salePrice: 7490000,
          stock: 24,
          status: 'active',
          createdAt: '2023-07-05',
          isHot: true,
          isNew: true,
        },
      ]
      setData(mockData)
      setLoading(false)
    }, 1000)
  }, [])

  // Format giá tiền
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
  }

  const handleSearch = (value: string) => {
    setSearchText(value)
    // Thêm logic tìm kiếm ở đây
  }

  const handleCreateProduct = () => {
    navigate(PagePath.CreateProduct)
  }

  const handleViewProduct = (id: string) => {
    navigate(PagePath.ViewProduct.replace(':id', id))
  }

  const handleEditProduct = (id: string) => {
    navigate(PagePath.UpdateProduct.replace(':id', id))
  }

  const handleMenuClick = (key: string, record: ProductType) => {
    switch (key) {
      case 'view':
        handleViewProduct(record.id)
        break
      case 'edit':
        handleEditProduct(record.id)
        break
      case 'delete':
        console.log('Delete product:', record)
        break
      default:
        break
    }
  }

  // Filter data dựa trên các bộ lọc đã chọn
  const getFilteredData = () => {
    return data.filter(item => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory
      const matchBrand = selectedBrand === 'all' || item.brand === selectedBrand
      const matchStatus = selectedStatus === 'all' || item.status === selectedStatus
      const matchSearch =
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchText.toLowerCase())

      return matchCategory && matchBrand && matchStatus && matchSearch
    })
  }

  const columns: ColumnsType<ProductType> = [
    {
      title: 'Mã SP',
      dataIndex: 'sku',
      key: 'sku',
      width: 120,
    },
    {
      title: 'Sản phẩm',
      key: 'product',
      render: (_, record) => (
        <div className="flex items-center">
          <Image
            src={record.image}
            alt={record.name}
            width={40}
            height={40}
            className="mr-3 object-cover rounded"
          />
          <div>
            <a onClick={() => handleViewProduct(record.id)} className="font-medium">
              {record.name}
            </a>
            <div className="flex mt-1">
              {record.isNew && <Tag color="blue">Mới</Tag>}
              {record.isHot && <Tag color="red">Hot</Tag>}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Danh mục',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Thương hiệu',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Giá bán',
      key: 'price',
      render: (_, record) => (
        <div>
          <div className="font-medium">{formatPrice(record.salePrice || record.price)}</div>
          {record.salePrice && (
            <div className="text-gray-400 line-through text-xs">{formatPrice(record.price)}</div>
          )}
        </div>
      ),
      sorter: (a, b) => (a.salePrice || a.price) - (b.salePrice || b.price),
    },
    {
      title: 'Tồn kho',
      dataIndex: 'stock',
      key: 'stock',
      render: (stock: number) => (
        <Badge
          count={stock}
          showZero
          style={{
            backgroundColor: stock > 0 ? '#52c41a' : '#f5222d',
            fontWeight: 'bold',
          }}
          overflowCount={999}
        />
      ),
      sorter: (a, b) => a.stock - b.stock,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = 'default'
        let text = 'Chưa xác định'

        switch (status) {
          case 'active':
            color = 'success'
            text = 'Đang bán'
            break
          case 'inactive':
            color = 'warning'
            text = 'Tạm ngưng'
            break
          case 'out-of-stock':
            color = 'error'
            text = 'Hết hàng'
            break
        }

        return <Tag color={color}>{text}</Tag>
      },
    },
    {
      title: 'Thao tác',
      key: 'action',
      width: 80,
      render: (_, record) => (
        <Dropdown
          menu={{
            items: [
              {
                key: 'view',
                label: 'Xem chi tiết',
                icon: <EyeOutlined />,
              },
              {
                key: 'edit',
                label: 'Chỉnh sửa',
                icon: <EditOutlined />,
              },
              {
                key: 'delete',
                label: 'Xóa',
                icon: <DeleteOutlined />,
                danger: true,
              },
            ],
            onClick: ({ key }) => handleMenuClick(key, record),
          }}
          placement="bottomRight"
          trigger={['click']}
        >
          <Button type="text" icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ]

  // Tính toán tổng số sản phẩm và giá trị hàng tồn kho
  const filteredData = getFilteredData()
  const totalProducts = filteredData.length
  const totalStock = filteredData.reduce((sum, item) => sum + item.stock, 0)
  const inventoryValue = filteredData.reduce(
    (sum, item) => sum + (item.salePrice || item.price) * item.stock,
    0
  )

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <Statistic title="Tổng sản phẩm" value={totalProducts} prefix={<ShoppingOutlined />} />
        </Card>
        <Card>
          <Statistic
            title="Tổng hàng tồn kho"
            value={totalStock}
            prefix={<SortAscendingOutlined />}
          />
        </Card>
        <Card>
          <Statistic
            title="Giá trị tồn kho"
            value={inventoryValue}
            precision={0}
            formatter={value => formatPrice(value as number)}
            prefix={
              <ArrowUpOutlined style={{ color: inventoryValue > 0 ? '#3f8600' : '#cf1322' }} />
            }
          />
        </Card>
      </div>

      <Card>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          <Title level={4}>Danh mục sản phẩm</Title>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Space wrap>
              <Select
                placeholder="Danh mục"
                style={{ width: 120 }}
                value={selectedCategory}
                onChange={setSelectedCategory}
                allowClear
                suffixIcon={<FilterOutlined />}
              >
                <Option value="all">Tất cả</Option>
                {categories.map(category => (
                  <Option key={category} value={category}>
                    {category}
                  </Option>
                ))}
              </Select>
              <Select
                placeholder="Thương hiệu"
                style={{ width: 120 }}
                value={selectedBrand}
                onChange={setSelectedBrand}
                allowClear
                suffixIcon={<FilterOutlined />}
              >
                <Option value="all">Tất cả</Option>
                {brands.map(brand => (
                  <Option key={brand} value={brand}>
                    {brand}
                  </Option>
                ))}
              </Select>
              <Select
                placeholder="Trạng thái"
                style={{ width: 130 }}
                value={selectedStatus}
                onChange={setSelectedStatus}
                allowClear
                suffixIcon={<FilterOutlined />}
              >
                <Option value="all">Tất cả</Option>
                <Option value="active">Đang bán</Option>
                <Option value="inactive">Tạm ngưng</Option>
                <Option value="out-of-stock">Hết hàng</Option>
              </Select>
            </Space>

            <Space wrap>
              <Input
                placeholder="Tìm kiếm sản phẩm"
                prefix={<SearchOutlined />}
                value={searchText}
                onChange={e => handleSearch(e.target.value)}
                style={{ width: 200 }}
              />
              <Tooltip title="Thêm sản phẩm mới">
                <Button type="primary" icon={<PlusOutlined />} onClick={handleCreateProduct}>
                  Thêm mới
                </Button>
              </Tooltip>
            </Space>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={getFilteredData()}
          loading={loading}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ['10', '20', '50'],
            showTotal: total => `Tổng ${total} sản phẩm`,
          }}
        />
      </Card>
    </div>
  )
}

export default ProductCategory
