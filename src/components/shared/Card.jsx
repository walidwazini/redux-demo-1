import React from "react";

const Card = ({ className, children }) => {
  return (
    <section
      className={`mx-4 my-auto rounded-md p-4 w-10/12 max-w-xl ${
        className ? className : ""
      } `}
    >
      {children}
    </section>
  );
};

export default Card;
