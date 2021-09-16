import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/slices/auth';
import MainLayout from './index.layout';

export default function Main() {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logOut())
    localStorage.removeItem('token')
  };
  return <MainLayout handleLogout={handleLogout} />;
}
