import { Navigate } from 'react-router-dom'
import { firebaseAuthService } from '../services/firebaseAuth'

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = firebaseAuthService.isAuthenticated()

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}

export default ProtectedRoute

