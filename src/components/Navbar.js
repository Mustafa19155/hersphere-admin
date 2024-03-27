import moment from "moment";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/userContext";
import ProfileIcon from "../assets/images/profileIcon.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mb-20">
      <div>
        <p className="text-3xl font-bold">WELCOME ADMIN !</p>
        <p className="font-bold mt-1">
          {moment(Date.now()).format("DD MMM, YYYY")}
        </p>
      </div>
      {/* <img
        className="h-[40px] w-[40px] rounded-full"
        src={getuser().image ? getuser().image : ProfileIcon}
        alt="img"
      ></img> */}
    </div>
  );
};

export default Navbar;
