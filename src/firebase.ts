import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig } from "./variables";

let config = {
  ...firebaseConfig,
};

firebase.initializeApp(config);
const firestore = firebase.firestore();
const auth = firebase.auth();

export { firestore, auth };
