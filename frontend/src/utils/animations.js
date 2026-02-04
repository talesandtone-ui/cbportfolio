// Animation Utilities for Buildlabs
// Performance-optimized, accessible animations

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Intersection Observer for scroll animations
let observer = null

/**
 * Initialize scroll reveal animations
 */
export const initScrollReveal = () => {
  if (prefersReducedMotion) {
    // If reduced motion, show all elements immediately
    document.querySelectorAll('.scroll-reveal, .scroll-reveal-stagger').forEach((el) => {
      el.classList.add('animate-in')
    })
    return
  }

  // Create Intersection Observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          // Unobserve after animation to prevent re-triggering
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.05,
      rootMargin: '0px 0px 0px 0px'
    }
  )

  // Observe all elements with scroll-reveal class
  const elements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-stagger')
  elements.forEach((el) => {
    // Check if element is already in viewport
    const rect = el.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0

    if (isVisible) {
      // If already visible, animate immediately
      el.classList.add('animate-in')
    } else {
      // Otherwise, observe for when it enters viewport
      observer.observe(el)
    }
  })
}

/**
 * Re-initialize scroll reveal for dynamically added elements
 */
export const observeElement = (element) => {
  if (prefersReducedMotion) {
    element.classList.add('animate-in')
    return
  }

  if (!observer) {
    initScrollReveal()
    return
  }

  if (element.classList.contains('scroll-reveal') || element.classList.contains('scroll-reveal-stagger')) {
    // Check if already visible
    const rect = element.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0

    if (isVisible) {
      element.classList.add('animate-in')
    } else {
      observer.observe(element)
    }
  }
}

/**
 * Stagger animation for multiple elements
 */
export const staggerAnimation = (elements, delay = 100) => {
  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add('animate-in'))
    return
  }

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('animate-in')
    }, index * delay)
  })
}

/**
 * Smooth scroll to element
 */
export const smoothScrollTo = (element, offset = 0) => {
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}

/**
 * Shake animation for errors
 */
export const shakeElement = (element) => {
  if (prefersReducedMotion) return

  element.classList.add('shake')
  setTimeout(() => {
    element.classList.remove('shake')
  }, 500)
}

/**
 * Highlight animation for new items
 */
export const highlightElement = (element) => {
  if (prefersReducedMotion) return

  element.classList.add('highlight')
  setTimeout(() => {
    element.classList.remove('highlight')
  }, 2000)
}

/**
 * Initialize all animations on page load
 */
export const initAnimations = () => {
  // Small delay to ensure DOM is ready
  setTimeout(() => {
    initScrollReveal()
  }, 100)

  // Re-observe elements when new content is added
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          // Check if node has scroll-reveal class
          if (node.classList?.contains('scroll-reveal') || node.classList?.contains('scroll-reveal-stagger')) {
            observeElement(node)
          }
          // Check children
          node.querySelectorAll?.('.scroll-reveal, .scroll-reveal-stagger').forEach(observeElement)
        }
      })
    })
  })

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  })
}

// Re-initialize on route changes (for React Router)
export const reinitAnimations = () => {
  setTimeout(() => {
    initScrollReveal()
  }, 150)
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations)
} else {
  initAnimations()
}

