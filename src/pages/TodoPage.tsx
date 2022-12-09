import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { fireContext } from "..";
import { IContext, ITodo } from "../models/models";
import Loader from "../components/Loader";
import Todo from "../components/Todo";

const TodoPage = () => {
  const { auth, firestore } = useContext<IContext>(fireContext);
  const [user] = useAuthState(auth as any);

  const [values, loading] = useCollectionData<ITodo>(
    firestore.collection("todo") as any
  );

  if (loading) {
    return <Loader />;
  }

  if (values) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-60px)]">
        <div className="grid grid-cols-[repeat(auto-fill)] gap-[20px]">
          {values.map((value) => (
            <Todo key={value.id} data={value}></Todo>
          ))}
        </div>
      </div>
    );
  }

  return <div>TodoPage</div>;
};
export default TodoPage;
