// import firebase from "firebase/app";
// import "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBYHBTLvpOZBVf-p4nIuZy3CJZfdWKYLgY",
    authDomain: "forelsket-e57b2.firebaseapp.com",
    projectId: "forelsket-e57b2",
    storageBucket: "forelsket-e57b2.appspot.com",
    messagingSenderId: "821755047052",
    appId: "1:821755047052:web:bb9d6390252dd1c4899fa9",
    measurementId: "G-2GQZM5N4QW"
});

export default firebaseConfig;
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();