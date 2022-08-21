import React from 'react';
import useLatest from './Latest.hook';

export default function Latest() {
  const { data, loading } = useLatest();

  return (
    <div className="max-h-[600px] w-full p-2 overflow-hidden ">
      <div className="relative    before:content-[''] before:absolute before:rounded-xl before:bg-black before:w-full before:h-full before:top-0 before:left-0 before:opacity-70 ">
        <img
          src="https://image.tmdb.org/t/p/w1280/jwFBzWabfWpnN9P5YIVVX5W8WUY.jpg"
          className="object-cover rounded-xl  "
          alt=""
        />
        <div className="absolute top-[30%] left-[5%] max-w-[500px]   flex justify-center items-center">
          <div className="">
            <h3 className="font-bold text-3xl text-orange-500 mb-3 xl:text-4xl">
              Vengeance
            </h3>
            <div className="">
              <p className="text-base font-medium text-gray-200 mb-1 xl:text-lg">
                Vengeant
              </p>
              <p className="text-base font-medium text-gray-400 mb-4 ">
                Release date :2022-07-09
              </p>
              <ul className="flex gap-4 flex-wrap mb-5">
                <li className="px-3 py-1 text-lg text-orange-500 ring-2 ring-gray-400 rounded-2xl font-medium">
                  Thriller
                </li>
                <li className="px-3 py-1 text-lg text-orange-500 ring-2 ring-gray-400 rounded-2xl font-medium">
                  Mystery
                </li>
                <li className="px-3 py-1 text-lg text-orange-500 ring-2 ring-gray-400 rounded-2xl font-medium">
                  Comedy
                </li>
              </ul>
              <p className="text-gray-400 text-base">
                A journalist and poetaster from New York City travels to West
                Texas in order to report on the death of a girl he was hooking
                up with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
