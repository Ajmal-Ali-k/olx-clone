import firebase  from 'firebase';
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD6Ffl2Br6_WUDVw0hgNY6ZuhW_gRGGzA",
  authDomain: "fir-d232c.firebaseapp.com",
  projectId: "fir-d232c",
  storageBucket: "fir-d232c.appspot.com",
  messagingSenderId: "38634161359",
  appId: "1:38634161359:web:fcab24d1683f433e1a63ba",
  measurementId: "G-4SJV8NESCB"
};

  export default firebase.initializeApp(firebaseConfig);

