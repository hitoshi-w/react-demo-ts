import React from 'react';
import fb from 'config/fbConfig';

const Home: React.SFC = () => {
  const googleLogin = () => {
    const provider = new fb.auth.GoogleAuthProvider();
    fb.auth().signInWithRedirect(provider);
  };
  return <button onClick={googleLogin}>google</button>;
};

export default Home;
