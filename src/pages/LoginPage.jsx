import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operationsAuth';
import MUI from 'components/MUI';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  return (
    <MUI.Card sx={{ maxWidth: '50%', backgroundColor: '#bba095' }}>
      <MUI.CardMedia
        sx={{ height: 500 }}
        image="https://img.freepik.com/premium-vector/online-registration-and-sign-up-with-man-sitting-near-smartphone_268404-95.jpg"
        title="login"
      />
      <div>
        <h1>Page of LogIn</h1>
        <form onSubmit={handleSubmit} autoComplete="off" style={{ width: 450 }}>
          <label
            htmlFor=""
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: 30,
              marginLeft: 30,
            }}
          >
            {/* Email */}
            <MUI.TextField
              label="Email"
              focused
              required
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Choose your Email"
            />
          </label>

          <label
            htmlFor=""
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: 30,
              marginLeft: 30,
            }}
          >
            {/* Password */}
            <MUI.TextField
              label="Password"
              focused
              required
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Choose your Password"
            />
          </label>

          <MUI.Button
            sx={{ marginBottom: 3 }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Log In
          </MUI.Button>
        </form>
      </div>
    </MUI.Card>
  );
};

export default LoginPage;
