import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";

export const publicRoutes = [
  {
    path: process.env.REACT_APP_LOGIN_ROUTE,
    element: LoginPage,
  },
];

export const privateRoutes = [
  {
    path: process.env.REACT_APP_TODO_ROUTE,
    element: TodoPage,
  },
];
