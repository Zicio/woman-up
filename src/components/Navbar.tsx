import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { IContext } from "../models/models";
import { fireContext } from "..";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const { auth } = useContext<IContext>(fireContext);
  const [user] = useAuthState(auth as any);

  return (
    <div className="w-full bg-green-500 h-[60px] p-[5px] text-xl flex items-center">
      <div className="flex justify-end items-center mr-[50px] w-full">
        {user ? (
          <NavLink to={process.env.REACT_APP_LOGIN_ROUTE!}>
            <button className="button">выйти</button>
          </NavLink>
        ) : (
          <button className="button">войти</button>
        )}
      </div>
    </div>
  );
};
export default Navbar;
