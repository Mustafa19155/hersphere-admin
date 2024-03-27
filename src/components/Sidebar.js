import React, { useContext, useEffect, useState } from "react";
import SideRoutes from "../constants/SideRoutes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import SignoutIcon from "../assets/images/signout.svg";
import { AuthContext } from "../contexts/userContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-w-[250px] max-w-[250px] py-8 border-r bg-green text-white h-[100vh] overflow-scroll no-scrollbar fixed">
      <img src={Logo} className="m-auto h-[90px] w-[90px]" />
      <div className="flex flex-col gap-0 mt-5 relative">
        {SideRoutes.map((route) => (
          <div className="relative">
            {location.pathname == route.link && (
              <div className="absolute left-0 top-5 rounded-lg w-2 h-8 bg-orange"></div>
            )}
            <Link to={route.link}>
              <p
                className={`p-3 ml-8 mt-1 hover:text-orange ${
                  location.pathname == route.link ? "font-bold" : ""
                }`}
              >
                {route.name}
              </p>
            </Link>
          </div>
        ))}
        <div
          className="p-3 flex items-center gap-3 mt-5 cursor-pointer"
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
