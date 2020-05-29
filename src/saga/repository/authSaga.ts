import fb from 'config/fbConfig';

export default () => {
  return new Promise((res, rej) => {
    fb.auth().onAuthStateChanged(user => {
      user ? res(user) : rej(Error('error!!'));
    });
  });
};
