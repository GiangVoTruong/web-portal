// src/enums/pageEnum.ts
export enum PageKey {
  // Accounts
  Accounts = 'accounts',
  AccountsCategory = 'accounts-category',
  RolesCategory = 'roles-category',
  CreateRole = 'create-role',
  UpdateRole = 'update-role',
  ViewRole = 'view-role',

  // Products
  Products = 'products',
  ViewProduct = 'view-product',

  //Cart
  Cart = 'cart',

  //About
  About = 'about',

  //profile
  Profile = 'profile',

  //Brand
  Brand = 'brand',

  //Checkout
  Checkout = 'checkout',

  //Contact
  Contact = 'contact',

  //Login
  Login = 'login',

  //NewArrivals
  NewArrivals = 'new-arrivals',

  //NotFound
  NotFound = 'not-found',

  //Promotion
  Promotion = 'promotion',

  //Register
  Register = 'register',

  //Trending
  Trending = 'trending',

  //Wishlist
  Wishlist = 'wishlist',
}

export enum PagePath {
  // Accounts
  Accounts = '/account',

  //profile
  Profile = '/account/profile',

  // Products
  Products = '/products',
  ViewProduct = '/products/products-category/view/:id',

  //Cart
  Cart = '/cart',

  //About
  About = '/about',

  //Brand
  Brand = '/brands',

  //Checkout
  Checkout = '/checkout',

  //Contact
  Contact = '/contact',

  //Login
  Login = '/login',

  //NewArrivals
  NewArrivals = '/new-arrivals',

  //NotFound
  NotFound = '/not-found',

  //Promotion
  Promotion = '/promotions',

  //Register
  Register = '/register',

  //Trending
  Trending = '/trending',

  //Wishlist
  Wishlist = '/wishlist',
}

export enum PageName {
  // Accounts
  Accounts = 'Tài khoản',
  AccountsCategory = 'Danh mục tài khoản',
  RolesCategory = 'Danh mục vai trò',
  CreateRole = 'Tạo vai trò mới',
  UpdateRole = 'Cập nhật vai trò',
  ViewRole = 'Chi tiết vai trò',

  // Products
  Products = 'Sản phẩm',
  ProductsCategory = 'Danh mục sản phẩm',
  ProductsBrand = 'Thương hiệu',
  ProductsInventory = 'Kho hàng',
  CreateProduct = 'Thêm sản phẩm mới',
  UpdateProduct = 'Cập nhật sản phẩm',
  ViewProduct = 'Chi tiết sản phẩm',

  //Cart
  Cart = 'Giỏ hàng',

  //About
  About = 'Giới thiệu',

  //profile
  Profile = 'Hồ sơ',

  //Brand
  Brand = 'Thương hiệu',

  //Checkout
  Checkout = 'Thanh toán',

  //Contact
  Contact = 'Liên hệ',

  //Login
  Login = 'Đăng nhập',

  //NewArrivals
  NewArrivals = 'Sản phẩm mới',

  //NotFound
  NotFound = 'Không tìm thấy',

  //Promotion
  Promotion = 'Khuyến mãi',

  //Register
  Register = 'Đăng ký',

  //Trending
  Trending = 'Xu hướng',

  //Wishlist
  Wishlist = 'Sản phẩm yêu thích',
}
