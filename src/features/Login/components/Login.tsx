import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Input, Button, Checkbox, message, Card } from 'antd'
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  AppleFilled,
  FacebookFilled,
} from '@ant-design/icons'

export default function Login() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      message.success('Đăng nhập thành công!')
      navigate('/')
    } catch (error) {
      message.error('Đăng nhập thất bại!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image/Brand */}
      <div className="hidden lg:flex lg:w-1/2 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        <div className="relative z-10 flex items-center justify-center w-full">
          <div className="text-center text-white p-12">
            <h1 className="text-6xl font-bold mb-6">LOGO</h1>
            <p className="text-2xl font-light">Khám phá thế giới công nghệ</p>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <Card className="shadow-lg border-0" bodyStyle={{ padding: '2rem' }}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Chào mừng trở lại
              </h2>
              <p className="mt-2 text-gray-600">Đăng nhập để tiếp tục</p>
            </div>

            <Form
              form={form}
              onFinish={onFinish}
              layout="vertical"
              size="large"
              className="space-y-6"
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Vui lòng nhập email' },
                  { type: 'email', message: 'Email không hợp lệ' },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="text-gray-400" />}
                  placeholder="Email"
                  className="h-12"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
              >
                <Input.Password
                  prefix={<LockOutlined className="text-gray-400" />}
                  placeholder="Mật khẩu"
                  className="h-12"
                />
              </Form.Item>

              <div className="flex items-center justify-between">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                </Form.Item>
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:text-blue-500"
                >
                  Quên mật khẩu?
                </Link>
              </div>

              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                className="h-12 bg-black hover:bg-gray-800 border-black"
              >
                Đăng nhập
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Hoặc tiếp tục với
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Button
                  icon={<GoogleOutlined />}
                  className="h-12"
                  onClick={() => message.info('Đăng nhập với Google')}
                >
                  Google
                </Button>
                <Button
                  icon={<FacebookFilled />}
                  className="h-12"
                  onClick={() => message.info('Đăng nhập với Facebook')}
                >
                  Facebook
                </Button>
                <Button
                  icon={<AppleFilled />}
                  className="h-12"
                  onClick={() => message.info('Đăng nhập với Apple')}
                >
                  Apple
                </Button>
              </div>
            </Form>

            <p className="text-center text-sm text-gray-600 mt-6">
              Chưa có tài khoản?{' '}
              <Link
                to="/register"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Đăng ký ngay
              </Link>
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
