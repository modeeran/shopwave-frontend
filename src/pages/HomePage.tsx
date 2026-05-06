import { useQuery } from '@tanstack/react-query'
import { fetchFeaturedProducts } from '../api/products'

export default function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ['featured-products'],
    queryFn: fetchFeaturedProducts,
  })

  return (
    <main>
      <section className="hero">
        <h1>Welcome to ShopWave</h1>
        <p>Discover thousands of products</p>
      </section>
      <section className="featured-products">
        {isLoading ? <p>Loading...</p> : data?.map(p => (
          <div key={p.id}>{p.name}</div>
        ))}
      </section>
    </main>
  )
}
