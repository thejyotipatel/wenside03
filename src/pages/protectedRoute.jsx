import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const user = ''
  if (!user) {
    return <Navigate to={'/login'} />
  }
  return children
}

export default ProtectedRoute
