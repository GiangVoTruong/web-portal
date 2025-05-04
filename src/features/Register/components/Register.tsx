import React from 'react'
import {
  Form,
  Input,
  Button,
  Card,
  Typography,
  Space,
  Divider,
  message,
} from 'antd'
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGoogle,
  faFacebook,
  faApple,
} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const { Title, Text } = Typography

interface RegisterFormValues {
  fullName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

export default function RegisterPage() {
  const [form] = Form.useForm()
  const [loading, setLoading] = React.useState(false)

  const onFinish = async (values: RegisterFormValues) => {
    try {
      setLoading(true)
      // API call to register user
      console.log('Register values:', values)
      message.success('Đăng ký thành công!')
      // Redirect to login or dashboard
    } catch (error) {
      message.error('Đăng ký thất bại, vui lòng thử lại!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card
          className="shadow-2xl rounded-2xl border-0"
          bodyStyle={{ padding: '40px' }}
        >
          {/* Logo/Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <UserOutlined className="text-3xl text-white" />
              </div>
            </div>
            <Title level={2} className="!mb-2">
              Đăng ký tài khoản
            </Title>
            <Text type="secondary">Tạo tài khoản mới để bắt đầu mua sắm</Text>
          </div>

          {/* Register Form */}
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            layout="vertical"
            requiredMark={false}
          >
            <Form.Item
              name="fullName"
              rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="Họ và tên"
                size="large"
                className="rounded-lg h-12"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Vui lòng nhập email!' },
                { type: 'email', message: 'Email không hợp lệ!' },
              ]}
            >
              <Input
                prefix={<MailOutlined className="text-gray-400" />}
                placeholder="Email"
                size="large"
                className="rounded-lg h-12"
              />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                { required: true, message: 'Vui lòng nhập số điện thoại!' },
                {
                  pattern: /^[0-9]{10}$/,
                  message: 'Số điện thoại không hợp lệ!',
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined className="text-gray-400" />}
                placeholder="Số điện thoại"
                size="large"
                className="rounded-lg h-12"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Vui lòng nhập mật khẩu!' },
                { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="Mật khẩu"
                size="large"
                className="rounded-lg h-12"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error('Mật khẩu không khớp!'))
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="Xác nhận mật khẩu"
                size="large"
                className="rounded-lg h-12"
              />
            </Form.Item>

            <Form.Item className="mb-4">
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                loading={loading}
                className="h-12 rounded-lg bg-blue-600 hover:bg-blue-700 border-0 font-medium"
              >
                Đăng ký
              </Button>
            </Form.Item>

            <div className="text-center">
              <Text type="secondary">
                Đã có tài khoản?{' '}
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Đăng nhập ngay
                </Link>
              </Text>
            </div>
          </Form>

          <Divider className="my-8">
            <Text type="secondary" className="text-sm">
              Hoặc đăng ký với
            </Text>
          </Divider>

          {/* Social Login */}
          <Space direction="vertical" size="middle" className="w-full">
            <Button
              block
              size="large"
              icon={
                <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
              }
              className="h-12 rounded-lg hover:border-red-500 hover:text-red-500"
            >
              Đăng ký với Google
            </Button>
            <Button
              block
              size="large"
              icon={
                <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
              }
              className="h-12 rounded-lg hover:border-blue-600 hover:text-blue-600"
            >
              Đăng ký với Facebook
            </Button>
          </Space>

          {/* Terms */}
          <div className="mt-8 text-center">
            <Text type="secondary" className="text-xs">
              Bằng việc đăng ký, bạn đã đồng ý với{' '}
              <Link to="/terms" className="text-blue-600 hover:text-blue-700">
                Điều khoản dịch vụ
              </Link>{' '}
              và{' '}
              <Link to="/privacy" className="text-blue-600 hover:text-blue-700">
                Chính sách bảo mật
              </Link>
            </Text>
          </div>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center">
          <Text type="secondary" className="text-sm">
            © 2024 Shop Của Bạn. Tất cả quyền được bảo lưu.
          </Text>
        </div>
      </div>
    </div>
  )
}
