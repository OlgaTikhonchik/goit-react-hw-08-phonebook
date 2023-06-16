import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  console.log(isLoggedIn);
  console.log(isRefreshing);
  console.log(shouldRedirect);
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
