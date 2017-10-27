import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBTWG-OzyiM2XmkpboVeP_hgqVHNr3shK0",
  authDomain: "react-native-firebase-7a8ac.firebaseapp.com",
  databaseURL: "https://react-native-firebase-7a8ac.firebaseio.com",
  projectId: "react-native-firebase-7a8ac",
  storageBucket: "react-native-firebase-7a8ac.appspot.com",
  messagingSenderId: "298176719667"
};

const _firebase = firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = _firebase.database();
export const firebaseAuth = _firebase.auth();
