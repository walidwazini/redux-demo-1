import React from "react";

const Header = () => {
  return (
    <header className='w-full bg-[#252424] h-[7rem] px-7 py-5 flex items-center justify-between'>
      <h1 className='text-white text-xl'>ReduxCart</h1>
      <nav>
        <ul className='list-none m-0 p-0'>
          <li>
            <button
              onClick={() => {}}
              className='cursor-pointer h-14 min-w-[12rem] flex flex-row items-center justify-evenly rounded-md bg-transparent text-[#1ad1b9] border border-[#1ad1b9] hover:bg-[#1ad1b9] hover:border-[#1ad1b9] hover:text-white'
            >
              <span className='font-bold text-lg'>My Cart</span>
              <span className='bg-[#1ad1b9] text-gray-900 w-10 rounded-[30px] '>
                1
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
