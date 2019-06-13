import Rebase from 're-base'; // React firebase package
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCj81QkSBwX7jnDnh62615brLchE5KKWkY',
  authDomain: 'catch-of-the-day-libby.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-libby.firebaseio.com'
  // projectId: 'catch-of-the-day-libby',
  // storageBucket: 'catch-of-the-day-libby.appspot.com',
  // messagingSenderId: '757379024500',
  // appId: '1:757379024500:web:9f64bcc3a3f3d5c2'
});

const base = Rebase.createClass(firebase.database());

// this is a named export
export { firebaseApp };

// this is a default export

export default base;
