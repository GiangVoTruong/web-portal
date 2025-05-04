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
} from '@fortawesome/free-solid-svg-icons'
import { PagePath } from '@/enums/pageEnum'

const PublicHeader: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const lastScrollY = useRef<number>(0)
  const cartItemCount = 2 // Giả sử có 2 sản phẩm trong giỏ hàng

  // Xử lý sự kiện cuộn trang với throttling để tối ưu hiệu suất
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Chỉ xử lý nếu đã cuộn ít nhất 5px để tránh update quá thường xuyên
      if (Math.abs(currentScrollY - lastScrollY.current) < 5) return

      if (currentScrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      lastScrollY.current = currentScrollY
    }

    // Sử dụng passive: true để cải thiện hiệu suất
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // Xử lý tìm kiếm
    console.log('Searching for:', searchQuery)
  }

  const toggleMobileMenu = (): void => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <header
      className={`w-full bg-white shadow-md transition-all duration-300 ease-out ${
        isScrolled ? 'fixed top-0 left-0 z-50 animate-slideDown' : ''
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
        <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
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
          <Link to="/account" className="p-2 rounded-full hover:bg-gray-100">
            <FontAwesomeIcon icon={faUser} className="text-gray-700 text-lg" />
          </Link>
          <Link to="/wishlist" className="p-2 rounded-full hover:bg-gray-100">
            <FontAwesomeIcon icon={faHeart} className="text-gray-700 text-lg" />
          </Link>
          <Link
            to="/cart"
            className="p-2 rounded-full hover:bg-gray-100 relative"
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
              <Link to="/" className=" font-medium text-lg relative group">
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
                to="/promotions"
                className="text-black font-medium text-lg hover:text-blue-500 relative group"
              >
                <span className="text-black">Khuyến Mãi</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/trending"
                className="text-black font-medium text-lg hover:text-blue-500 relative group"
              >
                <span className="text-black">Xu Hướng</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/brands"
                className="text-black font-medium text-lg hover:text-blue-500 relative group"
              >
                <span className="text-black">Thương Hiệu</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/new"
                className="text-black font-medium text-lg hover:text-blue-500 relative group"
              >
                <span className="text-black">Mới Nhất</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
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
                to="/products"
                className="block text-black font-medium text-lg hover:text-blue-500 text-center py-2 relative group"
                onClick={toggleMobileMenu}
              >
                Sản Phẩm
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/promotions"
                className="block text-black font-medium text-lg hover:text-blue-500 text-center py-2 relative group"
                onClick={toggleMobileMenu}
              >
                Khuyến Mãi
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/trending"
                className="block text-black font-medium text-lg hover:text-blue-500 text-center py-2 relative group"
                onClick={toggleMobileMenu}
              >
                Xu Hướng
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/brands"
                className="block text-black font-medium text-lg hover:text-blue-500 text-center py-2 relative group"
                onClick={toggleMobileMenu}
              >
                Thương Hiệu
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/new"
                className="block text-black font-medium text-lg hover:text-blue-500 text-center py-2 relative group"
                onClick={toggleMobileMenu}
              >
                Mới Nhất
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
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
              to="/account"
              className="flex flex-col items-center text-gray-700"
            >
              <FontAwesomeIcon icon={faUser} className="text-lg mb-1" />
              <span className="text-sm">Tài khoản</span>
            </Link>
            <Link
              to="/wishlist"
              className="flex flex-col items-center text-gray-700"
            >
              <FontAwesomeIcon icon={faHeart} className="text-lg mb-1" />
              <span className="text-sm">Yêu thích</span>
            </Link>
            <Link
              to="/cart"
              className="flex flex-col items-center text-gray-700 relative"
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
  )
}

export default PublicHeader
