import React from "react";

const Header = () => {
  return (
    <header className='w-full bg-[#252424] h-[5rem] px-7 py-5 flex items-center justify-between'>
      <h1 className='text-white text-xl'>ReduxCart</h1>
      <nav>
        <ul className='list-none m-0 p- 0'>
          <li>
            <button
              onClick={() => {}}
              className='cursor-pointer px-6 py-2 rounded-md bg-transparent text-[#1a8ed1] border border-emerald-600 hover:bg-[#1ac5d1] hover:border-[#1ac5d1] hover:text-white'
            >
              Card Button
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
