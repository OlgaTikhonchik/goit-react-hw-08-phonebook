import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operationsAuth';
import MUI from 'components/MUI';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <MUI.Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        <MUI.Box>
          <p>Welcome, {user.name}</p>
        </MUI.Box>
        <MUI.Button
          startIcon={<LogoutIcon />}
          variant="contained"
          color="secondary"
          sx={{ height: 'max-content' }}
          type="button"
          onClick={() => dispatch(logOut())}
        >
          LogOut
        </MUI.Button>
      </MUI.Box>
    </div>
  );
};
