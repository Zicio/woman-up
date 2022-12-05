import { useContext, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, getDocs, getFirestore, doc } from "firebase/firestore";
import { fireContext } from "..";
import { IContext } from "../models/models";
import Loader from "../components/Loader";
import { ITodo } from "../models/models";

const TodoPage = () => {
  const { auth, firestore } = useContext<IContext>(fireContext);
  const [user] = useAuthState(auth as any);

  // const db = getFirestore();
  // const getTodos = async () => {
  //   const querySnapshot = await getDocs(collection(db, "todo"));
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, " => ", doc.data());
  //   });
  // };

  // useEffect(() => {
  //   getTodos();
  // }, []);

  const [values, loading] = useCollectionData<ITodo>(
    firestore.collection("todo") as any
  );

  if (loading) {
    return <Loader />;
  }

  if (values) {
    return (
      <>
        {values.map((el) => (
          <div>{el.id}</div>
        ))}
      </>
    );
  }

  return <div>TodoPage</div>;
};
export default TodoPage;
