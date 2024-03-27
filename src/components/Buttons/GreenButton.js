import React from "react";

export default function GreenButton({
  text,
  clickHandler,
  className,
  type,
  disabled,
}) {
  return (
    <button
      disabled={disabled ? disabled : false}
      type={type}
      className={`green-btn ${
        className ? className : ""
      } w-full rounded-md bg-green text-white`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}
