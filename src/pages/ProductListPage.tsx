import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { fetchProducts } from '../api/products'
import ProductCard from '../components/ProductCard'
import FilterSidebar from '../components/FilterSidebar'

export default function ProductListPage() {
  const [params, setParams] = useSearchParams()
  const { data } = useQuery({
    queryKey: ['products', params.toString()],
    queryFn: () => fetchProducts(Object.fromEntries(params)),
  })

  return (
    <div className="flex gap-8">
      <FilterSidebar />
      <div className="grid grid-cols-4 gap-6">
        {data?.items.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
