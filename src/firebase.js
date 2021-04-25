import firebase from 'firebase';
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDIXwvrAbwlWB5LF8DE-NLLT8_L7lbYxZU",
    authDomain: "dis-plus-857b4.firebaseapp.com",
    projectId: "dis-plus-857b4",
    storageBucket: "dis-plus-857b4.appspot.com",
    messagingSenderId: "534142362962",
    appId: "1:534142362962:web:36779c07b96bcd3ed4468b",
    measurementId: "G-28T615RGN2"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage}

  export default db;