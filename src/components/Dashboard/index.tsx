"use client";

import { useState } from "react";

const Dashboard = () => {
  const [sidebar, setSideBar] = useState(false);
  return (
    <div className="flex bg-[#fafafa] min-h-full relative transition-all duration-700">
      <div
        className={`w-[18rem] justify-between border-r-[1px] py-6 bg-white flex flex-col h-full top-0 left-[-100%] md:left-0 absolute z-30`}
      >
        <div className="flex flex-col gap-y-10">
          <div className="font-semibold text-center">SISYPHUS</div>
          <div className="flex flex-col text-gray-500">
            <div className="px-6 py-5 flex items-center gap-x-5">
              <i className="fa-solid fa-house"></i>Home
            </div>
            <div className="px-6 py-5 flex items-center gap-x-5">
              <i className="fas fa-users"></i>Customer
            </div>
            <div className="px-6 py-5 flex items-center gap-x-5">
              <i className="fa-solid fa-cube"></i>Product
            </div>{" "}
            <div className="px-6 py-5 flex items-center gap-x-5">
              <i className="fa-solid fa-money-bill"></i>Transaction
            </div>
            <div className="px-6 py-5 flex items-center gap-x-5">
              <i className="fa-solid fa-history"></i>Log Activity
            </div>
          </div>
        </div>

        <div className="text-center flex gap-x-3 ml-7 items-center text-red-300">
          <i className="fa-solid fa-sign-out-alt"></i>Logout
        </div>
      </div>
      <div className={`w-full min-w-[100vw] mx-auto lg:pl-[18rem] pl-[1rem] md:pr-[3rem]`}>
        <div className="px-5 py-3 bg-white flex justify-between">
          <div className="font-semibold">Home</div>
          <div className="bg-[#fafafa] relative">
            <input
              type="search"
              className="bg-transparent h-full border-none outline-none pl-8"
              name=""
              id=""
              placeholder="Search..."
             />
                <i className="fa-solid top-1/2 left-3 text-sm text-gray-500 -translate-y-1/2 absolute fa-magnifying-glass"></i>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default Dashboard;
