import React from 'react';
import { NavLink } from 'react-router-dom';

const SignIn: React.FC = () => {
  return (
    <ul>
      <li>
        <NavLink to="/projects/new">New Project</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
      </li>
    </ul>
  );
};

export default SignIn;
