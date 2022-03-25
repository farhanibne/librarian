// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAYKIsJtwDZpxmMAEbpyMDh2xPP20oWGMQ",
  authDomain: "librarian-dz.firebaseapp.com",
  databaseURL: "https://librarian-dz-default-rtdb.firebaseio.com",
  projectId: "librarian-dz",
  storageBucket: "librarian-dz.appspot.com",
  messagingSenderId: "121614420475",
  appId: "1:121614420475:web:366177947f6aff6947635e",
  measurementId: "G-ZGSP0BS4SS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export {firebase}