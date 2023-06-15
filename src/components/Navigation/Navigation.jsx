import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { IsLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      {IsLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
