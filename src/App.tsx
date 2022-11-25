import { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { fireContext } from ".";
import AppRouter from "./AppRouter";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import { IContext } from "./models/models";

const App = () => {
  const { auth } = useContext<IContext>(fireContext);
  const [user, loading, error] = useAuthState(auth as any);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;
