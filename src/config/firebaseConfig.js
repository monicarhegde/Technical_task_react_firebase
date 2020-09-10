import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA_Hz0TApUQ3oCBTTwXyubeBYFEsgISYig",
    authDomain: "login-authentication-efcc8.firebaseapp.com",
    databaseURL: "https://login-authentication-efcc8.firebaseio.com",
    projectId: "login-authentication-efcc8",
    storageBucket: "login-authentication-efcc8.appspot.com",
    messagingSenderId: "967391261899",
    appId: "1:967391261899:web:d757247627c14c735e574e"
  };

  const fire= firebase.initializeApp(firebaseConfig)

  export default firebaseConfig;