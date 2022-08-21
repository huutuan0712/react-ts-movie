import React from 'react';
import './Loader.css';
export default function Loader() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="">
        <div className="spinner-4"></div>
        <h3 className="font-bold text-lg text-orange-500 text-center">
          ...Loading
        </h3>
      </div>
    </div>
  );
}
