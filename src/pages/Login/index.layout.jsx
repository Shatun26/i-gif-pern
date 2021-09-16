import React from 'react';
import * as H from './index.styled';

export default function LoginLayout({ handleLogin, handleChange }) {
  return (
    <H.LoginWrapper>
      <h1>Sign In</h1>
      <H.LoginForm onSubmit={handleLogin}>
        <label htmlFor="email">email</label>
        <input
          onChange={handleChange}
          type="text"
          id="email"
          placeholder="user@email.com"
        />
        <label htmlFor="password">password</label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          placeholder="1Ge23Garik"
        />
        <button>Login</button>
      </H.LoginForm>
    </H.LoginWrapper>
  );
}
