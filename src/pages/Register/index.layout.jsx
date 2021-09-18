import React from 'react';
import * as H from './index.styled';
import { Link } from 'react-router-dom';

export default function RegisterLayout({ handleChange, handleRegister }) {
  return (
    <H.RegisterWrapper>
      <H.RegisterForm onSubmit={handleRegister}>
      <h1>Sign Up</h1>
        <label htmlFor="email">email</label>
        <input onChange={handleChange} type="text" id="email" placeholder="user@email.com" />
        <label htmlFor="first_name">first name</label>
        <input onChange={handleChange} type="text" id="first_name" placeholder="Ricardo" />
        <label htmlFor="last_name">last name</label>
        <input onChange={handleChange} type="text" id="last_name" placeholder="Milos" />
        <label htmlFor="password">password</label>
        <input onChange={handleChange} type="password" id="password" placeholder="1Ge23Garik" />
        <H.BtnContainer>
          <Link to="/">Back</Link>
          <button>Register</button>
        </H.BtnContainer>
      </H.RegisterForm>
    </H.RegisterWrapper>
  );
}
