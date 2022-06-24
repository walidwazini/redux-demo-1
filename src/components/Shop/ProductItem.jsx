import React from "react";
import ValueButton from "../Cart/ValueButton";
import Card from "../shared/Card";

const ProductItem = ({ title, price, des }) => {
  return (
    <Card
      className={`bg-slate-300 w-[600px] my-4 flex flex-row justify-evenly items-center `}
    >
      <ul>
        <li>{title}</li>
        <li>description</li>
      </ul>
      <div className='flex flex-col justify-between h-[5rem] items-center'>
        <div className='rounded-md text-center w-24 h-1/2 flex justify-center items-center font-bold bg-slate-500'>
          {price.toFixed(2)}
        </div>
        <ValueButton className='text-xs border-black text-black hover:bg-slate-800 bg-slate-100 h-8 w-20'>
          Add To Cart
        </ValueButton>
      </div>
    </Card>
  );
};

export default ProductItem;
