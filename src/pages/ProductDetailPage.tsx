import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchProduct } from '../api/products'
import ImageGallery from '../components/ImageGallery'
import VariantPicker from '../components/VariantPicker'
import AddToCartButton from '../components/AddToCartButton'

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { data: product } = useQuery({
    queryKey: ['product', slug],
    queryFn: () => fetchProduct(slug!),
  })

  if (!product) return <p>Loading...</p>

  return (
    <div className="grid grid-cols-2 gap-12">
      <ImageGallery images={product.images} />
      <div>
        <h1>{product.name}</h1>
        <VariantPicker variants={product.variants} />
        <AddToCartButton productId={product.id} />
      </div>
    </div>
  )
}
