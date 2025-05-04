import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faHeart,
  faShoppingCart,
  faSearch,
  faBars,
  faTimes,
  faBell,
  faCheckCircle,
  faShippingFast,
  faPercentage,
  faGift,
} from '@fortawesome/free-solid-svg-icons'
import { PagePath } from '@/enums/pageEnum'

interface Notification {
  id: string
  type: 'order' | 'promotion' | 'system'
  title: string
  message: string
  time: string
  read: boolean
  icon: any
  color: string
}

const PublicHeader: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [showNotifications, setShowNotifications] = useState<boolean>(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const notificationRef = useRef<HTMLDivElement>(null)
  const cartItemCount = 2

  // Mock notifications data
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'order',
      title: 'Đơn hàng đang được giao',
      message: 'Đơn hàng #123456 của bạn đang trên đường giao.',
      time: '5 phút trước',
      read: false,
      icon: faShippingFast,
      color: 'text-blue-500',
    },
    {
      id: '2',
      type: 'promotion',
      title: 'Giảm giá 50%',
      message: 'Chương trình giảm giá đặc biệt cho thành viên mới!',
      time: '1 giờ trước',
      read: false,
      icon: faPercentage,
      color: 'text-red-500',
    },
    {
      id: '3',
      type: 'system',
      title: 'Xác nhận đơn hàng',
      message: 'Đơn hàng #123455 đã được xác nhận thành công.',
      time: '2 giờ trước',
      read: true,
      icon: faCheckCircle,
      color: 'text-green-500',
    },
    {
      id: '4',
      type: 'promotion',
      title: 'Quà tặng đặc biệt',
      message: 'Nhận ngay voucher 100k cho đơn hàng tiếp theo.',
      time: '1 ngày trước',
      read: true,
      icon: faGift,
      color: 'text-purple-500',
    },
  ])

  const unreadCount = notifications.filter(n => !n.read).length

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  const toggleMobileMenu = (): void => {
    setShowMobileMenu(!showMobileMenu)
  }

  const toggleNotifications = (): void => {
    setShowNotifications(!showNotifications)
  }

  const markAllAsRead = (): void => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  const markAsRead = (id: string): void => {
    setNotifications(
      notifications.map(n => (n.id === id ? { ...n, read: true } : n))
    )
  }

  return (
    <>
      {/* Placeholder to prevent content jump */}
      <div className="h-[136px]" />

      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50 transition-all duration-300 ${
          isScrolled ? 'translate-y-0' : ''
        }`}
      >
        {/* Top header with logo, search, and icons */}
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-blue-500 text-white py-2 px-4 rounded font-bold text-xl">
              LOGO
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon
              icon={showMobileMenu ? faTimes : faBars}
              className="text-xl"
            />
          </button>

          {/* Search bar - hidden on mobile */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex relative w-2/5"
          >
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 rounded-r-full bg-gray-100 text-gray-600"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>

          {/* User icons - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to={PagePath.Accounts}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-gray-700 text-lg"
              />
            </Link>

            {/* Notifications */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={toggleNotifications}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
              >
                <FontAwesomeIcon
                  icon={faBell}
                  className="text-gray-700 text-lg"
                />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">Thông báo</h3>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="text-sm text-blue-500 hover:text-blue-600"
                      >
                        Đánh dấu tất cả đã đọc
                      </button>
                    )}
                  </div>

                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map(notification => (
                        <div
                          key={notification.id}
                          className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                            !notification.read ? 'bg-blue-50' : ''
                          }`}
                          onClick={() => markAsRead(notification.id)}
                        >
                          <div className="flex items-start">
                            <div className={`mr-3 mt-1 ${notification.color}`}>
                              <FontAwesomeIcon icon={notification.icon} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-800">
                                {notification.title}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">
                                {notification.message}
                              </p>
                              <p className="text-xs text-gray-400 mt-1">
                                {notification.time}
                              </p>
                            </div>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        Không có thông báo mới
                      </div>
                    )}
                  </div>

                  <div className="p-2 border-t border-gray-200">
                    <Link
                      to="/notifications"
                      className="block text-center text-sm text-blue-500 hover:text-blue-600 py-2"
                    >
                      Xem tất cả thông báo
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to={PagePath.Wishlist}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FontAwesomeIcon
                icon={faHeart}
                className="text-gray-700 text-lg"
              />
            </Link>
            <Link
              to={PagePath.Cart}
              className="p-2 rounded-full hover:bg-gray-100 relative transition-colors"
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-gray-700 text-lg"
              />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Navigation menu */}
        <nav className="bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            {/* Desktop menu */}
            <ul className="hidden md:flex justify-center space-x-12 py-4">
              <li>
                <Link to="/" className="font-medium text-lg relative group">
                  <span className="text-black">Trang Chủ</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to={PagePath.Products}
                  className="text-black font-medium text-lg hover:text-blue-500 relative group"
                >
                  <span className="text-black">Sản Phẩm</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to={PagePath.Promotion}
                  className="text-black font-medium text-lg hover:text-blue-500 relative group"
                >
                  <span className="text-black">Khuyến Mãi</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to={PagePath.Trending}
                  className="text-black font-medium text-lg hover:text-blue-500 relative group"
                >
                  <span className="text-black">Xu Hướng</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to={PagePath.Brand}
                  className="text-black font-medium text-lg hover:text-blue-500 relative group"
                >
                  <span className="text-black">Thương Hiệu</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to={PagePath.NewArrivals}
                  className="text-black font-medium text-lg hover:text-blue-500 relative group"
                >
                  <span className="text-black">Mới Nhất</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to={PagePath.Contact}
                  className="text-black font-medium text-lg hover:text-blue-500 relative group"
                >
                  <span className="text-black">Liên Hệ</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-white py-4 px-4 border-t border-gray-200">
            {/* Mobile search */}
            <form onSubmit={handleSearchSubmit} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-4 rounded-r-full bg-gray-100 text-gray-600"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </form>

            {/* Mobile menu links */}
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="block text-black font-medium text-lg hover:text-blue-500 text-center py-2 relative group"
                  onClick={toggleMobileMenu}
                >
                  Trang Chủ
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
                </Link>
              </li>
              <li>
                <Link
                  to={PagePath.Products}
                  className="block text-black font-medium text-lg hover:text-blue-500 text-center py-2 relative group"
                  onClick={toggleMobileMenu}
                >
                  Sản Phẩm
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
                </Link>
              </li>
              <li>
                <Link
                  to={PagePath.Promotion}
                  className="block text-black font-medium text-lg hover:text-blue-500 text-center py-2 relative group"
                  onClick={toggleMobileMenu}
                >
                  Khuyến Mãi
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
                </Link>
              </li>
              <li>
                <Link
                  to={PagePath.Trending}
                  className="block text-black font-medium text-lg hover:text-blue-500 text-center py-2 relative group"
                  onClick={toggleMobileMenu}
                >
                  Xu Hướng
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
                </Link>
              </li>
              <li>
                <Link
                  to={PagePath.Brand}
                  className="block text-black font-medium text-lg hover:text-blue-500 text-center py-2 relative group"
                  onClick={toggleMobileMenu}
                >
                  Thương Hiệu
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
                </Link>
              </li>
              <li>
                <Link
                  to={PagePath.NewArrivals}
                  className="block text-black font-medium text-lg hover:text-blue-500 text-center py-2 relative group"
                  onClick={toggleMobileMenu}
                >
                  Mới Nhất
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
                </Link>
              </li>
              <li>
                <Link
                  to={PagePath.Contact}
                  className="block text-black font-medium text-lg hover:text-blue-500 text-center py-2 relative group"
                  onClick={toggleMobileMenu}
                >
                  Liên Hệ
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
                </Link>
              </li>
            </ul>

            {/* Mobile user icons */}
            <div className="flex items-center justify-around mt-6 pt-6 border-t border-gray-200">
              <Link
                to={PagePath.Accounts}
                className="flex flex-col items-center text-gray-700"
                onClick={toggleMobileMenu}
              >
                <FontAwesomeIcon icon={faUser} className="text-lg mb-1" />
                <span className="text-sm">Tài khoản</span>
              </Link>
              <div
                className="flex flex-col items-center text-gray-700 cursor-pointer relative"
                onClick={() => {
                  toggleNotifications()
                  toggleMobileMenu()
                }}
              >
                <FontAwesomeIcon icon={faBell} className="text-lg mb-1" />
                <span className="text-sm">Thông báo</span>
                {unreadCount > 0 && (
                  <span className="absolute -top-1 right-1 bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full text-xs">
                    {unreadCount}
                  </span>
                )}
              </div>
              <Link
                to={PagePath.Wishlist}
                className="flex flex-col items-center text-gray-700"
                onClick={toggleMobileMenu}
              >
                <FontAwesomeIcon icon={faHeart} className="text-lg mb-1" />
                <span className="text-sm">Yêu thích</span>
              </Link>
              <Link
                to={PagePath.Cart}
                className="flex flex-col items-center text-gray-700 relative"
                onClick={toggleMobileMenu}
              >
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-lg mb-1"
                  />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
                      {cartItemCount}
                    </span>
                  )}
                </div>
                <span className="text-sm">Giỏ hàng</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default PublicHeader
