import React, { useContext, useState } from "react";
import Logo from "../assets/logo.svg";
import EmailIcon from "../assets/images/email-icon.svg";
import PasswordIcon from "../assets/images/password-icon.svg";
import EyeIcon from "../assets/images/eye-icon.svg";
import { AuthContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import GreenButton from "../components/Buttons/GreenButton";

const Login = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPass, setshowPass] = useState(false);
  const [apiCalled, setapiCalled] = useState(false);
  const [err, setErr] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      setapiCalled(true);
      navigate("/");
    }
  };

  return (
    <div className="h-full min-h-screen flex flex-col justify-center items-center bg-blue">
      <div className="mx-auto rounded-xl w-[98%] sm:w-[80%] lg:w-[50%] p-16 flex flex-col justify-center items-center gap-5">
        <img src={Logo} className="w-[150px]" />
        <div className="flex flex-col gap-1 items-center">
          <p className="text-3xl font-bold">WELCOME BACK</p>
          <p className="text-sm">Login to app</p>
        </div>
        {err && (
          <p className="text-red-600 font-bold text-sm">INVALID CREDENTIALS</p>
        )}
        <div className="flex flex-col gap-5">
          <div className="bg-transparent border text-xl p-2 rounded-lg flex items-center gap-2">
            <img src={EmailIcon} className="h-[30px] w-[30px]" />
            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="bg-transparent h-full w-full outline-none"
            />
          </div>
          <div className="bg-transparent border text-xl p-2 rounded-lg flex items-center gap-2">
            <img src={PasswordIcon} className="h-[30px] w-[30px]" />
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="bg-transparent h-full w-full outline-none"
            />
            <img
              src={EyeIcon}
              className="cursor-pointer h-[30px] w-[30px]"
              onClick={() => setshowPass(!showPass)}
            />
          </div>
          <GreenButton
            text={"LOGIN"}
            clickHandler={handleLogin}
            className={"py-3"}
            disabled={apiCalled}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
