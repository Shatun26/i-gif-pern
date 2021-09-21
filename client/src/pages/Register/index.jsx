import RegisterLayout from './index.layout';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/auth';
import { SignUpService } from '../../services/user';
import { isEmail } from 'validator';


export default function Register() {
  
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
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      console.log('Email of password is empty!');
    } else if (credentials.password.length < 6) {
      console.log('Password too short!');
    } else if (!isEmail(credentials.email)) {
      console.log('Email invalid');
    } else {
      const res = await SignUpService(credentials);
      if (res.status !== 200) {
        console.log(res.data.error);
      } else {
        localStorage.setItem('token', res.data.token);
        dispatch(login());
      }
    }
  };
  return (
    <RegisterLayout  handleChange={handleChange} handleRegister={handleRegister} />
  );
}
