import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { fireContext } from ".";
import AppRouter from "./AppRouter";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import { IContext } from "./models/models";

const App = () => {
  const { auth } = useContext<IContext>(fireContext);
  const [loading, error] = useAuthState(auth as any);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
