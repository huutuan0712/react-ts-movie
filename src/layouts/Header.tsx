import React from 'react';

export default function Header() {
  return (
    <div className="p-2 flex justify-between items-center">
      <ul className="menu  lg:menu-horizontal bg-gray-900  gap-3">
        <li className="rounde-lg">
          <a className="text-gray-400 font-bold text-base">Movies</a>
        </li>
        <li className="">
          <a className="text-gray-400 font-bold text-base">TV Series</a>
        </li>
      </ul>
      <div className="flex gap-3">
        <h3 className="text-gray-300 text-lg font-semibold">Arman Rokni</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-orange-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
