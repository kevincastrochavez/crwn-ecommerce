import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5MHnTwXahgvxf2V5oo_H7xV7ko6QNN3c",
  authDomain: "crown-db-d51bd.firebaseapp.com",
  projectId: "crown-db-d51bd",
  storageBucket: "crown-db-d51bd.appspot.com",
  messagingSenderId: "91915700180",
  appId: "1:91915700180:web:663aed8b0c036e9f743841",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
