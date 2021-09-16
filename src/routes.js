import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';

export default function useRoutes(isAuth) {
  
  if (isAuth) {
    return (
      <Switch>
        <Route path="/main">
          <Main/>
        </Route>
        <Redirect to="/main" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}
