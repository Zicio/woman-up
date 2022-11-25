import { useContext } from "react";
import { fireContext } from "../index";
import firebase from "firebase/compat/app";
import { IContext } from "../models/models";

const LoginPage = () => {
  const { auth } = useContext<IContext>(fireContext);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-60px)]">
      <div className="p-[20px] w-[300px] h-[100px] bg-slate-400 flex flex-col justify-center ">
        <button className="button w-[250px]" onClick={login}>
          Войти с помощью Google
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
