import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { fireContext } from "..";
import { IContext } from "../models/models";

const TodoPage = () => {
  const { auth, firestore } = useContext<IContext>(fireContext);
  const [user] = useAuthState(auth as any);

  const [todos, loading] = useCollectionData(firestore.collection("todos"));

  return <div>TodoPage</div>;
};
export default TodoPage;
