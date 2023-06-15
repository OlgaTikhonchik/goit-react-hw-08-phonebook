import { NavLink } from 'react-router-dom';
const { useSelector } = require('react-redux');
const { selectIsLoggedIn } = require('redux/auth/selectorsAuth');

export const Navigation = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      {IsLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
