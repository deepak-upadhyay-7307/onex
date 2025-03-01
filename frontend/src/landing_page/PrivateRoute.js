import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token'); // Adjust based on your auth logic

  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
