import React, { useContext, useEffect, useState } from "react";
import SideRoutes from "../constants/SideRoutes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import SignoutIcon from "../assets/images/signout.svg";
import { AuthContext } from "../contexts/userContext";
import { logout } from "../api/auth";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { user, setuser } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then((res) => {
        setuser(null);
        navigate("/login", { replace: true });
      })
      .catch((err) => {});
  };

  return (
    <div className="min-w-[250px] max-w-[250px] py-8 border-r bg-[#45575B] text-white h-[100vh] overflow-scroll no-scrollbar fixed">
      <img src={Logo} className="m-auto h-[90px] w-[90px]" />
      <div className="flex flex-col gap-0 mt-5 relative">
        {SideRoutes.map((route) => (
          <div className="relative">
            {location.pathname == route.link && (
              <div className="absolute left-0 top-5 rounded-lg w-2 h-8 bg-orange"></div>
            )}
            <Link to={route.link} className="flex items-center gap-5 p-3">
              {route.icon && <div className="ml-8">{route.icon}</div>}
              <p
                className={`mt-1 hover:text-orange ${
                  location.pathname == route.link ? "font-bold" : ""
                }`}
              >
                {route.name}
              </p>
            </Link>
          </div>
        ))}
        <div
          className={`p-3 ml-8 mt-1 flex items-center gap-5`}
          onClick={handleLogout}
        >
          <img src={SignoutIcon} />
          <p className="cursor-pointer hover:text-orange">Sign out</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
