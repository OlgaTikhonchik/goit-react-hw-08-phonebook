import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operationsAuth';
import MUI from 'components/MUI';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <MUI.Card sx={{ maxWidth: '50%', height: 850 }}>
      <MUI.CardMedia
        sx={{ height: 450 }}
        image="https://www.pngkey.com/png/detail/203-2035339_register-user-register-online-icon-png.png"
        title="register"
      />
      <div>
        <h1>Page of registration</h1>
        <form onSubmit={handleSubmit} style={{ width: 450 }}>
          <label
            htmlFor=""
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: 30,
              marginLeft: 30,
            }}
          >
            {/* Name */}
            <MUI.TextField
              label="Name"
              focused
              required
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Choose your Name"
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
            color="success"
            type="submit"
          >
            Register{' '}
          </MUI.Button>
        </form>
      </div>
    </MUI.Card>
  );
};

export default RegisterPage;
