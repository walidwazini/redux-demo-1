import React from "react";

const successSvg = (
  <svg viewBox='0 0 40 40' className='w-6 h-6 fill-current'>
    <path d='M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z'></path>
  </svg>
);

const errorSvg = (
  <svg viewBox='0 0 40 40' className='w-6 h-6 fill-current'>
    <path d='M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z'></path>
  </svg>
);

const Notification = ({ status, title, message, onDismiss }) => {
  let bannerColor = "";
  let svgIcon;

  if (status === "success") {
    svgIcon = successSvg;
    bannerColor = "bg-emerald-green";
  }
  if (status === "error") {
    svgIcon = errorSvg;
    bannerColor = "bg-red-600";
  }

  return (
    <section
      className={`w-full text-white h-14 bg-emerald-500 ${bannerColor} `}
    >
      <div className='container flex items-center justify-between px-6 py-4 mx-auto'>
        <div className='flex'>
          {svgIcon}
          <p className='mx-3'>{message}</p>
        </div>
        <button
          onClick={onDismiss}
          className='p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none'
        >
          <svg
            className='w-5 h-5'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 18L18 6M6 6L18 18'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Notification;
