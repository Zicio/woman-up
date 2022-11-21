import firebase from "firebase/compat";

export interface IContext {
  firebase: typeof firebase;
  auth: firebase.auth.Auth;
  firestore: firebase.firestore.Firestore;
}
