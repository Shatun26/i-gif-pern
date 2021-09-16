import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/auth';
import { SignInService } from '../../services/user';
import LoginLayout from './index.layout';
import { isEmail } from 'validator';

export default function Login() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({});
  const handleChange = (e) => {
    setCredentials((props) => {
      return {
        ...props,
        [e.target.id]: e.target.value,
      };
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      console.log('Email of password is empty!');
    } else if (credentials.password.length < 6) {
      console.log('Password too short!');
    } else if (!isEmail(credentials.email)) {
      console.log('Email invalid');
    } else {
      const res = await SignInService(credentials);
      if (res.status !== 200) {
        console.log(res.data.error);
      } else {
        localStorage.setItem('token', res.data.token);
        dispatch(login());
      }
    }
  };
  return <LoginLayout handleLogin={handleLogin} handleChange={handleChange} />;
}
