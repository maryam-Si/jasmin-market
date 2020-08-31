import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config ={
    apiKey: "AIzaSyDuB5UBAyjKm6hg5tnT36mHbkDc-aKoJHg",
    authDomain: "jasmine-db.firebaseapp.com",
    databaseURL: "https://jasmine-db.firebaseio.com",
    projectId: "jasmine-db",
    storageBucket: "jasmine-db.appspot.com",
    messagingSenderId: "567785029161",
    appId: "1:567785029161:web:9cdfb03d5c9951c08be638",
    measurementId: "G-4HJJQ3110E"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

    export  default firebase;