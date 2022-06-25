import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../store/ui-slice";

const Header = () => {
  const cartQty = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleCartHanlder = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <header className='w-full bg-[#252424] h-[7rem] px-16 py-5 flex items-center justify-between'>
      <h1 className='text-white text-4xl font-semibold'>ReduxCart</h1>
      <nav>
        <ul className='list-none m-0 p-0'>
          <li>
            <button
              onClick={toggleCartHanlder}
              className='cursor-pointer h-14 min-w-[12rem] flex flex-row items-center justify-evenly rounded-md bg-transparent text-[#1ad1b9] border border-[#1ad1b9] hover:bg-[#1ad1b9] hover:border-[#1ad1b9] hover:text-white'
            >
              <span className='font-bold text-lg'>My Cart</span>
              <span className='bg-[#1ad1b9] text-gray-900 w-10 rounded-[30px] '>
                {cartQty}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
