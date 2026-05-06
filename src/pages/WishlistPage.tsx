import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchWishlist, removeFromWishlist, moveToCart } from '../api/wishlist'

export default function WishlistPage() {
  const queryClient = useQueryClient()
  const { data: items } = useQuery({ queryKey: ['wishlist'], queryFn: fetchWishlist })
  const remove = useMutation({ mutationFn: removeFromWishlist,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['wishlist'] }) })
  const move = useMutation({ mutationFn: moveToCart,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['wishlist', 'cart'] }) })

  return (
    <div>
      <h1>My Wishlist ({items?.length ?? 0} items)</h1>
      {items?.map(item => (
        <div key={item.id}>
          <span>{item.product.name}</span>
          <button onClick={() => move.mutate(item.id)}>Move to Cart</button>
          <button onClick={() => remove.mutate(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}
