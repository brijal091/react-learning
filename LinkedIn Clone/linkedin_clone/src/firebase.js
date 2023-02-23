import firebase from './firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA1fLYZQkey0dEmBP0npyY5pUeTpHsJB6c",
    authDomain: "cp-linked.firebaseapp.com",
    projectId: "cp-linked",
    storageBucket: "cp-linked.appspot.com",
    messagingSenderId: "994867545792",
    appId: "1:994867545792:web:8226bd2d9a94ca4c294f25"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;