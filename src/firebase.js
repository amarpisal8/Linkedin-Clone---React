// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGhjoMNINSgK2YMUUM2lHSwnrTVPqR2zw",
  authDomain: "linkdin-clone-f5434.firebaseapp.com",
  projectId: "linkdin-clone-f5434",
  storageBucket: "linkdin-clone-f5434.appspot.com",
  messagingSenderId: "772336253205",
  appId: "1:772336253205:web:85232e8c5b26036087511c"
};
  //this special line of code here connects everything
  const firebaseApp=firebase.initializeApp(firebaseConfig);

  
  //get the firebase databse
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,auth }
