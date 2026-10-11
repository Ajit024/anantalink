import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { metadataFor } from '../seo'

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export default function RouteMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = metadataFor(pathname)
    document.title = page.title
    setMeta('name', 'description', page.description)
    setMeta('name', 'robots', 'index, follow, max-image-preview:large')
    setMeta('property', 'og:title', page.title)
    setMeta('property', 'og:description', page.description)
    setMeta('property', 'og:url', page.url)
    setMeta('property', 'og:image', page.image)
    setMeta('name', 'twitter:title', page.title)
    setMeta('name', 'twitter:description', page.description)
    setMeta('name', 'twitter:image', page.image)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = page.url
  }, [pathname])

  return null
}
