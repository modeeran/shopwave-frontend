import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchReviews, submitReview } from '../api/reviews'
import StarRating from './StarRating'
import ReviewCard from './ReviewCard'

interface Props { productId: string }

export default function ReviewSection({ productId }: Props) {
  const queryClient = useQueryClient()
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const { data } = useQuery({ queryKey: ['reviews', productId], queryFn: () => fetchReviews(productId) })
  const submit = useMutation({ mutationFn: submitReview,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['reviews', productId] }) })

  return (
    <section>
      <h2>Customer Reviews</h2>
      <StarRating value={rating} onChange={setRating} />
      <textarea value={comment} onChange={e => setComment(e.target.value)} />
      <button onClick={() => submit.mutate({ productId, rating, comment })}>Submit Review</button>
      {data?.reviews.map(r => <ReviewCard key={r.id} review={r} />)}
    </section>
  )
}
