import firebase from 'firebase/app';
import 'firebase/auth';

const fbConfig = {
  apiKey: 'AIzaSyCPxNJpi2Gh-7H6k84Sg8TpBHWf-4UtnDU',
  authDomain: 'todo-app-ac762.firebaseapp.com',
  databaseURL: 'https://todo-app-ac762.firebaseio.com',
  projectId: 'todo-app-ac762',
  storageBucket: 'todo-app-ac762.appspot.com',
  messagingSenderId: '44460746720',
  appId: '1:44460746720:web:0857dbe7acee21b0f5ad85',
};

firebase.initializeApp(fbConfig);

export default firebase;
