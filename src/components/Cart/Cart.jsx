import React from "react";
import Card from "../shared/Card";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Card className='max-w-md text-white bg-slate-600 text-center'>
      <h2 className='font-semibold mx-1 my-2 text-2xl '>Shpping Cart</h2>
      <ul className='list-none p-0 m-2'>
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
    </Card>
  );
};

export default Cart;
