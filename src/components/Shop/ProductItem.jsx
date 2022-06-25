import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ValueButton from "../Cart/ValueButton";
import { cartActions } from "../../store/cart-slice";
import Card from "../shared/Card";

const ProductItem = ({ title, price, author, id }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    // object data as payload
    dispatch(
      cartActions.addItemToCart({
        id: id,
        price: price,
        title: title,
      })
    );
  };

  return (
    <Card
      className={`bg-slate-300 w-[600px] my-4 flex flex-row justify-evenly items-center `}
    >
      <ul>
        <li>{title}</li>
        <li>{author}</li>
      </ul>
      <div className='flex flex-col justify-between h-[5rem] items-center'>
        <div className='rounded-md text-center w-24 h-1/2 flex justify-center items-center font-bold bg-slate-500'>
          {price.toFixed(2)}
        </div>
        <ValueButton
          onClick={addToCartHandler}
          className='text-xs border-black text-black hover:bg-slate-800 bg-slate-100 h-8 w-20'
        >
          Add To Cart
        </ValueButton>
      </div>
    </Card>
  );
};

export default ProductItem;
