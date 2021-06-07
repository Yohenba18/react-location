// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDyGhzQv22Z4JxRVXfI_nBfGHUURb3ixYs",
    authDomain: "location-b23bf.firebaseapp.com",
    projectId: "location-b23bf",
    storageBucket: "location-b23bf.appspot.com",
    messagingSenderId: "98620916196",
    appId: "1:98620916196:web:c5b6f9a68bbbcd103487f1",
    measurementId: "G-18V0R2GJYK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;