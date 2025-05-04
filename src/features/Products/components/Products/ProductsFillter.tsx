import {
  AppstoreOutlined,
  HomeOutlined,
  ReloadOutlined,
  ShopOutlined,
  SortAscendingOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import {
  Alert,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Col,
  Collapse,
  Divider,
  Input,
  Pagination,
  Rate,
  Row,
  Select,
  Slider,
  Space,
  Tag,
  Typography,
} from 'antd'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Products from './Products'

const { Search } = Input
const { Option } = Select
const { Title, Text } = Typography
const { Panel } = Collapse

const ProductFilter: React.FC = () => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [priceRange, setPriceRange] = useState([0, 10000000])

  useEffect(() => {
    document.title = 'Sản Phẩm | Shop Của Bạn'
  }, [])

  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  const handlePriceChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setPriceRange(value as [number, number])
    }
  }

  const formatPriceLabel = (value: number | undefined) => {
    if (typeof value === 'undefined') return ''
    return `${value.toLocaleString('vi-VN')}₫`
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
          <span className="ml-1">Trang chủ</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <ShopOutlined />
          <span className="ml-1">Sản Phẩm</span>
        </Breadcrumb.Item>
        {category && (
          <Breadcrumb.Item>
            <span>{category}</span>
          </Breadcrumb.Item>
        )}
      </Breadcrumb>

      {/* Header with title and search */}
      <Row gutter={24} align="middle" className="mb-6">
        <Col flex="auto">
          <Title level={2} className="!mb-0">
            Sản Phẩm
          </Title>
          {category && (
            <Tag color="blue" className="mt-2">
              {category}
            </Tag>
          )}
        </Col>
        <Col flex="none">
          <Search
            placeholder="Tìm kiếm sản phẩm..."
            allowClear
            enterButton
            size="large"
            className="w-[300px]"
          />
        </Col>
      </Row>

      {/* Active filters */}
      <div className="mb-6">
        <Space wrap>
          <Text strong>Bộ lọc đang chọn:</Text>
          <Tag closable color="blue">
            Giá: 0₫ - 10.000.000₫
          </Tag>
          <Tag closable color="blue">
            Apple
          </Tag>
          <Button type="link" icon={<ReloadOutlined />}>
            Xóa tất cả
          </Button>
        </Space>
      </div>

      <Row gutter={24}>
        {/* Filters - sidebar on desktop, collapsible on mobile */}
        <Col
          xs={24}
          lg={6}
          className={`${showFilters ? 'block' : 'hidden'} lg:block`}
        >
          <Card className="mb-6">
            <Title level={4}>Bộ lọc sản phẩm</Title>
            <Divider />

            <Collapse defaultActiveKey={['1', '2', '3']} ghost>
              <Panel header={<Text strong>Danh mục</Text>} key="1">
                <Space direction="vertical" className="w-full">
                  <Checkbox>Điện thoại</Checkbox>
                  <Checkbox>Laptop</Checkbox>
                  <Checkbox>Máy tính bảng</Checkbox>
                  <Checkbox>Phụ kiện</Checkbox>
                  <Checkbox>Đồng hồ thông minh</Checkbox>
                </Space>
              </Panel>

              <Panel header={<Text strong>Giá</Text>} key="2">
                <Slider
                  range
                  value={priceRange}
                  min={0}
                  max={20000000}
                  step={500000}
                  onChange={handlePriceChange}
                  tipFormatter={formatPriceLabel}
                />
                <Row justify="space-between" className="mt-2">
                  <Col>
                    <Text type="secondary">
                      {formatPriceLabel(priceRange[0])}
                    </Text>
                  </Col>
                  <Col>
                    <Text type="secondary">
                      {formatPriceLabel(priceRange[1])}
                    </Text>
                  </Col>
                </Row>
              </Panel>

              <Panel header={<Text strong>Thương hiệu</Text>} key="3">
                <Space direction="vertical" className="w-full">
                  <Checkbox>Apple</Checkbox>
                  <Checkbox>Samsung</Checkbox>
                  <Checkbox>Xiaomi</Checkbox>
                  <Checkbox>OPPO</Checkbox>
                  <Checkbox>Asus</Checkbox>
                </Space>
              </Panel>

              <Panel header={<Text strong>Đánh giá</Text>} key="4">
                <Space direction="vertical" className="w-full">
                  <Checkbox>
                    <Rate disabled defaultValue={5} className="text-sm" />
                  </Checkbox>
                  <Checkbox>
                    <Rate disabled defaultValue={4} className="text-sm" />
                    <span className="ml-2">trở lên</span>
                  </Checkbox>
                  <Checkbox>
                    <Rate disabled defaultValue={3} className="text-sm" />
                    <span className="ml-2">trở lên</span>
                  </Checkbox>
                </Space>
              </Panel>

              <Panel header={<Text strong>Khuyến mãi</Text>} key="5">
                <Space direction="vertical" className="w-full">
                  <Checkbox>Đang giảm giá</Checkbox>
                  <Checkbox>Flash sale</Checkbox>
                  <Checkbox>Quà tặng kèm</Checkbox>
                </Space>
              </Panel>
            </Collapse>

            <Divider />
            <Space direction="vertical" className="w-full">
              <Button type="primary" block>
                Áp dụng
              </Button>
              <Button danger block>
                Xóa tất cả
              </Button>
            </Space>
          </Card>
        </Col>

        {/* Products grid */}
        <Col xs={24} lg={18}>
          <Card className="mb-6 shadow-sm rounded-lg">
            <Row justify="space-between" align="middle" gutter={[16, 16]}>
              <Col xs={24} md={24}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* Left side - Product count */}
                  <div className="flex items-center">
                    <Badge status="processing" />
                    <Text className="ml-2 text-gray-600">
                      Hiển thị{' '}
                      <Text strong className="text-blue-600">
                        1-12
                      </Text>{' '}
                      trong số <Text strong>48</Text> sản phẩm
                    </Text>
                  </div>

                  {/* Right side - Sort and view options */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="flex items-center gap-2 flex-1 sm:flex-initial">
                      <Text
                        strong
                        className="text-gray-600 text-sm whitespace-nowrap"
                      >
                        Sắp xếp theo:
                      </Text>
                      <Select
                        defaultValue="popularity"
                        className="w-full sm:w-44"
                        suffixIcon={
                          <SortAscendingOutlined className="text-gray-400" />
                        }
                      >
                        <Option value="popularity">Phổ biến</Option>
                        <Option value="newest">Mới nhất</Option>
                        <Option value="price-asc">Giá: Thấp đến cao</Option>
                        <Option value="price-desc">Giá: Cao đến thấp</Option>
                        <Option value="rating">Đánh giá cao nhất</Option>
                      </Select>
                    </div>

                    <Button.Group className="flex">
                      <Button
                        type={viewMode === 'grid' ? 'primary' : 'default'}
                        icon={<AppstoreOutlined />}
                        onClick={() => setViewMode('grid')}
                        className="rounded-l-lg"
                      />
                      <Button
                        type={viewMode === 'list' ? 'primary' : 'default'}
                        icon={<UnorderedListOutlined />}
                        onClick={() => setViewMode('list')}
                        className="rounded-r-lg"
                      />
                    </Button.Group>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>

          {/* Flash Sale Alert */}
          <Alert
            message="Khuyến mãi đặc biệt"
            description="Giảm thêm 10% cho tất cả sản phẩm khi thanh toán qua ví điện tử. Chỉ áp dụng đến hết ngày hôm nay!"
            type="success"
            showIcon
            closable
            action={
              <Button size="small" type="primary">
                Xem ngay
              </Button>
            }
            className="mb-6"
          />

          {/* Product grid */}
          <Products />

          {/* Pagination */}
          <Row justify="center" className="mt-8">
            <Pagination
              defaultCurrent={1}
              total={50}
              showSizeChanger
              showQuickJumper
              showTotal={total => `Tổng ${total} sản phẩm`}
            />
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ProductFilter
