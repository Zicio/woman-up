import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { IContext } from "../models/models";
import { fireContext } from "..";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const { auth } = useContext<IContext>(fireContext);
  const [user] = useAuthState(auth as any);

  return (
    <div className="w-full bg-green-500 h-[60px] py-[5px] px-[50px] text-xl flex items-center">
      <div className="w-full flex justify-between items-center">
        {user ? (
          <>
            <span className="text-white font-bold uppercase">
              {user.displayName}
            </span>
            <NavLink to={process.env.REACT_APP_LOGIN_ROUTE!}>
              <button className="button" onClick={() => auth.signOut()}>
                выйти
              </button>
            </NavLink>
          </>
        ) : (
          <button className="button">войти</button>
        )}
      </div>
    </div>
  );
};
export default Navbar;
