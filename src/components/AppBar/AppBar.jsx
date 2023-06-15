import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <userMenu /> : <AuthNav />}
    </header>
  );
};
