import React from "react";
import { useSelector } from "react-redux";

import Card from "../shared/Card";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className='max-w-md h-[350px] text-white bg-slate-600 text-center'>
      <h2 className='font-semibold mx-1 my-2 text-2xl '>Shpping Cart</h2>
      <div className='overflow-auto max-h-[80%]'>
        <ul className='p-3 overflow-y-auto list-none flex flex-col justify-between items-center'>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                qty: item.quantity,
                price: item.price,
                total: item.totalPrice,
              }}
            />
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Cart;
