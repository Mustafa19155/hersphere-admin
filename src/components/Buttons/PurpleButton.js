import React from "react";

export default function PurpleButton({
  text,
  clickHandler,
  className,
  icon,
  type,
  disabled,
}) {
  return (
    <button
      disabled={disabled ? disabled : false}
      type={type}
      className={`pink-btn ${
        className ? className : ""
      } w-full h-[36px] rounded-md bg-orange text-white flex justify-center items-center gap-2 hover:shadow-pink-btn duration-150`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}
