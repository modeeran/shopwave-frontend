import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchOrderTracking } from '../api/orders'
import TrackingTimeline from '../components/TrackingTimeline'
import DeliveryMap from '../components/DeliveryMap'

export default function OrderTrackingPage() {
  const { orderId } = useParams<{ orderId: string }>()
  const { data } = useQuery({
    queryKey: ['tracking', orderId],
    queryFn: () => fetchOrderTracking(orderId!),
    refetchInterval: 60_000,
  })

  return (
    <div>
      <h1>Track Your Order</h1>
      <TrackingTimeline events={data?.events ?? []} />
      {data?.estimated_delivery && (
        <p>Estimated delivery: {data.estimated_delivery}</p>
      )}
    </div>
  )
}
