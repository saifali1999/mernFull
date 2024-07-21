import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
