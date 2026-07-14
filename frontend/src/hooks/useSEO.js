import { useEffect } from 'react'

/**
 * Custom React hook to dynamically manage page-level SEO metadata.
 * 
 * @param {Object} seoOptions - The SEO metadata options.
 * @param {string} seoOptions.title - The title of the page (will append " | Buildlabs Digital").
 * @param {string} seoOptions.description - The meta description for search engines.
 * @param {string} [seoOptions.keywords] - Optional comma-separated keywords.
 * @param {string} [seoOptions.canonicalPath] - The path for the canonical URL (e.g. "/services").
 * @param {boolean} [seoOptions.noIndex=false] - Whether to exclude this page from Google indexation.
 */
const useSEO = ({
  title,
  description,
  keywords,
  canonicalPath = '',
  noIndex = false
}) => {
  useEffect(() => {
    // 1. Update Document Title
    const baseTitle = 'Buildlabs Digital'
    document.title = title ? `${title} | ${baseTitle}` : baseTitle

    // Helper function to set or create meta tag
    const setMetaTag = (nameAttr, nameValue, contentValue) => {
      if (!contentValue) return
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`)
      if (element) {
        element.setAttribute('content', contentValue)
      } else {
        element = document.createElement('meta')
        element.setAttribute(nameAttr, nameValue)
        element.setAttribute('content', contentValue)
        document.head.appendChild(element)
      }
    }

    // Helper function to set or create link tag
    const setLinkTag = (rel, hrefValue) => {
      if (!hrefValue) return
      let element = document.querySelector(`link[rel="${rel}"]`)
      if (element) {
        element.setAttribute('href', hrefValue)
      } else {
        element = document.createElement('link')
        element.setAttribute('rel', rel)
        element.setAttribute('href', hrefValue)
        document.head.appendChild(element)
      }
    }

    // 2. Update Meta Description
    setMetaTag('name', 'description', description)

    // 3. Update Meta Keywords
    if (keywords) {
      setMetaTag('name', 'keywords', keywords)
    }

    // 4. Update Robots (indexing/noindexing)
    const robotsValue = noIndex ? 'noindex, nofollow' : 'index, follow'
    setMetaTag('name', 'robots', robotsValue)

    // 5. Update Canonical URL
    const baseUrl = 'https://buildlabs.in'
    const fullCanonicalUrl = canonicalPath ? `${baseUrl}${canonicalPath}` : baseUrl
    setLinkTag('canonical', fullCanonicalUrl)

    // 6. Update Open Graph (OG) tags
    setMetaTag('property', 'og:title', title ? `${title} | ${baseTitle}` : baseTitle)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', fullCanonicalUrl)

    // 7. Update Twitter tags
    setMetaTag('property', 'twitter:title', title ? `${title} | ${baseTitle}` : baseTitle)
    setMetaTag('property', 'twitter:description', description)
    setMetaTag('property', 'twitter:url', fullCanonicalUrl)

  }, [title, description, keywords, canonicalPath, noIndex])
}

export default useSEO
