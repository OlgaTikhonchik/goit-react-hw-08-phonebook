import { NavLink } from 'react-router-dom';
import MUI from 'components/MUI';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';

export const AuthNav = () => {
  return (
    // <div>
    <MUI.Toolbar>
      <NavLink to="/register">
        {' '}
        <MUI.Button
          startIcon={<HowToRegIcon />}
          sx={{ color: 'white', margin: '10px' }}
          variant="outlined"
        >
          Register
        </MUI.Button>
      </NavLink>
      <NavLink to="/login">
        <MUI.Button
          startIcon={<LoginIcon />}
          sx={{ color: 'white' }}
          variant="outlined"
        >
          Log In
        </MUI.Button>
      </NavLink>
    </MUI.Toolbar>
    // </div>
  );
};
