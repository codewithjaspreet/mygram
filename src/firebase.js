import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKzF8C_su4GgpyzseBVgSO2Y6-6Rzbjuk",
  authDomain: "itsmygramm.firebaseapp.com",
  projectId: "itsmygramm",
  storageBucket: "itsmygramm.appspot.com",
  messagingSenderId: "199922349381",
  appId: "1:199922349381:web:79801d55ce4f70ac8d3a2c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const storage = firebase.storage();

export const database = {
  users: firestore.collection("users"),
  getTimeStamp: firebase.firestore.FieldValue.getTimeStamp,
};
