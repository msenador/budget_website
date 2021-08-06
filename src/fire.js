import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDKp7wtFnlv-5ST-x99KhggEWZBqTrcmOQ',
  authDomain: 'budgetstash.firebaseapp.com',
  databaseURL: 'https://budgetstash-default-rtdb.firebaseio.com',
  projectId: 'budgetstash',
  storageBucket: 'budgetstash.appspot.com',
  messagingSenderId: '402594121935',
  appId: '1:402594121935:web:8c7258b728187a68f98fba',
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;

// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firebase-database"

// const fire = firebase.initializeApp({
//     apiKey: "AIzaSyDKp7wtFnlv-5ST-x99KhggEWZBqTrcmOQ",
//     authDomain: "budgetstash.firebaseapp.com",
//     databaseURL: "https://budgetstash-default-rtdb.firebaseio.com",
//     projectId: "budgetstash",
//     storageBucket: "budgetstash.appspot.com",
//     messagingSenderId: "402594121935",
//     appId: "1:402594121935:web:8c7258b728187a68f98fba"
// });

// const auth = firebase.auth();
//  // <----- this is where you define auth
// // const db = firebase.firestore();
// export default fire;
