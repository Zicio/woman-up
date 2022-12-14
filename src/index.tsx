import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { IContext } from "./models/models";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";

firebase.initializeApp({
  apiKey: "AIzaSyBSI2TiDkGDjl8sAuGwk_P1GLGsVA9DNRc",
  authDomain: "zicio-womanup.firebaseapp.com",
  projectId: "zicio-womanup",
  storageBucket: "zicio-womanup.appspot.com",
  messagingSenderId: "850017669601",
  appId: "1:850017669601:web:348a6543ebffdf40f1c2a0",
  measurementId: "G-73BYM6SQZX",
});

export const fireContext = createContext({} as IContext);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <fireContext.Provider
      value={{
        firebase,
        auth,
        firestore,
      }}
    >
      <DevSupport
        ComponentPreviews={ComponentPreviews}
        useInitialHook={useInitial}
      >
        <App />
      </DevSupport>
    </fireContext.Provider>
  </React.StrictMode>
);
