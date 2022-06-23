import React from "react";

const Card = (props) => {
  return (
    <section
      className={`mx-4 my-auto rounded-md p-4 w-10/12 max-w-xl ${
        props.className ? props.className : ""
      } `}
    >
      {props.children}
    </section>
  );
};

export default Card;
