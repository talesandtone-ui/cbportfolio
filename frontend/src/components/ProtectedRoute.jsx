import { Navigate } from 'react-router-dom'
import { firebaseAuthService } from '../services/firebaseAuth'

const ProtectedRoute = ({ children }) => {
  const user = firebaseAuthService.getCurrentUser()
  const isAuthenticated = firebaseAuthService.isAuthenticated()

  // Strict check: Must be authenticated AND have admin role
  if (!isAuthenticated || !user || user.role !== 'admin') {
    console.warn('Unauthorized access attempt to admin dashboard');
    return <Navigate to="/admin/login" replace />
  }

  return children
}

export default ProtectedRoute

