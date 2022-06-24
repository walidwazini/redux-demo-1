import React from "react";
import Card from "../shared/Card";
import ValueButton from "./ValueButton";

const CartItem = ({ className, item }) => {
  // const { title, quantity, total, price } = item;

  return (
    <Card className={`bg-slate-500 h-[7rem] my-3 flex flex-col`}>
      <header className='flex flex-row justify-between mx-3 mb-4'>
        <h3 className='text-2xl font-bold'>Title</h3>
        <div className='text-xl font-semibold'>
          <span className='italic text-base'>
            {/* (${price.toFixed(2)}/item) */}
            22/item
          </span>
        </div>
      </header>
      <div className='flex flex-row justify-between'>
        <div id='qty' className=''>
          x <span>QTY</span>
        </div>
        <div className='flex flex-row justify-between w-auto'>
          <ValueButton minus />
          <ValueButton plus />
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
