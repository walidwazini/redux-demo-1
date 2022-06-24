import React from "react";

const ValueButton = ({ onClick, minus, plus, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-500 border hover:text-gray-500 ${
        minus && "hover:bg-red-400  border-red-400 text-red-400"
      } 
      ${className ? className : ""}
       ${plus && "border-blue-400 text-blue-400 hover:bg-blue-400"}
       rounded-md w-10 mx-2`}
    >
      {minus && "-"}
      {plus && "+"}
      {children}
    </button>
  );
};

export default ValueButton;
