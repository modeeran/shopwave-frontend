import { useEffect, useState } from 'react'

const FLAGS: Record<string, boolean> = {
  'new-homepage-hero': false,
  'checkout-v2': false,
  'reviews-photos': false,
}

export function useFeatureFlag(flag: string, defaultValue = false): boolean {
  const [enabled, setEnabled] = useState(defaultValue)

  useEffect(() => {
    // In production this fetches from a flag service (e.g. GrowthBook)
    const override = localStorage.getItem(`flag:${flag}`)
    if (override !== null) {
      setEnabled(override === 'true')
    } else {
      setEnabled(FLAGS[flag] ?? defaultValue)
    }
  }, [flag, defaultValue])

  return enabled
}
