import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operationsAuth';

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
    <div>
      <h1>Page of LogIn</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="">
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder=""
          />
        </label>

        <label htmlFor="">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder=""
          />
        </label>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
