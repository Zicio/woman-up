import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { useAuthState } from "react-firebase-hooks/auth";
import { fireContext } from ".";
import { useContext } from "react";
import { IContext } from "./models/models";

const AppRouter = () => {
  const { auth } = useContext<IContext>(fireContext);
  const [user] = useAuthState(auth as any);

  return user ? (
    <Routes>
      {privateRoutes.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
      ;
      <Route
        path="*"
        element={<Navigate to={process.env.REACT_APP_TODO_ROUTE!} />}
      />
    </Routes> // как правильно передавать в Routes компонент
  ) : (
    <Routes>
      {publicRoutes.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
      <Route
        path="*"
        element={<Navigate to={process.env.REACT_APP_LOGIN_ROUTE!} />}
      />
    </Routes>
  );
};
export default AppRouter;
