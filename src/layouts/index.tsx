import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <div className="flex  h-screen bg-gray-900">
      <Navbar />
      <div className="w-[90%] px-4  overflow-hidden ">
        <div className=" h-[100%] overflow-y-scroll px-2 customr-scroll">
          <Header />
          <Outlet />
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
