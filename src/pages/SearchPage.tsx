import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { searchProducts } from '../api/search'
import SearchAutocomplete from '../components/SearchAutocomplete'

export default function SearchPage() {
  const [params] = useSearchParams()
  const q = params.get('q') ?? ''

  const { data, isLoading } = useQuery({
    queryKey: ['search', q],
    queryFn: () => searchProducts(q),
    enabled: q.length > 0,
  })

  return (
    <div>
      <SearchAutocomplete />
      {isLoading && <p>Searching...</p>}
      {data?.results.length === 0 && <p>No results for "{q}"</p>}
    </div>
  )
}
