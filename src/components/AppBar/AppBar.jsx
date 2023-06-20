import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import MUI from 'components/MUI';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MUI.AppBar position="static">
      <header style={{ backgroundColor: '#bba095' }}>
        <MUI.Container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 700,
            // backgroundColor: 'SaddleBrown',
            color: '#653463',
          }}
        >
          <Navigation />
          <MUI.Toolbar>{isLoggedIn ? <UserMenu /> : <AuthNav />}</MUI.Toolbar>
        </MUI.Container>
      </header>
    </MUI.AppBar>
  );
};
