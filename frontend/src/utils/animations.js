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

  // Create Intersection Observer if not already created
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use requestAnimationFrame to execute visual updates smoothly
            requestAnimationFrame(() => {
              entry.target.classList.add('animate-in')
            })
            // Unobserve after animation to prevent re-triggering
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 50px 0px' // Pre-load slightly before entering viewport
      }
    )
  }

  // Observe all elements with scroll-reveal class
  const elements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-stagger')
  elements.forEach((el) => {
    // Native IntersectionObserver automatically triggers on initial check, no getBoundingClientRect needed!
    observer.observe(el)
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
    observer.observe(element)
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
      requestAnimationFrame(() => {
        el.classList.add('animate-in')
      })
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
