import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import Card from "../shared/Card";
import ValueButton from "./ValueButton";

const CartItem = ({ className, item }) => {
  const dispatch = useDispatch();

  const { title, qty, total, price, id } = item;

  const removeHandler = () => {
    dispatch(cartActions.removeItemToCart(id));
  };

  const addHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        price: price,
        quantity: qty,
        totalPrice: total,
        name: title,
      })
    );
  };

  return (
    <Card className={`bg-slate-500 h-auto my-4 flex flex-col`}>
      <header className='flex flex-row justify-between mx-3 mb-4'>
        <h3 className='text-2xl font-bold'>{title}</h3>
        <div className='text-xl font-semibold'>
          <h2>{total}</h2>
          <span className='italic text-base'>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className='flex flex-row justify-between'>
        <div id='qty' className=''>
          x <span>{qty}</span>
        </div>
        <div className='flex flex-row justify-between w-auto'>
          <ValueButton onClick={removeHandler} minus />
          <ValueButton onClick={addHandler} plus />
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
