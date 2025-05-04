import { useEffect } from 'react'
import { Breadcrumb, Form, Input, Button, Row, Col, Card } from 'antd'
import {
  HomeOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons'

const { TextArea } = Input

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Liên hệ | Shop Của Bạn'
  }, [])

  const onFinish = (values: any) => {
    console.log('Form values:', values)
    // Here would be the API call to send the contact form
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Liên hệ</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="text-2xl font-bold mb-6">Liên hệ với chúng tôi</h1>

      <Row gutter={24}>
        <Col xs={24} md={12} lg={16}>
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Gửi thông tin liên hệ</h2>
            <Form layout="vertical" onFinish={onFinish}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    label="Họ và tên"
                    rules={[
                      { required: true, message: 'Vui lòng nhập họ tên' },
                    ]}
                  >
                    <Input placeholder="Nhập họ và tên" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: 'Vui lòng nhập email' },
                      { type: 'email', message: 'Email không hợp lệ' },
                    ]}
                  >
                    <Input placeholder="Nhập email" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[
                  { required: true, message: 'Vui lòng nhập số điện thoại' },
                ]}
              >
                <Input placeholder="Nhập số điện thoại" />
              </Form.Item>
              <Form.Item
                name="subject"
                label="Tiêu đề"
                rules={[{ required: true, message: 'Vui lòng nhập tiêu đề' }]}
              >
                <Input placeholder="Nhập tiêu đề" />
              </Form.Item>
              <Form.Item
                name="message"
                label="Nội dung"
                rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]}
              >
                <TextArea rows={6} placeholder="Nhập nội dung" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" size="large">
                  Gửi liên hệ
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card className="mb-6">
            <h2 className="text-xl font-bold mb-4">Thông tin liên hệ</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneOutlined className="mt-1 mr-3 text-blue-500" />
                <div>
                  <p className="font-medium">Điện thoại</p>
                  <p>1900 1234</p>
                </div>
              </li>
              <li className="flex items-start">
                <MailOutlined className="mt-1 mr-3 text-blue-500" />
                <div>
                  <p className="font-medium">Email</p>
                  <p>contact@example.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <EnvironmentOutlined className="mt-1 mr-3 text-blue-500" />
                <div>
                  <p className="font-medium">Địa chỉ</p>
                  <p>123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</p>
                </div>
              </li>
            </ul>
          </Card>
          <Card title="Giờ làm việc">
            <p className="mb-2">
              <span className="font-medium">Thứ 2 - Thứ 6:</span> 8:00 - 18:00
            </p>
            <p className="mb-2">
              <span className="font-medium">Thứ 7:</span> 8:00 - 12:00
            </p>
            <p>
              <span className="font-medium">Chủ nhật:</span> Nghỉ
            </p>
          </Card>
        </Col>
      </Row>

      <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
        <h2 className="text-xl font-bold mb-4">Bản đồ</h2>
        <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-600">Nhúng bản đồ Google Maps ở đây</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
