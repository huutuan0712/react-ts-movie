import Trending from 'pages/Home/Trending/Trending';
import React from 'react';
import Genres from './genre/Genres';

export default function Sidebar() {
  return (
    <div className="shrink-0  h-screen w-[330px] p-4 border-l-2 border-gray-600  overflow-hidden ">
      <div className="bg-slate-200 p-2 rounded-3xl ">
        <form className="relative">
          <button className="absolute right-2 top-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="p-1  outline-none bg-transparent "
          />
        </form>
      </div>
      <Genres />
      <Trending />
    </div>
  );
}
