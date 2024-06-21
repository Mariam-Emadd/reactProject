import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { User } from './context/context';

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(User);

  return auth.token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
