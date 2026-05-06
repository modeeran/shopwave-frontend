import { Routes, Route, NavLink } from 'react-router-dom'
import OrdersTab from '../components/account/OrdersTab'
import AddressesTab from '../components/account/AddressesTab'
import ProfileTab from '../components/account/ProfileTab'

export default function AccountDashboardPage() {
  const navItems = [
    { to: 'orders', label: 'Orders' },
    { to: 'addresses', label: 'Addresses' },
    { to: 'profile', label: 'Profile' },
  ]

  return (
    <div className="flex gap-8">
      <nav className="w-48">
        {navItems.map(({ to, label }) => (
          <NavLink key={to} to={to} className="block py-2">{label}</NavLink>
        ))}
      </nav>
      <div className="flex-1">
        <Routes>
          <Route path="orders" element={<OrdersTab />} />
          <Route path="addresses" element={<AddressesTab />} />
          <Route path="profile" element={<ProfileTab />} />
        </Routes>
      </div>
    </div>
  )
}
