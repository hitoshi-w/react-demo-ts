import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from 'components/layouts/SignIn';

const Navbar: React.SFC = () => {
  return (
    <div>
      <Link to="/"></Link>
      <SignIn />
    </div>
  );
};

export default Navbar;
