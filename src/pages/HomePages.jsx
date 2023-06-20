import MUI from 'components/MUI';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const HomePage = () => {
  return (
    <div>
      <MUI.Typography
        variant="h2"
        sx={{ fontSize: '80px', textAlign: 'center', color: '#653463' }}
      >
        Welcome to the PhoneBook!
      </MUI.Typography>
      <MenuBookIcon color="disabled" sx={{ width: '100%', height: '70vh' }} />
    </div>
  );
};

export default HomePage;
