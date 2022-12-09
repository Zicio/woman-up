import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

export interface IContext {
  firebase: typeof firebase;
  auth: firebase.auth.Auth;
  firestore: firebase.firestore.Firestore;
}

export interface ITodo {
  createdAt: Timestamp;
  description: string;
  id: string;
  title: string;
}
