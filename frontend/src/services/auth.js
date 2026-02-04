// JWT Authentication Service
// In production, this would connect to a real backend API

const TOKEN_KEY = 'admin_token'
const ADMIN_CREDENTIALS = {
  email: 'admin@buildlabs.in',
  password: 'admin123' // Change this in production!
}

// Simple JWT-like token generation (for demo purposes)
// In production, use a proper JWT library or backend API
const generateToken = (email) => {
  const payload = {
    email,
    role: 'admin',
    iat: Date.now(),
    exp: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
  }
  // Simple base64 encoding (not secure, use proper JWT in production)
  return btoa(JSON.stringify(payload))
}

const decodeToken = (token) => {
  try {
    const payload = JSON.parse(atob(token))
    // Check if token is expired
    if (payload.exp && payload.exp < Date.now()) {
      return null
    }
    return payload
  } catch (error) {
    return null
  }
}

export const authService = {
  login: async (email, password) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500))

    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      const token = generateToken(email)
      localStorage.setItem(TOKEN_KEY, token)
      return { success: true, token }
    }
    return { success: false, error: 'Invalid email or password' }
  },

  logout: () => {
    localStorage.removeItem(TOKEN_KEY)
  },

  getToken: () => {
    return localStorage.getItem(TOKEN_KEY)
  },

  isAuthenticated: () => {
    const token = localStorage.getItem(TOKEN_KEY)
    if (!token) return false

    const payload = decodeToken(token)
    return payload !== null
  },

  getCurrentUser: () => {
    const token = localStorage.getItem(TOKEN_KEY)
    if (!token) return null

    const payload = decodeToken(token)
    return payload
  }
}

