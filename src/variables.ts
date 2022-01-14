import { User } from "./utils/types";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJETC_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const currentUser: User = {
  name: process.env.REACT_APP_CURRENT_USER_NAME,
  userID: process.env.REACT_APP_CURRENT_USER_ID,
};
export { firebaseConfig, currentUser };
