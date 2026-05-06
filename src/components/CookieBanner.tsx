import { useState, useEffect } from 'react'

type ConsentState = { analytics: boolean; marketing: boolean }

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [consent, setConsent] = useState<ConsentState>({ analytics: false, marketing: false })

  useEffect(() => {
    const stored = localStorage.getItem('cookie_consent')
    if (!stored) setVisible(true)
  }, [])

  const acceptAll = () => {
    const all = { analytics: true, marketing: true }
    localStorage.setItem('cookie_consent', JSON.stringify(all))
    setConsent(all)
    setVisible(false)
  }

  const acceptEssential = () => {
    const essential = { analytics: false, marketing: false }
    localStorage.setItem('cookie_consent', JSON.stringify(essential))
    setConsent(essential)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white shadow-lg p-4">
      <p>We use cookies to improve your experience.</p>
      <button onClick={acceptAll}>Accept All</button>
      <button onClick={acceptEssential}>Essential Only</button>
    </div>
  )
}
