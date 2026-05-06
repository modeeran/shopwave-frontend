import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  image?: string
  type?: string
}

export function useSEO({ title, description, image, type = 'website' }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | ShopWave`
    setMeta('description', description)
    setMeta('og:title', title)
    setMeta('og:description', description)
    setMeta('og:type', type)
    if (image) setMeta('og:image', image)
  }, [title, description, image, type])
}

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`) as HTMLMetaElement
  if (!el) {
    el = document.createElement('meta')
    const attr = name.startsWith('og:') ? 'property' : 'name'
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.content = content
}
