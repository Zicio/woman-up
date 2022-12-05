import firebase from "firebase/compat";

export interface IContext {
  firebase: typeof firebase;
  auth: firebase.auth.Auth;
  firestore: firebase.firestore.Firestore;
}

export interface ITodo {
  createdAt: Date;
  description: string;
  id: string;
  title: string;
}
