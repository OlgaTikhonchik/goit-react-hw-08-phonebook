import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectRefreshing,
  selectUser,
} from 'redux/auth/selectorsAuth';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
