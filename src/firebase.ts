import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "./variables";

let config = {
  ...firebaseConfig,
};

firebase.initializeApp(config);

export default firebase.firestore();
