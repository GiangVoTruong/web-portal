# E-Commerce Website Project

This project is a modern e-commerce website built with React, TypeScript, Ant Design, and Tailwind CSS. It features a responsive design that works well on both desktop and mobile devices.

## Project Structure

```
src/
├── assets/
│   └── styles/
│       ├── app.scss
│       └── index.css
├── components/
│   ├── common/
│   │   └── LoadingPage.tsx
│   └── home/
│       ├── CategorySection.tsx
│       ├── FeaturedProducts.tsx
│       └── SpecialOffersBanner.tsx
├── config/
│   ├── AppConfig.tsx
│   └── queryClient.ts
├── enums/
│   ├── layoutEnum.ts
│   └── roleEnum.ts
├── layouts/
│   └── public/
│       ├── PublicFooter.tsx
│       ├── PublicHeader.tsx
│       └── PublicLayout.tsx
├── pages/
│   ├── AccountPage.tsx
│   ├── BrandsPage.tsx
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   ├── ContactPage.tsx
│   ├── HomePage.tsx
│   ├── NewArrivalsPage.tsx
│   ├── NotFoundPage.tsx
│   ├── ProductDetailPage.tsx
│   ├── ProductsPage.tsx
│   ├── PromotionsPage.tsx
│   ├── TrendingPage.tsx
│   └── WishlistPage.tsx
├── routes/
│   ├── AppRoutes.tsx
│   └── types.ts
├── App.tsx
└── main.tsx
```

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop
- **Product Catalog**: Browse products by category, brand, or featured items
- **Product Details**: View detailed product information and specifications
- **Shopping Cart**: Add products to cart and manage cart items
- **Checkout Process**: Multi-step checkout with shipping and payment options
- **User Account**: View orders, manage wishlist, addresses and account settings
- **Product Search**: Search functionality with filters
- **Promotions**: View current promotions and special offers

## Technologies Used

- **React 18**: For building the user interface
- **TypeScript**: For type-safe code
- **React Router v6**: For routing and navigation
- **Ant Design**: For UI components
- **Tailwind CSS**: For custom styling and responsive design
- **React Query**: For data fetching and state management
- **FontAwesome**: For icons

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ecommerce-website.git
   cd ecommerce-website
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

This will create a `dist` folder with optimized production build.

## Project Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme by modifying the `tailwind.config.js` file.

### Adding New Pages

1. Create a new page component in the `pages` directory
2. Add the route to the page in `routes/AppRoutes.tsx`

### Adding New Components

Create reusable components in the `components` directory, organized by feature or page.

## Future Enhancements

- Implement user authentication
- Add multi-language support
- Integrate with a payment gateway
- Implement product reviews and ratings
- Add product comparison feature
- Implement wishlist functionality
- Add social sharing options

## License

This project is licensed under the MIT License - see the LICENSE file for details.
