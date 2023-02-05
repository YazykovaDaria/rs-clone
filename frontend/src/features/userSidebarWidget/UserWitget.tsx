/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './style.css';
import { useState } from 'react';

function UserWidget() {
  const [isOpenPopup, setPopup] = useState(false);

  const closePopup = () => setPopup(false);

  const togglePopup = () => setPopup(!isOpenPopup);

  return (
    <div className="flex flex-col-reverse sm:flex-col gap-2">
      <div className={isOpenPopup ? 'user-popup' : 'hidden'}>
        <svg
          onClick={closePopup}
          className="absolute right-1 top-1 w-5 h-5 hover:bg-zinc-400 hover:rounded-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <div className="hover:text-sky-600 hover:font-bold">
          Change language
        </div>
        <div className="hover:text-sky-600 hover:font-bold">Logout</div>
      </div>

      <div className="user-aside" onClick={togglePopup}>
        <div className="w-10 h-10 rounded-full border-solid border-2 border-cyan-500 " />
        <div className="flex-col hidden md:flex">
          <span>User name</span>
          <span className="text-slate-300">user_nickname</span>
        </div>
        <span className="hidden sm:inline-block text-lg">...</span>
      </div>
    </div>
  );
}

export default UserWidget;
