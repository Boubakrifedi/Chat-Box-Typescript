import { firestore, auth } from "../firebase";
import { ValuesType } from "../utils/types";

const firebaseService = (collectionName: string) => {
  const db = firestore.collection(collectionName);

  const getAll = () => {
    return db;
  };

  const create = (data: any) => {
    return db.add(data);
  };

  const update = (id: string, value: any) => {
    return db.doc(id).update(value);
  };

  const remove = (id: string) => {
    return db.doc(id).delete();
  };
  return { getAll, create, update, remove };
};

const firebaseAuth = () => {
  const signIn = async ({ email, password }: ValuesType) =>
    await auth.signInWithEmailAndPassword(email, password);

  const signUp = async ({ email, password }: ValuesType) =>
    await auth.createUserWithEmailAndPassword(email, password);

  return { signIn, signUp };
};

export { firebaseService, firebaseAuth };
