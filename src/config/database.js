import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCKFeUJfZNBvqU4yCeverQFGyS2sZd_g-0',
  authDomain: 'demoproject-77881.firebaseapp.com',
  projectId: 'demoproject-77881',
  storageBucket: 'demoproject-77881.appspot.com',
  messagingSenderId: '821185364285',
  appId: '1:821185364285:web:7a406ff1df2265ce970554',
  measurementId: 'G-3GZM3NMN26'
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const User = db.collection('Users');

module.exports = User;
