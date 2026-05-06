import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import PageSkeleton from '../components/PageSkeleton'

const HomePage            = lazy(() => import('../pages/HomePage'))
const ProductListPage     = lazy(() => import('../pages/ProductListPage'))
const ProductDetailPage   = lazy(() => import('../pages/ProductDetailPage'))
const CartPage            = lazy(() => import('../pages/CartPage'))
const AccountDashboardPage = lazy(() => import('../pages/AccountDashboardPage'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/products"  element={<ProductListPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/cart"      element={<CartPage />} />
        <Route path="/account/*" element={<AccountDashboardPage />} />
      </Routes>
    </Suspense>
  )
}
