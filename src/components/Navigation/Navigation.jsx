import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import MUI from 'components/MUI';
import HomeIcon from '@mui/icons-material/Home';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    // <nav>

    <MUI.Toolbar>
      <MUI.Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: 'none', sm: 'block' },
          fontWeight: 700,
        }}
      >
        PHONEBOOK
      </MUI.Typography>

      <NavLink to="/">
        <MUI.Button
          startIcon={<HomeIcon />}
          sx={{ color: 'white', margin: '10px' }}
          variant="outlined"
        >
          Home
        </MUI.Button>
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts">
          <MUI.Button
            startIcon={<RecentActorsIcon />}
            sx={{ color: 'white' }}
            variant="outlined"
          >
            Contacts
          </MUI.Button>
        </NavLink>
      )}
    </MUI.Toolbar>
    /* </nav> */
  );
};
