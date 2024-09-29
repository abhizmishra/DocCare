import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400 ">
      <img
        className="w-60 cursor-pointer "
        src={assets.logoD}
        alt=""
        onClick={() => navigate("/")}
      />
      <ul className="hidden md:flex items-start gap-5  font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none ouline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none ouline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none ouline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none ouline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="">
        {token ? (
          <div className="absolute flex gap-2">
            <img
              src={assets.profile_pic}
              className="w-8 rounded-full "
              alt=""
            />

            <img
              src={assets.dropdown_icon}
              alt=""
              onClick={() => setShowMenu((prev) => !prev)}
              onMouseEnter={() => setShowMenu(true)}
            />
            {showMenu && (
              <ul className="  absolute  top-10 right-0  bg-white p-2 rounded-md shadow">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="cursor-pointer py-0.5"
                >
                  My Profile
                </p>
                <hr className="hover:bg-primary py-0.5  h-0.5" />

                <p
                  onClick={() => navigate("/my-appointments")}
                  className="py-0.5 cursor-pointer"
                >
                  Appointments
                </p>
                <hr className="hover:bg-primary  h-0.5" />

                <p
                  className="py-0.5 cursor-pointer"
                  onClick={() => setToken(false)}
                >
                  Logout
                </p>
                <hr className="hover:bg-primary  h-0.5" />
              </ul>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white py-3 rounded-full font-light hidden md:block px-8 "
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
