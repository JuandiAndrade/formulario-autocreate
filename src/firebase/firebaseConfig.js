// require('dotenv').config();
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // const {
// //     REACT_APP_FIREBASE_APIKEY, 
// //     REACT_APP_FIREBASE_AUTHDOMAIN, 
// //     REACT_APP_FIREBASE_PROJECTID,
// //     REACT_APP_FIREBASE_STORAGEBUCKET,
// //     REACT_APP_FIREBASE_MESSAGINGSENDERID,
// //     REACT_APP_FIREBASE_APPID
// //   } = process.env.;


// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain:process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   projectId:process.env.REACT_APP_FIREBASE_PROJECTID,
//   storageBucket:process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//   messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//   appId:process.env.REACT_APP_FIREBASE_APPID
// };


// const app = initializeApp(firebaseConfig);
// const dbFirebase = getFirestore(app);

// export default dbFirebase;

// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI-H8jqh5cvTPHe1784ojYgYEDiFwcUdQ",
  authDomain: "challenge-greydiv.firebaseapp.com",
  projectId: "challenge-greydiv",
  storageBucket: "challenge-greydiv.appspot.com",
  messagingSenderId: "221594473083",
  appId: "1:221594473083:web:a338c77fba16652b4348de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbFirebase = getFirestore(app);

export default dbFirebase;


