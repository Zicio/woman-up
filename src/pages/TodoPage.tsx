import { useContext, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, getDocs } from "firebase/firestore";
import { fireContext } from "..";
import { IContext } from "../models/models";
import Loader from "../components/Loader";

const TodoPage = () => {
  const { auth, firestore } = useContext<IContext>(fireContext);
  const [user] = useAuthState(auth as any);

  const [values, loading] = useCollectionData(
    firestore.collection("todo") as any
  );

  useEffect(() => {
    console.log(values);
  }, [values]);

  if (loading) {
    return <Loader />;
  }

  return <div>TodoPage</div>;
};
export default TodoPage;
