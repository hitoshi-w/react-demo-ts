import React from 'react';
import { Redirect } from 'react-router-dom';

interface AuthProps {
  isLoggedIn: any;
}
const Auth: React.FC<AuthProps> = ({ isLoggedIn, children }) => {
  return isLoggedIn ? { children } : <Redirect to={'/'} />;
};

export default Auth;
