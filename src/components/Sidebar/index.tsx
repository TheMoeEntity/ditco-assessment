import { sideContext } from "@/Helpers/contextAPI/sidebar-context";
import React, { useContext } from "react";

const Sidebar = () => {
  const { setSideBar, sidebar } = useContext(sideContext);
  return (
    <div
      className={`w-[18rem] trans justify-between border-r-[1px] py-6 bg-white flex flex-col h-full top-0 ${
        sidebar ? "left-0" : "-left-[100%]"
      } lg:left-0 fixed z-30`}
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
  );
};

export default Sidebar;
