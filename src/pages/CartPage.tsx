import { useCartStore } from '../store/cartStore'
import CartItem from '../components/CartItem'
import OrderSummary from '../components/OrderSummary'
import { Link } from 'react-router-dom'

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore()

  if (items.length === 0) {
    return (
      <div>
        <p>Your cart is empty</p>
        <Link to="/">Continue Shopping</Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        {items.map(item => (
          <CartItem key={item.id} item={item}
            onRemove={() => removeItem(item.id)}
            onQuantityChange={(q) => updateQuantity(item.id, q)} />
        ))}
      </div>
      <OrderSummary items={items} />
    </div>
  )
}
