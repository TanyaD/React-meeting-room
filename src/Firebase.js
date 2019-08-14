import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "",
    authDomain: "react-meetings-4fe0e.firebaseapp.com",
    databaseURL: "https://react-meetings-4fe0e.firebaseio.com",
    projectId: "react-meetings-4fe0e",
    storageBucket: "",
    messagingSenderId: "1042671744753",
    appId: "1:1042671744753:web:7f4af30d6e504433"
  };

  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;
