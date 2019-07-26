import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCfHTkjlQhe37sSNXzzJzlFRupccTsFzKs",
  authDomain: "steer-93271.firebaseapp.com",
  databaseURL: "https://steer-93271.firebaseio.com",
  projectId: "steer-93271",
  storageBucket: "steer-93271.appspot.com",
  messagingSenderId: "978584337675",
  appId: "1:978584337675:web:ed6d96f8698a07a9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
